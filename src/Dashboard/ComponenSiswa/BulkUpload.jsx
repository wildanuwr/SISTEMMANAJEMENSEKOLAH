import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const BulkUpload = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Silakan pilih file terlebih dahulu!");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("/api/users/bulk-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Upload berhasil!");
      setFile(null);
    } catch (error) {
      alert("Terjadi kesalahan saat mengupload!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-gray-100"
    >
      <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
        Upload Data Siswa
      </h2>
      
      <div 
        className={`border-2 border-dashed rounded-lg p-6 text-center mb-4 transition-colors duration-300 
          ${isDragging ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:border-purple-400'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center gap-3">
          <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <div>
            <p className="text-gray-600 text-sm mb-2">Drag & drop file di sini atau</p>
            <label className="bg-purple-100 text-purple-600 px-3 py-1.5 rounded-lg cursor-pointer text-sm hover:bg-purple-200 transition duration-300">
              Pilih File
              <input type="file" onChange={handleFileChange} className="hidden" />
            </label>
          </div>
          {file && (
            <p className="text-xs text-gray-500">File: {file.name}</p>
          )}
        </div>
      </div>

      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleUpload}
        disabled={loading}
        className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium
          hover:opacity-90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed
          flex items-center justify-center gap-2`}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Mengupload...</span>
          </>
        ) : (
          <span>Upload File</span>
        )}
      </motion.button>
    </motion.div>
  );
};

export default BulkUpload;
