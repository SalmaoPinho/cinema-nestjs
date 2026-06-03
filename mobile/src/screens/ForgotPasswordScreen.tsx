import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, BORDER_RADIUS, SPACING } from '../styles/theme';
import { AuthService } from '../services/authService';

interface ForgotPasswordScreenProps {
  navigateTo: (screen: string) => void;
}

export default function ForgotPasswordScreen({ navigateTo }: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [recoveredData, setRecoveredData] = useState<{ message: string; tempPassword?: string } | null>(null);

  const handleRecovery = async () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, informe seu e-mail.');
      return;
    }

    setLoading(true);
    try {
      const res = await AuthService.recoverPassword(email.trim());
      setRecoveredData(res);
    } catch (error: any) {
      Alert.alert('Falha na Recuperação', error.message || 'E-mail não cadastrado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigateTo('LOGIN')}
          >
            <Ionicons name="arrow-back-outline" size={24} color={COLORS.primary} />
          </TouchableOpacity>
          <View style={styles.iconCircle}>
            <Ionicons name="key-outline" size={40} color={COLORS.primary} />
          </View>
          <Text style={styles.title}>Recuperar Senha</Text>
          <Text style={styles.subtitle}>Insira seu e-mail para recuperar o acesso à sua conta</Text>
        </View>

        {/* Success Details Box */}
        {recoveredData ? (
          <View style={styles.successCard}>
            <View style={styles.successIconHeader}>
              <Ionicons name="checkmark-circle" size={48} color={COLORS.success} />
            </View>
            <Text style={styles.successTitle}>Senha Redefinida!</Text>
            <Text style={styles.successMessage}>
              {recoveredData.message}
            </Text>

            {recoveredData.tempPassword && (
              <View style={styles.passwordBox}>
                <Text style={styles.passwordLabel}>SENHA TEMPORÁRIA DE TESTE:</Text>
                <Text style={styles.passwordValue}>{recoveredData.tempPassword}</Text>
              </View>
            )}

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigateTo('LOGIN')}
            >
              <Text style={styles.loginButtonText}>Ir para o Login</Text>
            </TouchableOpacity>
          </View>
        ) : (
          /* Form Card */
          <View style={styles.formCard}>
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color={COLORS.textSecondary} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Seu E-mail Cadastrado"
                placeholderTextColor={COLORS.textMuted}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              style={styles.button}
              onPress={handleRecovery}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color={COLORS.buttonText} />
              ) : (
                <>
                  <Text style={styles.buttonText}>Recuperar Senha</Text>
                  <Ionicons name="send-outline" size={18} color={COLORS.buttonText} style={{ marginLeft: 8 }} />
                </>
              )}
            </TouchableOpacity>
          </View>
        )}

        {/* Footer Link */}
        {!recoveredData && (
          <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigateTo('LOGIN')}>
              <Text style={styles.loginText}>Voltar para o Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: SPACING.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: SPACING.lg,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.card,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(0, 210, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: 'rgba(0, 210, 255, 0.2)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: SPACING.xs,
  },
  formCard: {
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardSecondary,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  inputIcon: {
    marginRight: SPACING.sm,
  },
  input: {
    flex: 1,
    color: COLORS.text,
    fontSize: 16,
  },
  button: {
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
  },
  buttonText: {
    color: COLORS.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  successCard: {
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },
  successIconHeader: {
    marginBottom: SPACING.md,
  },
  successTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  successMessage: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: SPACING.lg,
  },
  passwordBox: {
    backgroundColor: COLORS.cardSecondary,
    borderWidth: 1,
    borderColor: COLORS.success,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    width: '100%',
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  passwordLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  passwordValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.success,
    letterSpacing: 2,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.md,
    height: 52,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: COLORS.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginTop: SPACING.xl,
  },
  loginText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
