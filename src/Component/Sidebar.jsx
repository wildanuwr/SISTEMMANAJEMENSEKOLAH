import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import ikon yang dibutuhkan

const Sidebar = () => {
  // State untuk mengatur apakah sidebar terbuka atau tertutup
  const [isOpen, setIsOpen] = useState(true);

  // Fungsi untuk toggle status sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      <aside className={`${isOpen ? "w-64" : "w-0"} text-white bg-gradient-to-r from-purple-600 to-blue-500 min-h-screen shadow-lg transition-all duration-300 overflow-hidden`}>
 
        <div className="p-4">
          <nav className="mt-4">
            <ul>
              <li>
                <Link to="/dashboard" className="block py-4 px-4 text-white hover:bg-purple-600 hover:text-white rounded transition duration-300">
                  Beranda
                </Link>
              </li>
              <hr/>
              <li>
                <Link to="/dashboard/siswa" className="block py-4 px-4 text-white  hover:bg-purple-600 hover:text-white rounded transition duration-300">
                  Manajemen Siswa
                </Link>
              </li>
              <hr/>
              <li>
                <Link to="/dashboard/guru" className="block py-4 px-4 text-white hover:bg-purple-600 hover:text-white rounded transition duration-300">
                  Manajemen Guru
                </Link>
              </li>
              <hr/>
              <li>
                <Link to="/dashboard/laporan" className="block py-4 px-4 text-white hover:bg-purple-600 hover:text-white rounded transition duration-300">
                  Laporan
                </Link>
              </li>
              <hr/>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="flex z-50">
          <button onClick={toggleSidebar} className="p-2 bg-blue-500 text-white">
            <FontAwesomeIcon icon={isOpen ? faArrowLeft : faArrowRight} />
          </button>
        </div>
    </div>
  );
};

export default Sidebar;
