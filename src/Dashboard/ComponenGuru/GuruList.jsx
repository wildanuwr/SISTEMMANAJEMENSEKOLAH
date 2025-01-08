import React, { useState } from "react";
import GuruForm from "./GuruFrom";
import { motion } from "framer-motion";

const GuruList = ({ gurus, onEdit, onDelete }) => {
  const [editGuru, setEditGuru] = useState(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredGuru = gurus
    .filter((guru) => guru.nama.toLowerCase().includes(search.toLowerCase()) || guru.Mapel.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Mapel.localeCompare(b.Mapel);
      } else {
        return b.Mapel.localeCompare(a.Mapel);
      }
    });

  const handleEdit = (guru) => {
    setEditGuru(guru);
  };

  const handleCancel = () => {
    setEditGuru(null);
  };

  const handleSubmit = (data) => {
    onEdit(data);
    setEditGuru(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-100 lg:w-[60%]"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
        Daftar Guru
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="relative w-full md:w-[70%]">
          <input 
            type="text" 
            placeholder="Cari nama atau Mapel..." 
            value={search} 
            onChange={handleSearch} 
            className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 transition-all duration-300"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-3 top-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <button 
          onClick={handleSort} 
          className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          Urutkan {sortOrder === "asc" ? "A-Z" : "Z-A"}
        </button>
      </div>

      <div className="flex justify-center">
        {editGuru ? (
          <GuruForm onSubmit={handleSubmit} initialData={editGuru} onCancel={handleCancel} />
        ) : (
          <div className="overflow-x-auto w-full">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NIP</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mapel</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredGuru.map((guru) => (
                  <motion.tr 
                    key={guru.nip}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{guru.nip}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{guru.nama}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{guru.Mapel}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button 
                        onClick={() => handleEdit(guru)} 
                        className="text-purple-600 hover:text-purple-900 mr-4 transition-colors duration-200"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => onDelete(guru.nip)} 
                        className="text-red-600 hover:text-red-900 transition-colors duration-200"
                      >
                        Hapus
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default GuruList;
