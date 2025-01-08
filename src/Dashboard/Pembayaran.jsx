import { useState } from 'react';
import Sidebar from '../Component/Sidebar';
import Header from '../Component/NavbarDashboard';
import StatisticCards from './ComponenPembayaran/StatisticCards';
import RecentPayments from './ComponenPembayaran/RecentPayments';
// import PaymentCharts from './ComponenPembayaran/PaymentCharts';

const Pembayaran = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <Header />
        <main className="p-6">
          <StatisticCards />
          <div className="mt-6">
            {/* <PaymentCharts /> */}
            <RecentPayments />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pembayaran;