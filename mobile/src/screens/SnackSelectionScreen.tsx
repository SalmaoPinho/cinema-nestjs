import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, BORDER_RADIUS, SPACING } from '../styles/theme';
import { CinemaService, Lanche } from '../services/cinemaService';

interface SnackSelectionScreenProps {
  params: {
    sessionId: number;
    selectedSeats: Array<{ assento: string; tipo: 'INTEIRA' | 'MEIA'; valor: number }>;
    valorIngressos: number;
  };
  goBack: () => void;
  navigateTo: (screen: string, params?: any) => void;
}

interface SnackSelection {
  lancheId: number;
  nome: string;
  quantidade: number;
  preco: number;
}

export default function SnackSelectionScreen({ params, goBack, navigateTo }: SnackSelectionScreenProps) {
  const { sessionId, selectedSeats, valorIngressos } = params;
  const [snacks, setSnacks] = useState<Lanche[]>([]);
  const [loading, setLoading] = useState(true);
  const [selections, setSelections] = useState<SnackSelection[]>([]);

  useEffect(() => {
    const loadSnacks = async () => {
      setLoading(true);
      try {
        const data = await CinemaService.getLanches();
        // Filtra apenas os lanches ativos
        setSnacks(data.filter((l) => l.ativo));
      } catch (e) {
        console.error('Erro ao buscar lanches', e);
        Alert.alert('Erro', 'Não foi possível carregar o menu da bomboniere.');
      } finally {
        setLoading(false);
      }
    };

    loadSnacks();
  }, []);

  const getQuantity = (id: number): number => {
    const item = selections.find((s) => s.lancheId === id);
    return item ? item.quantidade : 0;
  };

  const handleUpdateQuantity = (lanche: Lanche, change: number) => {
    const existing = selections.find((s) => s.lancheId === lanche.id);
    
    if (existing) {
      const newQty = existing.quantidade + change;
      if (newQty <= 0) {
        // Remove do array
        setSelections(selections.filter((s) => s.lancheId !== lanche.id));
      } else {
        // Atualiza quantidade
        setSelections(
          selections.map((s) =>
            s.lancheId === lanche.id ? { ...s, quantidade: newQty } : s
          )
        );
      }
    } else if (change > 0) {
      // Adiciona novo lanche selecionado
      setSelections([
        ...selections,
        {
          lancheId: lanche.id,
          nome: lanche.nome,
          quantidade: 1,
          preco: lanche.preco,
        },
      ]);
    }
  };

  const valorLanches = selections.reduce((sum, s) => sum + s.preco * s.quantidade, 0);
  const valorTotal = valorIngressos + valorLanches;

  const handleProceed = () => {
    navigateTo('PAYMENT', {
      sessionId,
      selectedSeats,
      selectedSnacks: selections,
      valorIngressos,
      valorLanches,
      valorTotal,
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
          <Text style={styles.headerTitle}>Bomboniere</Text>
          <Text style={styles.headerSubtitle}>Complete sua experiência de cinema</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.skipBtn} 
          onPress={handleProceed}
        >
          <Text style={styles.skipBtnText}>Pular</Text>
        </TouchableOpacity>
      </View>

      {/* Main Catalog */}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
          <Text style={styles.loadingText}>Carregando delícias da bomboniere...</Text>
        </View>
      ) : snacks.length === 0 ? (
        <View style={styles.loadingContainer}>
          <Ionicons name="cafe-outline" size={60} color={COLORS.textMuted} />
          <Text style={styles.errorText}>A bomboniere está fechada temporariamente.</Text>
          <TouchableOpacity style={styles.skipFullBtn} onPress={handleProceed}>
            <Text style={styles.skipFullText}>Continuar para Pagamento</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={snacks}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => {
            const qty = getQuantity(item.id);
            return (
              <View style={styles.snackCard}>
                {/* Visual placeholder */}
                <View style={styles.avatarContainer}>
                  <Ionicons 
                    name={item.nome.toLowerCase().includes('pipoca') ? 'rose-outline' : 'beer-outline'} 
                    size={30} 
                    color={COLORS.primary} 
                  />
                </View>

                {/* Details */}
                <View style={styles.snackInfo}>
                  <Text style={styles.snackName}>{item.nome}</Text>
                  <Text style={styles.snackDesc}>{item.descricao}</Text>
                  <Text style={styles.snackPrice}>R$ {item.preco.toFixed(2)}</Text>
                </View>

                {/* Counter controls */}
                <View style={styles.counterRow}>
                  <TouchableOpacity
                    style={[styles.counterBtn, qty === 0 && styles.counterBtnDisabled]}
                    onPress={() => handleUpdateQuantity(item, -1)}
                    disabled={qty === 0}
                  >
                    <Ionicons name="remove" size={16} color={qty === 0 ? COLORS.textMuted : COLORS.text} />
                  </TouchableOpacity>

                  <View style={styles.qtyContainer}>
                    <Text style={styles.qtyText}>{qty}</Text>
                  </View>

                  <TouchableOpacity
                    style={styles.counterBtn}
                    onPress={() => handleUpdateQuantity(item, 1)}
                  >
                    <Ionicons name="add" size={16} color={COLORS.text} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      )}

      {/* Booking Summary Floating Panel */}
      <View style={styles.bottomBar}>
        <View style={styles.summaryValuesContainer}>
          <View style={styles.valRow}>
            <Text style={styles.valLabel}>Ingressos:</Text>
            <Text style={styles.valAmount}>R$ {valorIngressos.toFixed(2)}</Text>
          </View>
          {valorLanches > 0 && (
            <View style={styles.valRow}>
              <Text style={styles.valLabel}>Lanches:</Text>
              <Text style={styles.valAmount}>R$ {valorLanches.toFixed(2)}</Text>
            </View>
          )}
          <View style={[styles.valRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>TOTAL:</Text>
            <Text style={styles.totalAmount}>R$ {valorTotal.toFixed(2)}</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.proceedBtn} 
          onPress={handleProceed}
        >
          <Text style={styles.proceedBtnText}>Ir para Pagamento</Text>
          <Ionicons name="card-outline" size={20} color={COLORS.buttonText} style={{ marginLeft: 6 }} />
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
    color: COLORS.textMuted,
    fontSize: 15,
    marginBottom: SPACING.lg,
    textAlign: 'center',
  },
  skipFullBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
  },
  skipFullText: {
    color: COLORS.buttonText,
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
  skipBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: COLORS.cardSecondary,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.sm,
  },
  skipBtnText: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: 'bold',
  },
  listContent: {
    padding: SPACING.lg,
    paddingBottom: 180,
  },
  snackCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: 'rgba(0, 210, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
    borderWidth: 1,
    borderColor: 'rgba(0, 210, 255, 0.15)',
  },
  snackInfo: {
    flex: 1,
    marginRight: SPACING.sm,
  },
  snackName: {
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: 15,
  },
  snackDesc: {
    color: COLORS.textMuted,
    fontSize: 11,
    lineHeight: 15,
    marginTop: 2,
  },
  snackPrice: {
    color: COLORS.success,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 4,
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.cardSecondary,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterBtnDisabled: {
    opacity: 0.3,
  },
  qtyContainer: {
    width: 28,
    alignItems: 'center',
  },
  qtyText: {
    color: COLORS.text,
    fontSize: 14,
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
  },
  summaryValuesContainer: {
    marginBottom: SPACING.md,
  },
  valRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  valLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  valAmount: {
    fontSize: 12,
    color: COLORS.text,
  },
  totalRow: {
    borderTopWidth: 1,
    borderColor: COLORS.border,
    paddingTop: 4,
    marginTop: 4,
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.success,
  },
  proceedBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.md,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  proceedBtnText: {
    color: COLORS.buttonText,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
