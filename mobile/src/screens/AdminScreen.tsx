import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Alert,
  Modal,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, BORDER_RADIUS, SPACING } from '../styles/theme';
import { CinemaService, Filme, Sala, Sessao, Lanche } from '../services/cinemaService';

interface AdminScreenProps {
  goBack: () => void;
  navigateTo: (screen: string, params?: any) => void;
}

type TabType = 'FILMES' | 'SALAS' | 'SESSOES' | 'LANCHES';

export default function AdminScreen({ goBack, navigateTo }: AdminScreenProps) {
  const [activeTab, setActiveTab] = useState<TabType>('FILMES');
  const [loading, setLoading] = useState(false);

  // Lists
  const [movies, setMovies] = useState<Filme[]>([]);
  const [rooms, setRooms] = useState<Sala[]>([]);
  const [sessions, setSessions] = useState<Sessao[]>([]);
  const [lanches, setLanches] = useState<Lanche[]>([]);

  // Modals Visibility
  const [movieModalVisible, setMovieModalVisible] = useState(false);
  const [roomModalVisible, setRoomModalVisible] = useState(false);
  const [sessionModalVisible, setSessionModalVisible] = useState(false);
  const [lancheModalVisible, setLancheModalVisible] = useState(false);
  
  // Custom Selectors Modals
  const [genreSelectVisible, setGenreSelectVisible] = useState(false);
  const [movieSelectVisible, setMovieSelectVisible] = useState(false);
  const [roomSelectVisible, setRoomSelectVisible] = useState(false);

  // Forms State
  const [movieForm, setMovieForm] = useState({
    titulo: '',
    sinopse: '',
    genero: '', // Genero enum: ACAO, COMEDIA, DRAMA, TERROR, ROMANCE, FICCAO_CIENTIFICA, ANIMACAO, DOCUMENTARIO
    classificacao: 'Livre',
    duracao: '',
    elenco: '',
    dataIniciaExibicao: new Date().toISOString().split('T')[0],
    dataFinalExibicao: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    imagemUrl: '',
  });

  const [roomForm, setRoomForm] = useState({
    numero: '',
    capacidade: '',
    fileiras: '8',
    colunas: '10',
  });

  const [sessionForm, setSessionForm] = useState({
    filmeId: null as number | null,
    filmeTitle: 'Selecionar Filme',
    salaId: null as number | null,
    salaNumero: 'Selecionar Sala',
    horarioExibicao: new Date().toISOString().substring(0, 16), // YYYY-MM-DDTHH:MM
    precoInteira: '',
  });

  const [lancheForm, setLancheForm] = useState({
    nome: '',
    descricao: '',
    preco: '',
    imagemUrl: '',
  });

  const genres = [
    { label: 'Ação', value: 'ACAO' },
    { label: 'Comédia', value: 'COMEDIA' },
    { label: 'Drama', value: 'DRAMA' },
    { label: 'Terror', value: 'TERROR' },
    { label: 'Romance', value: 'ROMANCE' },
    { label: 'Ficção Científica', value: 'FICCAO_CIENTIFICA' },
    { label: 'Animação', value: 'ANIMACAO' },
    { label: 'Documentário', value: 'DOCUMENTARIO' },
  ];

  const loadAllData = async () => {
    setLoading(true);
    try {
      const fetchedMovies = await CinemaService.getFilmes();
      setMovies(fetchedMovies);

      const fetchedRooms = await CinemaService.getSalas();
      setRooms(fetchedRooms);

      const fetchedSessions = await CinemaService.getSessoes();
      setSessions(fetchedSessions);

      const fetchedLanches = await CinemaService.getLanches();
      setLanches(fetchedLanches);
    } catch (error: any) {
      console.warn('Erro ao carregar dados administrativos', error);
      Alert.alert('Erro', 'Não foi possível buscar as informações do servidor.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  // CRUD Operations
  const handleCreateMovie = async () => {
    const { titulo, sinopse, genero, duracao, classificacao, elenco, dataIniciaExibicao, dataFinalExibicao } = movieForm;
    if (!titulo || !sinopse || !genero || !duracao || !classificacao || !elenco) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      setLoading(true);
      await CinemaService.createFilme({
        titulo,
        sinopse,
        genero,
        classificacao,
        duracao: parseInt(duracao),
        elenco,
        dataIniciaExibicao: new Date(dataIniciaExibicao).toISOString(),
        dataFinalExibicao: new Date(dataFinalExibicao).toISOString(),
        imagemUrl: movieForm.imagemUrl || null,
      });

      Alert.alert('Sucesso', 'Filme cadastrado com sucesso!');
      setMovieModalVisible(false);
      setMovieForm({
        titulo: '',
        sinopse: '',
        genero: '',
        classificacao: 'Livre',
        duracao: '',
        elenco: '',
        dataIniciaExibicao: new Date().toISOString().split('T')[0],
        dataFinalExibicao: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        imagemUrl: '',
      });
      loadAllData();
    } catch (e: any) {
      Alert.alert('Erro', e.message || 'Falha ao cadastrar filme.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteMovie = (id: number, title: string) => {
    Alert.alert('Confirmar Exclusão', `Tem certeza que deseja excluir o filme "${title}"?`, [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          try {
            setLoading(true);
            await CinemaService.deleteFilme(id);
            Alert.alert('Sucesso', 'Filme removido com sucesso!');
            loadAllData();
          } catch (e: any) {
            Alert.alert('Erro', e.message || 'Falha ao remover filme.');
          } finally {
            setLoading(false);
          }
        },
      },
    ]);
  };

  const handleCreateRoom = async () => {
    const { numero, capacidade, fileiras, colunas } = roomForm;
    if (!numero || !capacidade) {
      Alert.alert('Erro', 'Por favor, preencha os campos obrigatórios.');
      return;
    }

    try {
      setLoading(true);
      await CinemaService.createSala({
        numero: parseInt(numero),
        capacidade: parseInt(capacidade),
        fileiras: fileiras ? parseInt(fileiras) : undefined,
        colunas: colunas ? parseInt(colunas) : undefined,
      });

      Alert.alert('Sucesso', 'Sala cadastrada com sucesso!');
      setRoomModalVisible(false);
      setRoomForm({
        numero: '',
        capacidade: '',
        fileiras: '8',
        colunas: '10',
      });
      loadAllData();
    } catch (e: any) {
      Alert.alert('Erro', e.message || 'Falha ao cadastrar sala.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRoom = (id: number, number: number) => {
    Alert.alert('Confirmar Exclusão', `Tem certeza que deseja excluir a Sala ${number}?`, [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          try {
            setLoading(true);
            await CinemaService.deleteSala(id);
            Alert.alert('Sucesso', 'Sala removida com sucesso!');
            loadAllData();
          } catch (e: any) {
            Alert.alert('Erro', e.message || 'Falha ao remover sala.');
          } finally {
            setLoading(false);
          }
        },
      },
    ]);
  };

  const handleCreateSession = async () => {
    const { filmeId, salaId, horarioExibicao, precoInteira } = sessionForm;
    if (!filmeId || !salaId || !horarioExibicao || !precoInteira) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      setLoading(true);
      await CinemaService.createSessao({
        filmeId,
        salaId,
        horarioExibicao: new Date(horarioExibicao).toISOString(),
        precoInteira: parseFloat(precoInteira),
      });

      Alert.alert('Sucesso', 'Sessão cadastrada com sucesso!');
      setSessionModalVisible(false);
      setSessionForm({
        filmeId: null,
        filmeTitle: 'Selecionar Filme',
        salaId: null,
        salaNumero: 'Selecionar Sala',
        horarioExibicao: new Date().toISOString().substring(0, 16),
        precoInteira: '',
      });
      loadAllData();
    } catch (e: any) {
      Alert.alert('Erro', e.message || 'Falha ao cadastrar sessão.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSession = (id: number, details: string) => {
    Alert.alert('Confirmar Exclusão', `Tem certeza que deseja excluir a sessão de "${details}"?`, [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          try {
            setLoading(true);
            await CinemaService.deleteSessao(id);
            Alert.alert('Sucesso', 'Sessão excluída com sucesso!');
            loadAllData();
          } catch (e: any) {
            Alert.alert('Erro', e.message || 'Falha ao excluir sessão.');
          } finally {
            setLoading(false);
          }
        },
      },
    ]);
  };

  const handleCreateLanche = async () => {
    const { nome, descricao, preco } = lancheForm;
    if (!nome || !descricao || !preco) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      setLoading(true);
      await CinemaService.createLanche({
        nome,
        descricao,
        preco: parseFloat(preco),
        imagemUrl: lancheForm.imagemUrl || null,
      });

      Alert.alert('Sucesso', 'Lanche cadastrado com sucesso!');
      setLancheModalVisible(false);
      setLancheForm({
        nome: '',
        descricao: '',
        preco: '',
        imagemUrl: '',
      });
      loadAllData();
    } catch (e: any) {
      Alert.alert('Erro', e.message || 'Falha ao cadastrar lanche.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteLanche = (id: number, name: string) => {
    Alert.alert('Confirmar Exclusão', `Tem certeza que deseja excluir o lanche "${name}"?`, [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          try {
            setLoading(true);
            await CinemaService.deleteLanche(id);
            Alert.alert('Sucesso', 'Lanche removido com sucesso!');
            loadAllData();
          } catch (e: any) {
            Alert.alert('Erro', e.message || 'Falha ao remover lanche.');
          } finally {
            setLoading(false);
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header bar */}
      <View style={styles.topHeader}>
        <TouchableOpacity style={styles.backBtn} onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Painel Administrativo</Text>
        <TouchableOpacity style={styles.reloadBtn} onPress={loadAllData}>
          <Ionicons name="refresh" size={20} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {(['FILMES', 'SALAS', 'SESSOES', 'LANCHES'] as TabType[]).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.tabButtonActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
              {tab === 'FILMES' ? 'Filmes' : tab === 'SALAS' ? 'Salas' : tab === 'SESSOES' ? 'Sessões' : 'Lanches'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content Area */}
      {loading && (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}

      {!loading && activeTab === 'FILMES' && (
        <View style={styles.tabContent}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Filmes Cadastrados ({movies.length})</Text>
            <TouchableOpacity style={styles.addBtn} onPress={() => setMovieModalVisible(true)}>
              <Ionicons name="add-circle" size={20} color={COLORS.buttonText} />
              <Text style={styles.addBtnText}>Novo Filme</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <View style={styles.cardItem}>
                <View style={styles.cardLeft}>
                  <Ionicons name="film-outline" size={24} color={COLORS.primary} style={{ marginRight: 10 }} />
                  <View style={{ flex: 1 }}>
                    <Text style={styles.cardItemTitle}>{item.titulo}</Text>
                    <Text style={styles.cardItemSubtitle}>{item.genero.replace('_', ' ')} • {item.duracao} min</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => handleDeleteMovie(item.id, item.titulo)}>
                  <Ionicons name="trash-outline" size={22} color={COLORS.danger} />
                </TouchableOpacity>
              </View>
            )}
            ListEmptyComponent={
              <Text style={styles.emptyText}>Nenhum filme encontrado.</Text>
            }
          />
        </View>
      )}

      {!loading && activeTab === 'SALAS' && (
        <View style={styles.tabContent}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Salas Cadastradas ({rooms.length})</Text>
            <TouchableOpacity style={styles.addBtn} onPress={() => setRoomModalVisible(true)}>
              <Ionicons name="add-circle" size={20} color={COLORS.buttonText} />
              <Text style={styles.addBtnText}>Nova Sala</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={rooms}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <View style={styles.cardItem}>
                <View style={styles.cardLeft}>
                  <Ionicons name="grid-outline" size={24} color={COLORS.secondary} style={{ marginRight: 10 }} />
                  <View>
                    <Text style={styles.cardItemTitle}>Sala {item.numero || item.id}</Text>
                    <Text style={styles.cardItemSubtitle}>{item.capacidade} assentos ({item.fileiras || 8}x{item.colunas || 10})</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => handleDeleteRoom(item.id, item.numero || item.id)}>
                  <Ionicons name="trash-outline" size={22} color={COLORS.danger} />
                </TouchableOpacity>
              </View>
            )}
            ListEmptyComponent={
              <Text style={styles.emptyText}>Nenhuma sala cadastrada.</Text>
            }
          />
        </View>
      )}

      {!loading && activeTab === 'SESSOES' && (
        <View style={styles.tabContent}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Sessões Ativas ({sessions.length})</Text>
            <TouchableOpacity style={styles.addBtn} onPress={() => setSessionModalVisible(true)}>
              <Ionicons name="add-circle" size={20} color={COLORS.buttonText} />
              <Text style={styles.addBtnText}>Nova Sessão</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={sessions}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => {
              const formattedTime = new Date(item.horarioExibicao).toLocaleString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              });
              return (
                <View style={styles.cardItem}>
                  <View style={styles.cardLeft}>
                    <Ionicons name="time-outline" size={24} color={COLORS.accent} style={{ marginRight: 10 }} />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.cardItemTitle} numberOfLines={1}>{item.filme?.titulo || `Filme #${item.filmeId}`}</Text>
                      <Text style={styles.cardItemSubtitle}>Sala {item.sala?.numero || item.salaId} • {formattedTime} • R$ {item.precoInteira.toFixed(2)}</Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => handleDeleteSession(item.id, item.filme?.titulo || `Sessão #${item.id}`)}>
                    <Ionicons name="trash-outline" size={22} color={COLORS.danger} />
                  </TouchableOpacity>
                </View>
              );
            }}
            ListEmptyComponent={
              <Text style={styles.emptyText}>Nenhuma sessão agendada.</Text>
            }
          />
        </View>
      )}

      {!loading && activeTab === 'LANCHES' && (
        <View style={styles.tabContent}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Lanches Cadastrados ({lanches.length})</Text>
            <TouchableOpacity style={styles.addBtn} onPress={() => setLancheModalVisible(true)}>
              <Ionicons name="add-circle" size={20} color={COLORS.buttonText} />
              <Text style={styles.addBtnText}>Novo Lanche</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={lanches}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <View style={styles.cardItem}>
                <View style={styles.cardLeft}>
                  <Ionicons name="fast-food-outline" size={24} color={COLORS.success} style={{ marginRight: 10 }} />
                  <View style={{ flex: 1 }}>
                    <Text style={styles.cardItemTitle}>{item.nome}</Text>
                    <Text style={styles.cardItemSubtitle} numberOfLines={1}>{item.descricao}</Text>
                    <Text style={[styles.cardItemSubtitle, { color: COLORS.success, fontWeight: 'bold', marginTop: 2 }]}>R$ {item.preco.toFixed(2)}</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => handleDeleteLanche(item.id, item.nome)}>
                  <Ionicons name="trash-outline" size={22} color={COLORS.danger} />
                </TouchableOpacity>
              </View>
            )}
            ListEmptyComponent={
              <Text style={styles.emptyText}>Nenhum lanche encontrado.</Text>
            }
          />
        </View>
      )}

      {/* --- MOVIE FORM MODAL --- */}
      <Modal visible={movieModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderTitle}>Cadastrar Novo Filme</Text>
              <TouchableOpacity onPress={() => setMovieModalVisible(false)}>
                <Ionicons name="close" size={24} color={COLORS.text} />
              </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.formContainer}>
              <Text style={styles.inputLabel}>Título do Filme *</Text>
              <TextInput
                style={styles.input}
                value={movieForm.titulo}
                onChangeText={(text) => setMovieForm({ ...movieForm, titulo: text })}
                placeholder="Ex: Matrix"
                placeholderTextColor={COLORS.textMuted}
              />

              <Text style={styles.inputLabel}>Sinopse *</Text>
              <TextInput
                style={[styles.input, { height: 80 }]}
                value={movieForm.sinopse}
                onChangeText={(text) => setMovieForm({ ...movieForm, sinopse: text })}
                placeholder="Escreva a sinopse..."
                placeholderTextColor={COLORS.textMuted}
                multiline
              />

              <Text style={styles.inputLabel}>Gênero *</Text>
              <TouchableOpacity
                style={styles.selectorTrigger}
                onPress={() => setGenreSelectVisible(true)}
              >
                <Text style={styles.selectorTriggerText}>
                  {movieForm.genero ? genres.find(g => g.value === movieForm.genero)?.label : 'Selecionar Gênero'}
                </Text>
                <Ionicons name="chevron-down" size={20} color={COLORS.textSecondary} />
              </TouchableOpacity>

              <Text style={styles.inputLabel}>Classificação Indicativa *</Text>
              <TextInput
                style={styles.input}
                value={movieForm.classificacao}
                onChangeText={(text) => setMovieForm({ ...movieForm, classificacao: text })}
                placeholder="Ex: Livre, 14, 16, 18"
                placeholderTextColor={COLORS.textMuted}
              />

              <Text style={styles.inputLabel}>Duração (minutos) *</Text>
              <TextInput
                style={styles.input}
                value={movieForm.duracao}
                onChangeText={(text) => setMovieForm({ ...movieForm, duracao: text })}
                placeholder="Ex: 120"
                keyboardType="numeric"
                placeholderTextColor={COLORS.textMuted}
              />

              <Text style={styles.inputLabel}>Elenco *</Text>
              <TextInput
                style={styles.input}
                value={movieForm.elenco}
                onChangeText={(text) => setMovieForm({ ...movieForm, elenco: text })}
                placeholder="Ex: Keanu Reeves, Laurence Fishburne"
                placeholderTextColor={COLORS.textMuted}
              />

              <Text style={styles.inputLabel}>URL do Poster (Opcional)</Text>
              <TextInput
                style={styles.input}
                value={movieForm.imagemUrl}
                onChangeText={(text) => setMovieForm({ ...movieForm, imagemUrl: text })}
                placeholder="Ex: https://link.com/foto.jpg"
                placeholderTextColor={COLORS.textMuted}
              />

              <Text style={styles.inputLabel}>Início da Exibição * (AAAA-MM-DD)</Text>
              <TextInput
                style={styles.input}
                value={movieForm.dataIniciaExibicao}
                onChangeText={(text) => setMovieForm({ ...movieForm, dataIniciaExibicao: text })}
                placeholder="Ex: 2026-06-01"
                placeholderTextColor={COLORS.textMuted}
              />

              <Text style={styles.inputLabel}>Fim da Exibição * (AAAA-MM-DD)</Text>
              <TextInput
                style={styles.input}
                value={movieForm.dataFinalExibicao}
                onChangeText={(text) => setMovieForm({ ...movieForm, dataFinalExibicao: text })}
                placeholder="Ex: 2026-06-30"
                placeholderTextColor={COLORS.textMuted}
              />

              <TouchableOpacity style={styles.submitBtn} onPress={handleCreateMovie}>
                <Text style={styles.submitBtnText}>Salvar Filme</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* --- ROOM FORM MODAL --- */}
      <Modal visible={roomModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderTitle}>Cadastrar Nova Sala</Text>
              <TouchableOpacity onPress={() => setRoomModalVisible(false)}>
                <Ionicons name="close" size={24} color={COLORS.text} />
              </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.formContainer}>
              <Text style={styles.inputLabel}>Número da Sala *</Text>
              <TextInput
                style={styles.input}
                value={roomForm.numero}
                onChangeText={(text) => setRoomForm({ ...roomForm, numero: text })}
                placeholder="Ex: 1"
                keyboardType="numeric"
                placeholderTextColor={COLORS.textMuted}
              />

              <Text style={styles.inputLabel}>Capacidade (Assentos) *</Text>
              <TextInput
                style={styles.input}
                value={roomForm.capacidade}
                onChangeText={(text) => setRoomForm({ ...roomForm, capacidade: text })}
                placeholder="Ex: 80"
                keyboardType="numeric"
                placeholderTextColor={COLORS.textMuted}
              />

              <Text style={styles.inputLabel}>Número de Fileiras</Text>
              <TextInput
                style={styles.input}
                value={roomForm.fileiras}
                onChangeText={(text) => setRoomForm({ ...roomForm, fileiras: text })}
                placeholder="Ex: 8"
                keyboardType="numeric"
                placeholderTextColor={COLORS.textMuted}
              />

              <Text style={styles.inputLabel}>Número de Colunas</Text>
              <TextInput
                style={styles.input}
                value={roomForm.colunas}
                onChangeText={(text) => setRoomForm({ ...roomForm, colunas: text })}
                placeholder="Ex: 10"
                keyboardType="numeric"
                placeholderTextColor={COLORS.textMuted}
              />

              <TouchableOpacity style={styles.submitBtn} onPress={handleCreateRoom}>
                <Text style={styles.submitBtnText}>Salvar Sala</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* --- SESSION FORM MODAL --- */}
      <Modal visible={sessionModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderTitle}>Cadastrar Nova Sessão</Text>
              <TouchableOpacity onPress={() => setSessionModalVisible(false)}>
                <Ionicons name="close" size={24} color={COLORS.text} />
              </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.formContainer}>
              <Text style={styles.inputLabel}>Filme *</Text>
              <TouchableOpacity
                style={styles.selectorTrigger}
                onPress={() => setMovieSelectVisible(true)}
              >
                <Text style={styles.selectorTriggerText}>{sessionForm.filmeTitle}</Text>
                <Ionicons name="chevron-down" size={20} color={COLORS.textSecondary} />
              </TouchableOpacity>

              <Text style={styles.inputLabel}>Sala *</Text>
              <TouchableOpacity
                style={styles.selectorTrigger}
                onPress={() => setRoomSelectVisible(true)}
              >
                <Text style={styles.selectorTriggerText}>{sessionForm.salaNumero}</Text>
                <Ionicons name="chevron-down" size={20} color={COLORS.textSecondary} />
              </TouchableOpacity>

              <Text style={styles.inputLabel}>Horário de Exibição * (AAAA-MM-DDTHH:MM)</Text>
              <TextInput
                style={styles.input}
                value={sessionForm.horarioExibicao}
                onChangeText={(text) => setSessionForm({ ...sessionForm, horarioExibicao: text })}
                placeholder="Ex: 2026-06-05T20:00"
                placeholderTextColor={COLORS.textMuted}
              />

              <Text style={styles.inputLabel}>Preço do Ingresso Inteiro (R$) *</Text>
              <TextInput
                style={styles.input}
                value={sessionForm.precoInteira}
                onChangeText={(text) => setSessionForm({ ...sessionForm, precoInteira: text })}
                placeholder="Ex: 30.00"
                keyboardType="numeric"
                placeholderTextColor={COLORS.textMuted}
              />

              <TouchableOpacity style={styles.submitBtn} onPress={handleCreateSession}>
                <Text style={styles.submitBtnText}>Salvar Sessão</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* --- LANCHE FORM MODAL --- */}
      <Modal visible={lancheModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderTitle}>Cadastrar Novo Lanche</Text>
              <TouchableOpacity onPress={() => setLancheModalVisible(false)}>
                <Ionicons name="close" size={24} color={COLORS.text} />
              </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.formContainer}>
              <Text style={styles.inputLabel}>Nome do Lanche *</Text>
              <TextInput
                style={styles.input}
                value={lancheForm.nome}
                onChangeText={(text) => setLancheForm({ ...lancheForm, nome: text })}
                placeholder="Ex: Combo Pipoca Grande"
                placeholderTextColor={COLORS.textMuted}
              />

              <Text style={styles.inputLabel}>Descrição *</Text>
              <TextInput
                style={[styles.input, { height: 80 }]}
                value={lancheForm.descricao}
                onChangeText={(text) => setLancheForm({ ...lancheForm, descricao: text })}
                placeholder="Ex: Pipoca salgada + Refrigerante de 700ml"
                placeholderTextColor={COLORS.textMuted}
                multiline
              />

              <Text style={styles.inputLabel}>Preço (R$) *</Text>
              <TextInput
                style={styles.input}
                value={lancheForm.preco}
                onChangeText={(text) => setLancheForm({ ...lancheForm, preco: text })}
                placeholder="Ex: 28.00"
                keyboardType="numeric"
                placeholderTextColor={COLORS.textMuted}
              />

              <Text style={styles.inputLabel}>URL da Imagem (Opcional)</Text>
              <TextInput
                style={styles.input}
                value={lancheForm.imagemUrl}
                onChangeText={(text) => setLancheForm({ ...lancheForm, imagemUrl: text })}
                placeholder="Ex: https://link.com/imagem.jpg"
                placeholderTextColor={COLORS.textMuted}
              />

              <TouchableOpacity style={styles.submitBtn} onPress={handleCreateLanche}>
                <Text style={styles.submitBtnText}>Salvar Lanche</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* --- CUSTOM SELECTOR MODAL: GENRES --- */}
      <Modal visible={genreSelectVisible} transparent animationType="fade">
        <View style={styles.selectorOverlay}>
          <View style={styles.selectorContent}>
            <Text style={styles.selectorTitle}>Selecione o Gênero</Text>
            <FlatList
              data={genres}
              keyExtractor={(i) => i.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.selectorItem}
                  onPress={() => {
                    setMovieForm({ ...movieForm, genero: item.value });
                    setGenreSelectVisible(false);
                  }}
                >
                  <Text style={styles.selectorItemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.selectorCloseBtn} onPress={() => setGenreSelectVisible(false)}>
              <Text style={styles.selectorCloseText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* --- CUSTOM SELECTOR MODAL: MOVIES --- */}
      <Modal visible={movieSelectVisible} transparent animationType="fade">
        <View style={styles.selectorOverlay}>
          <View style={styles.selectorContent}>
            <Text style={styles.selectorTitle}>Selecione o Filme</Text>
            <FlatList
              data={movies}
              keyExtractor={(i) => i.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.selectorItem}
                  onPress={() => {
                    setSessionForm({ ...sessionForm, filmeId: item.id, filmeTitle: item.titulo });
                    setMovieSelectVisible(false);
                  }}
                >
                  <Text style={styles.selectorItemText}>{item.titulo}</Text>
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                <Text style={{ padding: 15, textAlign: 'center', color: COLORS.textMuted }}>Nenhum filme cadastrado.</Text>
              }
            />
            <TouchableOpacity style={styles.selectorCloseBtn} onPress={() => setMovieSelectVisible(false)}>
              <Text style={styles.selectorCloseText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* --- CUSTOM SELECTOR MODAL: ROOMS --- */}
      <Modal visible={roomSelectVisible} transparent animationType="fade">
        <View style={styles.selectorOverlay}>
          <View style={styles.selectorContent}>
            <Text style={styles.selectorTitle}>Selecione a Sala</Text>
            <FlatList
              data={rooms}
              keyExtractor={(i) => i.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.selectorItem}
                  onPress={() => {
                    setSessionForm({ ...sessionForm, salaId: item.id, salaNumero: `Sala ${item.numero || item.id}` });
                    setRoomSelectVisible(false);
                  }}
                >
                  <Text style={styles.selectorItemText}>Sala {item.numero || item.id} ({item.capacidade} assentos)</Text>
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                <Text style={{ padding: 15, textAlign: 'center', color: COLORS.textMuted }}>Nenhuma sala cadastrada.</Text>
              }
            />
            <TouchableOpacity style={styles.selectorCloseBtn} onPress={() => setRoomSelectVisible(false)}>
              <Text style={styles.selectorCloseText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    backgroundColor: COLORS.card,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.cardSecondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reloadBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  tabButton: {
    flex: 1,
    paddingVertical: SPACING.md,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabButtonActive: {
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
  tabTextActive: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  tabContent: {
    flex: 1,
    padding: SPACING.lg,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  listTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.md,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.md,
  },
  addBtnText: {
    color: COLORS.buttonText,
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 4,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    paddingBottom: 40,
  },
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  cardItemTitle: {
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: 15,
  },
  cardItemSubtitle: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
  emptyText: {
    textAlign: 'center',
    color: COLORS.textMuted,
    marginTop: 40,
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.background,
    borderTopLeftRadius: BORDER_RADIUS.xl,
    borderTopRightRadius: BORDER_RADIUS.xl,
    height: '90%',
    padding: SPACING.lg,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    paddingBottom: SPACING.md,
    marginBottom: SPACING.md,
  },
  modalHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  formContainer: {
    paddingBottom: 60,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
    marginTop: SPACING.md,
    marginBottom: 6,
  },
  input: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    height: 46,
    color: COLORS.text,
    fontSize: 14,
  },
  selectorTrigger: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    height: 46,
  },
  selectorTriggerText: {
    color: COLORS.text,
    fontSize: 14,
  },
  submitBtn: {
    backgroundColor: COLORS.success,
    borderRadius: BORDER_RADIUS.md,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.xl,
  },
  submitBtnText: {
    color: COLORS.buttonText,
    fontWeight: 'bold',
    fontSize: 16,
  },
  selectorOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
  },
  selectorContent: {
    backgroundColor: COLORS.card,
    width: '100%',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    maxHeight: '70%',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  selectorTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  selectorItem: {
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  selectorItemText: {
    fontSize: 14,
    color: COLORS.text,
  },
  selectorCloseBtn: {
    marginTop: SPACING.md,
    paddingVertical: SPACING.sm,
    alignItems: 'center',
    backgroundColor: COLORS.cardSecondary,
    borderRadius: BORDER_RADIUS.md,
  },
  selectorCloseText: {
    color: COLORS.textSecondary,
    fontWeight: 'bold',
  },
});
