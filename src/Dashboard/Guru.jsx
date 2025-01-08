import React, { useState } from "react";
import GuruForm from "../Dashboard/ComponenGuru/GuruFrom";
import GuruList from "../Dashboard/ComponenGuru/GuruList";
import BulkUploadGuru from "../Dashboard/ComponenGuru/BulkUploadGuru";
import Sidebar from "../Component/Sidebar";
import NavbarDashboard from "../Component/NavbarDashboard";
import { motion } from "framer-motion";

const Guru = () => {
  // Data dummy guru dengan informasi lebih lengkap
  const initialGuruData = [
    { nip: 1122, nama: "Andi Pratama", Mapel: "PKN", password: "Aktif", email: "andi@sekolah.id", phone: "081234567890" },
    { nip: 1123, nama: "Budi Santoso", Mapel: "Produktif", password: "Aktif", email: "budi@sekolah.id", phone: "081234567891" },
    { nip: 1124, nama: "Citra Dewi", Mapel: "Sejarah", password: "Tidak Aktif", email: "citra@sekolah.id", phone: "081234567892" },
    { nip: 1125, nama: "Dewi Lestari", Mapel: "Informatika", password: "Aktif", email: "dewi@sekolah.id", phone: "081234567893" },
    { nip: 1126, nama: "Eko Prasetyo", Mapel: "Desain", password: "Aktif", email: "eko@sekolah.id", phone: "081234567894" },
  ];

  const [gurus, setGurus] = useState(initialGuruData);
  const [isLoading, setIsLoading] = useState(false);

  // Tambah guru baru dengan animasi
  const addGuru = async (newGuru) => {
    setIsLoading(true);
    try {
      // Simulasi API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setGurus(prevGurus => [...prevGurus, { ...newGuru, id: Date.now() }]);
    } catch (error) {
      console.error("Error adding guru:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Edit data guru dengan validasi
  const editGuru = async (updatedGuru) => {
    setIsLoading(true);
    try {
      // Simulasi API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setGurus(prevGurus =>
        prevGurus.map(guru => guru.nip === updatedGuru.nip ? updatedGuru : guru)
      );
    } catch (error) {
      console.error("Error updating guru:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Hapus guru dengan konfirmasi
  const deleteGuru = async (nip) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data guru ini?")) {
      setIsLoading(true);
      try {
        // Simulasi API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setGurus(prevGurus => prevGurus.filter(guru => guru.nip !== nip));
      } catch (error) {
        console.error("Error deleting guru:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <NavbarDashboard />
      <div className="flex">
        <Sidebar />
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 p-8"
        >
          <div className="container mx-auto">
            <motion.h1 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-8"
            >
              Manajemen Guru
            </motion.h1>
            
            <div className="space-y-6">
              <BulkUploadGuru />
              <div className="lg:flex gap-6">
                <GuruForm onSubmit={addGuru} isLoading={isLoading} />
                <GuruList 
                  gurus={gurus} 
                  onEdit={editGuru} 
                  onDelete={deleteGuru}
                  isLoading={isLoading} 
                />
              </div>
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default Guru;
