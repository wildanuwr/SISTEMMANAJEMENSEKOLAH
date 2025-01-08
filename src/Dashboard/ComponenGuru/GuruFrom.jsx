import React, { useState } from "react";
import { motion } from "framer-motion";

const GuruForm = ({ onSubmit, initialData = { nip: "", nama: "", jabatan: "", password: "" }, onCancel }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-100 lg:w-[40%]"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
        Form Data Guru
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="nip">
            NIP
          </label>
          <input
            type="text"
            id="nip"
            name="nip"
            value={formData.nip}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 transition-all duration-300"
            required
            placeholder="Masukkan NIP"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="nama">
            Nama
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 transition-all duration-300"
            required
            placeholder="Masukkan nama lengkap"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="Mapel">
            Mata Pelajaran
          </label>
          <input
            type="text"
            id="Mapel"
            name="Mapel"
            value={formData.Mapel}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 transition-all duration-300"
            required
            placeholder="Masukkan mata pelajaran"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 transition-all duration-300"
            required
            placeholder="Masukkan password"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4 mt-8">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={onCancel}
          className="px-6 py-3 rounded-xl bg-gray-500 text-white hover:bg-gray-600 transition-all duration-300"
        >
          Batal
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
        >
          Simpan
        </motion.button>
      </div>
    </motion.form>
  );
};

export default GuruForm;
