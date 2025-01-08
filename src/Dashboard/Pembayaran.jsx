import { useState } from 'react';
import Sidebar from '../Component/Sidebar';
import Header from '../Component/NavbarDashboard';
import StatisticCards from './ComponenPembayaran/StatisticCards';
import RecentPayments from './ComponenPembayaran/RecentPayments';
import InputPembayaran from './ComponenPembayaran/InputPembayaran';
// import PaymentCharts from './ComponenPembayaran/PaymentCharts';

const Pembayaran = () => {
  return (
    <div className="flex h-screen bg-[#f8fafc]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <Header />
        <main className="p-8 space-y-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Dashboard Pembayaran
            </h1>
          </div>
          
          <div className="transition-all duration-300 transform hover:-translate-y-1">
            <StatisticCards />
          </div>
          <div className="transition-all duration-300 transform hover:-translate-y-1">
            <InputPembayaran />
          </div>

          <div className="grid gap-8">
            {/* <PaymentCharts /> */}
            <div className="transition-all duration-300 transform hover:-translate-y-1">
              <RecentPayments />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pembayaran;