// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(https://5.imimg.com/data5/SELLER/Default/2021/4/DI/SO/RQ/76564747/pos-system-for-cafe-500x500.jpg)' }} // Update to your desired background image
    >
      <div className="absolute inset-0 bg-white opacity-10"></div> {/* Background overlay */}
      
      <div className="flex justify-between items-center h-full p-8">
        {/* Left Side - Visual Elements */}
        <div className="hidden md:flex flex-col items-start space-y-4">
          <img src="/path-to-logo.png" alt="Company Logo" className="w-32 mb-4" /> {/* Update your logo */}
          <h1 className="text-4xl font-bold text-gray-800">InvenroSolution ERP</h1>
          <p className="text-xl text-gray-700">Sell anywhere</p>

          {/* Feature Icons */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <img src="/path-to-icon1.png" alt="Feature Icon" className="w-10 h-10 mr-3" />
              <p className="text-gray-600">Inventory Management</p>
            </div>
            <div className="flex items-center">
              <img src="/path-to-icon2.png" alt="Feature Icon" className="w-10 h-10 mr-3" />
              <p className="text-gray-600">Sales Reports</p>
            </div>
            {/* Add more icons as needed */}
          </div>
        </div>

        {/* Login Form */}
        <div className="relative z-10 bg-white bg-opacity-95 p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>
          <p className="text-center text-gray-600 mb-6">Login to your dashboard with your username and password.</p>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
                placeholder="Username"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="staySignedIn"
                  className="mr-2"
                />
                <label htmlFor="staySignedIn" className="text-gray-700">Stay Signed In</label>
              </div>
              <Link to="/forgot" className="text-sm text-orange-500 hover:underline">Forgot Password?</Link>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Log In
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Don t have an account? <Link to="/register" className="text-orange-500 hover:underline">Register Now!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
