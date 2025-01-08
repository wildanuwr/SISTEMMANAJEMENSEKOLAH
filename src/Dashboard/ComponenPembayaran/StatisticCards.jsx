const StatisticCards = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card SPP */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total SPP Bulan Ini</p>
              <p className="text-2xl font-semibold text-gray-900">Rp 25.000.000</p>
            </div>
            <div className="p-3 bg-blue-500 rounded-full">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-500 text-sm font-medium">+2.5%</span>
            <span className="text-gray-600 text-sm ml-2">dari bulan lalu</span>
          </div>
        </div>
  
        {/* Card Tabungan */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Tabungan</p>
              <p className="text-2xl font-semibold text-gray-900">Rp 150.000.000</p>
            </div>
            <div className="p-3 bg-green-500 rounded-full">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-500 text-sm font-medium">+5.2%</span>
            <span className="text-gray-600 text-sm ml-2">dari bulan lalu</span>
          </div>
        </div>

        {/* Card Pembayaran Hari Ini */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pembayaran Hari Ini</p>
              <p className="text-2xl font-semibold text-gray-900">Rp 5.000.000</p>
            </div>
            <div className="p-3 bg-purple-500 rounded-full">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-500 text-sm font-medium">15</span>
            <span className="text-gray-600 text-sm ml-2">transaksi hari ini</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default StatisticCards;