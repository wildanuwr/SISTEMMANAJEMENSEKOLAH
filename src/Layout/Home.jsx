import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <h1 className="text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 animate-fade-in">
          Sistem Manajemen Sekolah Modern
        </h1>
        <p className="text-2xl text-gray-200 mb-10 max-w-2xl animate-slide-up">
          Platform inovatif untuk transformasi digital pendidikan masa depan
        </p>
        <div className="space-x-6 animate-bounce-in">
          <a href="#" className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transform hover:scale-105 transition duration-300 shadow-lg">
            Mulai Sekarang
          </a>
          <a href="#" className="bg-transparent backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transform hover:scale-105 transition duration-300">
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>

      {/* Fitur Section */}
      <div className="bg-gray-50 py-32 skew-y-3 transform -mt-20">
        <div className="max-w-7xl mx-auto px-6 -skew-y-3">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Fitur <span className="text-purple-600">Unggulan</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manajemen Siswa</h3>
              <p className="text-gray-600 leading-relaxed">Sistem manajemen siswa yang komprehensif dengan analitik real-time dan pelacakan perkembangan yang detail.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manajemen Guru</h3>
              <p className="text-gray-600 leading-relaxed">Platform terintegrasi untuk pengelolaan staf pengajar dengan fitur kolaborasi dan evaluasi kinerja.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Analitik & Laporan</h3>
              <p className="text-gray-600 leading-relaxed">Visualisasi data canggih dan laporan otomatis untuk pengambilan keputusan yang lebih baik.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2024 SekolahKu. Membangun Masa Depan Pendidikan Indonesia.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
