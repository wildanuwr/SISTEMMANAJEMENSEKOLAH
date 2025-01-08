import React, { useState } from "react";
import GuruForm from "../Dashboard/ComponenGuru/GuruFrom";
import GuruList from "../Dashboard/ComponenGuru/GuruList";
import BulkUploadGuru from "../Dashboard/ComponenGuru/BulkUploadGuru";
import Sidebar from "../Component/Sidebar";
import NavbarDashboard from "../Component/NavbarDashboard";

const Guru = () => {
  // Data dummy guru
  const initialGuruData = [
    { nip: 1122, nama: "Andi Pratama", Mapel: "PKN", password: "Aktif" },
    { nip: 1123, nama: "Budi Santoso", Mapel: "Produktif", password: "Aktif" },
    { nip: 1124, nama: "Citra Dewi", Mapel: "Sejarah", password: "Tidak Aktif" },
    { nip: 1125, nama: "Dewi Lestari", Mapel: "Informatika", password: "Aktif" },
    { nip: 1126, nama: "Eko Prasetyo", Mapel: "Desain", password: "Aktif" },
  ];

  const [gurus, setGurus] = useState(initialGuruData);

  // Tambah guru baru
  const addGuru = (newGuru) => {
    setGurus([...gurus, newGuru]);
  };

  // Edit data guru
  const editGuru = (updatedGuru) => {
    setGurus(
      gurus.map((guru) => (guru.nip === updatedGuru.nip ? updatedGuru : guru))
    );
  };

  // Hapus guru
  const deleteGuru = (nip) => {
    setGurus(gurus.filter((guru) => guru.nip !== nip));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarDashboard />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Manajemen Guru</h1>
          <div className="container mx-auto p-6">
            <BulkUploadGuru />
            <div className="lg:flex py-3 gap-3">
              <GuruForm onSubmit={addGuru} />
              <GuruList gurus={gurus} onEdit={editGuru} onDelete={deleteGuru} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Guru;
