import { createContext, useState, useEffect } from "react";
import { login } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (token) localStorage.setItem("token", token);
  }, [token]);

  const loginUser = async (credentials) => {
    const res = await login(credentials);
    setUser(res.data.user);
    setToken(res.data.token);
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
