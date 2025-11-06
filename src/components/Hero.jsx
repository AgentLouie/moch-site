import React, { useState, useRef } from "react";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform,
  useMotionValueEvent,
  useMotionValue, // ✨ FIX: Added useMotionValue here
  useSpring 
} from "framer-motion";
import { Menu, X, Copy } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import mochiImage from "/mochi-meme.png";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};
const headerVariants = {
  visible: { y: 0 },
  hidden: { y: "-100%" },
};
// -----------------------------

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hidden, setHidden] = useState(false);

  const walletAddress = "SOON";

  // --- Header Scroll Logic ---
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const ref = useRef(null);

  // --- Parallax Logic ---
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // --- Mouse Follow Logic ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 20 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e) => {
    if (ref.current) {
      const { clientWidth, clientHeight, offsetLeft, offsetTop } = ref.current;
      const x = (e.clientX - offsetLeft - clientWidth / 2) / (clientWidth / 2);
      const y = (e.clientY - offsetTop - clientHeight / 2) / (clientHeight / 2);
      mouseX.set(x);
      mouseY.set(y);
    }
  };
  // ------------------------------

  return (
    <section 
      id="home" 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen w-full bg-gradient-to-br from-[#0b0b1a] via-[#141421] to-[#0a0a0f] text-white overflow-hidden"
    >
      {/* ... (Ambient glows & Parallax Paws) ... */}
      <motion.img src="/paw.png" alt="Paw print" className="absolute top-1/4 left-[10%] w-32 h-32 md:w-64 md:h-64 opacity-10 rotate-12 z-0 hidden md:block" style={{ y: y1 }} />
      <motion.img src="/paw.png" alt="Paw print" className="absolute bottom-1/4 right-[10%] w-24 h-24 md:w-48 md:h-48 opacity-10 -rotate-12 z-0 hidden md:block" style={{ y: y2 }} />

      {/* --- HEADER --- */}
      <motion.header 
        className="absolute top-0 w-full flex items-center justify-between px-6 sm:px-8 py-6 z-20 bg-[#0a0a0f]/40 backdrop-blur-md border-b border-white/10"
        variants={headerVariants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Logo */}
        <a 
          href="/"
          className="flex items-center gap-3"
        >
          <img src="/logo.png" alt="Mochi Logo" className="h-8 w-8 sm:h-9 sm:w-9" />
          <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent font-bungee">
            Mochi
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm items-center">
          <motion.a href="/" className="hover:text-[#a78bfa] transition font-sans" whileHover={{ scale: 1.1 }}>
            Home
          </motion.a>
          <motion.a href="#tokenomics" className="hover:text-[#f5a9b8] transition font-sans" whileHover={{ scale: 1.1 }}>
            Tokenomics
          </motion.a>
          <motion.a href="#gallery" className="hover:text-[#f5a9b8] transition font-sans" whileHover={{ scale: 1.1 }}>
            Meme Gallery
          </motion.a>
          <motion.a href="#faq" className="hover:text-[#86efac] transition font-sans" whileHover={{ scale: 1.1 }}>
            FAQ
          </motion.a>
          <motion.a href="#community" className="hover:text-[#a78bfa] transition font-sans" whileHover={{ scale: 1.1 }}>
            Community
          </motion.a>
          <motion.a
            href="https://x.com/mochidog_sol"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#a78bfa] to-[#f5a9b8] px-5 py-2 rounded-full text-white shadow-[0_0_15px_rgba(245,169,184,0.4)]"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 25px rgba(245,169,184,0.6)" 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            Join Us
          </motion.a>
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
              <a href="#tokenomics" className="hover:text-[#f5a9b8]" onClick={() => setMenuOpen(false)}>Tokenomics</a>
              <a href="#gallery" className="hover:text-[#f5a9b8]" onClick={() => setMenuOpen(false)}>Meme Gallery</a>
              <a href="#faq" className="hover:text-[#86efac]" onClick={() => setMenuOpen(false)}>FAQ</a>
              <a href="#community" className="hover:text-[#a78bfa]" onClick={() => setMenuOpen(false)}>Community</a>
              <a
                href="https://x.com/mochidog_sol"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#a78bfa] to-[#f5a9b8] px-5 py-2 rounded-full text-white shadow-[0_0_15px_rgba(245,169,184,0.4)] hover:opacity-90 transition"
                onClick={() => setMenuOpen(false)}
              >
                Join Us
              </a>
              {/* Social links in mobile menu */}
              <div className="flex gap-8 pt-4 border-t border-white/10 w-[90%] justify-center mt-4">
                <a
                  href="https://x.com/mochidog_sol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition"
                >
                  <FaXTwitter size={26} />
                </a>
                <a
                  href="https://t.me/+qFyykOdCJo9iZjE9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition"
                >
                  <FaTelegramPlane size={26} />
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
      
      {/* --- HERO CONTENT --- */}
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full px-6 sm:px-10 pt-32 md:pt-40 gap-12 md:gap-16">
        {/* Mochi Image */}
        <motion.div
          className="flex justify-center md:w-1/2 order-1 md:order-none"
          style={{
            perspective: "800px",
          }}
        >
          <motion.img
            src={mochiImage}
            alt="Mochi"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              rotateX, rotateY,
            }}
            whileHover={{ scale: 1.05 }}
            className="w-64 sm:w-80 md:w-[420px] lg:w-[480px] h-auto drop-shadow-[0_0_60px_rgba(167,139,250,0.25)]"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-wide font-bungee bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.25)] mb-4">
            MOCHI
          </motion.h1>

          <motion.h2 
            variants={itemVariants} 
            className="text-3xl sm:text-4xl md:text-5xl font-semibold font-sans bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] leading-snug"
          >
            Born from love, fueled by memes.<br />Mochi on Solana
          </motion.h2>

          <motion.p variants={itemVariants} className="mt-6 text-gray-400 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Fetch the Memes, Hold the $MOCHI, Love the Community
          </motion.p>

          {/* Wallet Address */}
          <motion.div variants={itemVariants} className="mt-8 bg-[#1a1a1f]/60 border border-white/10 backdrop-blur-sm rounded-xl px-5 py-4 flex items-center justify-between gap-3 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <span className="text-sm text-gray-300 truncate">
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {walletAddress}
              </motion.span>
            </span>
            <motion.button
              onClick={handleCopy}
              className="flex items-center gap-1 bg-gradient-to-r from-[#a78bfa]/30 to-[#f5a9b8]/30 px-3 py-1.5 rounded-md border border-white/10 hover:from-[#a78bfa]/50 hover:to-[#f5a9b8]/50 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Copy size={16} />
              <span className="text-xs">{copied ? "Copied!" : "Copy"}</span>
            </motion.button>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div variants={itemVariants} className="flex gap-6 mt-8 justify-center md:justify-start">
            <motion.a
              href="https://x.com/mochidog_sol"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1f] hover:bg-[#25252c] rounded-full p-4 shadow-md transition"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaXTwitter size={22} className="text-[#a78bfa]" />
            </motion.a>
            <motion.a
              href="https://t.me/+qFyykOdCJo9iZjE9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1f] hover:bg-[#25252c] rounded-full p-4 shadow-md transition"
              whileHover={{ scale: 1.15, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaTelegramPlane size={22} className="text-[#86efac]" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;