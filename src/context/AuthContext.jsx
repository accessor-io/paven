import { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '../components/common/Toast/ToastContainer';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToast();

  useEffect(() => {
    // Check for existing session
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      // Replace with your auth check
      const session = localStorage.getItem('session');
      if (session) {
        setUser(JSON.parse(session));
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      // Replace with your login API call
      const response = await loginAPI(credentials);
      setUser(response.user);
      localStorage.setItem('session', JSON.stringify(response.user));
      addToast('Successfully logged in!', 'success');
    } catch (error) {
      addToast(error.message, 'error');
      throw error;
    }
  };

  const logout = async () => {
    try {
      // Replace with your logout API call
      await logoutAPI();
      setUser(null);
      localStorage.removeItem('session');
      addToast('Successfully logged out', 'success');
    } catch (error) {
      addToast(error.message, 'error');
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 