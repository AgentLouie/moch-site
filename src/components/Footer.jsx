import React from "react";
import { FaTelegramPlane } from "react-icons/fa"; // From Font Awesome 5
import { FaXTwitter } from "react-icons/fa6";   // From Font Awesome 6

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-white/10 bg-gradient-to-t from-[#0a0a0f] via-[#141421] to-[#0b0b1a] py-12 px-6 sm:px-10">
      {/* Background Glow */}
      <div className="absolute inset-x-0 top-0 h-[150px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(167,139,250,0.1),transparent_70%)] blur-2xl z-0" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
        {/* Logo / Copyright */}
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold font-bungee bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent">
            $MOCHI
          </h3>
          <p className="mt-2 text-sm text-white/50">
            &copy; {new Date().getFullYear()} Mochi. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-white/40">
            Born from love, fueled by memes,
            Mochi on Solana.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://x.com/mochidog_sol" // 👈 Replace with your URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition transform hover:scale-110"
            aria-label="Follow on X"
          >
            <FaXTwitter size={28} />
          </a>
          <a
            href="https://t.me/+qFyykOdCJo9iZjE9" // 👈 Replace with your URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition transform hover:scale-110"
            aria-label="Join Telegram"
          >
            <FaTelegramPlane size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;