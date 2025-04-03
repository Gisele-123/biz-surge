import { useState, useEffect } from "react";
import { login, signup, getCurrentUser } from "../services/auth";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check auth status on load
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    login: async (email, password) => {
      const success = await login(email, password);
      if (success) await checkAuth();
      return success;
    },
    signup: async (userData) => {
      const success = await signup(userData);
      if (success) await checkAuth();
      return success;
    }
  };
}