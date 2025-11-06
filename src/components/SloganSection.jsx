import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence

const slogans = [
  "Mochi to the Moon 🚀 | Powered by Love, Not Hype!",
  "Fetch the Future 🦴 | $MOCHI on Solana",
  "Stay Fluffy 💫",
  "In Mochi We Trust 🐶 | The Dog of Solana ☀️",
  "More Than a Meme 💫 | Mochi is Family 🐾",
];

const SloganSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slogans.length);
    }, 2500); // Slogan changes every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-24 bg-gradient-to-t from-[#0a0a0f] via-[#141421] to-[#0b0b1a] text-center overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.1),transparent_70%)] blur-2xl" />

      {/* ✨ PAW PRINTS (Symmetrical and subtle) */}
      <img
        src="/paw.png"
        alt="Paw print"
        className="absolute top-1/2 -translate-y-1/2 left-8 sm:left-16 w-24 h-24 sm:w-32 sm:h-32 opacity-10 -rotate-12 z-0"
      />
      <img
        src="/paw.png"
        alt="Paw print"
        className="absolute top-1/2 -translate-y-1/2 right-8 sm:right-16 w-24 h-24 sm:w-32 sm:h-32 opacity-10 rotate-12 z-0"
      />

      {/* ✨ CONTENT (Now animates on scroll) */}
      <motion.div 
        className="relative z-10 max-w-3xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* ✨ SLOGAN (Now cross-fades) */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={index} // This tells AnimatePresence to animate when the index changes
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold font-bungee bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] min-h-[100px] sm:min-h-[120px] flex items-center justify-center"
          >
            {slogans[index]}
          </motion.h2>
        </AnimatePresence>

        <p className="mt-4 text-gray-400">
          Mochi’s wisdom for dreamers, degens, and dog lovers alike.
        </p>
      </motion.div>
    </section>
  );
};

export default SloganSection;