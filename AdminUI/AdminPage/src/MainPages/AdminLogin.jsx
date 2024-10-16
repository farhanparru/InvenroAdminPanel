// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // For the eye icon
import { Link } from "react-router-dom";
import logo from "../assets/Images/Logo.png";
import accounts from "../assets/Images/icon account.png";
import report from "../assets/Images/reporr.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const requestData = {
      email: email,
      password: password,
    };

    try {
      // Making POST request to the backend API
      const response = await axios.post(
        "http://localhost:8000/api/admin/login",
        requestData
      );
      console.log("Login successful:", response.data);
      localStorage.setItem("adminToken", response.data.token);
      navigate("/home");
    } catch (error) {
      console.log(error);

      // Handle error response, show error message
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div
      className="flex items-center justify-end h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://www.techopedia.com/wp-content/uploads/2023/02/console-electronics-bakery-shop-confectionery-food-sweets-3.jpg')",
      }} // Path to your background image
    >
      {/* Left Content Section (Icons and Main Image) */}
      <div className="absolute left-0 top-0 h-full w-1/2 flex items-center justify-center p-8">
        <div className="flex flex-col items-center space-y-4">
          <img src={logo} alt="PosBytz Logo" className="h-48 mb-6" />
          <div className="flex space-x-4">
            <img src={accounts} alt="icon" className="h-16" />
            <img src={report} alt="icon" className="h-16" />
            {/* Add more icons as needed */}
          </div>
          <p className="text-lg text-gray-700 mt-4 text-center">
            Sell Anywhere with PosBytz ERP
          </p>
        </div>
      </div>

      {/* Right Login Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full m-8 mr-24">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="PosBytz Logo" className="h-12" />
        </div>

        {/* Welcome Back Text */}
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back!</h2>
        <p className="text-center text-gray-600 mb-4">
          Login to your dashboard with your username and password.
        </p>

        {/* Form */}
        <form className="space-y-4" onClick={handleLogin}>
          {/* Username Field */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="absolute inset-y-0 right-0 pr-1 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <div className="bg-orange-500 p-2 rounded-md">
                {showPassword ? (
                  <AiFillEyeInvisible className="text-white text-lg" />
                ) : (
                  <AiFillEye className="text-white text-lg" />
                )}
              </div>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link
              to="/forgotPass"
              className="text-sm text-orange-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Terms and Conditions */}
          <p className="text-sm text-gray-600 text-center mb-4">
            By clicking login, I accept the{" "}
            <Link to="/TermsConditon" className="text-orange-600 hover:underline">
              Terms & Conditions
            </Link>
            .
          </p>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Register Now */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don t have an account?{" "}
          <Link to="/AdminSignup" className="text-orange-600 hover:underline">
            Register Now!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
