import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import KeyList from "./KeyList";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="key-list" element={<KeyList />} />
      </Routes>
    </div>
  );
};

export default Home;
