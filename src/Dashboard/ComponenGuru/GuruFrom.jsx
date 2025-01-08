import React, { useState } from "react";

const GuruForm = ({ onSubmit, initialData = { nip: "", nama: "", jabatan: "" }, onCancel }) => {
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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg lg:w-[40%]">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nip">
          NIP
        </label>
        <input type="text" id="nip" name="nip" value={formData.nip} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
          Nama
        </label>
        <input type="text" id="nama" name="nama" value={formData.nama} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jabatan">
          Jabatan
        </label>
        <input type="text" id="jabatan" name="jabatan" value={formData.jabatan} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" required />
      </div>
      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-lg">
        Simpan
      </button>
      {onCancel && (
        <button type="button" onClick={onCancel} className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg">
          Batal
        </button>
      )}
    </form>
  );
};

export default GuruForm;
