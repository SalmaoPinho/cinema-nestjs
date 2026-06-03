import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from './src/styles/theme';
import { AuthService } from './src/services/authService';
import { SyncService } from './src/services/syncService';

// Import Screens
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import MovieListScreen from './src/screens/MovieListScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen';
import SeatSelectionScreen from './src/screens/SeatSelectionScreen';
import SnackSelectionScreen from './src/screens/SnackSelectionScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import TicketScreen from './src/screens/TicketScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import AdminScreen from './src/screens/AdminScreen';

interface NavigationState {
  screen: string;
  params?: any;
}

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<string>('LOGIN');
  const [screenParams, setScreenParams] = useState<any>({});
  const [navigationHistory, setNavigationHistory] = useState<NavigationState[]>([]);

  // 1. Inicialização e sincronização em segundo plano no boot
  useEffect(() => {
    const initApp = async () => {
      try {
        const authed = await AuthService.isAuthenticated();
        setIsAuthenticated(authed);
        
        if (authed) {
          setCurrentScreen('MOVIE_LIST');
          // Sincroniza em segundo plano ao abrir se estiver logado e online
          setTimeout(async () => {
            const online = await SyncService.isOnline();
            if (online) {
              console.log('🔄 Sincronizando dados offline em segundo plano...');
              await SyncService.syncOfflineQueue();
              await SyncService.pullServerOrders();
            }
          }, 1000);
        } else {
          setCurrentScreen('LOGIN');
        }
      } catch (e) {
        console.error('Erro na inicialização do aplicativo', e);
      } finally {
        setInitializing(false);
      }
    };
    initApp();
  }, []);

  // 2. Navegador customizado e livre de bugs nativos
  const navigateTo = (screen: string, params: any = {}) => {
    // Adiciona tela atual no histórico antes de ir para a próxima
    setNavigationHistory((prev) => [...prev, { screen: currentScreen, params: screenParams }]);
    setCurrentScreen(screen);
    setScreenParams(params);
  };

  const goBack = () => {
    if (navigationHistory.length === 0) return;
    
    const prevHistory = [...navigationHistory];
    const prevScreenState = prevHistory.pop(); // Remove o último do histórico
    
    setNavigationHistory(prevHistory);
    if (prevScreenState) {
      setCurrentScreen(prevScreenState.screen);
      setScreenParams(prevScreenState.params || {});
    }
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setNavigationHistory([]);
    setCurrentScreen('MOVIE_LIST');
    setScreenParams({});
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setNavigationHistory([]);
    setCurrentScreen('LOGIN');
    setScreenParams({});
  };

  if (initializing) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Iniciando CineWeb...</Text>
      </View>
    );
  }

  // Roteador dinâmico de telas
  const renderScreen = () => {
    switch (currentScreen) {
      case 'LOGIN':
        return <LoginScreen onLoginSuccess={handleLoginSuccess} navigateTo={navigateTo} />;
      case 'REGISTER':
        return <RegisterScreen onRegisterSuccess={handleLoginSuccess} navigateTo={navigateTo} />;
      case 'FORGOT_PASSWORD':
        return <ForgotPasswordScreen navigateTo={navigateTo} />;
      case 'MOVIE_LIST':
        return <MovieListScreen onLogout={handleLogout} navigateTo={navigateTo} />;
      case 'MOVIE_DETAIL':
        return <MovieDetailScreen params={screenParams} goBack={goBack} navigateTo={navigateTo} />;
      case 'SEAT_SELECTION':
        return <SeatSelectionScreen params={screenParams} goBack={goBack} navigateTo={navigateTo} />;
      case 'SNACK_SELECTION':
        return <SnackSelectionScreen params={screenParams} goBack={goBack} navigateTo={navigateTo} />;
      case 'PAYMENT':
        return <PaymentScreen params={screenParams} goBack={goBack} navigateTo={navigateTo} />;
      case 'TICKET':
        return <TicketScreen params={screenParams} navigateTo={navigateTo} />;
      case 'HISTORY':
        return <HistoryScreen goBack={goBack} navigateTo={navigateTo} />;
      case 'ADMIN':
        return <AdminScreen goBack={goBack} navigateTo={navigateTo} />;
      default:
        return <LoginScreen onLoginSuccess={handleLoginSuccess} navigateTo={navigateTo} />;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {renderScreen()}
    </View>
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
  },
  loadingText: {
    color: COLORS.textSecondary,
    fontSize: 14,
    marginTop: 12,
  },
});
