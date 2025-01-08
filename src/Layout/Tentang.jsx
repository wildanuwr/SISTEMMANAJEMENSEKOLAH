import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-20 relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-12 text-center animate-fade-in">
          Tentang Kami
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 animate-slide-up">
            <h2 className="text-3xl font-bold text-white mb-6">Siapa Kami?</h2>
            <p className="text-gray-200 leading-relaxed mb-6">
              Kami adalah tim visioner yang menghadirkan revolusi dalam manajemen pendidikan modern. Dengan pengalaman mendalam dan pemahaman komprehensif tentang ekosistem pendidikan, kami berkomitmen menghadirkan solusi transformatif.
            </p>
            <p className="text-gray-200 leading-relaxed">
              Platform kami mengintegrasikan teknologi canggih untuk menciptakan pengalaman manajemen sekolah yang seamless, memungkinkan institusi pendidikan fokus pada esensi utama: menciptakan masa depan yang lebih cerah.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 animate-slide-up delay-100">
            <h2 className="text-3xl font-bold text-white mb-6">Visi & Misi</h2>
            <div className="space-y-6">
              <div className="group hover:bg-white/10 p-6 rounded-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Visi</h3>
                <p className="text-gray-200 leading-relaxed">
                  Menjadi pionir transformasi digital pendidikan global, menciptakan ekosistem pembelajaran yang inovatif dan berkelanjutan.
                </p>
              </div>
              
              <div className="group hover:bg-white/10 p-6 rounded-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Misi</h3>
                <p className="text-gray-200 leading-relaxed">
                  Menghadirkan solusi teknologi pendidikan yang intuitif dan powerful, mendorong efisiensi operasional dan mendukung keunggulan akademik melalui inovasi berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
