import { useState } from 'react';
import { motion } from 'framer-motion';

const RecentPayments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Data pembayaran statis
  const payments = [
    {
      nama: 'John Doe',
      jenis: 'SPP',
      jumlah: 'Rp 500.000',
      status: 'Lunas',
      tanggal: '2024-01-15'
    },
    {
      nama: 'Jane Smith', 
      jenis: 'Tabungan',
      jumlah: 'Rp 250.000',
      status: 'Lunas',
      tanggal: '2024-01-14'
    },
    {
      nama: 'Mike Johnson',
      jenis: 'SPP',
      jumlah: 'Rp 500.000', 
      status: 'Lunas',
      tanggal: '2024-01-13'
    }
  ];

  // Filter pembayaran berdasarkan pencarian
  const filteredPayments = payments.filter(payment => {
    return payment.nama.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100"
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Pembayaran Terbaru
        </h2>
        
        <div className="mt-6">  
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Cari pembayaran..."
              className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 transition-all duration-300"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-3 top-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Siswa
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Jenis
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Jumlah
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Tanggal
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredPayments.map((payment, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
                          {payment.nama.charAt(0)}
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          {payment.nama}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">{payment.jenis}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-gray-900">{payment.jumlah}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">{payment.tanggal}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
                        {payment.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecentPayments;
