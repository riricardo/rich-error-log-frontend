import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextValue";

function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(userName, password);
      navigate("/home/dashboard");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleLogin}>
        <div className="card bg-base-100 card-sm shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Login</h2>
            <input
              type="text"
              placeholder="Username"
              className="input"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="justify-end card-actions">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
