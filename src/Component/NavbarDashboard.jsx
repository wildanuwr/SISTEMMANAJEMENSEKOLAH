import React from "react";
import { Link } from "react-router-dom";

const NavbarDashboard = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-lg">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text hover:opacity-80 transition-all duration-300">
              SIMAKOM
            </Link>
          </div>
          <div className="flex items-center">
            <div className="ml-4 relative">
              <button className="flex items-center space-x-3 bg-white/10 px-4 py-2 rounded-xl hover:bg-gray-50 transition-all duration-300 group">
                <img className="h-8 w-8 rounded-full ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-300" src="https://via.placeholder.com/150" alt="Profile" />
                <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors duration-300">John Doe</span>
                <svg className="h-4 w-4 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
