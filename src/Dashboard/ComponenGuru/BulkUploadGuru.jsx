import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const BulkUploadGuru = () => {
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
        Upload Data Guru
      </h2>

      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
          isDragging
            ? "border-purple-500 bg-purple-50"
            : "border-gray-300 hover:border-purple-500"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center gap-4">
          <svg
            className={`w-12 h-12 ${
              isDragging ? "text-purple-500" : "text-gray-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <div className="text-gray-600">
            <p className="font-medium">
              Drag & drop file di sini atau{" "}
              <label className="text-purple-600 hover:text-purple-700 cursor-pointer">
                pilih file
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".xlsx,.xls,.csv"
                />
              </label>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Format yang didukung: XLSX, XLS, CSV
            </p>
          </div>
          {file && (
            <p className="text-sm text-gray-600">File terpilih: {file.name}</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleUpload}
          disabled={loading || !file}
          className={`px-6 py-2.5 rounded-xl text-white font-medium transition-all duration-300 ${
            loading || !file
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-600 to-pink-500 hover:shadow-lg"
          }`}
        >
          {loading ? "Mengupload..." : "Upload"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BulkUploadGuru;
