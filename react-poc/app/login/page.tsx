/** @format */
"use client";

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if ((!email || !password) && !token) {
      setError("Please enter Email & Password OR a Token to login.");
      return;
    }

    if (token) {
      localStorage.setItem("token", token);
    }
    window.location.href = "/";
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-bold text-center mb-4'>Login</h2>

        {error && (
          <p className='text-red-500 text-sm mb-2 text-center'>{error}</p>
        )}

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block font-semibold'>Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block font-semibold'>Password</label>
            <input
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <p className='text-center text-gray-500 text-sm'>OR</p>

          <div>
            <label className='block font-semibold'>Token</label>
            <input
              type='text'
              placeholder='Enter your token'
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
