import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, BORDER_RADIUS, SPACING } from '../styles/theme';
import { SyncService, LocalOrder } from '../services/syncService';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface HistoryScreenProps {
  goBack: () => void;
  navigateTo: (screen: string, params?: any) => void;
}

export default function HistoryScreen({ goBack, navigateTo }: HistoryScreenProps) {
  const [orders, setOrders] = useState<LocalOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  const loadOrders = async (showSyncIndicator = false) => {
    if (showSyncIndicator) setSyncing(true);
    else setLoading(true);

    try {
      const online = await SyncService.isOnline();
      setIsOnline(online);

      if (online) {
        // Tenta sincronizar a fila offline pendente
        const syncRes = await SyncService.syncOfflineQueue();
        
        // Puxa as compras mais recentes do servidor
        await SyncService.pullServerOrders();

        if (showSyncIndicator && (syncRes.successCount > 0 || syncRes.failedCount > 0)) {
          Alert.alert(
            'Sincronização Concluída',
            `Sincronizados com sucesso: ${syncRes.successCount}\nFalhas na rede: ${syncRes.failedCount}`
          );
        }
      }

      // Carrega os dados unificados locais
      const data = await SyncService.getLocalOrders();
      setOrders(data);
    } catch (e) {
      console.error('Erro ao buscar histórico de ingressos', e);
      // Fallback: carrega do cache local apenas
      const data = await SyncService.getLocalOrders();
      setOrders(data);
    } finally {
      setLoading(false);
      setSyncing(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const formatDateLabel = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return format(date, "dd 'de' MMMM 'às' HH:mm", { locale: ptBR });
    } catch {
      return '';
    }
  };

  const handleOrderPress = (order: LocalOrder) => {
    navigateTo('TICKET', { order });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.topHeader}>
        <TouchableOpacity style={styles.backBtn} onPress={goBack}>
          <Ionicons name="chevron-back" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Meus Ingressos</Text>

        <TouchableOpacity 
          style={[styles.syncBtn, syncing && styles.syncBtnDisabled]} 
          onPress={() => loadOrders(true)}
          disabled={syncing}
        >
          {syncing ? (
            <ActivityIndicator size="small" color={COLORS.primary} />
          ) : (
            <Ionicons name="sync" size={20} color={COLORS.primary} />
          )}
        </TouchableOpacity>
      </View>

      {/* Network Notice */}
      <View style={[styles.networkBar, { backgroundColor: isOnline ? 'rgba(16,185,129,0.05)' : 'rgba(245,158,11,0.05)' }]}>
        <View style={[styles.dot, { backgroundColor: isOnline ? COLORS.success : COLORS.warning }]} />
        <Text style={[styles.networkText, { color: isOnline ? COLORS.success : COLORS.warning }]}>
          {isOnline 
            ? 'Dispositivo Conectado • Banco sincronizado' 
            : 'Modo Offline • Exibindo ingressos do cache'
          }
        </Text>
      </View>

      {/* Main List */}
      {loading ? (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
          <Text style={styles.loadingText}>Carregando seus ingressos...</Text>
        </View>
      ) : orders.length === 0 ? (
        <View style={styles.centerContainer}>
          <Ionicons name="receipt-outline" size={64} color={COLORS.textMuted} style={{ marginBottom: SPACING.md }} />
          <Text style={styles.noOrdersText}>Você não possui ingressos comprados.</Text>
          <TouchableOpacity style={styles.buyNowBtn} onPress={goBack}>
            <Text style={styles.buyNowText}>Comprar Ingressos Agora</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item, idx) => item.localId || idx.toString()}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => {
            const seatsCount = item.ingressos.length;
            const movieTitle = item.ingressos[0]?.sessao.filme.titulo || 'Filme Selecionado';
            const salaNum = item.ingressos[0]?.sessao.sala.numero || 1;
            const dateStr = item.ingressos[0]?.sessao.horarioExibicao || item.dataPedido;

            return (
              <TouchableOpacity
                style={styles.orderCard}
                activeOpacity={0.8}
                onPress={() => handleOrderPress(item)}
              >
                {/* Left vertical color border based on sync status */}
                <View 
                  style={[
                    styles.syncIndicatorBorder, 
                    { backgroundColor: item.isOfflinePending ? COLORS.warning : COLORS.success }
                  ]}
                />

                <View style={styles.orderInfo}>
                  <Text style={styles.movieTitle} numberOfLines={1}>{movieTitle}</Text>
                  
                  <View style={styles.metaRow}>
                    <Ionicons name="calendar-outline" size={14} color={COLORS.textSecondary} style={{ marginRight: 4 }} />
                    <Text style={styles.metaText}>{formatDateLabel(dateStr)}</Text>
                  </View>

                  <View style={styles.metaRow}>
                    <Ionicons name="ticket-outline" size={14} color={COLORS.textSecondary} style={{ marginRight: 4 }} />
                    <Text style={styles.metaText}>
                      {seatsCount} {seatsCount === 1 ? 'ingresso' : 'ingressos'} • Sala {salaNum}
                    </Text>
                  </View>

                  {item.lanches.length > 0 && (
                    <Text style={styles.snacksPreview} numberOfLines={1}>
                      🍿 Bomboniere inclusa ({item.lanches.map(l => l.nome).join(', ')})
                    </Text>
                  )}
                </View>

                {/* Right side values */}
                <View style={styles.orderSide}>
                  <Text style={styles.orderPrice}>R$ {item.valorTotal.toFixed(2)}</Text>
                  
                  {/* Status Badge */}
                  <View 
                    style={[
                      styles.statusBadge, 
                      { backgroundColor: item.isOfflinePending ? 'rgba(245,158,11,0.1)' : 'rgba(16,185,129,0.1)' }
                    ]}
                  >
                    <Text 
                      style={[
                        styles.statusText, 
                        { color: item.isOfflinePending ? COLORS.warning : COLORS.success }
                      ]}
                    >
                      {item.isOfflinePending ? 'Pendente' : 'Sincronizado'}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
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
  syncBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.card,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  syncBtnDisabled: {
    opacity: 0.5,
  },
  headerTitle: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  networkBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: SPACING.sm,
  },
  networkText: {
    fontSize: 11,
    fontWeight: '600',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
  },
  loadingText: {
    color: COLORS.textSecondary,
    marginTop: SPACING.md,
  },
  noOrdersText: {
    color: COLORS.textSecondary,
    fontSize: 15,
    marginBottom: SPACING.lg,
    textAlign: 'center',
  },
  buyNowBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.lg,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyNowText: {
    color: COLORS.buttonText,
    fontWeight: 'bold',
    fontSize: 14,
  },
  listContent: {
    padding: SPACING.lg,
  },
  orderCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.md,
    overflow: 'hidden',
    height: 104,
  },
  syncIndicatorBorder: {
    width: 4,
    height: '100%',
  },
  orderInfo: {
    flex: 1,
    padding: SPACING.md,
    justifyContent: 'space-between',
  },
  movieTitle: {
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: 15,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  snacksPreview: {
    fontSize: 11,
    color: COLORS.primary,
    fontWeight: '500',
  },
  orderSide: {
    padding: SPACING.md,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: 100,
  },
  orderPrice: {
    color: COLORS.success,
    fontWeight: 'bold',
    fontSize: 16,
  },
  statusBadge: {
    borderRadius: BORDER_RADIUS.sm,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  statusText: {
    fontSize: 9,
    fontWeight: 'bold',
  },
});
