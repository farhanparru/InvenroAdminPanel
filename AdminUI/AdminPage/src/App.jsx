// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './MainPages/Sidebar';
import Navbar from './MainPages/Navabar';
import AdminLogin from './MainPages/AdminLogin';

// eslint-disable-next-line react/prop-types
const AppLayout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/'; // Check if current route is login

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Render Navbar and Sidebar only if it's NOT the login page */}
      {!isLoginPage && <Navbar OpenSidebar={OpenSidebar} />}
      <div className="flex flex-grow">
        {!isLoginPage && (
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        )}
        <div className={`flex-grow p-7 ${isLoginPage ? '' : 'ml-64'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          {/* Add other routes here */}
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
