import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, BORDER_RADIUS, SPACING } from '../styles/theme';
import { LocalOrder } from '../services/syncService';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface TicketScreenProps {
  params: {
    order: LocalOrder;
  };
  navigateTo: (screen: string, params?: any) => void;
}

export default function TicketScreen({ params, navigateTo }: TicketScreenProps) {
  const { order } = params;

  const formatDateLabel = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return format(date, "dd/MM/yyyy 'às' HH:mm");
    } catch {
      return '';
    }
  };

  const formatSessionTime = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return format(date, "HH:mm");
    } catch {
      return '';
    }
  };

  const formatSessionDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return format(date, "dd/MM/yyyy");
    } catch {
      return '';
    }
  };

  const seatsListStr = order.ingressos.map((i) => i.assento).join(', ');
  const filmeTitulo = order.ingressos[0]?.sessao.filme.titulo || 'Filme Selecionado';
  const salaNumero = order.ingressos[0]?.sessao.sala.numero || 1;
  const sessaoHorario = order.ingressos[0]?.sessao.horarioExibicao || new Date().toISOString();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.topHeader}>
        <View style={{ width: 24 }} />
        <Text style={styles.headerTitle}>Seu Comprovante</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Ticket Aero Design Card */}
        <View style={styles.ticketCard}>
          {/* Top Notch decorative circles */}
          <View style={styles.notchLeft} />
          <View style={styles.notchRight} />

          {/* Ticket Header */}
          <View style={styles.ticketHeader}>
            <Ionicons name="film-outline" size={32} color={COLORS.primary} style={{ marginBottom: 6 }} />
            <Text style={styles.cinemaLabel}>123FILMES</Text>
            <Text style={styles.ticketStatus}>COMPROVANTE ELETRÔNICO</Text>
          </View>

          {/* Dotted separator */}
          <View style={styles.dividerContainer}>
            <View style={styles.dottedLine} />
          </View>

          {/* Ticket Body */}
          <View style={styles.ticketBody}>
            <Text style={styles.movieLabel}>FILME</Text>
            <Text style={styles.movieTitle}>{filmeTitulo}</Text>

            {/* Room, Date & Time Grid */}
            <View style={styles.metaGrid}>
              <View style={styles.metaCell}>
                <Text style={styles.gridLabel}>SALA</Text>
                <Text style={styles.gridValue}>{salaNumero}</Text>
              </View>
              <View style={styles.metaCell}>
                <Text style={styles.gridLabel}>DATA</Text>
                <Text style={styles.gridValue}>{formatSessionDate(sessaoHorario)}</Text>
              </View>
              <View style={styles.metaCell}>
                <Text style={styles.gridLabel}>HORÁRIO</Text>
                <Text style={styles.gridValue}>{formatSessionTime(sessaoHorario)}</Text>
              </View>
            </View>

            {/* Seats detail */}
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>ASSENTOS</Text>
              <Text style={styles.infoValue}>{seatsListStr || 'Nenhum'}</Text>
            </View>

            {/* Snacks details */}
            {order.lanches.length > 0 && (
              <View style={styles.snacksSection}>
                <Text style={styles.infoLabel}>BOMBONIERE</Text>
                {order.lanches.map((lanche, idx) => (
                  <Text key={idx} style={styles.snackLine}>
                    {lanche.quantidade}x {lanche.nome}
                  </Text>
                ))}
              </View>
            )}

            {/* Separator */}
            <View style={styles.dividerContainer}>
              <View style={styles.dottedLine} />
            </View>

            {/* Price & Sync status */}
            <View style={styles.ticketFooter}>
              <View style={styles.priceContainer}>
                <Text style={styles.footerLabel}>TOTAL PAGO</Text>
                <Text style={styles.footerPrice}>R$ {order.valorTotal.toFixed(2)}</Text>
              </View>

              {/* Sync Status Badge */}
              <View 
                style={[
                  styles.syncBadge, 
                  { backgroundColor: order.isOfflinePending ? 'rgba(245,158,11,0.1)' : 'rgba(16,185,129,0.1)' }
                ]}
              >
                <Ionicons 
                  name={order.isOfflinePending ? 'cloud-upload-outline' : 'checkmark-circle-outline'} 
                  size={16} 
                  color={order.isOfflinePending ? COLORS.warning : COLORS.success} 
                  style={{ marginRight: 4 }}
                />
                <Text 
                  style={[
                    styles.syncText, 
                    { color: order.isOfflinePending ? COLORS.warning : COLORS.success }
                  ]}
                >
                  {order.isOfflinePending ? 'Pendente Sync' : 'Sincronizado'}
                </Text>
              </View>
            </View>

            {/* Barcode Simulator */}
            <View style={styles.barcodeContainer}>
              <Ionicons name="barcode-outline" size={60} color={COLORS.text} style={styles.barcodeIcon} />
              <Text style={styles.barcodeNum}>
                {order.isOfflinePending ? 'OFFLINE_TICKET_PENDING' : `TICKET_ORDER_${order.id}`}
              </Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => navigateTo('MOVIE_LIST')}
          >
            <Ionicons name="home-outline" size={20} color={COLORS.buttonText} style={{ marginRight: 6 }} />
            <Text style={styles.primaryBtnText}>Voltar para o Início</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => navigateTo('HISTORY')}
          >
            <Ionicons name="receipt-outline" size={20} color={COLORS.primary} style={{ marginRight: 6 }} />
            <Text style={styles.secondaryBtnText}>Ver Meus Ingressos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  headerTitle: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: SPACING.lg,
    paddingBottom: SPACING.xl,
  },
  ticketCard: {
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.lg,
    position: 'relative',
    overflow: 'hidden',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
    marginTop: SPACING.md,
  },
  // Recortes laterais do bilhete (notch effect)
  notchLeft: {
    position: 'absolute',
    left: -12,
    top: 130,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  notchRight: {
    position: 'absolute',
    right: -12,
    top: 130,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  ticketHeader: {
    alignItems: 'center',
    paddingBottom: SPACING.md,
  },
  cinemaLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    letterSpacing: 2,
  },
  ticketStatus: {
    fontSize: 10,
    color: COLORS.primary,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 4,
  },
  dividerContainer: {
    height: 20,
    justifyContent: 'center',
    marginVertical: SPACING.sm,
  },
  dottedLine: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 1,
  },
  ticketBody: {
    paddingVertical: SPACING.sm,
  },
  movieLabel: {
    fontSize: 10,
    color: COLORS.textMuted,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  movieTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 2,
    marginBottom: SPACING.md,
  },
  metaGrid: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardSecondary,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
    marginBottom: SPACING.md,
  },
  metaCell: {
    flex: 1,
    alignItems: 'center',
  },
  gridLabel: {
    fontSize: 9,
    color: COLORS.textMuted,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  gridValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 2,
  },
  infoRow: {
    marginBottom: SPACING.md,
  },
  infoLabel: {
    fontSize: 10,
    color: COLORS.textMuted,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  snacksSection: {
    marginBottom: SPACING.md,
  },
  snackLine: {
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
  ticketFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SPACING.sm,
  },
  priceContainer: {
    flex: 1,
  },
  footerLabel: {
    fontSize: 10,
    color: COLORS.textMuted,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  footerPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.success,
    marginTop: 2,
  },
  syncBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.round,
  },
  syncText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  barcodeContainer: {
    alignItems: 'center',
    marginTop: SPACING.md,
  },
  barcodeIcon: {
    opacity: 0.9,
  },
  barcodeNum: {
    color: COLORS.textMuted,
    fontSize: 10,
    letterSpacing: 2,
    marginTop: 2,
  },
  actionsContainer: {
    marginTop: SPACING.xl,
    paddingHorizontal: SPACING.sm,
  },
  primaryBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.md,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: SPACING.md,
  },
  primaryBtnText: {
    color: COLORS.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  secondaryBtnText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
