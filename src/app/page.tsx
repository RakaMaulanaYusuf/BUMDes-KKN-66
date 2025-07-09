// src/app/page.tsx
'use client';

import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import TentangSection from '../components/TentangSection';
import LayananSection from '../components/LayananSection';
import StatistikSection from '../components/StatistikSection';
import KontakSection from '../components/KontakSection';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));

    // Counter animation
    const counters = document.querySelectorAll('[data-counter]');
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const finalValue = parseInt(target.getAttribute('data-counter') || '0');
          animateCounter(target, finalValue);
          counterObserver.unobserve(target);
        }
      });
    });

    counters.forEach(counter => counterObserver.observe(counter));

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const animateCounter = (element: HTMLElement, target: number) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current).toString();
    }, 20);
  };

  return (
    <>
      <HeroSection />
      <TentangSection />
      <LayananSection />
      <StatistikSection />
      <KontakSection />
    </>
  );
}