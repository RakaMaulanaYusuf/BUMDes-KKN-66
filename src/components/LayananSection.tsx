// src/app/components/LayananSection.tsx (continued)
export default function LayananSection() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Penyewaan Alat Pertanian",
      description: "Menyediakan berbagai peralatan pertanian modern untuk mendukung produktivitas petani",
      bgColor: "bg-green-100"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Pembiayaan Mikro UMKM",
      description: "Menyediakan akses modal untuk pengembangan usaha mikro kecil menengah di desa",
      bgColor: "bg-blue-100"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      ),
      title: "Kebutuhan Pokok Desa",
      description: "Menyediakan kebutuhan pokok dengan harga terjangkau untuk masyarakat desa",
      bgColor: "bg-purple-100"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253"></path>
        </svg>
      ),
      title: "Pembinaan & Pelatihan",
      description: "Menyelenggarakan program pembinaan dan pelatihan untuk meningkatkan keterampilan masyarakat",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 fade-in">
            Layanan <span className="text-green-600">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto fade-in">
            Berbagai layanan yang kami tawarkan untuk mendukung pertumbuhan ekonomi dan kesejahteraan masyarakat desa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card p-8 rounded-xl ${service.bgColor} card-hover scale-in`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="service-icon mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}