// src/app/components/TentangSection.tsx
export default function TentangSection() {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"> {/* Spasi lebih besar */}
          <div className="slide-in-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Tentang <span className="text-green-600">BUMDes Gentan</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed"> {/* Warna teks lebih gelap */}
              **BUMDes Gentan** dibentuk untuk memajukan potensi lokal desa melalui unit usaha produktif,
              memberdayakan masyarakat desa, serta menciptakan lapangan kerja dan peningkatan pendapatan asli desa.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Kami berkomitmen untuk mengembangkan ekonomi desa yang berkelanjutan dan memberdayakan
              seluruh lapisan masyarakat desa Gentan dengan prinsip **transparansi**, **akuntabilitas**, dan **partisipasi aktif**.
            </p>
            <div className="grid grid-cols-3 gap-4"> {/* Menggunakan grid untuk statistik */}
              <div className="text-center p-4 bg-green-50 rounded-lg shadow-sm"> {/* Card mini untuk statistik */}
                <div className="text-2xl font-bold text-green-700 mb-1">5+</div>
                <p className="text-gray-700 text-sm">Tahun Beroperasi</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-yellow-700 mb-1">100+</div>
                <p className="text-gray-700 text-sm">Keluarga Terlayani</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-700 mb-1">15+</div>
                <p className="text-gray-700 text-sm">Program Aktif</p>
              </div>
            </div>
          </div>
          <div className="slide-in-right">
            <div className="relative p-6 bg-gradient-to-br from-green-500 to-emerald-700 rounded-3xl shadow-2xl overflow-hidden min-h-[360px] flex items-end"> {/* Padding dan min-height */}
              <div className="absolute inset-0 bg-black/30"></div> {/* Overlay gelap */}
              <div className="absolute top-6 left-6 text-white text-outline-white text-3xl font-extrabold rotate-[-5deg] opacity-70">
                Gentan Maju!
              </div> {/* Slogan melayang */}
              <div className="relative z-10 text-white p-4">
                <h3 className="text-3xl font-bold mb-3">Visi Kami</h3> {/* Font lebih besar */}
                <p className="text-xl opacity-95 leading-relaxed"> {/* Font lebih besar dan jelas */}
                  Menjadi BUMDes terdepan dalam pembangunan ekonomi desa yang berkelanjutan,
                  menciptakan kemandirian dan kesejahteraan bagi seluruh masyarakat Gentan.
                </p>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full pulse-green opacity-90"></div> {/* Ukuran lebih besar */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}