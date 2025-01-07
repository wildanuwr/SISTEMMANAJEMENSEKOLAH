import React from "react";
import { Link } from "react-router-dom";

const NavbarDashboard = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-gray-800">
              SIMAKOM
            </Link>
          </div>
          <div className="flex items-center">
            <div className="ml-4 relative">
              <button className="flex items-center text-sm focus:outline-none">
                <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/150" alt="Profile" />
                <span className="ml-2 text-gray-800">John Doe</span>
                <svg className="ml-2 h-4 w-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
