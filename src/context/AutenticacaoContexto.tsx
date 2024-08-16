import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string, navigateTo: (path: string) => void) => Promise<void>;
  register: (email: string, password: string, navigateTo: (path: string) => void) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => !!localStorage.getItem("isAuthenticated")
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string, navigateTo: (path: string) => void) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");

      if (email === "webtests8484@gmail.com" && password === "admin1234") {
        navigateTo("/admin");
      } else {
        navigateTo("/user");
      }
    } catch (error) {
      throw new Error("Erro ao fazer login");
    }
  };

  const register = async (email: string, password: string, navigateTo: (path: string) => void) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      navigateTo("/user"); // Redireciona para a página de usuário após o registro
    } catch (error) {
      throw new Error("Erro ao registrar");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      localStorage.removeItem("isAuthenticated");
    } catch (error) {
      console.error("Erro ao fazer logout", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
