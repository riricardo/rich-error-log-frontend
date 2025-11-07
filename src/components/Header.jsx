import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar shadow-sm bg-base-300">
      <div className="flex-1">
        <Link to="/home/dashboard" style={{ marginRight: 10 }}>
          Dashboard
        </Link>
        <Link to="/home/tenant">Tenants</Link>
      </div>
      <div className="flex-none">
        <button>Logout</button>
      </div>
    </header>
  );
};

export default Header;
