// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminForgotpass = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your API call to send the password reset link here
    console.log('Sending reset link to:', email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Password Reset</h2>
        <p className="text-center mb-6 text-gray-600">
          To reset your password, enter the email address you use to sign in.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:border-green-400"
            placeholder="E-mail Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600 transition"
          >
            Send Reset Link
          </button>
        </form>
        <div className="text-center mt-6">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminForgotpass;
