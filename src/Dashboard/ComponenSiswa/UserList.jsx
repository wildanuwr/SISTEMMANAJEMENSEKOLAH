import React, { useState } from "react";
import UserForm from "./UserForm";

const UserList = ({ users, onEdit, onDelete }) => {
  const [editUser, setEditUser] = useState(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredUsers = users
    .filter((user) => 
      user.nama.toLowerCase().includes(search.toLowerCase()) || 
      user.kelas.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      return sortOrder === "asc" 
        ? a.kelas.localeCompare(b.kelas)
        : b.kelas.localeCompare(a.kelas);
    });

  return (
    <div className="bg-white p-8 rounded-xl lg:w-[60%] shadow-2xl transition-all duration-300 hover:shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">Daftar Siswa</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <input 
            type="text" 
            placeholder="Cari nama atau kelas..." 
            value={search} 
            onChange={handleSearch} 
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 pl-10"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <button 
          onClick={handleSort} 
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          Urutkan Kelas ({sortOrder === "asc" ? "A-Z" : "Z-A"})
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200">
        {editUser ? (
          <UserForm onSubmit={(data) => {
            onEdit(data);
            setEditUser(null);
          }} 
          initialData={editUser} 
          onCancel={() => setEditUser(null)} />
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">NISN</th>
                <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Kelas</th>
                <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr 
                  key={user.nisn} 
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-center">{user.nisn}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{user.nama}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{user.kelas}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button 
                      onClick={() => setEditUser(user)} 
                      className="text-blue-500 hover:text-blue-700 transition-colors duration-200 mr-4"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => onDelete(user.nisn)} 
                      className="text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserList;
