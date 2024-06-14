// Login.js
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex items-center min-h-screen bg-gray-100">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Login to your account
          </h2>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none bg-gray-200 border border-gray-200 rounded-md w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none bg-gray-200 border border-gray-200 rounded-md w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:shadow-outline-purple"
              >
                Login
              </button>
              <a
                href="#"
                className="inline-block align-baseline font-semibold text-sm text-purple-500 hover:text-purple-800"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
