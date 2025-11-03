import React, { useState } from "react"; // 1. Added useState
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion"; // 1. Added motion imports
import { Menu, X } from "lucide-react"; // 1. Added icon imports

const images = Array.from({ length: 29 }, (_, i) => `/carousel/${i + 1}.png`);

const GalleryPage = () => {
  const [menuOpen, setMenuOpen] = useState(false); // 2. Added menu state

  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-[#0b0b1a] via-[#141421] to-[#0a0a0f] text-white overflow-hidden">
      {/* ... Ambient Glows ... */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#a78bfa]/25 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#f5a9b8]/20 blur-[160px] rounded-full animate-pulse" />

      {/* Header */}
      <header className="absolute top-0 w-full flex items-center justify-between px-6 sm:px-8 py-6 z-20 bg-[#0a0a0f]/40 backdrop-blur-md border-b border-white/10">
        <a href="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" // 👈 Make sure your logo is here
            alt="Mochi Logo" 
            className="h-8 w-8 sm:h-9 sm:w-9" 
          />
          <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent font-bungee">
            Mochi
          </span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="/" className="hover:text-[#a78bfa] transition font-sans">Home</a>
          <a href="/#gallery" className="hover:text-[#f5a9b8] transition font-sans">Meme Gallery</a>
          {/* ✨ NEW LINK */}
          <a href="/#faq" className="hover:text-[#86efac] transition font-sans">FAQ</a>
          <a href="/#community" className="hover:text-[#a78bfa] transition font-sans">Community</a>
          <a
            href="/#community"
            className="bg-gradient-to-r from-[#a78bfa] to-[#f5a9b8] px-5 py-2 rounded-full text-white shadow-[0_0_15px_rgba(245,169,184,0.4)] hover:opacity-90 transition"
          >
            Join Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-white hover:text-[#f5a9b8] transition"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full left-0 w-full bg-[#0a0a0f]/95 backdrop-blur-lg border-t border-white/10 flex flex-col items-center py-6 space-y-5 text-sm md:hidden"
            >
              <a href="/" className="hover:text-[#a78bfa]" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="/#gallery" className="hover:text-[#f5a9b8]" onClick={() => setMenuOpen(false)}>Meme Gallery</a>
              {/* ✨ NEW LINK */}
              <a href="/#faq" className="hover:text-[#86efac]" onClick={() => setMenuOpen(false)}>FAQ</a>
              <a href="/#community" className="hover:text-[#a78bfa]" onClick={() => setMenuOpen(false)}>Community</a>
              <a
                href="/#community"
                className="bg-gradient-to-r from-[#a78bfa] to-[#f5a9b8] px-5 py-2 rounded-full text-white shadow-[0_0_15px_rgba(245,169,184,0.4)] hover:opacity-90 transition"
                onClick={() => setMenuOpen(false)}
              >
                Join Us
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* 7. PADDING - Added pt-24 to push content below the absolute header */}
      <div className="w-full flex justify-center border-b border-white/5 bg-[#0a0a0f]/30 backdrop-blur-md py-4 relative z-10 pt-24">
        <a
          href="/"
          className="px-6 py-2 rounded-full bg-gradient-to-r from-[#a78bfa]/20 to-[#f5a9b8]/20 border border-white/10 text-sm text-white hover:from-[#a78bfa]/40 hover:to-[#f5a9b8]/40 hover:shadow-[0_0_15px_rgba(245,169,184,0.4)] transition-all"
        >
          ← Back to Home
        </a>
      </div>

      {/* ... Gallery Title (no changes) ... */}
      <div className="text-center mt-12 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bungee font-bold bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
          Gallery
        </h1>
        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          Explore all Mochi moments captured in time 🐾
        </p>
      </div>

      {/* ... Gallery Grid (no changes) ... */}
      <div className="relative flex-1 w-full max-w-6xl mx-auto py-16 px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center z-10">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full aspect-square rounded-xl bg-[#111]/60 border border-white/10 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:scale-105 hover:shadow-[0_0_30px_rgba(167,139,250,0.3)] transition"
          >
            <img
              src={src}
              alt={`gallery-${index}`}
              className="w-full h-full object-contain" // no cropping
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default GalleryPage;