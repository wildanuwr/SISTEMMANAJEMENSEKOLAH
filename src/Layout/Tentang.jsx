import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">Tentang Kami</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Siapa Kami?</h2>
          <p className="text-gray-600 mb-4">
            Kami adalah tim yang berdedikasi untuk menyediakan solusi manajemen sekolah yang modern dan efisien. Dengan pengalaman bertahun-tahun di bidang pendidikan, kami memahami kebutuhan sekolah dan berkomitmen untuk memberikan layanan
            terbaik.
          </p>
          <p className="text-gray-600 mb-4">Platform kami dirancang untuk memudahkan pengelolaan data siswa, guru, dan laporan akademik, sehingga sekolah dapat fokus pada peningkatan kualitas pendidikan.</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Visi dan Misi</h2>
          <p className="text-gray-600 mb-4">
            <strong>Visi:</strong> Menjadi platform manajemen sekolah terdepan yang mendukung transformasi digital di dunia pendidikan.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Misi:</strong> Memberikan solusi teknologi yang inovatif dan mudah digunakan untuk meningkatkan efisiensi dan efektivitas manajemen sekolah.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
