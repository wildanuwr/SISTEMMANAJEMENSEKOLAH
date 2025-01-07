import React, { useState } from "react";
import UserForm from "./UserForm";

const UserList = ({ users, onEdit, onDelete }) => {
  const [editUser, setEditUser] = useState(null);
  const [search, setSearch] = useState(""); // State untuk pencarian
  const [sortOrder, setSortOrder] = useState("asc"); // State untuk urutan sorting

  // Fungsi untuk menangani pencarian
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Fungsi untuk mengurutkan data berdasarkan kelas
  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Filter dan sorting data berdasarkan pencarian dan urutan kelas
  const filteredUsers = users
    .filter((user) => user.nama.toLowerCase().includes(search.toLowerCase()) || user.kelas.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.kelas.localeCompare(b.kelas);
      } else {
        return b.kelas.localeCompare(a.kelas);
      }
    });

  const handleEdit = (user) => {
    setEditUser(user);
  };

  const handleCancel = () => {
    setEditUser(null);
  };

  const handleSubmit = (data) => {
    onEdit(data);
    setEditUser(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg w-[60%] shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Daftar Siswa</h2>

      {/* Pencarian dan Sorting */}
      <div className="flex justify-between items-center mb-4">
        <input type="text" placeholder="Cari nama atau kelas..." value={search} onChange={handleSearch} className="p-2 border border-gray-300 rounded-lg w-[70%]" />
        <button onClick={handleSort} className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Urutkan Kelas ({sortOrder === "asc" ? "A-Z" : "Z-A"})
        </button>
      </div>

      <div className="flex justify-center">
        {editUser ? (
          <UserForm onSubmit={handleSubmit} initialData={editUser} onCancel={handleCancel} />
        ) : (
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">NISN</th>
                <th className="px-4 py-2">Nama</th>
                <th className="px-4 py-2">Kelas</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.nisn} className="border-b text-center">
                  <td className="px-4 py-2">{user.nisn}</td>
                  <td className="px-4 py-2">{user.nama}</td>
                  <td className="px-4 py-2">{user.kelas}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => handleEdit(user)} className="text-blue-500 hover:underline">
                      Edit
                    </button>
                    <button onClick={() => onDelete(user.nisn)} className="text-red-500 hover:underline ml-4">
                      Hapus
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
