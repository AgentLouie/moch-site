import React, { useState } from "react";
// No longer need react-router-dom's Link here
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Copy } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import mochiImage from "/mochi-meme.png";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const walletAddress = "SOON";

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen w-full bg-gradient-to-br from-[#0b0b1a] via-[#141421] to-[#0a0a0f] text-white overflow-hidden">
      {/* ... Ambient glows ... */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#a78bfa]/25 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#f5a9b8]/20 blur-[160px] rounded-full animate-pulse" />
      
      {/* ✨ PAW PRINTS FIX: Changed z-50 to z-0, added opacity, and adjusted position */}
      <img
        src="/paw.png"
        alt="Paw print"
        className="absolute top-1/4 left-1/3 w-64 h-64 opacity-50 rotate-12 z-0"
      />
      <img
        src="/paw.png"
        alt="Paw print"
        className="absolute bottom-1/4 right-1/3 w-48 h-48 opacity-30 -rotate-12 z-0"
      />


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
          <a href="#gallery" className="hover:text-[#f5a9b8] transition font-sans">Meme Gallery</a>
          {/* ✨ NEW LINK */}
          <a href="#faq" className="hover:text-[#86efac] transition font-sans">FAQ</a>
          <a href="#community" className="hover:text-[#a78bfa] transition font-sans">Community</a>
          <a
            href="https://x.com/mochidog_sol"
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
              <a href="#gallery" className="hover:text-[#f5a9b8]" onClick={() => setMenuOpen(false)}>Meme Gallery</a>
              {/* ✨ NEW LINK */}
              <a href="#faq" className="hover:text-[#86efac]" onClick={() => setMenuOpen(false)}>FAQ</a>
              <a href="#community" className="hover:text-[#a78bfa]" onClick={() => setMenuOpen(false)}>Community</a>
              <a
                href="#community"
                className="bg-gradient-to-r from-[#a78bfa] to-[#f5a9b8] px-5 py-2 rounded-full text-white shadow-[0_0_15px_rgba(245,169,184,0.4)] hover:opacity-90 transition"
                onClick={() => setMenuOpen(false)}
              >
                Join Us
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Hero content (This is relative, so it stacks on top of z-0 elements) */}
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full px-6 sm:px-10 pt-32 md:pt-40 gap-12 md:gap-16">
        
        {/* Mochi Image */}
        <motion.div
          className="flex justify-center md:w-1/2 order-1 md:order-none"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.03, 1],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <motion.img
            src={mochiImage}
            alt="Mochi"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-64 sm:w-80 md:w-[420px] lg:w-[480px] h-auto drop-shadow-[0_0_60px_rgba(167,139,250,0.25)]"
          />
        </motion.div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-wide font-bungee bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.25)] mb-4">
            MOCHI
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent font-['Cormorant_Garamond'] drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] leading-snug">
            Born from love, fueled by memes.<br />Mochi on Solana
          </h2>
          <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Mochi Love, Mochi Memes, Mochi Magic
          </p>
          {/* ... Wallet Address ... */}
          <div className="mt-8 bg-[#1a1a1f]/60 border border-white/10 backdrop-blur-sm rounded-xl px-5 py-4 flex items-center justify-between gap-3 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <span className="text-sm text-gray-300 truncate">{walletAddress}</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 bg-gradient-to-r from-[#a78bfa]/30 to-[#f5a9b8]/30 px-3 py-1.5 rounded-md border border-white/10 hover:from-[#a78bfa]/50 hover:to-[#f5a9b8]/50 transition"
            >
              <Copy size={16} />
              <span className="text-xs">{copied ? "Copied!" : "Copy"}</span>
            </button>
          </div>
          {/* ... Social Links ... */}
          <div className="flex gap-6 mt-8 justify-center md:justify-start">
            <a
              href="https://x.com/mochidog_sol" // Replace with your URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1f] hover:bg-[#25252c] rounded-full p-4 shadow-md transition"
            >
              <FaXTwitter size={22} className="text-[#a78bfa]" />
            </a>
            <a
              href="https://t.me/+qFyykOdCJo9iZjE9" // Replace with your URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1f] hover:bg-[#25252c] rounded-full p-4 shadow-md transition"
            >
              <FaTelegramPlane size={22} className="text-[#86efac]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;