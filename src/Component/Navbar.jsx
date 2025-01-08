import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-lg fixed w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo dan Navigasi Utama */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">SIMAKOM</span>
            </Link>
            {/* Navigasi Menu */}
            <div className="hidden md:flex items-center ml-10 space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
                Beranda
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
                Tentang Kami
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
                Kontak
              </Link>
            </div>
          </div>
          {/* Tombol Masuk/Daftar */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-700 transition-all duration-300">
              Masuk
            </Link>
            <Link to="/register" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-full hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
