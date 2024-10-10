// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Pos from "../assets/Images/best-point-of-sale-pos-software-1.png";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // For the eye icon

const AdminRegister = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // State for form fields
  const [businessType, setBusinessType] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // Function to handle form submission
  const Register = async (e) => {
    e.preventDefault();

    const requestData = {
      selectBusinessType: businessType,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };

    try {
      // Making POST request to the backend API
      const response = await axios.post(
        "http://localhost:8000/api/admin/Signup",
        requestData
      );
      console.log("Registration successful:", response.data);
      // Handle success response, redirect or show a success message
      // Navigate to the login page after successful registration
      navigate("/");
    } catch (error) {
      console.log(error);

      // Handle error response, show error message
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side */}
      <div className="flex-1 bg-blue-600 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">
          Effortless POS Billing with Advanced ERP Solutions.
        </h1>

        {/* Image / Illustration */}
        <div className="mt-8">
          <img src={Pos} alt="Illustration" />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Sign up</h2>
          <form onSubmit={Register}>
            {/* Business Type Select Dropdown */}
            <div className="mb-4">
              <select
                className="w-full p-3 border border-gray-300 rounded"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Business Type
                </option>
                <optgroup label="Restaurant">
                  <option>Restaurant</option>
                  <option>Cloud kitchen</option>
                  <option>Cafe</option>
                  <option>Supermarket </option>
                  <option>Retail</option>
                  <option>Other</option>
                </optgroup>
               
              </select>
            </div>

             {/* Mobile Number with Country Code and Flag */}
             <div className="mb-4">
              <PhoneInput
                country={"us"}
                enableSearch={true}
                placeholder="Your mobile number"
                inputStyle={{
                  width: "100%", // Full width
                  height: "50px", // Custom height
                  borderRadius: "8px",
                }}
                containerStyle={{
                  width: "100%", // Ensure the container is full width
                }}
                value={phoneNumber}
                onChange={(value) => setPhoneNumber(value)}
                required
              />
            </div>
            {/* Password Field */}

            {/* Email Address Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

           
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                className="absolute inset-y-0 right-0 pr-1 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <div className="bg-blue-500 p-2 rounded-md">
                  {showPassword ? (
                    <AiFillEyeInvisible className="text-white text-lg" />
                  ) : (
                    <AiFillEye className="text-white text-lg" />
                  )}
                </div>
              </div>
            </div>

            <div className="mb-6 text-sm text-gray-500">
              You are agreeing to the Terms of Service and Privacy Policy.
            </div>

            {/* Submit Button */}
            <button className="w-full bg-blue-600 text-white py-3 rounded font-bold">
              Get Started
            </button>
          </form>

          <Link to="/">
            <div className="mt-6 text-center text-sm">
              Already a member?{" "}
              <a href="/sign-in" className="text-blue-600 font-bold">
                Sign in
              </a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
