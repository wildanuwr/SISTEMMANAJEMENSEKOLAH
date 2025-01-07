import React, { useState } from "react";
import axios from "axios";

const BulkUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("/api/users/bulk-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Upload berhasil!");
    } catch (error) {
      alert("Terjadi kesalahan saat mengupload!");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Upload Bulk Siswa</h2>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button onClick={handleUpload} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
        Upload
      </button>
    </div>
  );
};

export default BulkUpload;
