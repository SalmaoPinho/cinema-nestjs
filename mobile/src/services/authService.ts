import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiClient, AuthResponse, User } from './api';

export class AuthService {
  static async login(email: string, pass: string): Promise<User> {
    const res = await ApiClient.post<AuthResponse>('/auth/login', { email, password: pass });
    await AsyncStorage.setItem('jwt_token', res.access_token);
    await AsyncStorage.setItem('user_profile', JSON.stringify(res.user));
    return res.user;
  }

  static async register(email: string, name: string, pass: string): Promise<User> {
    const res = await ApiClient.post<AuthResponse>('/auth/register', { email, name, password: pass });
    await AsyncStorage.setItem('jwt_token', res.access_token);
    await AsyncStorage.setItem('user_profile', JSON.stringify(res.user));
    return res.user;
  }

  static async recoverPassword(email: string): Promise<{ message: string; tempPassword?: string }> {
    return ApiClient.post<{ message: string; tempPassword?: string }>('/auth/recover-password', { email });
  }

  static async logout(): Promise<void> {
    await AsyncStorage.removeItem('jwt_token');
    await AsyncStorage.removeItem('user_profile');
  }

  static async getCurrentUser(): Promise<User | null> {
    try {
      const userStr = await AsyncStorage.getItem('user_profile');
      if (userStr) {
        return JSON.parse(userStr) as User;
      }
    } catch {
      return null;
    }
    return null;
  }

  static async isAuthenticated(): Promise<boolean> {
    const token = await AsyncStorage.getItem('jwt_token');
    return !!token;
  }
}
