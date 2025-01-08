import React, { useState } from "react";
import UserList from "./ComponenSiswa/UserList";
import UserForm from "./ComponenSiswa/UserForm";
import BulkUpload from "./ComponenSiswa/BulkUpload";
import Sidebar from "../Component/Sidebar";
import NavbarDashboard from "../Component/NavbarDashboard";

const Siswa = () => {
  // Data dummy siswa
  const siswaData = [
    { id: 1, nisn: 1122, nama: "Andi Pratama", kelas: "10 IPA 1", Password: "Aktif" },
    { id: 2, nisn: 1122, nama: "Budi Santoso", kelas: "10 IPA 2", Password: "Aktif" },
    { id: 3, nisn: 1122, nama: "Citra Dewi", kelas: "11 IPS 1", Password: "Tidak Aktif" },
    { id: 4, nisn: 1122, nama: "Dewi Lestari", kelas: "12 IPA 1", Password: "Aktif" },
    { id: 5, nisn: 1122, nama: "Eko Prasetyo", kelas: "12 IPS 2", Password: "Aktif" },
  ];

  // State untuk manajemen siswa
  const [users, setUsers] = useState(siswaData);

  // Fungsi untuk menambah siswa baru
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  // Fungsi untuk mengedit siswa
  const editUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  // Fungsi untuk menghapus siswa
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <NavbarDashboard />

      {/* Main Content */}
      <div className="flex">
        <Sidebar />
        {/* Content Area */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Manajemen Siswa</h1>

          {/* Form dan Komponen Tambahan */}
          <div className="container mx-auto p-6">
            <BulkUpload />
            <div className="lg:flex py-3 gap-3">
              <UserForm onSubmit={addUser} />
              <UserList users={users} onEdit={editUser} onDelete={deleteUser} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Siswa;
