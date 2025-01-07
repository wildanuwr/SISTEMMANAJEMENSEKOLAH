import React from "react";
import Sidebar from "../Component/Sidebar";
import NavbarDashboard from "../Component/NavbarDashboard";
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarDashboard />
      <div className="flex">
        <Sidebar />
        {/* Content Area */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Selamat Datang, John Doe!</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Jumlah Siswa</h2>
              <p className="text-3xl font-bold text-purple-600">250</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Jumlah Guru</h2>
              <p className="text-3xl font-bold text-purple-600">30</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Laporan Terbaru</h2>
              <p className="text-3xl font-bold text-purple-600">5</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
