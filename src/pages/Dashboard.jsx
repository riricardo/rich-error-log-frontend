import { useState, useEffect } from "react";
import api from "../services/apiService";

const Dashboard = () => {
  const [errors, setErrors] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedTenant, setSelectedTenant] = useState("");

  useEffect(() => {
    initFetch();
  }, []);

  async function initFetch() {
    const res = await api.get("/tenant");
    setTenants(res.data);

    await fetchErrors();
  }

  async function fetchErrors(tenantId, newPage) {
    const tenant_id = tenantId;
    const res = await api.get("/error", {
      params: { tenant_id, page: newPage, limit: 10 },
    });
    setErrors(res.data.data);
    setTotalPages(res.data.totalPages);
  }

  function getApplicationName(tenantId) {
    const tenant = tenants.find((t) => t.id === tenantId);
    return tenant ? tenant.name : "Unknown";
  }

  function getNextPage() {
    const newPage = page + 1;
    setPage(newPage);
    fetchErrors(selectedTenant, newPage);
  }

  function getPreviousPage() {
    const newPage = Math.max(page - 1, 1);
    setPage(newPage);
    fetchErrors(selectedTenant, newPage);
  }

  async function selectTenantChanged(e) {
    const tenantId = e.target.value;
    setSelectedTenant(tenantId);

    setPage(1);
    await fetchErrors(tenantId, 1);
  }

  return (
    <>
      <select
        value={selectedTenant}
        onChange={selectTenantChanged}
        className="select m-3"
      >
        <option value="">All</option>
        {tenants.map((tenant) => (
          <option key={tenant.id} value={tenant.id}>
            {tenant.name}
          </option>
        ))}
      </select>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Application</th>
              <th>Title</th>
              <th>Error</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>
            {errors.map((error) => (
              <tr key={error.id}>
                <td>{getApplicationName(error.tenantId)}</td>
                <td>{error.title}</td>
                <td>{error.message}</td>
                <td>{new Date(error.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="join flex justify-center m-3">
        <button
          className={`join-item btn ${page == 1 && "btn-disabled"}`}
          onClick={getPreviousPage}
        >
          «
        </button>
        <button className="join-item btn">Page {page}</button>
        <button
          className={`join-item btn ${
            (page == totalPages || totalPages == 0) && "btn-disabled"
          }`}
          onClick={getNextPage}
        >
          »
        </button>
      </div>
    </>
  );
};
export default Dashboard;
