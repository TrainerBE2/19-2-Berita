import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function DashboardAdmin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleCreate = () => {
    // handle create logic here
  };

  const handleEdit = (id) => {
    // handle edit logic here
  };

  const handleDelete = (id) => {
    // handle delete logic here
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-gray-200 p-4">
        <h2 className="text-lg font-bold mb-4">Dashboard Admin</h2>
        <ul>
          <li>
            <Link to="/create" className="text-blue-600 hover:text-blue-900">
              Create New
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-4/5 p-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.email}</td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default DashboardAdmin;
