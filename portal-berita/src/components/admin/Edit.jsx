import React, { useState, useEffect } from "react";
import axios from "axios";

function Edit({ match }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/data/${match.params.id}`)
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [match.params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/api/data/${match.params.id}`, { name, email })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4">
        <h2 className="text-lg font-bold mb-4">Edit {match.params.id}</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label className="block mb-2">
              Name:
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full p-2 pl-10 text-sm text-gray-700"
              />
            </label>
            <label className="block mb-2">
              Email:
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full p-2 pl-10 text-sm text-gray-700"
              />
            </label>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update
            </button>
          </form>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default Edit;
