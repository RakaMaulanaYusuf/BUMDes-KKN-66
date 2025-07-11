// src/app/page.tsx
import HeroSection from '../components/HeroSection';
import ImageSlider from '../components/ImageSlider';
import NewsSection from '../components/NewsSection';
import ActivityArchiveSection from '../components/ActivityArchiveSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImageSlider />
      <NewsSection />
      <ActivityArchiveSection />
    </>
  );
}