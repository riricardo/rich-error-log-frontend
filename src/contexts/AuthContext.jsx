import { AuthContext } from "./AuthContextValue";
import api from "../services/apiService";

export default function AuthProvider({ children }) {
  function isLoggedIn() {
    return !!sessionStorage.getItem("token");
  }

  async function login(userName, password) {
    const res = await api.post("/user/login", { userName, password });
    const { token } = res.data;

    sessionStorage.setItem("token", token);
  }

  function logout() {
    sessionStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
