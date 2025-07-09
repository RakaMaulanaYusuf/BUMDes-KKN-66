// src/app/components/HeroSection.tsx
export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
          Membangun Desa
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-300">
            Bersama
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 fade-in opacity-90">
          BUMDes Gentan - Badan Usaha Milik Desa yang berdedikasi untuk kemajuan dan kesejahteraan masyarakat Gentan, Sukoharjo
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
          <button 
            onClick={() => scrollToSection('tentang')}
            className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
          >
            Pelajari Lebih Lanjut
          </button>
          <button 
            onClick={() => scrollToSection('kontak')}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300"
          >
            Hubungi Kami
          </button>
        </div>
      </div>
      <div className="wave"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating"></div>
      <div className="absolute bottom-40 right-10 w-16 h-16 bg-white/10 rounded-full floating" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-white/10 rounded-full floating" style={{animationDelay: '2s'}}></div>
    </section>
  );
}