import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-md relative animate-fade-in">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-8 text-center">
          Selamat Datang
        </h2>
        <form className="space-y-6">
          <div className="group">
            <label htmlFor="email" className="block text-gray-200 text-sm font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                placeholder="nama@email.com"
                required 
              />
            </div>
          </div>
          <div className="group">
            <label htmlFor="password" className="block text-gray-200 text-sm font-medium mb-2">
              Kata Sandi
            </label>
            <div className="relative">
              <input 
                type="password" 
                id="password" 
                className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                placeholder="••••••••"
                required 
              />
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
          >
            Masuk
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-300">
            Belum punya akun?{" "}
            <Link to="/register" className="text-purple-300 hover:text-white transition-colors duration-300">
              Daftar Sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
