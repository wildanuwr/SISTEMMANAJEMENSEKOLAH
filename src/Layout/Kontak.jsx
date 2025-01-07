import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">Hubungi Kami</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Informasi Kontak</h2>
          <p className="text-gray-600 mb-4">Jika Anda memiliki pertanyaan atau membutuhkan bantuan, jangan ragu untuk menghubungi kami melalui informasi di bawah ini:</p>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <p className="text-gray-600">Email: info@sekolahku.com</p>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 ```jsx
                  0 01-1.25.25H5a2 2 0 01-2-2V5z"
                ></path>
              </svg>
              <p className="text-gray-600">Telepon: (021) 123-4567</p>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3V3z"></path>
              </svg>
              <p className="text-gray-600">Alamat: Jl. Pendidikan No. 123, Jakarta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
