import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, BORDER_RADIUS, SPACING } from '../styles/theme';
import { CinemaService, Sessao } from '../services/cinemaService';

interface SeatSelectionScreenProps {
  params: {
    sessionId: number;
  };
  goBack: () => void;
  navigateTo: (screen: string, params?: any) => void;
}

interface SelectedSeat {
  assento: string; // Ex: "A3"
  tipo: 'INTEIRA' | 'MEIA';
  valor: number;
}

export default function SeatSelectionScreen({ params, goBack, navigateTo }: SeatSelectionScreenProps) {
  const { sessionId } = params;
  const [session, setSession] = useState<Sessao | null>(null);
  const [loading, setLoading] = useState(true);
  const [occupiedSeats, setOccupiedSeats] = useState<Set<string>>(new Set());
  const [selectedSeats, setSelectedSeats] = useState<SelectedSeat[]>([]);

  useEffect(() => {
    const loadSession = async () => {
      setLoading(true);
      try {
        const data = await CinemaService.getSessaoById(sessionId);
        setSession(data);
        
        // Coleta todos os assentos vendidos/reservados ativos
        const sold = data.ingressos 
          ? data.ingressos.filter(i => i.ativo && !i.reembolsado).map(i => i.assento)
          : [];
        setOccupiedSeats(new Set(sold));
      } catch (e) {
        console.error('Erro ao buscar assentos da sessão', e);
        Alert.alert('Erro', 'Não foi possível carregar o mapa de assentos.');
      } finally {
        setLoading(false);
      }
    };

    loadSession();
  }, [sessionId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Carregando mapa de assentos...</Text>
      </View>
    );
  }

  if (!session) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>Sessão não encontrada.</Text>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Text style={styles.backBtnText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const { sala } = session;
  const fileiras = Array.from({ length: sala.fileiras }, (_, i) => String.fromCharCode(65 + i)); // ['A', 'B', 'C'...]
  const colunas = Array.from({ length: sala.colunas }, (_, i) => i + 1); // [1, 2, 3...]

  const handleSelectSeat = (seatCode: string) => {
    if (occupiedSeats.has(seatCode)) return; // Ocupado

    const exists = selectedSeats.find((s) => s.assento === seatCode);
    if (exists) {
      // Remove
      setSelectedSeats(selectedSeats.filter((s) => s.assento !== seatCode));
    } else {
      // Adiciona como INTEIRA por padrão
      setSelectedSeats([
        ...selectedSeats,
        {
          assento: seatCode,
          tipo: 'INTEIRA',
          valor: session.precoInteira,
        },
      ]);
    }
  };

  const toggleSeatType = (seatCode: string) => {
    setSelectedSeats(
      selectedSeats.map((s) => {
        if (s.assento === seatCode) {
          const novoTipo = s.tipo === 'INTEIRA' ? 'MEIA' : 'INTEIRA';
          return {
            ...s,
            tipo: novoTipo,
            valor: novoTipo === 'MEIA' ? session.precoInteira / 2 : session.precoInteira,
          };
        }
        return s;
      })
    );
  };

  const getSeatStatus = (seatCode: string): 'occupied' | 'selected' | 'available' => {
    if (occupiedSeats.has(seatCode)) return 'occupied';
    if (selectedSeats.some((s) => s.assento === seatCode)) return 'selected';
    return 'available';
  };

  const totalValue = selectedSeats.reduce((sum, s) => sum + s.valor, 0);

  const handleProceed = () => {
    if (selectedSeats.length === 0) {
      Alert.alert('Atenção', 'Selecione pelo menos um assento para continuar.');
      return;
    }
    navigateTo('SNACK_SELECTION', {
      sessionId,
      selectedSeats,
      valorIngressos: totalValue,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.topHeader}>
        <TouchableOpacity style={styles.backBtn} onPress={goBack}>
          <Ionicons name="chevron-back" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        
        <View style={styles.headerTitleContainer}>
          <Text style={styles.movieTitle} numberOfLines={1}>{session.filme.titulo}</Text>
          <Text style={styles.sessionDetails}>Sala {sala.numero} • R$ {session.precoInteira.toFixed(2)} (Inteira)</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Visual Screen */}
        <View style={styles.screenContainer}>
          <View style={styles.screenCurvature} />
          <Text style={styles.screenLabel}>TELA</Text>
        </View>

        {/* Seats Grid */}
        <View style={styles.gridOuter}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalGrid}>
            <View style={styles.grid}>
              {fileiras.map((row) => (
                <View key={row} style={styles.gridRow}>
                  {/* Row indicator letter */}
                  <View style={styles.rowLetterContainer}>
                    <Text style={styles.rowLetter}>{row}</Text>
                  </View>

                  {/* Columns */}
                  {colunas.map((col) => {
                    const seatCode = `${row}${col}`;
                    const status = getSeatStatus(seatCode);
                    
                    return (
                      <TouchableOpacity
                        key={seatCode}
                        style={[
                          styles.seat,
                          status === 'occupied' && styles.seatOccupied,
                          status === 'selected' && styles.seatSelected,
                        ]}
                        onPress={() => handleSelectSeat(seatCode)}
                        disabled={status === 'occupied'}
                      >
                        <Text
                          style={[
                            styles.seatText,
                            status === 'occupied' && styles.seatTextOccupied,
                            status === 'selected' && styles.seatTextSelected,
                          ]}
                        >
                          {col}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Legend */}
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={styles.legendDot} />
            <Text style={styles.legendText}>Livre</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, styles.seatOccupied]} />
            <Text style={styles.legendText}>Ocupado</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, styles.seatSelected]} />
            <Text style={styles.legendText}>Selecionado</Text>
          </View>
        </View>

        {/* Selected Seats customization panel */}
        {selectedSeats.length > 0 && (
          <View style={styles.customizationPanel}>
            <Text style={styles.panelTitle}>Configurar Ingressos</Text>
            
            {selectedSeats.map((seat) => (
              <View key={seat.assento} style={styles.seatTicketRow}>
                <View style={styles.seatBadge}>
                  <Text style={styles.seatBadgeText}>{seat.assento}</Text>
                </View>
                
                <Text style={styles.seatRowInfo}>
                  Valor: R$ {seat.valor.toFixed(2)}
                </Text>

                <TouchableOpacity
                  style={styles.toggleTypeBtn}
                  onPress={() => toggleSeatType(seat.assento)}
                >
                  <Text style={styles.toggleTypeBtnText}>{seat.tipo}</Text>
                  <Ionicons name="swap-horizontal-outline" size={14} color={COLORS.text} style={{ marginLeft: 4 }} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Booking Summary Floating Panel */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.summaryLabel}>
            {selectedSeats.length} {selectedSeats.length === 1 ? 'assento' : 'assentos'}
          </Text>
          <Text style={styles.summaryValue}>R$ {totalValue.toFixed(2)}</Text>
        </View>

        <TouchableOpacity 
          style={[styles.proceedBtn, selectedSeats.length === 0 && styles.proceedBtnDisabled]} 
          onPress={handleProceed}
          disabled={selectedSeats.length === 0}
        >
          <Text style={[styles.proceedBtnText, selectedSeats.length > 0 && { color: COLORS.buttonText }]}>
            Ir para Snacks
          </Text>
          <Ionicons 
            name="cart-outline" 
            size={20} 
            color={selectedSeats.length > 0 ? COLORS.buttonText : COLORS.textMuted} 
            style={{ marginLeft: 6 }} 
          />
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
  loadingContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
  },
  loadingText: {
    color: COLORS.textSecondary,
    marginTop: SPACING.md,
  },
  errorText: {
    color: COLORS.danger,
    fontSize: 16,
    marginBottom: SPACING.lg,
  },
  backButton: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
  },
  backBtnText: {
    color: COLORS.text,
    fontWeight: 'bold',
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
  movieTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sessionDetails: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  screenContainer: {
    alignItems: 'center',
    marginTop: SPACING.lg,
    marginBottom: SPACING.xl,
    paddingHorizontal: SPACING.xl,
  },
  screenCurvature: {
    height: 8,
    width: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5,
  },
  screenLabel: {
    color: COLORS.textMuted,
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 6,
    letterSpacing: 3,
  },
  gridOuter: {
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  horizontalGrid: {
    paddingHorizontal: SPACING.lg,
  },
  grid: {
    flexDirection: 'column',
  },
  gridRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  rowLetterContainer: {
    width: 24,
    alignItems: 'center',
    marginRight: SPACING.sm,
  },
  rowLetter: {
    color: COLORS.textMuted,
    fontWeight: 'bold',
    fontSize: 14,
  },
  seat: {
    width: 32,
    height: 32,
    borderRadius: BORDER_RADIUS.sm,
    backgroundColor: COLORS.cardSecondary,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
  },
  seatOccupied: {
    backgroundColor: COLORS.danger,
    borderColor: COLORS.danger,
    opacity: 0.6,
  },
  seatSelected: {
    backgroundColor: COLORS.warning,
    borderColor: COLORS.warning,
    shadowColor: COLORS.warning,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  seatText: {
    color: COLORS.textSecondary,
    fontSize: 11,
    fontWeight: 'bold',
  },
  seatTextOccupied: {
    color: COLORS.textLight,
  },
  seatTextSelected: {
    color: COLORS.textLight,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SPACING.xl,
    paddingHorizontal: SPACING.lg,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SPACING.md,
  },
  legendDot: {
    width: 14,
    height: 14,
    borderRadius: 3,
    backgroundColor: COLORS.cardSecondary,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: 6,
  },
  legendText: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  customizationPanel: {
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    marginHorizontal: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  panelTitle: {
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: SPACING.md,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    paddingBottom: 6,
  },
  seatTicketRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
    backgroundColor: COLORS.cardSecondary,
    padding: 8,
    borderRadius: BORDER_RADIUS.md,
  },
  seatBadge: {
    width: 32,
    height: 24,
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seatBadgeText: {
    color: COLORS.buttonText,
    fontWeight: 'bold',
    fontSize: 12,
  },
  seatRowInfo: {
    color: COLORS.textSecondary,
    fontSize: 13,
    flex: 1,
    marginLeft: 10,
  },
  toggleTypeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.sm,
  },
  toggleTypeBtnText: {
    color: COLORS.buttonText,
    fontSize: 11,
    fontWeight: 'bold',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  summaryValue: {
    color: COLORS.success,
    fontSize: 22,
    fontWeight: 'bold',
  },
  proceedBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.lg,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  proceedBtnDisabled: {
    backgroundColor: COLORS.cardSecondary,
    shadowOpacity: 0,
    elevation: 0,
  },
  proceedBtnText: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
