// src/app/components/StatistikSection.tsx
export default function StatistikSection() {
  const stats = [
    {
      number: "500",
      suffix: "+",
      label: "Keluarga Terlayani",
      description: "Jumlah keluarga yang telah merasakan manfaat dari program BUMDes"
    },
    {
      number: "25",
      suffix: "+",
      label: "Program Aktif",
      description: "Berbagai program yang sedang berjalan untuk masyarakat desa"
    },
    {
      number: "15",
      suffix: "+",
      label: "Mitra Usaha",
      description: "Kemitraan dengan berbagai pihak untuk pengembangan desa"
    },
    {
      number: "8",
      suffix: " Tahun",
      label: "Pengalaman",
      description: "Pengalaman dalam mengelola dan mengembangkan ekonomi desa"
    }
  ];

  return (
    <section id="statistik" className="py-20 bg-green-600">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white fade-in">
            Pencapaian <span className="text-yellow-300">Kami</span>
          </h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto fade-in">
            Angka-angka yang mencerminkan kontribusi nyata BUMDes Gentan untuk kemajuan desa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 card-hover scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl font-bold text-yellow-300 mb-2">
                <span data-counter={stat.number}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{stat.label}</h3>
              <p className="text-green-100 text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}