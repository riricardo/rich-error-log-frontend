import { useEffect } from "react";
import api from "../services/apiService";

const KeyList = () => {
  useEffect(() => {
    fetchKeys();
  }, []);

  async function fetchKeys() {
    const res = await api.get("/tenant");

    console.log(res.data);
  }

  return (
    <>
      <div className="flex m-3 gap-3">
        <input type="text" placeholder="Application name" className="input" />
        <button className="btn btn-primary">Add</button>
      </div>
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
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default KeyList;
