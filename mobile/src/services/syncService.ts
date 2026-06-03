import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiClient, SERVER_URL } from './api';

export interface LocalOrder {
  localId: string; // ID local único
  id?: number; // ID oficial retornado pelo servidor após sync
  dataPedido: string;
  valorTotal: number;
  status: 'PENDENTE' | 'PAGO' | 'SINCRONIZADO';
  isOfflinePending: boolean;
  comprovanteUrl?: string;
  ingressos: Array<{
    id?: number;
    assento: string;
    tipo: 'INTEIRA' | 'MEIA';
    valorPago: number;
    sessao: {
      id: number;
      horarioExibicao: string;
      filme: {
        titulo: string;
      };
      sala: {
        numero: number;
      };
    };
  }>;
  lanches: Array<{
    lancheId: number;
    nome: string;
    quantidade: number;
    preco: number;
  }>;
}

export interface OfflineQueueItem {
  localId: string;
  sessaoId: number;
  selectedSeats: Array<{ assento: string; tipo: 'INTEIRA' | 'MEIA' }>;
  selectedSnacks: Array<{ lancheId: number; nome: string; quantidade: number; preco: number }>;
  valorTotal: number;
  dataPedido: string;
  ingressosOffline: Array<{
    assento: string;
    tipo: 'INTEIRA' | 'MEIA';
    valorPago: number;
    sessao: {
      id: number;
      horarioExibicao: string;
      filme: { titulo: string };
      sala: { numero: number };
    };
  }>;
}

export class SyncService {
  /**
   * Tenta verificar se a API está online executando um ping rápido
   */
  static async isOnline(): Promise<boolean> {
    try {
      const response = await fetch(`${SERVER_URL}/api/filmes`, { method: 'GET' });
      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * Retorna todas as compras salvas localmente
   */
  static async getLocalOrders(): Promise<LocalOrder[]> {
    const ordersStr = await AsyncStorage.getItem('local_orders');
    return ordersStr ? JSON.parse(ordersStr) : [];
  }

  /**
   * Salva a lista de compras localmente
   */
  static async saveLocalOrders(orders: LocalOrder[]): Promise<void> {
    await AsyncStorage.setItem('local_orders', JSON.stringify(orders));
  }

  /**
   * Adiciona uma nova compra efetuada diretamente de forma offline na fila
   */
  static async queueOfflinePurchase(purchase: OfflineQueueItem): Promise<LocalOrder> {
    // 1. Cria a estrutura da compra local
    const localOrder: LocalOrder = {
      localId: purchase.localId,
      dataPedido: purchase.dataPedido,
      valorTotal: purchase.valorTotal,
      status: 'PENDENTE', // Aguardando sincronização
      isOfflinePending: true,
      ingressos: purchase.ingressosOffline,
      lanches: purchase.selectedSnacks,
    };

    // 2. Adiciona nas compras locais
    const orders = await this.getLocalOrders();
    orders.unshift(localOrder);
    await this.saveLocalOrders(orders);

    // 3. Adiciona na fila do offline
    const queueStr = await AsyncStorage.getItem('offline_queue');
    const queue: OfflineQueueItem[] = queueStr ? JSON.parse(queueStr) : [];
    queue.push(purchase);
    await AsyncStorage.setItem('offline_queue', JSON.stringify(queue));

    return localOrder;
  }

  /**
   * Sincroniza a fila de compras offline com o servidor
   */
  static async syncOfflineQueue(): Promise<{ successCount: number; failedCount: number }> {
    const queueStr = await AsyncStorage.getItem('offline_queue');
    if (!queueStr) return { successCount: 0, failedCount: 0 };

    const queue: OfflineQueueItem[] = JSON.parse(queueStr);
    if (queue.length === 0) return { successCount: 0, failedCount: 0 };

    const online = await this.isOnline();
    if (!online) return { successCount: 0, failedCount: queue.length };

    const remainingQueue: OfflineQueueItem[] = [];
    const localOrders = await this.getLocalOrders();
    let successCount = 0;
    let failedCount = 0;

    for (const item of queue) {
      try {
        // Passo A: Criar ingressos um por um no servidor
        const ingressoIds: number[] = [];
        for (const seat of item.selectedSeats) {
          const ingRes = await ApiClient.post<any>('/ingressos', {
            sessaoId: item.sessaoId,
            assento: seat.assento,
            tipo: seat.tipo,
          });
          ingressoIds.push(ingRes.id);
        }

        // Passo B: Criar o Pedido no servidor
        const lanchePayload = item.selectedSnacks.map((s) => ({
          lancheId: s.lancheId,
          quantidade: s.quantidade,
        }));
        
        const pedidoRes = await ApiClient.post<any>('/pedidos', {
          ingressoIds,
          lanches: lanchePayload,
        });

        // Passo C: Efetuar pagamento do Pedido no servidor
        const pagamentoRes = await ApiClient.patch<any>(`/pedidos/${pedidoRes.id}/pagar`);

        // Passo D: Atualizar o item na lista local com dados oficiais do servidor
        const orderIdx = localOrders.findIndex((o) => o.localId === item.localId);
        if (orderIdx !== -1) {
          localOrders[orderIdx] = {
            ...localOrders[orderIdx],
            id: pagamentoRes.id,
            status: 'SINCRONIZADO',
            isOfflinePending: false,
            comprovanteUrl: pagamentoRes.comprovanteUrl,
          };
        }
        successCount++;
      } catch (err) {
        console.error('Falha ao sincronizar item offline:', item.localId, err);
        remainingQueue.push(item);
        failedCount++;
      }
    }

    // Grava as compras locais atualizadas
    await this.saveLocalOrders(localOrders);
    
    // Grava a fila restante
    await AsyncStorage.setItem('offline_queue', JSON.stringify(remainingQueue));

    return { successCount, failedCount };
  }

  /**
   * Baixa as compras oficiais do servidor para sincronizar o histórico local
   */
  static async pullServerOrders(): Promise<void> {
    try {
      const online = await this.isOnline();
      if (!online) return;

      const serverOrders = await ApiClient.get<any[]>('/pedidos');
      const localOrders = await this.getLocalOrders();

      // Mantém itens offline pendentes
      const pendingOrders = localOrders.filter((o) => o.isOfflinePending);
      
      // Converte as compras do servidor para o nosso formato LocalOrder
      const syncedOrders: LocalOrder[] = serverOrders.map((s) => ({
        localId: `server-${s.id}`,
        id: s.id,
        dataPedido: s.dataPedido,
        valorTotal: s.valorTotal,
        status: 'SINCRONIZADO',
        isOfflinePending: false,
        comprovanteUrl: s.comprovanteUrl,
        ingressos: s.ingressos.map((ing: any) => ({
          id: ing.id,
          assento: ing.assento,
          tipo: ing.tipo,
          valorPago: ing.valorPago,
          sessao: {
            id: ing.sessao.id,
            horarioExibicao: ing.sessao.horarioExibicao,
            filme: { titulo: ing.sessao.filme.titulo },
            sala: { numero: ing.sessao.sala.numero },
          },
        })),
        lanches: s.itens.map((it: any) => ({
          lancheId: it.lanche.id,
          nome: it.lanche.nome,
          quantidade: it.quantidade,
          preco: it.lanche.preco,
        })),
      }));

      // Une as listas (compras pendentes no topo + compras do servidor)
      const unifiedOrders = [...pendingOrders, ...syncedOrders];
      await this.saveLocalOrders(unifiedOrders);
    } catch (e) {
      console.error('Erro ao sincronizar histórico com o servidor', e);
    }
  }
}
