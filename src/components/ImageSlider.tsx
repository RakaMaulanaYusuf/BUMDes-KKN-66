// src/components/ImageSlider.tsx
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface SlideImage {
  src: string;
  alt: string;
}

const images: SlideImage[] = [
  { src: '/images/gambar1.jpg', alt: 'Gambar Kategori 1' },
  { src: '/images/gambar2.jpg', alt: 'Gambar Kategori 2' },
  { src: '/images/gambar3.jpg', alt: 'Gambar Kategori 3' },
];

const ImageSlider = () => {
  return (
    <section className="py-8" style={{ backgroundColor: 'var(--color-background-white)' }}>
      <div className="container mx-auto px-4">
        <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96"> {/* Container dengan tinggi yang terdefinisi */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper h-full" // Swiper mengambil tinggi penuh dari parent-nya
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg"
                     style={{ border: '1px solid var(--color-border-light)' }}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill // Mengganti layout="fill"
                    style={{ objectFit: 'cover' }} // Mengganti objectFit="cover"
                    className="rounded-lg"
                    priority={index === 0} // Untuk mengoptimalkan gambar pertama (LCP)
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;