import React from "react";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Community = () => {
  return (
    // ✨ FIX: Background changed to match the Hero section
    <section 
      id="community" 
      className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#0b0b1a] via-[#141421] to-[#0a0a0f] overflow-hidden py-24 sm:py-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.07),transparent_70%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-[300px] bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(134,239,172,0.1),transparent_70%)] blur-2xl" />
      <img
        src="/paw.png"
        alt="Paw print"
        className="absolute top-1/2 -translate-y-1/2 right-8 sm:right-16 w-24 h-24 sm:w-32 sm:h-32 rotate-12 z-0"
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center gap-8 text-center px-6">
        
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bungee font-bold bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Join the Mochi Community
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-white/70 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        >
          Fetch the Memes, Hold the $MOCHI, Love the Pack 
          Follow and join our community on X and Telegram for memes!.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div 
        className="flex flex-col sm:flex-row gap-6 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        >
        {/* X (formerly Twitter) Button */}
        <a
            href="https://x.com/mochidog_sol" // 👈 Replace with your X/Twitter URL
            target="_blank"
            rel="noopener noreferrer"
            // 2. Updated styling for X (black background)
            className="flex items-center justify-center gap-3 text-lg font-semibold text-white bg-[#1a1a1f] hover:bg-[#25252c]k px-8 py-4 rounded-full shadow-lg shadow-gray-500/20 transition-all duration-300 transform hover:scale-105"
        >
            {/* 3. Replaced icon */}
            <FaXTwitter size={24} /> 
            {/* 4. Changed text */}
            Follow on X
        </a>

          {/* Telegram Button */}
          <a
            href="https://t.me/+qFyykOdCJo9iZjE9" // 👈 Replace with your Telegram URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-lg font-semibold text-white bg-[#2AABEE]/90 hover:bg-[#2AABEE] px-8 py-4 rounded-full shadow-lg shadow-[#2AABEE]/20 transition-all duration-300 transform hover:scale-105"
          >
            <FaTelegramPlane size={24} />
            Join Telegram
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Community;