import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, BORDER_RADIUS, SPACING } from '../styles/theme';
import { CinemaService, Filme, Sessao } from '../services/cinemaService';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface MovieDetailScreenProps {
  params: {
    movieId: number;
  };
  goBack: () => void;
  navigateTo: (screen: string, params?: any) => void;
}

export default function MovieDetailScreen({ params, goBack, navigateTo }: MovieDetailScreenProps) {
  const { movieId } = params;
  const [movie, setMovie] = useState<Filme | null>(null);
  const [sessions, setSessions] = useState<Sessao[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSessionId, setSelectedSessionId] = useState<number | null>(null);

  useEffect(() => {
    const loadMovieAndSessions = async () => {
      setLoading(true);
      try {
        const movieData = await CinemaService.getFilmeById(movieId);
        setMovie(movieData);

        const sessionsData = await CinemaService.getSessoes();
        // Filtra sessões do filme atual e que estejam ativas
        const filtered = sessionsData.filter((s) => s.filmeId === movieId && s.ativo);
        setSessions(filtered);
      } catch (e) {
        console.error('Erro ao buscar detalhes do filme e sessões', e);
      } finally {
        setLoading(false);
      }
    };

    loadMovieAndSessions();
  }, [movieId]);

  const formatSessionTime = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return format(date, 'HH:mm');
    } catch {
      return '--:--';
    }
  };

  const formatSessionDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return format(date, "dd 'de' MMMM", { locale: ptBR });
    } catch {
      return '';
    }
  };

  const handleSelectSession = (sessionId: number) => {
    setSelectedSessionId(sessionId);
    navigateTo('SEAT_SELECTION', { sessionId });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Carregando detalhes do filme...</Text>
      </View>
    );
  }

  if (!movie) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>Filme não encontrado.</Text>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Text style={styles.backBtnText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Poster Header */}
        <View style={styles.posterHeader}>
          {movie.imagemUrl ? (
            <Image source={{ uri: movie.imagemUrl }} style={styles.backdropImage} />
          ) : (
            <View style={styles.backdropPlaceholder}>
              <Ionicons name="film" size={80} color={COLORS.textMuted} />
            </View>
          )}

          {/* Floating Back Button */}
          <TouchableOpacity style={styles.floatingBack} onPress={goBack}>
            <Ionicons name="chevron-back" size={24} color={COLORS.text} />
          </TouchableOpacity>

          {/* Glowing bottom gradient overlay */}
          <View style={styles.gradientOverlay} />
        </View>

        {/* Movie Info */}
        <View style={styles.infoSection}>
          <Text style={styles.title}>{movie.titulo}</Text>
          <Text style={styles.genre}>{movie.genero.replace('_', ' ')}</Text>

          {/* Info row */}
          <View style={styles.metadataRow}>
            <View style={styles.metaBadge}>
              <Text style={styles.metaBadgeText}>{movie.classificacao}</Text>
            </View>
            <View style={styles.metaInfo}>
              <Ionicons name="time-outline" size={16} color={COLORS.textSecondary} style={{ marginRight: 4 }} />
              <Text style={styles.metaInfoText}>{movie.duracao} min</Text>
            </View>
            <View style={styles.metaInfo}>
              <Ionicons name="calendar-outline" size={16} color={COLORS.textSecondary} style={{ marginRight: 4 }} />
              <Text style={styles.metaInfoText}>Em Exibição</Text>
            </View>
          </View>

          {/* Synopsis */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sinopse</Text>
            <Text style={styles.bodyText}>{movie.sinopse}</Text>
          </View>

          {/* Cast */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Elenco</Text>
            <Text style={styles.bodyText}>{movie.elenco}</Text>
          </View>

          {/* Sessions */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sessões Disponíveis</Text>
            {sessions.length === 0 ? (
              <View style={styles.noSessionsCard}>
                <Ionicons name="calendar-outline" size={32} color={COLORS.textMuted} style={{ marginBottom: 8 }} />
                <Text style={styles.noSessionsText}>Não há sessões ativas hoje para este filme.</Text>
              </View>
            ) : (
              <View style={styles.sessionList}>
                {sessions.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.sessionCard}
                    activeOpacity={0.8}
                    onPress={() => handleSelectSession(item.id)}
                  >
                    <View style={styles.sessionMain}>
                      <View style={styles.sessionTimeCircle}>
                        <Text style={styles.sessionTimeText}>{formatSessionTime(item.horarioExibicao)}</Text>
                      </View>
                      
                      <View style={styles.sessionDetails}>
                        <Text style={styles.sessionDateText}>{formatSessionDate(item.horarioExibicao)}</Text>
                        <Text style={styles.sessionSalaText}>Sala {item.sala.numero} ({item.sala.capacidade} assentos)</Text>
                      </View>
                    </View>

                    <View style={styles.sessionPriceContainer}>
                      <Text style={styles.priceLabel}>A partir de</Text>
                      <Text style={styles.priceValue}>R$ {(item.precoInteira / 2).toFixed(2)}</Text>
                      <View style={styles.sessionActionBtn}>
                        <Text style={styles.sessionActionText}>Ingressos</Text>
                        <Ionicons name="arrow-forward" size={12} color={COLORS.buttonText} style={{ marginLeft: 4 }} />
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
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
  scrollContent: {
    paddingBottom: SPACING.xl,
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
  posterHeader: {
    height: 280,
    position: 'relative',
    backgroundColor: COLORS.cardSecondary,
  },
  backdropImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backdropPlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingBack: {
    position: 'absolute',
    left: SPACING.lg,
    top: SPACING.lg,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
    backgroundColor: COLORS.background, // Gradiente simulado fundindo com o fundo
    opacity: 0.9,
  },
  infoSection: {
    paddingHorizontal: SPACING.lg,
    marginTop: -SPACING.xl, // Eleva o texto sobre o overlay do poster
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  genre: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginTop: 2,
  },
  metadataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING.md,
  },
  metaBadge: {
    backgroundColor: COLORS.cardSecondary,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.sm,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: SPACING.md,
  },
  metaBadgeText: {
    color: COLORS.text,
    fontSize: 11,
    fontWeight: 'bold',
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  metaInfoText: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },
  section: {
    marginTop: SPACING.lg,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.sm,
    borderLeftWidth: 3,
    borderColor: COLORS.primary,
    paddingLeft: SPACING.sm,
  },
  bodyText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },
  noSessionsCard: {
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  noSessionsText: {
    color: COLORS.textMuted,
    textAlign: 'center',
    fontSize: 14,
  },
  sessionList: {
    marginTop: SPACING.xs,
  },
  sessionCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sessionMain: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sessionTimeCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 210, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 210, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  sessionTimeText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sessionDetails: {
    flex: 1,
  },
  sessionDateText: {
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: 14,
  },
  sessionSalaText: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
  sessionPriceContainer: {
    alignItems: 'flex-end',
    marginLeft: SPACING.sm,
  },
  priceLabel: {
    fontSize: 9,
    color: COLORS.textMuted,
  },
  priceValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.success,
  },
  sessionActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.sm,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 6,
  },
  sessionActionText: {
    fontSize: 10,
    color: COLORS.buttonText,
    fontWeight: 'bold',
  },
});
