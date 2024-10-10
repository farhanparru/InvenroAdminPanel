// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './MainPages/Sidebar';
import Navbar from './MainPages/Navabar';
import AdminLogin from './MainPages/AdminLogin';
import AdminRegister from './MainPages/AdminRegister';
import AdminForgotpass from './MainPages/AdminForgotpass';
import FullWrapp from './MainPages/Home/FullWrapp';
import Odersale from './MainPages/Odersale';
import Item from './MainPages/Item';
import Customers from './MainPages/Customers';
import EmployeSection from './MainPages/Employe';
import AccountSettings from './MainPages/AccountSettings';
import Devices from './MainPages/SettingsNavbar/Devices';
import ResturentManagment from './MainPages/ResturentManagment';
import HomeTable from './MainPages/HomeTable';
import ProtectedRoute from './MainPages/ProtectedRoute';
import TaxItem from './MainPages/Headr/TaxItem';
import Categories from './MainPages/Headr/Categories';

// eslint-disable-next-line react/prop-types
const AppLayout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/'; // Check if current route is login
  const isSignupPage = location.pathname === '/AdminSignup'; // Check if current route is sign-up
  const isForgotpass = location.pathname === '/forgotPass'; // Check if current route is forgot password

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="flex flex-col min-h-screen">
    
      {/* Render Navbar and Sidebar only if it's NOT the login, sign-up, or forgot password page */}
      {!isLoginPage && !isSignupPage && !isForgotpass && <Navbar OpenSidebar={OpenSidebar} />}
      <div className="flex flex-grow">
        {!isLoginPage && !isSignupPage && !isForgotpass && (
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        )}
        <div
          className={`flex-grow p-7 ${
            !isLoginPage && !isSignupPage && !isForgotpass ? 'ml-64' : ''
          }`}
        >
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
          <Route path='/AdminSignup' element={<AdminRegister/>}/>
          <Route path='/forgotPass' element={<AdminForgotpass/>}/>
          <Route path='/home' element={<ProtectedRoute><FullWrapp/></ProtectedRoute>} />
          <Route path='/Sales' element={<ProtectedRoute><Odersale/></ProtectedRoute>} />
          <Route path='/Items' element={<ProtectedRoute><Item/></ProtectedRoute>}/>
          <Route path='/Customers' element={<ProtectedRoute><Customers/></ProtectedRoute>}/>
          <Route path='/Employee' element={<ProtectedRoute><EmployeSection/></ProtectedRoute>}/>
          <Route path='/Accounts' element={<ProtectedRoute><AccountSettings/></ProtectedRoute>}/>
          <Route path='/devices' element={<ProtectedRoute><Devices/></ProtectedRoute>}/>
          <Route path='/Resturant' element={<ProtectedRoute><ResturentManagment/></ProtectedRoute>}/>
          <Route path='/HomeTable' element={<ProtectedRoute><HomeTable/></ProtectedRoute>}/>
          <Route path='/ItemTaxes' element={<TaxItem/>}/>
          <Route path='/ItemCategorys' element={<Categories/>}/>
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
