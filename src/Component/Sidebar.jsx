import React, { useState } from "react";
import { AiOutlineHome, AiOutlineAppstore, AiOutlineTags, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";

const menuData = [
  {
    label: "Dashboard",
    icon: AiOutlineHome,
    to: "/",
  },
  {
    label: "Kegiatan",
    icon: FiBookOpen,
    to: "/kegiatan",
    subMenu: [
      { label: "Kegiatan 1", to: "/kegiatan/1" },
      { label: "Kegiatan 2", to: "/kegiatan/2" },
    ],
  },
  {
    label: "Pembayaran",
    icon: AiOutlineAppstore,
    to: "/pembayaran",
    subMenu: [
      { label: "Transaksi", to: "/pembayaran/transaksi" },
      { label: "Tagihan", to: "/pembayaran/tagihan" },
    ],
  },
  {
    label: "Manajemen Akun",
    icon: AiOutlineUser,
    to: "/manajemen-akun",
    subMenu: [
      { label: "Guru/Tendik", to: "/dashboard/guru" },
      { label: "Siswa", to: "/dashboard/siswa" },
    ],
  },
  {
    label: "Laporan",
    icon: AiOutlineUser,
    to: "/laporan",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col h-screen bg-gradient-to-r from-sky-700 to-purple-700 text-white ${isOpen ? "w-64" : "w-16"} transition-width duration-300`}>
      <button className="p-4 focus:outline-none focus:ring-2 focus:ring-white" onClick={toggleSidebar} aria-label="Toggle sidebar">
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>
      <nav className="flex-1 mt-10">
        <ul>
          {menuData.map((menu, index) => (
            <MenuItem key={index} menu={menu} isOpen={isOpen} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

const MenuItem = ({ menu, isOpen }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <>
      <li className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white" onClick={menu.subMenu ? toggleSubMenu : null}>
        <menu.icon className="w-6 h-6" aria-hidden="true" />
        {isOpen && (
          <Link to={menu.to} className="ml-4 text-white">
            {menu.label}
          </Link>
        )}
      </li>
      {menu.subMenu && isSubMenuOpen && isOpen && (
        <ul className="ml-8">
          {menu.subMenu.map((subMenuItem, index) => (
            <li key={index} className="flex items-center p-2 hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white">
              <Link to={subMenuItem.to} className="ml-4 text-white">
                {subMenuItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Sidebar;
