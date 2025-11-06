import React from "react";
import { motion } from "framer-motion"; // 1. Import motion
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <motion.footer 
      className="relative w-full border-t border-white/10 bg-gradient-to-t from-[#0a0a0f] via-[#141421] to-[#0b0b1a] py-12 px-6 sm:px-10"
      // 2. Add Animate on Scroll
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background Glow */}
      <div className="absolute inset-x-0 top-0 h-[150px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(167,139,250,0.1),transparent_70%)] blur-2xl z-0" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
        
        {/* Logo + Copyright Wrapper */}
        {/* 3. Make logo and title link to top */}
        <a 
          href="#home" 
          className="flex items-center gap-4 sm:gap-6 group"
        >
          {/* Logo Image */}
          <img
            src="/logo.png"
            alt="Mochi Logo"
            className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Copyright Text */}
          <div className="text-left">
            <h3 className="text-3xl sm:text-4xl font-bold font-bungee bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent leading-tight transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.5)]">
              $MOCHI
            </h3>
            <p className="mt-3 text-base text-white/50 leading-snug">
              &copy; {new Date().getFullYear()} Mochi. All rights reserved.
            </p>
            <p className="mt-1 text-sm text-white/40 leading-snug">
              Fetch the Memes, Hold the $MOCHI, Love the Community 
            </p>
          </div>
        </a>

        {/* 4. Add springy hover to Social Links */}
        <div className="flex gap-6">
          <motion.a
            href="https://x.com/mochidog_sol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition"
            aria-label="Follow on X"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaXTwitter size={28} />
          </motion.a>
          <motion.a
            href="https.t.me/your-telegram" // 👈 Add your Telegram link
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition"
            aria-label="Join Telegram"
            whileHover={{ scale: 1.2, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaTelegramPlane size={28} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;