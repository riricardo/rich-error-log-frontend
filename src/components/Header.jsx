import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ padding: 10, background: "#eee", marginBottom: 20 }}>
      <Link to="/home/dashboard" style={{ marginRight: 10 }}>
        Dashboard
      </Link>
      <Link to="/home/key-list">Key List</Link>
      <button>Logout</button>
    </header>
  );
};

export default Header;
