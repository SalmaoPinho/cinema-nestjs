import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, BORDER_RADIUS, SPACING } from '../styles/theme';
import { CinemaService, Sessao } from '../services/cinemaService';
import { SyncService, OfflineQueueItem, LocalOrder } from '../services/syncService';
import { ApiClient } from '../services/api';

interface PaymentScreenProps {
  params: {
    sessionId: number;
    selectedSeats: Array<{ assento: string; tipo: 'INTEIRA' | 'MEIA'; valor: number }>;
    selectedSnacks: Array<{ lancheId: number; nome: string; quantidade: number; preco: number }>;
    valorIngressos: number;
    valorLanches: number;
    valorTotal: number;
  };
  goBack: () => void;
  navigateTo: (screen: string, params?: any) => void;
}

type PaymentMethod = 'PIX' | 'CREDIT_CARD' | 'CASH';

export default function PaymentScreen({ params, goBack, navigateTo }: PaymentScreenProps) {
  const { sessionId, selectedSeats, selectedSnacks, valorIngressos, valorLanches, valorTotal } = params;
  const [method, setMethod] = useState<PaymentMethod>('PIX');
  const [loading, setLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [session, setSession] = useState<Sessao | null>(null);

  // Campos do Cartão de Crédito
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  useEffect(() => {
    const checkNetworkAndSession = async () => {
      try {
        const online = await SyncService.isOnline();
        setIsOnline(online);

        // Busca dados da sessão para montar os ingressos offline ou online
        const sessaoData = await CinemaService.getSessaoById(sessionId);
        setSession(sessaoData);
      } catch (e) {
        console.error('Erro ao preparar tela de pagamento', e);
      }
    };
    checkNetworkAndSession();
  }, [sessionId]);

  const handleConfirmPayment = async () => {
    if (method === 'CREDIT_CARD') {
      if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
        Alert.alert('Erro', 'Por favor, preencha todos os campos do cartão.');
        return;
      }
    }

    setLoading(true);
    const localId = `local-${Date.now()}`;
    const dataPedido = new Date().toISOString();

    // Ingressos formatados para o banco de dados local
    const ingressosOffline = selectedSeats.map((s, idx) => ({
      id: undefined, // Sem ID por enquanto
      assento: s.assento,
      tipo: s.tipo,
      valorPago: s.valor,
      sessao: {
        id: sessionId,
        horarioExibicao: session?.horarioExibicao || new Date().toISOString(),
        filme: {
          titulo: session?.filme.titulo || 'Filme Selecionado',
        },
        sala: {
          numero: session?.sala.numero || 1,
        },
      },
    }));

    try {
      const online = await SyncService.isOnline();
      setIsOnline(online);

      if (online && session) {
        // --- FLUXO ONLINE REAL COM O SERVER ---
        // 1. Cria cada Ingresso
        const ingressoIds: number[] = [];
        for (const seat of selectedSeats) {
          const ingRes = await ApiClient.post<any>('/ingressos', {
            sessaoId: sessionId,
            assento: seat.assento,
            tipo: seat.tipo,
          });
          ingressoIds.push(ingRes.id);
        }

        // 2. Cria o Pedido (Pedido contendo Ingressos + Lanches)
        const lanchesPayload = selectedSnacks.map((s) => ({
          lancheId: s.lancheId,
          quantidade: s.quantidade,
        }));
        
        const pedidoRes = await ApiClient.post<any>('/pedidos', {
          ingressoIds,
          lanches: lanchesPayload,
        });

        // 3. Efetua o Pagamento (muda para status PAGO e gera cupom)
        const pagamentoRes = await ApiClient.patch<any>(`/pedidos/${pedidoRes.id}/pagar`);

        // 4. Salva a compra no histórico local como SINCRONIZADA
        const localOrder: LocalOrder = {
          localId,
          id: pagamentoRes.id,
          dataPedido,
          valorTotal,
          status: 'SINCRONIZADO',
          isOfflinePending: false,
          comprovanteUrl: pagamentoRes.comprovanteUrl,
          ingressos: pagandoIngressosLocais(pagamentoRes.id, itemSessao(session), selectedSeats),
          lanches: selectedSnacks,
        };

        const localOrders = await SyncService.getLocalOrders();
        localOrders.unshift(localOrder);
        await SyncService.saveLocalOrders(localOrders);

        setLoading(false);
        Alert.alert('Sucesso', 'Pagamento aprovado com sucesso!', [
          { text: 'Ver Comprovante', onPress: () => navigateTo('TICKET', { order: localOrder }) },
        ]);

      } else {
        // --- FLUXO OFFLINE COM FILA DE SINCRONIZAÇÃO (DB SYNC) ---
        const offlineItem: OfflineQueueItem = {
          localId,
          sessaoId: sessionId,
          selectedSeats: selectedSeats.map((s) => ({ assento: s.assento, tipo: s.tipo })),
          selectedSnacks,
          valorTotal,
          dataPedido,
          ingressosOffline,
        };

        // Salva a compra localmente e adiciona na fila offline
        const pendingOrder = await SyncService.queueOfflinePurchase(offlineItem);
        
        setLoading(false);
        Alert.alert(
          'Compra Salva Localmente',
          'Você está offline! Sua compra foi salva no app. Ela será enviada ao servidor e sincronizada assim que você estiver online.',
          [
            { text: 'Ver Ticket Provisório', onPress: () => navigateTo('TICKET', { order: pendingOrder }) },
          ]
        );
      }
    } catch (e: any) {
      console.error('Erro ao efetuar pagamento', e);
      Alert.alert('Falha no Pagamento', e.message || 'Ocorreu um erro ao processar sua transação.');
      setLoading(false);
    }
  };

  const pagandoIngressosLocais = (pedidoId: number, sessao: any, seats: any[]) => {
    return seats.map((s, idx) => ({
      id: 9000 + idx, // ID fictício local
      assento: s.assento,
      tipo: s.tipo,
      valorPago: s.valor,
      sessao,
    }));
  };

  const itemSessao = (s: Sessao) => ({
    id: s.id,
    horarioExibicao: s.horarioExibicao,
    filme: { titulo: s.filme.titulo },
    sala: { numero: s.sala.numero },
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.topHeader}>
        <TouchableOpacity style={styles.backBtn} onPress={goBack}>
          <Ionicons name="chevron-back" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Pagamento</Text>
          <Text style={styles.headerSubtitle}>Escolha seu método de pagamento</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Offline Alert Indicator */}
        {!isOnline && (
          <View style={styles.offlineBox}>
            <Ionicons name="cloud-offline-outline" size={24} color={COLORS.warning} style={{ marginRight: SPACING.md }} />
            <View style={{ flex: 1 }}>
              <Text style={styles.offlineBoxTitle}>Modo Offline Ativo</Text>
              <Text style={styles.offlineBoxText}>
                Sua compra será armazenada em cache e sincronizada automaticamente via DB Sync!
              </Text>
            </View>
          </View>
        )}

        {/* Purchase Summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryCardTitle}>Resumo do Pedido</Text>
          
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              <Ionicons name="ticket-outline" size={14} color={COLORS.textSecondary} /> Ingressos ({selectedSeats.length}x):
            </Text>
            <Text style={styles.summaryValue}>R$ {valorIngressos.toFixed(2)}</Text>
          </View>

          {selectedSnacks.length > 0 && (
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>
                <Ionicons name="cafe-outline" size={14} color={COLORS.textSecondary} /> Bomboniere:
              </Text>
              <Text style={styles.summaryValue}>R$ {valorLanches.toFixed(2)}</Text>
            </View>
          )}

          <View style={[styles.summaryRow, styles.summaryTotalRow]}>
            <Text style={styles.summaryTotalLabel}>Total a Pagar:</Text>
            <Text style={styles.summaryTotalValue}>R$ {valorTotal.toFixed(2)}</Text>
          </View>
        </View>

        {/* Payment Methods tabs */}
        <Text style={styles.sectionTitle}>Método de Pagamento</Text>
        
        <View style={styles.methodsTabs}>
          <TouchableOpacity
            style={[styles.methodTab, method === 'PIX' && styles.methodTabActive]}
            onPress={() => setMethod('PIX')}
          >
            <Ionicons name="qr-code-outline" size={20} color={method === 'PIX' ? COLORS.primary : COLORS.textSecondary} />
            <Text style={[styles.methodTabText, method === 'PIX' && styles.methodTabTextActive]}>PIX</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.methodTab, method === 'CREDIT_CARD' && styles.methodTabActive]}
            onPress={() => setMethod('CREDIT_CARD')}
          >
            <Ionicons name="card-outline" size={20} color={method === 'CREDIT_CARD' ? COLORS.primary : COLORS.textSecondary} />
            <Text style={[styles.methodTabText, method === 'CREDIT_CARD' && styles.methodTabTextActive]}>Cartão</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.methodTab, method === 'CASH' && styles.methodTabActive]}
            onPress={() => setMethod('CASH')}
          >
            <Ionicons name="cash-outline" size={20} color={method === 'CASH' ? COLORS.primary : COLORS.textSecondary} />
            <Text style={[styles.methodTabText, method === 'CASH' && styles.methodTabTextActive]}>Dinheiro</Text>
          </TouchableOpacity>
        </View>

        {/* Payment Details Container */}
        <View style={styles.detailsCard}>
          {method === 'PIX' && (
            <View style={styles.pixContainer}>
              <View style={styles.qrPlaceholder}>
                <Ionicons name="qr-code" size={140} color={COLORS.text} />
              </View>
              <Text style={styles.pixInstructions}>
                Copie o código Pix abaixo para pagar no aplicativo do seu banco:
              </Text>
              
              <View style={styles.pixCodeContainer}>
                <Text style={styles.pixCodeText} numberOfLines={1}>
                  00020126580014br.gov.bcb.pix0136123filmes-pix-key-emulator-paytotal
                </Text>
                <TouchableOpacity
                  style={styles.pixCopyBtn}
                  onPress={() => Alert.alert('Pix', 'Código Copia e Cola copiado com sucesso!')}
                >
                  <Ionicons name="copy-outline" size={18} color={COLORS.primary} />
                </TouchableOpacity>
              </View>
            </View>
          )}

          {method === 'CREDIT_CARD' && (
            <View style={styles.cardContainer}>
              <TextInput
                style={styles.input}
                placeholder="Número do Cartão"
                placeholderTextColor={COLORS.textMuted}
                keyboardType="numeric"
                value={cardNumber}
                onChangeText={setCardNumber}
              />
              <TextInput
                style={styles.input}
                placeholder="Nome do Titular"
                placeholderTextColor={COLORS.textMuted}
                value={cardName}
                onChangeText={setCardName}
              />
              <View style={styles.rowInputs}>
                <TextInput
                  style={[styles.input, { flex: 1, marginRight: SPACING.md }]}
                  placeholder="Validade (MM/AA)"
                  placeholderTextColor={COLORS.textMuted}
                  value={cardExpiry}
                  onChangeText={setCardExpiry}
                />
                <TextInput
                  style={[styles.input, { flex: 1 }]}
                  placeholder="CVV"
                  placeholderTextColor={COLORS.textMuted}
                  keyboardType="numeric"
                  secureTextEntry
                  value={cardCvv}
                  onChangeText={setCardCvv}
                />
              </View>
            </View>
          )}

          {method === 'CASH' && (
            <View style={styles.cashContainer}>
              <Ionicons name="information-circle-outline" size={32} color={COLORS.primary} style={{ marginBottom: SPACING.sm }} />
              <Text style={styles.cashText}>
                Efetue o pagamento diretamente na bilheteria física ou na bomboniere do cinema informando o ID do seu pedido.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Footer bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={[styles.payBtn, loading && { opacity: 0.7 }]}
          onPress={handleConfirmPayment}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color={COLORS.buttonText} />
          ) : (
            <>
              <Text style={styles.payBtnText}>
                {isOnline ? 'Finalizar Pagamento' : 'Confirmar Offline'}
              </Text>
              <Ionicons name="shield-checkmark-outline" size={20} color={COLORS.buttonText} style={{ marginLeft: 8 }} />
            </>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.card,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: SPACING.sm,
  },
  headerTitle: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: COLORS.textSecondary,
    fontSize: 11,
    marginTop: 2,
  },
  scrollContent: {
    padding: SPACING.lg,
    paddingBottom: 120,
  },
  offlineBox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderWidth: 1,
    borderColor: COLORS.warning,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
    alignItems: 'center',
  },
  offlineBoxTitle: {
    color: COLORS.warning,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
  offlineBoxText: {
    color: COLORS.textSecondary,
    fontSize: 12,
    lineHeight: 16,
  },
  summaryCard: {
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.lg,
  },
  summaryCardTitle: {
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: SPACING.md,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    paddingBottom: SPACING.sm,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },
  summaryLabel: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },
  summaryValue: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: '500',
  },
  summaryTotalRow: {
    borderTopWidth: 1,
    borderColor: COLORS.border,
    paddingTop: SPACING.md,
    marginTop: SPACING.sm,
  },
  summaryTotalLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  summaryTotalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.success,
  },
  sectionTitle: {
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: SPACING.md,
  },
  methodsTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.lg,
  },
  methodTab: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  methodTabActive: {
    borderColor: COLORS.primary,
    backgroundColor: 'rgba(0, 210, 255, 0.05)',
  },
  methodTabText: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: '500',
    marginTop: SPACING.xs,
  },
  methodTabTextActive: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  detailsCard: {
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },
  pixContainer: {
    alignItems: 'center',
    width: '100%',
  },
  qrPlaceholder: {
    backgroundColor: COLORS.cardSecondary,
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.md,
  },
  pixInstructions: {
    color: COLORS.textSecondary,
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: SPACING.md,
  },
  pixCodeContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardSecondary,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    height: 48,
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    width: '100%',
  },
  pixCodeText: {
    color: COLORS.textMuted,
    fontSize: 12,
    flex: 1,
  },
  pixCopyBtn: {
    marginLeft: SPACING.sm,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: COLORS.cardSecondary,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    height: 48,
    paddingHorizontal: SPACING.md,
    color: COLORS.text,
    fontSize: 14,
    marginBottom: SPACING.md,
  },
  rowInputs: {
    flexDirection: 'row',
  },
  cashContainer: {
    alignItems: 'center',
    paddingVertical: SPACING.md,
  },
  cashText: {
    color: COLORS.textSecondary,
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 20,
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.card,
    borderTopWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.lg,
  },
  payBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.success,
    borderRadius: BORDER_RADIUS.md,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.success,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  payBtnText: {
    color: COLORS.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
