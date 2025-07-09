// src/components/Navbar.tsx
'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar fixed top-0 w-full z-50 bg-white/80 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-green-700 flex items-center">
          <div className="w-8 h-8 bg-green-600 rounded-full mr-2 flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          BUMDes Gentan
        </div>
        
        <div className="space-x-8 hidden md:flex">
          <button 
            onClick={() => scrollToSection('beranda')}
            className="hover:text-green-700 transition-colors duration-300 font-medium"
          >
            Beranda
          </button>
          <button 
            onClick={() => scrollToSection('tentang')}
            className="hover:text-green-700 transition-colors duration-300 font-medium"
          >
            Tentang
          </button>
          <button 
            onClick={() => scrollToSection('layanan')}
            className="hover:text-green-700 transition-colors duration-300 font-medium"
          >
            Layanan
          </button>
          <button 
            onClick={() => scrollToSection('statistik')}
            className="hover:text-green-700 transition-colors duration-300 font-medium"
          >
            Statistik
          </button>
          <button 
            onClick={() => scrollToSection('kontak')}
            className="hover:text-green-700 transition-colors duration-300 font-medium"
          >
            Kontak
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-6 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('beranda')}
              className="block w-full text-left hover:text-green-700 transition-colors duration-300"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('tentang')}
              className="block w-full text-left hover:text-green-700 transition-colors duration-300"
            >
              Tentang
            </button>
            <button 
              onClick={() => scrollToSection('layanan')}
              className="block w-full text-left hover:text-green-700 transition-colors duration-300"
            >
              Layanan
            </button>
            <button 
              onClick={() => scrollToSection('statistik')}
              className="block w-full text-left hover:text-green-700 transition-colors duration-300"
            >
              Statistik
            </button>
            <button 
              onClick={() => scrollToSection('kontak')}
              className="block w-full text-left hover:text-green-700 transition-colors duration-300"
            >
              Kontak
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}