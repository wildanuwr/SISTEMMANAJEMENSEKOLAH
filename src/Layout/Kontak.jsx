import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-20 relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-8 text-center animate-fade-in">
          Hubungi Kami
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 animate-slide-up">
            <h2 className="text-3xl font-bold text-white mb-6">Mari Terhubung</h2>
            <p className="text-gray-200 mb-8">Kami siap membantu Anda. Hubungi kami melalui channel berikut:</p>
            
            <div className="space-y-6">
              <div className="flex items-center group hover:bg-white/10 p-4 rounded-xl transition-all duration-300">
                <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="text-white font-medium">info@sekolahku.com</p>
                </div>
              </div>

              <div className="flex items-center group hover:bg-white/10 p-4 rounded-xl transition-all duration-300">
                <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Telepon</p>
                  <p className="text-white font-medium">(021) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center group hover:bg-white/10 p-4 rounded-xl transition-all duration-300">
                <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Alamat</p>
                  <p className="text-white font-medium">Jl. Pendidikan No. 123, Jakarta</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 animate-slide-up delay-100">
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2">Nama Lengkap</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500" />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500" />
              </div>
              <div>
                <label className="block text-white mb-2">Pesan</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500"></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transform hover:scale-105 transition duration-300">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
