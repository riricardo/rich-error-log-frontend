import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card bg-base-100 card-sm shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <input type="text" placeholder="Username" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
