import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { authService } from '../../modules/auth/services/authService';
import { AuthUser } from '../../modules/auth/models/AuthTypes';

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: AuthUser, token: string) => void;
  logout: () => void;
  updateUser: (updatedUser: Partial<AuthUser>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const userData = await authService.getCurrentUser();
        setUser(userData);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        // Remove token inválido
        localStorage.removeItem('token');
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = (userData: AuthUser, token: string) => {
    // Salva o token antes de setar o estado
    localStorage.setItem('token', token);
    setUser(userData);
  };

  const logout = () => {
    authService.logout(); // garante remoção do token também
    setUser(null);
  };

  const updateUser = (updatedFields: Partial<AuthUser>) => {
    if (!user) return;
    setUser({ ...user, ...updatedFields });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
