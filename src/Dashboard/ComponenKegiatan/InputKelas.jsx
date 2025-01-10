
import { useState } from 'react';
import { motion } from 'framer-motion';

const InputKelas = () => {
  const [namaKelas, setNamaKelas] = useState('');
  const [deskripsiKelas, setDeskripsiKelas] = useState('');
  const [walikelas, setWalikelas] = useState(''); // Tambahkan state untuk walikelas

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Kelas:", { namaKelas, deskripsiKelas, walikelas });
    // Reset form
    setNamaKelas('');
    setDeskripsiKelas('');
    setWalikelas(''); // Reset walikelas
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-100 w-full max-w-3xl mx-auto"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent mb-6">
        Input Kelas
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Kelas</label>
          <input
            type="text"
            value={namaKelas}
            onChange={(e) => setNamaKelas(e.target.value)}
            placeholder="Masukkan nama kelas..."
            className="mt-1 block w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-600 transition-all duration-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Deskripsi Kelas</label>
          <textarea
            value={deskripsiKelas}
            onChange={(e) => setDeskripsiKelas(e.target.value)}
            placeholder="Masukkan deskripsi kelas..."
            className="mt-1 block w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-600 transition-all duration-300"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Wali Kelas</label>
          <select
            value={walikelas}
            onChange={(e) => setWalikelas(e.target.value)}
            className="mt-1 block w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-600 transition-all duration-300"
            required
          >
            <option value="">Pilih Wali Kelas</option>
            <option value="Wali Kelas 1">Wali Kelas 1</option>
            <option value="Wali Kelas 2">Wali Kelas 2</option>
            <option value="Wali Kelas 3">Wali Kelas 3</option>
            {/* Tambahkan opsi wali kelas lainnya sesuai kebutuhan */}
          </select>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-gradient-to-r from-green-600 to-blue-500 text-white rounded-lg hover:from-green-700 hover:to-blue-600 transition-all duration-200"
        >
          Tambah Kelas
        </button>
      </form>
    </motion.div>
  );
};

export default InputKelas;
