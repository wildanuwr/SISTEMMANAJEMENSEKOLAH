import React from 'react';
import InputKegiatan from './ComponenKegiatan/InputKegiatan';
import InputKelas from './ComponenKegiatan/InputKelas';
import Navbar from '../Component/NavbarDashboard';
import Sidebar from '../Component/Sidebar'; // Pastikan Anda memiliki komponen Sidebar

const KegiatanDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8 "> {/* Tambahkan padding top untuk menghindari tumpang tindih dengan navbar */}
          <h1 className="text-4xl font-bold text-white mb-8 text-start">Dashboard Kegiatan dan Kelas</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputKegiatan />
            <InputKelas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KegiatanDashboard;


