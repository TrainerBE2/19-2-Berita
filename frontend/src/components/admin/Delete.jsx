import React, { useState, useEffect } from "eact";
import axios from "axios";

function Delete({ match }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .delete(`/api/data/${match.params.id}`)
      .then((response) => {
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [match.params.id]);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4">
        <h2 className="text-lg font-bold mb-4">Delete {match.params.id}</h2>
        {loading ? <p>Loading...</p> : <p>Data deleted successfully!</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default Delete;
