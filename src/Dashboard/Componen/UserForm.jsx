import React, { useState } from "react";

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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg  lg:w-[40%] sm:w-[50%]  shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nisn">
          NISN
        </label>
        <input type="text" id="nisn" name="nisn" value={formData.nisn} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
          Nama
        </label>
        <input type="text" id="nama" name="nama" value={formData.nama} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="kelas">
          Kelas
        </label>
        <input type="text" id="kelas" name="kelas" value={formData.kelas} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" required />
      </div>
      <div className="flex justify-end space-x-4">
        <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300">
          Batal
        </button>
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
          Simpan
        </button>
      </div>
    </form>
  );
};

export default UserForm;
