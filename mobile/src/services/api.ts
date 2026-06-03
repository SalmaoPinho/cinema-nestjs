import AsyncStorage from '@react-native-async-storage/async-storage';

// IMPORTANTE: Altere para o IP da sua máquina se estiver testando em um dispositivo físico!
// Em emulador Android, '10.0.2.2' mapeia para o localhost da máquina hospedeira.
// Em simulador iOS, 'localhost' funciona perfeitamente.
const DEV_MACHINE_IP = '192.168.3.47'; // Altere se necessário (ex: '192.168.1.100')
export const API_BASE_URL = __DEV__ 
  ? `http://${DEV_MACHINE_IP}:3000/api` 
  : 'http://localhost:3000/api';

export const SERVER_URL = __DEV__
  ? `http://${DEV_MACHINE_IP}:3000`
  : 'http://localhost:3000';

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export class ApiClient {
  private static async getHeaders(): Promise<HeadersInit> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    
    try {
      const token = await AsyncStorage.getItem('jwt_token');
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    } catch (e) {
      console.warn('Erro ao ler jwt_token do AsyncStorage', e);
    }
    
    return headers;
  }

  private static async fetchWithTimeout(url: string, options: RequestInit, timeout = 8000): Promise<Response> {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    
    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(id);
      return response;
    } catch (e: any) {
      clearTimeout(id);
      if (e.name === 'AbortError') {
        throw new Error('Tempo limite de conexão esgotado. Verifique se o servidor está rodando e o IP está correto na mesma rede.');
      }
      throw new Error(`Falha de conexão: ${e.message || 'servidor inacessível'}`);
    }
  }

  static async get<T>(endpoint: string): Promise<T> {
    const headers = await this.getHeaders();
    const response = await this.fetchWithTimeout(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers,
    });
    
    if (!response.ok) {
      const errText = await response.text().catch(() => 'Erro desconhecido');
      throw new Error(errText || `Erro ${response.status}`);
    }
    
    return response.json();
  }

  static async post<T>(endpoint: string, body: any): Promise<T> {
    const headers = await this.getHeaders();
    const response = await this.fetchWithTimeout(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
    
    if (!response.ok) {
      const errText = await response.text().catch(() => 'Erro desconhecido');
      let msg = 'Erro na requisição';
      try {
        const parsed = JSON.parse(errText);
        msg = parsed.message || parsed.error || msg;
      } catch {
        msg = errText || msg;
      }
      throw new Error(msg);
    }
    
    return response.json();
  }

  static async patch<T>(endpoint: string, body?: any): Promise<T> {
    const headers = await this.getHeaders();
    const response = await this.fetchWithTimeout(`${API_BASE_URL}${endpoint}`, {
      method: 'PATCH',
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    
    if (!response.ok) {
      const errText = await response.text().catch(() => 'Erro desconhecido');
      throw new Error(errText || `Erro ${response.status}`);
    }
    
    return response.json();
  }

  static async delete<T>(endpoint: string): Promise<T> {
    const headers = await this.getHeaders();
    const response = await this.fetchWithTimeout(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers,
    });
    
    if (!response.ok) {
      const errText = await response.text().catch(() => 'Erro desconhecido');
      throw new Error(errText || `Erro ${response.status}`);
    }
    
    // Suporta respostas vazias (No Content 204)
    if (response.status === 204) {
      return {} as T;
    }
    
    return response.json().catch(() => ({} as T));
  }
}
