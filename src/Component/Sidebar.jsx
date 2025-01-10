import React, { useState } from "react";
import { AiOutlineHome, AiOutlineAppstore, AiOutlineTags, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const menuData = [
  {
    label: "Dashboard",
    icon: AiOutlineHome,
    to: "/dashboard",
  },
  {
    label: "Kegiatan",
    icon: FiBookOpen,
    subMenu: [
      { label: "Kegiatan 1", to: "/kegiatan/1" },
      { label: "Kegiatan 2", to: "/kegiatan/2" },
    ],
  },
  {
    label: "Pembayaran", 
    icon: AiOutlineAppstore,
    to: "/dashboard/Pembayaran",
    subMenu: [
      { label: "Transaksi", to: "/pembayaran/transaksi" },
      { label: "Tagihan", to: "/pembayaran/tagihan" },
    ],
  },
  {
    label: "Manajemen Akun",
    icon: AiOutlineUser,
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
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div 
      initial={{ width: isOpen ? "16rem" : "4rem" }}
      animate={{ width: isOpen ? "16rem" : "4rem" }}
      className="flex flex-col h-[110vh] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white shadow-2xl relative"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      
      <button 
        className="p-4 hover:bg-white/10 rounded-lg m-2 transition-all duration-300 relative"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <div className="flex items-center justify-center">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="w-6 h-6 flex flex-col justify-center items-center"
          >
            <span className="block w-4 h-0.5 bg-white mb-1 rounded-full"></span>
            <span className="block w-4 h-0.5 bg-white mb-1 rounded-full"></span>
            <span className="block w-4 h-0.5 bg-white rounded-full"></span>
          </motion.div>
        </div>
      </button>

      <nav className="flex-1 mt-6 px-2 relative">
        <ul className="space-y-2">
          {menuData.map((menu, index) => (
            <MenuItem key={index} menu={menu} isOpen={isOpen} />
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

const MenuItem = ({ menu, isOpen }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    if (!menu.to) {
      setIsSubMenuOpen(!isSubMenuOpen);
    }
  };

  return (
    <>
      <motion.li 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative"
      >
        {menu.to ? (
          <Link 
            to={menu.to}
            className="flex items-center p-3 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group"
          >
            <menu.icon className="w-6 h-6 text-white/80 group-hover:text-white" aria-hidden="true" />
            {isOpen && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-4 text-white/90 group-hover:text-white font-medium"
              >
                {menu.label}
              </motion.span>
            )}
          </Link>
        ) : (
          <button 
            onClick={toggleSubMenu}
            className="w-full flex items-center p-3 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group"
          >
            <menu.icon className="w-6 h-6 text-white/80 group-hover:text-white" aria-hidden="true" />
            {isOpen && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-4 text-white/90 group-hover:text-white font-medium flex-1 text-left"
              >
                {menu.label}
              </motion.span>
            )}
          </button>
        )}
      </motion.li>

      <AnimatePresence>
        {menu.subMenu && isSubMenuOpen && isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="ml-4 space-y-1 mt-1"
          >
            {menu.subMenu.map((subMenuItem, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to={subMenuItem.to}
                  className="flex items-center p-2 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-white/80 hover:text-white"
                >
                  <span className="ml-2 text-sm font-medium">{subMenuItem.label}</span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
