import { ApiClient } from './api';

export interface Filme {
  id: number;
  titulo: string;
  sinopse: string;
  classificacao: string;
  duracao: number;
  elenco: string;
  genero: string;
  dataIniciaExibicao: string;
  dataFinalExibicao: string;
  imagemUrl: string | null;
  ativo: boolean;
}

export interface Sala {
  id: number;
  numero: number;
  capacidade: number;
  fileiras: number;
  colunas: number;
}

export interface Sessao {
  id: number;
  horarioExibicao: string;
  precoInteira: number;
  filmeId: number;
  salaId: number;
  filme: Filme;
  sala: Sala;
  ingressos?: IngressoVendido[];
  ativo: boolean;
}

export interface IngressoVendido {
  id: number;
  assento: string;
  tipo: 'INTEIRA' | 'MEIA';
  valorPago: number;
  ativo: boolean;
  reembolsado: boolean;
}

export interface Lanche {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagemUrl: string | null;
  ativo: boolean;
}

export class CinemaService {
  static async getFilmes(): Promise<Filme[]> {
    return ApiClient.get<Filme[]>('/filmes');
  }

  static async getFilmeById(id: number): Promise<Filme> {
    return ApiClient.get<Filme>(`/filmes/${id}`);
  }

  static async getSessoes(): Promise<Sessao[]> {
    return ApiClient.get<Sessao[]>('/sessoes');
  }

  static async getSessaoById(id: number): Promise<Sessao> {
    return ApiClient.get<Sessao>(`/sessoes/${id}`);
  }

  static async getLanches(): Promise<Lanche[]> {
    return ApiClient.get<Lanche[]>('/lanches');
  }

  // Métodos Administrativos
  static async createFilme(filmeData: any): Promise<Filme> {
    return ApiClient.post<Filme>('/filmes', { ...filmeData, cinemaId: 1 });
  }

  static async deleteFilme(id: number): Promise<void> {
    return ApiClient.delete<void>(`/filmes/${id}`);
  }

  static async getSalas(): Promise<Sala[]> {
    return ApiClient.get<Sala[]>('/salas');
  }

  static async createSala(salaData: any): Promise<Sala> {
    return ApiClient.post<Sala>('/salas', { ...salaData, cinemaId: 1 });
  }

  static async deleteSala(id: number): Promise<void> {
    return ApiClient.delete<void>(`/salas/${id}`);
  }

  static async createSessao(sessaoData: any): Promise<Sessao> {
    return ApiClient.post<Sessao>('/sessoes', { ...sessaoData, cinemaId: 1 });
  }

  static async deleteSessao(id: number): Promise<void> {
    return ApiClient.delete<void>(`/sessoes/${id}`);
  }

  static async createLanche(lancheData: any): Promise<Lanche> {
    return ApiClient.post<Lanche>('/lanches', lancheData);
  }

  static async deleteLanche(id: number): Promise<void> {
    return ApiClient.delete<void>(`/lanches/${id}`);
  }
}
