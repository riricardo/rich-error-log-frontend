import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContextValue";
import api from "../services/apiService";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setUser({ token });
    }
  }, []);

  async function login(userName, password) {
    const res = await api.post("/user/login", { userName, password });
    const { token } = res.data;

    sessionStorage.setItem("token", token);
    setUser({ token });
  }

  function logout() {
    sessionStorage.removeItem("token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
