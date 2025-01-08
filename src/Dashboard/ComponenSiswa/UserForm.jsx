import React, { useState } from "react";
import { motion } from "framer-motion";

const UserForm = ({ onSubmit, initialData = { nisn: "", nama: "", kelas: "" }, onCancel }) => {
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
      className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-100 lg:w-[40%] sm:w-[50%]"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
        Form Siswa
      </h2>

      <div className="space-y-6">
        <div className="relative">
          <input
            type="text"
            id="nisn"
            name="nisn"
            value={formData.nisn}
            onChange={handleChange}
            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 placeholder-transparent transition-all duration-300"
            placeholder="NISN"
            required
          />
          <label
            htmlFor="nisn"
            className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600"
          >
            NISN
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 placeholder-transparent transition-all duration-300"
            placeholder="Nama"
            required
          />
          <label
            htmlFor="nama"
            className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600"
          >
            Nama
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="kelas"
            name="kelas"
            value={formData.kelas}
            onChange={handleChange}
            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 placeholder-transparent transition-all duration-300"
            placeholder="Kelas"
            required
          />
          <label
            htmlFor="kelas"
            className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600"
          >
            Kelas
          </label>
        </div>

        <div className="relative">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.Password}
            onChange={handleChange}
            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 placeholder-transparent transition-all duration-300"
            placeholder="Password"
            required
          />
          <label
            htmlFor="password"
            className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600"
          >
            Password
          </label>
        </div>
      </div>

      <div className="flex justify-end space-x-4 mt-8">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={onCancel}
          className="px-6 py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300"
        >
          Batal
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 transition-all duration-300"
        >
          Simpan
        </motion.button>
      </div>
    </motion.form>
  );
};

export default UserForm;
