import { useState } from 'react';

const RecentPayments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Data pembayaran statis
  const payments = [
    {
      nama: 'John Doe',
      jenis: 'SPP',
      jumlah: 'Rp 500.000',
      status: 'Lunas'
    },
    {
      nama: 'Jane Smith', 
      jenis: 'Tabungan',
      jumlah: 'Rp 250.000',
      status: 'Lunas'
    },
    {
      nama: 'Mike Johnson',
      jenis: 'SPP',
      jumlah: 'Rp 500.000', 
      status: 'Lunas'
    }
  ];

  // Filter pembayaran berdasarkan pencarian
  const filteredPayments = payments.filter(payment => {
    return payment.nama.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Handle perubahan input pencarian
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900">Pembayaran Terbaru</h2>
        <div className="mt-4">  
          <div className="mb-4">
            <input
              type="text"
              placeholder="Cari berdasarkan nama atau NISN..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Siswa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jenis
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jumlah
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPayments.map((payment, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">
                        {payment.nama}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payment.jenis}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payment.jumlah}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentPayments;
