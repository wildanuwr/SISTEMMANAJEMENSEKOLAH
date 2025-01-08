import React, { useState } from "react";
import GuruForm from "./GuruFrom";

const GuruList = ({ gurus, onEdit, onDelete }) => {
  const [editGuru, setEditGuru] = useState(null);
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
    <div className="bg-white p-6 rounded-lg lg:w-[60%] shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Daftar Guru</h2>

      {/* Pencarian dan Sorting */}
      <div className="flex justify-between items-center mb-4">
        <input type="text" placeholder="Cari nama atau kelas..." value={search} onChange={handleSearch} className="p-2 border border-gray-300 rounded-lg w-[70%]" />
        <button onClick={handleSort} className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Urutkan Kelas ({sortOrder === "asc" ? "A-Z" : "Z-A"})
        </button>
      </div>

      <div className="flex justify-center">
        {editGuru ? (
          <GuruForm onSubmit={handleSubmit} initialData={editGuru} onCancel={handleCancel} />
        ) : (
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">NIP</th>
                <th className="px-4 py-2">Nama</th>
                <th className="px-4 py-2">Mapel</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredGuru.map((guru) => (
                <tr key={guru.nip} className="border-b text-center">
                  <td className="px-4 py-2">{guru.nip}</td>
                  <td className="px-4 py-2">{guru.nama}</td>
                  <td className="px-4 py-2">{guru.Mapel}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => handleEdit(guru)} className="text-blue-500 hover:underline">
                      Edit
                    </button>
                    <button onClick={() => onDelete(guru.nip)} className="text-red-500 hover:underline ml-4">
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

export default GuruList;
