import React from "react";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Community = () => {
  return (
    <section
      id="community"
      className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#0b0b1a] via-[#141421] to-[#0a0a0f] overflow-hidden py-24 sm:py-32"
    >
      {/* 🌌 Ambient background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.07),transparent_70%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-[300px] bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(245,169,184,0.08),transparent_70%)] blur-2xl" />
      <div className="absolute inset-x-0 top-0 h-[300px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(134,239,172,0.06),transparent_70%)] blur-2xl" />
      <img
        src="/paw.png"
        alt="Paw print"
        className="absolute top-1/2 -translate-y-1/2 right-8 sm:right-16 w-24 h-24 sm:w-32 sm:h-32 rotate-12 opacity-40"
      />

      {/* 🐾 Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bungee font-bold bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Join the Mochi Community 🐶
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Fetch the vibes, share the laughs, and be
          part of a growing pack that celebrates love, fun, and community.  
          Follow us on X and join our Telegram to stay connected!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* X Button */}
          <a
            href="https://x.com/mochidog_sol"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 text-lg font-semibold text-white bg-[#1a1a1f] hover:bg-[#25252c] px-8 py-4 rounded-full shadow-[0_0_20px_rgba(167,139,250,0.3)] transition-all duration-300 hover:scale-105"
          >
            <FaXTwitter
              size={24}
              className="text-[#a78bfa] group-hover:rotate-6 transition-transform duration-300"
            />
            Follow on X
          </a>

          {/* Telegram Button */}
          <a
            href="https://t.me/+qFyykOdCJo9iZjE9"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 text-lg font-semibold text-white bg-[#1a1a1f] hover:bg-[#25252c] px-8 py-4 rounded-full shadow-[0_0_20px_rgba(134,239,172,0.3)] transition-all duration-300 hover:scale-105"
          >
            <FaTelegramPlane
              size={24}
              className="text-[#86efac] group-hover:-rotate-6 transition-transform duration-300"
            />
            Join Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
