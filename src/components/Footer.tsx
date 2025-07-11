// src/components/Footer.tsx
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Pastikan Anda memiliki @react-icons/fa6 terinstal, jika tidak gunakan FaTwitter dari 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8" style={{ backgroundColor: 'var(--color-primary-light-yellow)', color: 'var(--color-text-dark)' }}>
      <div className="container flex flex-col items-center">
        <Link href="/" className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text-dark)' }}>
          BUMDes
          <span className="block text-lg font-normal -mt-1" style={{ color: 'var(--color-text-gray)' }}>GENTAN</span>
        </Link>
        <div className="flex space-x-6 mb-8 text-3xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-footer-social-icon)' }}>
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-footer-social-icon)' }}>
            <FaYoutube />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-footer-social-icon)' }}>
            <FaXTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-footer-social-icon)' }}>
            <FaFacebookF />
          </a>
        </div>
        <div className="w-full h-[1px] mb-6" style={{ backgroundColor: 'var(--color-text-gray)' }}></div>
        <p className="text-sm" style={{ color: 'var(--color-text-gray)' }}>
          Hak Cipta © {currentYear} BUMDes GENTAN | Baki, Sukoharjo
        </p>
      </div>
    </footer>
  );
};

export default Footer;