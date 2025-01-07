import React from "react";
import { Link } from "react-router-dom"; // Perbaiki import Link

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo dan Navigasi Utama */}
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-800 text-lg">SIMAKOM</span>
              </Link>
            </div>
            {/* Navigasi Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 text-gray-800 font-semibold hover:text-purple-600 transition duration-300">
                Beranda
              </Link>
              <Link to="/about" className="py-4 px-2 text-gray-800 font-semibold hover:text-purple-600 transition duration-300">
                Tentang Kami
              </Link>
              <Link to="/contact" className="py-4 px-2 text-gray-800 font-semibold hover:text-purple-600 transition duration-300">
                Kontak
              </Link>
            </div>
          </div>
          {/* Tombol Masuk/Daftar */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login" className="py-2 px-2 font-medium text-gray-800 rounded hover:bg-purple-600 hover:text-white transition duration-300">
              Masuk
            </Link>
            <Link to="/register" className="py-2 px-2 font-medium text-gray-800 bg-white rounded hover:bg-purple-700 hover:text-white transition duration-300">
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
