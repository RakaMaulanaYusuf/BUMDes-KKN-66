// src/components/HeroSection.tsx
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="py-24 px-4 text-center" style={{ backgroundColor: 'var(--color-primary-light-yellow)' }}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-dark)' }}>
        Selamat Datang,
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-8" style={{ color: 'var(--color-text-dark)' }}>
        di Website BUMDes GENTAN
      </h2>
      <Link href="/tentang" className="py-3 px-8 rounded-full text-lg hover:opacity-90 transition duration-300"
        style={{ backgroundColor: 'var(--color-button-dark)', color: 'white' }}>
        Tentang Kami
      </Link>
    </section>
  );
};

export default HeroSection;