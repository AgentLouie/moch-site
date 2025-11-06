import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

const images = Array.from({ length: 36 }, (_, i) => `/carousel/${i + 1}.png`);

const PortraitCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [cardSize, setCardSize] = useState(340);
  const [spacing, setSpacing] = useState(Math.round(340 * 0.75));
  const x = useMotionValue(0);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 480) {
        setCardSize(200);
        setSpacing(Math.round(200 * 0.6));
      } else if (window.innerWidth < 768) {
        setCardSize(260);
        setSpacing(Math.round(260 * 0.65));
      } else if (window.innerWidth < 1024) {
        setCardSize(300);
        setSpacing(Math.round(300 * 0.7));
      } else {
        setCardSize(340);
        setSpacing(Math.round(340 * 0.75));
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const circularDiff = (index) => {
    const n = images.length;
    let diff = index - current;
    if (diff > n / 2) {
      diff -= n;
    } else if (diff < -n / 2) {
      diff += n;
    }
    return diff;
  };

  const getPosition = (index) => {
    const diff = circularDiff(index);
    const absDiff = Math.abs(diff);
    const visibleCardLimit = 3;

    if (absDiff > visibleCardLimit) {
      return {
        opacity: 0,
        scale: 0.5,
        zIndex: 1,
        x: diff > 0 ? 1000 : -1000,
      };
    }

    if (diff === 0) return { x: 0, scale: 1.2, zIndex: 10, opacity: 1 };
    if (absDiff === 1)
      return { x: diff * spacing, scale: 1.05, zIndex: 9, opacity: 1 };
    if (absDiff === 2)
      return { x: diff * spacing, scale: 0.9, zIndex: 8, opacity: 1 };
    return { x: diff * spacing, scale: 0.8, zIndex: 7, opacity: 1 };
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 80) {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    } else if (info.offset.x < -80) {
      setCurrent((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <section id="gallery" className="relative w-full min-h-[80vh] bg-gradient-to-br from-[#0b0b1a] via-[#141421] to-[#0a0a0f] overflow-hidden py-20 sm:py-28">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.07),transparent_70%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,169,184,0.05),transparent_70%)] blur-2xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(134,239,172,0.05),transparent_70%)] blur-2xl" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center gap-12">
        
        {/* ✨ Title Wrapper (Symmetrical paws, animates on scroll) */}
        <motion.div 
          className="relative flex items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Left Paw (resized) */}
          <img
            src="/paw.png"
            alt="Paw"
            className="w-8 h-8 sm:w-10 sm:h-10 opacity-70 -rotate-12"
          />

          {/* Title */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bungee font-bold bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent text-center"
          >
            Meme Gallery
          </h2>

          {/* Right Paw (added back) */}
          <img
            src="/paw.png"
            alt="Paw"
            className="w-8 h-8 sm:w-10 sm:h-10 opacity-70 rotate-12"
          />
        </motion.div>

        {/* Carousel container */}
        <motion.div
          className="relative w-full max-w-7xl h-[400px] sm:h-[500px] flex justify-center items-center overflow-visible cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x }}
          onDragEnd={handleDragEnd}
        >
          {images.map((src, index) => {
            const { scale, zIndex, x, opacity } = getPosition(index);
            return (
              <motion.img
                key={index}
                src={src}
                alt={`carousel-${index}`}
                className="absolute rounded-2xl object-cover select-none border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] cursor-pointer"
                style={{
                  width: `${cardSize}px`,
                  height: `${cardSize}px`,
                  zIndex,
                  boxShadow: "0 0 40px rgba(167,139,250,0.25)",
                }}
                animate={{ scale, x, opacity }}
                whileHover={{ scale: 1.05 }} // ✨ Added hover effect
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                draggable={false}
              />
            );
          })}
        </motion.div>

        {/* ✨ "View All" button (Animates on scroll) */}
        <motion.a
          href="/gallery"
          className="text-white/80 hover:text-white text-sm sm:text-base px-6 py-2 border border-white/10 rounded-full bg-[#1a1a1f]/40 hover:bg-[#1a1a1f]/70 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,250,0.1)] transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
        >
          View Full Gallery →
        </motion.a>
      </div>
    </section>
  );
};

export default PortraitCarousel;