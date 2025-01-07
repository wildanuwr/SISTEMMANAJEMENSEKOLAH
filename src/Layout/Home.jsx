import React from "react";

const Home = () => {
  return (
      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center py-20">
          <h1 className="text-5xl font-bold text-white mb-6">Sistem Manajemen Sekolah Modern</h1>
          <p className="text-xl text-white mb-8">Kelola sekolah Anda dengan mudah dan efisien menggunakan platform kami.</p>
          <div className="space-x-4">
            <a href="#" className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition duration-300">
              Mulai Sekarang
            </a>
            <a href="#" className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition duration-300">
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>

        {/* Fitur Section */}
        <div className="bg-white py-28">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Fitur Unggulan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Manajemen Siswa</h3>
                <p className="text-gray-600">Kelola data siswa dengan mudah, termasuk pendaftaran, absensi, dan laporan akademik.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Manajemen Guru</h3>
                <p className="text-gray-600">Atur jadwal, penilaian, dan komunikasi dengan guru secara efisien.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Laporan dan Analisis</h3>
                <p className="text-gray-600">Dapatkan laporan mendetail tentang kinerja siswa dan sekolah.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 py-7">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-white">© 202 SekolahKu. Semua hak dilindungi.</p>
          </div>
        </footer>
      </div>
  );
};

export default Home;
