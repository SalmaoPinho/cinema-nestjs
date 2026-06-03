import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, BORDER_RADIUS, SPACING } from '../styles/theme';
import { CinemaService, Filme } from '../services/cinemaService';
import { AuthService } from '../services/authService';
import { SyncService } from '../services/syncService';

interface MovieListScreenProps {
  onLogout: () => void;
  navigateTo: (screen: string, params?: any) => void;
}

export default function MovieListScreen({ onLogout, navigateTo }: MovieListScreenProps) {
  const [movies, setMovies] = useState<Filme[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('Todos');
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState<string>('CUSTOMER');
  const [isOnline, setIsOnline] = useState(true);
  const [syncing, setSyncing] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      // 1. Carrega o perfil do usuário
      const user = await AuthService.getCurrentUser();
      if (user) {
        setUserName(user.name);
        setUserRole(user.role);
      }

      // 2. Verifica se está online e tenta sincronizar
      const online = await SyncService.isOnline();
      setIsOnline(online);

      if (online) {
        setSyncing(true);
        await SyncService.syncOfflineQueue();
        await SyncService.pullServerOrders();
        setSyncing(false);
      }

      // 3. Tenta carregar os filmes do servidor
      if (online) {
        const filmesData = await CinemaService.getFilmes();
        setMovies(filmesData);
        setFilteredMovies(filmesData);
        // Salva os filmes em cache local
        await AsyncStorage.setItem('cached_movies', JSON.stringify(filmesData));
      } else {
        // Se offline, carrega do cache local
        const cached = await AsyncStorage.getItem('cached_movies');
        if (cached) {
          const parsed = JSON.parse(cached);
          setMovies(parsed);
          setFilteredMovies(parsed);
        }
      }
    } catch (e) {
      console.warn('Erro ao carregar catálogo', e);
      // Tentativa de carregar cache caso dê erro na rede
      const cached = await AsyncStorage.getItem('cached_movies');
      if (cached) {
        const parsed = JSON.parse(cached);
        setMovies(parsed);
        setFilteredMovies(parsed);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filtragem dinâmica
  useEffect(() => {
    let result = movies;

    if (searchQuery) {
      result = result.filter((m) =>
        m.titulo.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedGenre !== 'Todos') {
      result = result.filter((m) => m.genero === selectedGenre);
    }

    setFilteredMovies(result);
  }, [searchQuery, selectedGenre, movies]);

  // Lista única de gêneros presentes nos filmes
  const genres = ['Todos', ...Array.from(new Set(movies.map((m) => m.genero)))];

  const handleLogout = async () => {
    await AuthService.logout();
    onLogout();
  };

  const getGenreEmoji = (genre: string) => {
    switch (genre) {
      case 'ACAO': return '💥';
      case 'COMEDIA': return '😂';
      case 'DRAMA': return '🎭';
      case 'TERROR': return '👻';
      case 'ROMANCE': return '💖';
      case 'FICCAO_CIENTIFICA': return '🚀';
      case 'ANIMACAO': return '🎨';
      case 'DOCUMENTARIO': return '🎥';
      default: return '🎬';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header bar */}
      <View style={styles.topHeader}>
        <View>
          <Text style={styles.welcomeText}>Olá, bem-vindo!</Text>
          <Text style={styles.userText}>{userName || 'Cliente'}</Text>
        </View>
        
        <View style={styles.headerActions}>
          {/* Status Network Badge */}
          <View style={[styles.networkBadge, { borderColor: isOnline ? COLORS.success : COLORS.warning }]}>
            <View style={[styles.networkDot, { backgroundColor: isOnline ? COLORS.success : COLORS.warning }]} />
            <Text style={[styles.networkText, { color: isOnline ? COLORS.success : COLORS.warning }]}>
              {isOnline ? 'Online' : 'Offline'}
            </Text>
          </View>

          {/* Admin Icon */}
          {userRole === 'ADMIN' && (
            <TouchableOpacity 
              style={[styles.actionBtn, { borderColor: 'rgba(0, 119, 255, 0.3)' }]}
              onPress={() => navigateTo('ADMIN')}
            >
              <Ionicons name="construct-outline" size={20} color={COLORS.primary} />
            </TouchableOpacity>
          )}

          {/* History Icon */}
          <TouchableOpacity 
            style={styles.actionBtn}
            onPress={() => navigateTo('HISTORY')}
          >
            <Ionicons name="receipt-outline" size={20} color={COLORS.primary} />
          </TouchableOpacity>

          {/* Logout Icon */}
          <TouchableOpacity 
            style={[styles.actionBtn, { borderColor: 'rgba(239, 68, 68, 0.3)' }]}
            onPress={handleLogout}
          >
            <Ionicons name="log-out-outline" size={20} color={COLORS.danger} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search & Genre list */}
      <View style={styles.filterSection}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color={COLORS.textSecondary} style={{ marginRight: 8 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar filme..."
            placeholderTextColor={COLORS.textMuted}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle-outline" size={20} color={COLORS.textSecondary} />
            </TouchableOpacity>
          )}
        </View>

        {/* Genres carrossel */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.genreList}
        >
          {genres.map((genre) => (
            <TouchableOpacity
              key={genre}
              style={[
                styles.genreBadge,
                selectedGenre === genre && styles.genreBadgeSelected,
              ]}
              onPress={() => setSelectedGenre(genre)}
            >
              <Text style={styles.genreEmoji}>{getGenreEmoji(genre)}</Text>
              <Text
                style={[
                  styles.genreText,
                  selectedGenre === genre && styles.genreTextSelected,
                ]}
              >
                {genre.replace('_', ' ')}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Catalog listing */}
      {loading ? (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
          <Text style={styles.loadingText}>Carregando catálogo de filmes...</Text>
        </View>
      ) : filteredMovies.length === 0 ? (
        <View style={styles.centerContainer}>
          <Ionicons name="film-outline" size={60} color={COLORS.textMuted} />
          <Text style={styles.noMoviesText}>Nenhum filme encontrado.</Text>
        </View>
      ) : (
        <FlatList
          data={filteredMovies}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.movieListContent}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.movieCard}
              activeOpacity={0.8}
              onPress={() => navigateTo('MOVIE_DETAIL', { movieId: item.id })}
            >
              {/* Poster Placeholder or Image */}
              <View style={styles.posterContainer}>
                {item.imagemUrl ? (
                  <Image source={{ uri: item.imagemUrl }} style={styles.posterImage} />
                ) : (
                  <View style={styles.posterPlaceholder}>
                    <Ionicons name="image-outline" size={40} color={COLORS.textMuted} />
                    <Text style={styles.placeholderText}>CineWeb</Text>
                  </View>
                )}
                
                {/* Floating Rating Badge */}
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingText}>{item.classificacao}</Text>
                </View>
              </View>

              {/* Info panel */}
              <View style={styles.movieInfo}>
                <Text style={styles.movieTitle}>{item.titulo}</Text>
                <Text style={styles.movieGenre}>{item.genero.replace('_', ' ')}</Text>
                
                <View style={styles.metaRow}>
                  <Ionicons name="time-outline" size={14} color={COLORS.textSecondary} style={{ marginRight: 4 }} />
                  <Text style={styles.metaText}>{item.duracao} min</Text>
                </View>

                <Text style={styles.synopsisText} numberOfLines={3}>
                  {item.sinopse}
                </Text>

                <View style={styles.buyBtn}>
                  <Text style={styles.buyBtnText}>Ver Sessões</Text>
                  <Ionicons name="chevron-forward" size={14} color={COLORS.text} style={{ marginLeft: 4 }} />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
}

// Para usar o AsyncStorage sem importar a cada declaração
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.md,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  welcomeText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  userText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  networkBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.round,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  networkDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4,
  },
  networkText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  actionBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },
  filterSection: {
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    marginHorizontal: SPACING.lg,
    height: 46,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  searchInput: {
    flex: 1,
    color: COLORS.text,
    fontSize: 14,
  },
  genreList: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
  },
  genreBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.round,
    paddingHorizontal: SPACING.md,
    paddingVertical: 6,
    marginRight: SPACING.sm,
  },
  genreBadgeSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  genreEmoji: {
    fontSize: 14,
    marginRight: 4,
  },
  genreText: {
    color: COLORS.textSecondary,
    fontSize: 13,
    fontWeight: '500',
  },
  genreTextSelected: {
    color: COLORS.textLight,
    fontWeight: 'bold',
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
    fontSize: 14,
  },
  noMoviesText: {
    color: COLORS.textSecondary,
    marginTop: SPACING.md,
    fontSize: 15,
  },
  movieListContent: {
    padding: SPACING.lg,
  },
  movieCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    marginBottom: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  posterContainer: {
    width: 120,
    height: 180,
    position: 'relative',
    backgroundColor: COLORS.cardSecondary,
  },
  posterImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  posterPlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: COLORS.textMuted,
    fontSize: 11,
    marginTop: SPACING.xs,
  },
  ratingBadge: {
    position: 'absolute',
    left: SPACING.sm,
    top: SPACING.sm,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: BORDER_RADIUS.sm,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  ratingText: {
    color: COLORS.textLight,
    fontSize: 10,
    fontWeight: 'bold',
  },
  movieInfo: {
    flex: 1,
    padding: SPACING.md,
    justifyContent: 'space-between',
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  movieGenre: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '500',
    marginTop: 2,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  metaText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  synopsisText: {
    fontSize: 12,
    color: COLORS.textMuted,
    lineHeight: 16,
    marginTop: 6,
  },
  buyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardSecondary,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: SPACING.md,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.md,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  buyBtnText: {
    fontSize: 12,
    color: COLORS.text,
    fontWeight: 'bold',
  },
});
