// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BsPersonCircle, BsJustify } from 'react-icons/bs';
import logo from '../assets/Images/Logo.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Headr({ OpenSidebar }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/admin/Logout'); // Replace with your actual endpoint
      console.log(response,"kk");
      
      if (response.data.success) {
        navigate('/') // login page

        localStorage.removeItem('adminToken');

        
        console.log("Logged out successfully");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div className="flex items-center space-x-4">
        <BsJustify className="text-2xl cursor-pointer" onClick={OpenSidebar} />
        {/* Add company logo here */}
        <img
          src={logo} // Replace with actual logo path
          alt="Company Logo"
          className="h-11 w-11" // Adjust height and width as needed
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
        <BsPersonCircle className="text-4xl cursor-pointer" onClick={toggleDropdown} />

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
             
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Headr;
