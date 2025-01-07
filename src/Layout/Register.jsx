import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Daftar</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
              Nama Lengkap
            </label>
            <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Masukkan nama lengkap Anda" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Masukkan email Anda" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              Kata Sandi
            </label>
            <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Masukkan kata sandi Anda" required />
          </div>
          <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition duration-300">
            Daftar
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-purple-600 hover:underline">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
