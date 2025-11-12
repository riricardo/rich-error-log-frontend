import { useEffect } from "react";
import { useState } from "react";
import api from "../services/apiService";

const KeyList = () => {
  const [keys, setKeys] = useState([]);
  const [newKey, setNewKey] = useState("");

  useEffect(() => {
    fetchKeys();
  }, []);

  async function fetchKeys() {
    const res = await api.get("/tenant");
    setKeys(res.data);
  }

  async function handleAddKey(e) {
    e.preventDefault();

    if (newKey.trim() === "") {
      alert("Application name cannot be empty");
      return;
    }

    await api.post("/tenant", { name: newKey });
    setNewKey("");
    fetchKeys();
  }

  return (
    <>
      <form onSubmit={handleAddKey}>
        <div className="flex m-3 gap-3">
          <input
            type="text"
            placeholder="Application name"
            className="input"
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Application Name</th>
              <th>API Key</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>
            {keys.map((key) => (
              <tr key={key.id}>
                <td>{key.name}</td>
                <td>{key.apiKey}</td>
                <td>{new Date(key.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default KeyList;
