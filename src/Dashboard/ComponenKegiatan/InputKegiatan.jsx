import { useState } from 'react';
import { motion } from 'framer-motion';

const InputKegiatan = () => {
  const [kegiatan, setKegiatan] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [file, setFile] = useState(null); // Tambahkan state untuk file
  const [kelas, setKelas] = useState(''); // Tambahkan state untuk kelas
  const [mataPelajaran, setMataPelajaran] = useState(''); // Tambahkan state untuk mata pelajaran

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Kegiatan:", { kegiatan, tanggal, deskripsi, file, kelas, mataPelajaran });
    // Reset form
    setKegiatan('');
    setTanggal('');
    setDeskripsi('');
    setFile(null); // Reset file
    setKelas(''); // Reset kelas
    setMataPelajaran(''); // Reset mata pelajaran
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-100 w-full max-w-3xl mx-auto"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
        Input Kegiatan
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Kegiatan</label>
          <input
            type="text"
            value={kegiatan}
            onChange={(e) => setKegiatan(e.target.value)}
            placeholder="Masukkan nama kegiatan..."
            className="mt-1 block w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 transition-all duration-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tanggal Kegiatan</label>
          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="mt-1 block w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 transition-all duration-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
          <textarea
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            placeholder="Masukkan deskripsi kegiatan..."
            className="mt-1 block w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 transition-all duration-300"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Kelas</label>
          <select
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
            className="mt-1 block w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 transition-all duration-300"
            required
          >
            <option value="">Pilih Kelas</option>
            <option value="Kelas 1">Kelas 1</option>
            <option value="Kelas 2">Kelas 2</option>
            <option value="Kelas 3">Kelas 3</option>
            {/* Tambahkan opsi kelas lainnya sesuai kebutuhan */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mata Pelajaran</label>
          <select
            value={mataPelajaran}
            onChange={(e) => setMataPelajaran(e.target.value)}
            className="mt-1 block w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 transition-all duration-300"
            required
          >
            <option value="">Pilih Mata Pelajaran</option>
            <option value="Matematika">Matematika</option>
            <option value="Bahasa Indonesia">Bahasa Indonesia</option>
            <option value="Ilmu Pengetahuan Alam">Ilmu Pengetahuan Alam</option>
            {/* Tambahkan opsi mata pelajaran lainnya sesuai kebutuhan */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload File</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="mt-1 block w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 transition-all duration-300"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-200"
        >
          Tambah Kegiatan
        </button>
      </form>
    </motion.div>
  );
};

export default InputKegiatan;
