import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsSearch, BsUpcScan } from "react-icons/bs";

const InputPembayaran = () => {
  const [searchMethod, setSearchMethod] = useState("manual");
  const [searchInput, setSearchInput] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentData, setPaymentData] = useState({
    nominal: "",
    diskon: "",
    selectedMonths: [],
    jenisPembayaran: {
      spp: false,
      tabungan: false
    }
  });

  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulasi pencarian berhasil
    setShowPaymentForm(true);
  };

  const startBarcodeScanning = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setSearchInput("123456");
      setShowPaymentForm(true);
    }, 2000);
  };

  const handleMonthToggle = (month) => {
    setPaymentData(prev => ({
      ...prev,
      selectedMonths: prev.selectedMonths.includes(month)
        ? prev.selectedMonths.filter(m => m !== month)
        : [...prev.selectedMonths, month]
    }));
  };

  const handlePaymentTypeToggle = (type) => {
    setPaymentData(prev => ({
      ...prev,
      jenisPembayaran: {
        ...prev.jenisPembayaran,
        [type]: !prev.jenisPembayaran[type]
      }
    }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log("Data Pembayaran:", {
      nisn: searchInput,
      ...paymentData
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-100 w-full max-w-3xl mx-auto"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
        Input Pembayaran
      </h2>

      <div className="space-y-6">
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setSearchMethod("manual")}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              searchMethod === "manual"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <BsSearch />
            Manual NISN
          </button>
          <button
            onClick={() => setSearchMethod("barcode")}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              searchMethod === "barcode"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <BsUpcScan />
            Scan Barcode
          </button>
        </div>

        {searchMethod === "manual" ? (
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Masukkan NISN Siswa..."
              className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 transition-all duration-300"
            />
            <BsSearch className="absolute left-4 top-4 text-gray-400" />
            <button
              type="submit"
              className="absolute right-3 top-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Cari
            </button>
          </form>
        ) : (
          <div className="text-center">
            {isScanning ? (
              <div className="p-8 border-2 border-dashed border-gray-300 rounded-xl">
                <div className="animate-pulse text-gray-500">
                  Scanning Barcode...
                </div>
              </div>
            ) : (
              <button
                onClick={startBarcodeScanning}
                className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors flex items-center gap-2 mx-auto"
              >
                <BsUpcScan />
                Mulai Scan Barcode
              </button>
            )}
          </div>
        )}

        {showPaymentForm && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 space-y-6"
          >
            <div className="p-4 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-700 mb-2">
                Data Siswa:
              </h3>
              <p className="text-gray-600">NISN: {searchInput}</p>
              <p className="text-gray-600">Nama: John Doe</p>
              <p className="text-gray-600">Kelas: XII RPL 1</p>
            </div>

            <form onSubmit={handlePaymentSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Jenis Pembayaran
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={paymentData.jenisPembayaran.spp}
                      onChange={() => handlePaymentTypeToggle('spp')}
                      className="form-checkbox h-5 w-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                    />
                    <span className="text-gray-700">SPP</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={paymentData.jenisPembayaran.tabungan}
                      onChange={() => handlePaymentTypeToggle('tabungan')}
                      className="form-checkbox h-5 w-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                    />
                    <span className="text-gray-700">Tabungan</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Nominal Pembayaran
                </label>
                <input
                  type="number"
                  value={paymentData.nominal}
                  onChange={(e) => setPaymentData(prev => ({...prev, nominal: e.target.value}))}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600"
                  placeholder="Masukkan nominal pembayaran"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Diskon
                </label>
                <input
                  type="number"
                  value={paymentData.diskon}
                  onChange={(e) => setPaymentData(prev => ({...prev, diskon: e.target.value}))}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600"
                  placeholder="Masukkan jumlah diskon"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Pilih Bulan Pembayaran
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {months.map((month) => (
                    <label
                      key={month}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={paymentData.selectedMonths.includes(month)}
                        onChange={() => handleMonthToggle(month)}
                        className="form-checkbox h-5 w-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                      />
                      <span className="text-gray-700">{month}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
                >
                  Proses Pembayaran
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default InputPembayaran;
