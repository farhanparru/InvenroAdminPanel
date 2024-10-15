// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaClipboardList,
  FaUsers,
  FaBoxes,
  FaUtensils,
  FaCog,
  FaWallet,
  FaUserCog
} from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const location = useLocation(); // to get the current route for active state

  return (
    <aside
      className={`fixed inset-y-0 left-0 transform ${
        openSidebarToggle ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-200 ease-in-out bg-gray-900 text-white w-64 z-30`}
    >
      <div className="flex items-center justify-between p-4 bg-gray-800">
        <span className="text-lg font-semibold">TYEMventures</span>
        <button onClick={OpenSidebar} className="text-white">
          <FaCog />
        </button>
      </div>
      <nav className="mt-10">
        {[
          { path: "/home", name: "Home", icon: FaHome },
          { path: "/dashboard", name: "Dashboard", icon: FaChartBar },
          { path: "/Sales", name: "Sales", icon: FaClipboardList },
          { path: "/reports", name: "Reports", icon: FaChartBar },
          { path: "/Items", name: "Items", icon: FaBoxes },
          { path: "/Customers", name: "Customers", icon: FaUsers },
          { path: "/Employee", name: "Employees", icon: FaUsers },
          { path: "/Inventromangment", name: "Inventory Management", icon: FaBoxes },
          { path: "/Resturant", name: "Restaurant Management", icon: FaUtensils },
          { path: "/Expense", name: "Expense", icon: FaWallet },
          { path: "/Accounts", name: "Account & Settings", icon: FaUserCog },
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center py-3 px-6 text-sm ${
              location.pathname === item.path ? "bg-gray-700" : "hover:bg-gray-600"
            } font-bold text-white transition-all duration-150`}
          >
            <item.icon className="mr-4 text-lg" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
