// src/app/components/TentangSection.tsx
export default function TentangSection() {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Tentang <span className="text-green-600">BUMDes Gentan</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              BUMDes Gentan dibentuk untuk memajukan potensi lokal desa melalui unit usaha produktif, 
              memberdayakan masyarakat desa, serta menciptakan lapangan kerja dan peningkatan pendapatan asli desa.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Kami berkomitmen untuk mengembangkan ekonomi desa yang berkelanjutan dan memberdayakan 
              seluruh lapisan masyarakat desa Gentan.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="stats-counter">5+</div>
                <p className="text-gray-600">Tahun Beroperasi</p>
              </div>
              <div className="text-center">
                <div className="stats-counter">100+</div>
                <p className="text-gray-600">Keluarga Terlayani</p>
              </div>
              <div className="text-center">
                <div className="stats-counter">15+</div>
                <p className="text-gray-600">Program Aktif</p>
              </div>
            </div>
          </div>
          <div className="slide-in-right">
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Visi Kami</h3>
                  <p className="text-lg opacity-90">
                    Menjadi BUMDes terdepan dalam pembangunan ekonomi desa yang berkelanjutan
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full pulse-green"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}