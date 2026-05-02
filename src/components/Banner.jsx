"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import tiles1 from "../assets/tiles-1.jpg";
import tiles2 from "../assets/tiles-2.jpg";
import tiles3 from "../assets/tiles-3.jpg";
import tiles4 from "../assets/tiles-4.jpg";

const Banner = () => {
  const slides = [
    { id: 1, img: tiles1, title: "Luxury Marble Tiles", desc: "Experience the elegance of premium marble for your dream home." },
    { id: 2, img: tiles2, title: "Modern Ceramic Collection", desc: "Durable and stylish ceramic tiles for every corner." },
    { id: 3, img: tiles3, title: "Exotic Floor Patterns", desc: "Unique designs that redefine your living space aesthetics." },
    { id: 4, img: tiles4, title: "Premium Wall Textures", desc: "Transform your walls with our exclusive textured tiles." },
  ];

  return (
    <div className="relative w-full h-[550px] md:h-[80vh] group overflow-hidden bg-gray-900">
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="relative w-full h-full">
                {/* Zooming Background Image */}
                <div className={`absolute inset-0 transition-transform duration-[6000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'}`}>
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10 flex items-center">
                  <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-3xl text-white">
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={isActive ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
                      >
                        {slide.title}
                      </motion.h1>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={isActive ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg md:text-xl mb-10 text-gray-200"
                      >
                        {slide.desc}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isActive ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-wrap gap-4"
                      >
                        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg active:scale-95">
                          Shop Now
                        </button>
                        <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold rounded-lg transition-all active:scale-95">
                          View Details
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;