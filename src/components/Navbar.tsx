// src/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi'; // Perlu install react-icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-xl font-bold" style={{ color: 'var(--color-text-dark)' }}>
          BUMDes
          <span className="block text-sm font-normal -mt-1" style={{ color: 'var(--color-text-gray)' }}>GENTAN</span>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl" style={{ color: 'var(--color-text-dark)' }}>
            <HiMenu />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium" style={{ color: 'var(--color-navbar-links)' }}>
          <li>
            <Link href="/">BERANDA</Link>
          </li>
          <li>
            <Link href="/profile">PROFILE</Link>
          </li>
          <li>
            <Link href="/berita">BERITA</Link>
          </li>
          <li>
            <Link href="/galeri">GALERI</Link>
          </li>
          <li>
            <Link href="/cepat-usaha">CEPAT USAHA</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center pt-20 animate-fade-in">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-3xl" style={{ color: 'var(--color-text-dark)' }}>
            × {/* Close icon */}
          </button>
          <ul className="flex flex-col space-y-6 text-xl font-medium" style={{ color: 'var(--color-navbar-links)' }}>
            <li>
              <Link href="/" onClick={toggleMenu}>BERANDA</Link>
            </li>
            <li>
              <Link href="/profile" onClick={toggleMenu}>PROFILE</Link>
            </li>
            <li>
              <Link href="/berita" onClick={toggleMenu}>BERITA</Link>
            </li>
            <li>
              <Link href="/galeri" onClick={toggleMenu}>GALERI</Link>
            </li>
            <li>
              <Link href="/cepat-usaha" onClick={toggleMenu}>CEPAT USAHA</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;