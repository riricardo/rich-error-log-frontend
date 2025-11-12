import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextValue";

const Header = () => {
  const { logout } = useAuth();

  return (
    <header className="navbar shadow-sm bg-base-300">
      <div className="flex-1">
        <Link to="/home/dashboard" style={{ marginRight: 10 }}>
          Dashboard
        </Link>
        <Link to="/home/tenant">Tenants</Link>
      </div>
      <div className="flex-none">
        <button className="cursor-pointer" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
