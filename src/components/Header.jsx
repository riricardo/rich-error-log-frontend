import { useAuth } from "../contexts/AuthContextValue";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { logout } = useAuth();

  return (
    <header className="navbar shadow-sm">
      <div className="flex-1 tabs">
        <NavLink
          className={({ isActive }) => (isActive ? "tab tab-active" : "tab")}
          to="/home/dashboard"
          style={{ marginRight: 10 }}
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "tab tab-active" : "tab")}
          to="/home/tenant"
        >
          Tenants
        </NavLink>
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
