import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/data", { name, email })
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
        <h2 className="text-lg font-bold mb-4">Create New</h2>
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
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
