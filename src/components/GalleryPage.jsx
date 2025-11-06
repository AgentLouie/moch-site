import React, { useState, useRef } from "react"; // 1. Import useRef
import Footer from "./Footer";
import { 
  motion, 
  AnimatePresence,
  useScroll,           // 2. Import scroll hooks
  useTransform,
  useMotionValueEvent
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

// 3. Add header variants
const headerVariants = {
  visible: { y: 0 },
  hidden: { y: "-100%" },
};

const images = Array.from({ length: 36 }, (_, i) => `/carousel/${i + 1}.png`);

const GalleryPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false); // 4. Add hidden state

  // 5. Add scroll logic for header
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // 6. Setup parallax logic
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section 
      ref={ref} // 7. Add ref to section
      className="relative min-h-screen flex flex-col bg-gradient-to-br from-[#0b0b1a] via-[#141421] to-[#0a0a0f] text-white overflow-hidden"
    >
      {/* ... Ambient Glows ... */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#a78bfa]/25 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#f5a9b8]/20 blur-[160px] rounded-full animate-pulse" />

      {/* 8. Apply parallax style to paws */}
      <motion.img
        src="/paw.png"
        alt="Paw print"
        className="absolute top-1/4 left-[10%] w-32 h-32 md:w-64 md:h-64 opacity-10 rotate-12 z-0 hidden md:block"
        style={{ y: y1 }}
      />
      <motion.img
        src="/paw.png"
        alt="Paw print"
        className="absolute bottom-1/4 right-[10%] w-24 h-24 md:w-48 md:h-48 opacity-10 -rotate-12 z-0 hidden md:block"
        style={{ y: y2 }}
      />

      {/* 9. Header converted to motion.header */}
      <motion.header 
        className="absolute top-0 w-full flex items-center justify-between px-6 sm:px-8 py-6 z-20 bg-[#0a0a0f]/40 backdrop-blur-md border-b border-white/10"
        variants={headerVariants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <a href="/" className="flex items-center gap-3">
          <img 
            src="/logo.png"
            alt="Mochi Logo" 
            className="h-8 w-8 sm:h-9 sm:w-9" 
          />
          <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent font-bungee">
            Mochi
          </span>
        </a>
        
        {/* 10. Desktop Nav links converted to motion.a */}
        <nav className="hidden md:flex gap-8 text-sm items-center">
          <motion.a href="/" className="hover:text-[#a78bfa] transition font-sans" whileHover={{ scale: 1.1 }}>Home</motion.a>
          <motion.a href="/#tokenomics" className="hover:text-[#f5a9b8] transition font-sans" whileHover={{ scale: 1.1 }}>Tokenomics</motion.a>
          <motion.a href="/#gallery" className="hover:text-[#f5a9b8] transition font-sans" whileHover={{ scale: 1.1 }}>Meme Gallery</motion.a>
          <motion.a href="/#faq" className="hover:text-[#86efac] transition font-sans" whileHover={{ scale: 1.1 }}>FAQ</motion.a>
          <motion.a href="/#community" className="hover:text-[#a78bfa] transition font-sans" whileHover={{ scale: 1.1 }}>Community</motion.a>
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
              <a href="/#tokenomics" className="hover:text-[#f5a9b8]" onClick={() => setMenuOpen(false)}>Tokenomics</a>
              <a href="/#gallery" className="hover:text-[#f5a9b8]" onClick={() => setMenuOpen(false)}>Meme Gallery</a>
              <a href="/#faq" className="hover:text-[#86efac]" onClick={() => setMenuOpen(false)}>FAQ</a>
              <a href="/#community" className="hover:text-[#a78bfa]" onClick={() => setMenuOpen(false)}>Community</a>
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

      {/* Back Button */}
      <motion.div 
        className="w-full flex justify-center border-b border-white/5 bg-[#0a0a0f]/30 backdrop-blur-md py-4 relative z-10 pt-24"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }} // Changed to animate
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href="/"
          className="px-6 py-2 rounded-full bg-gradient-to-r from-[#a78bfa]/20 to-[#f5a9b8]/20 border border-white/10 text-sm text-white hover:from-[#a78bfa]/40 hover:to-[#f5a9b8]/40 hover:shadow-[0_0_15px_rgba(245,169,184,0.4)] transition-all"
        >
          ← Back to Home
        </a>
      </motion.div>

      {/* Gallery Title */}
      <motion.div 
        className="text-center mt-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }} // Changed to animate
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bungee font-bold bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
          Gallery
        </h1>
        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          Explore all Mochi moments captured in time 🐾
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="relative flex-1 w-full max-w-6xl mx-auto py-16 px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center z-10">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="w-full aspect-square rounded-xl bg-[#111]/60 border border-white/10 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.05)] transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
            whileHover={{ scale: 1.05, zIndex: 10, y: -5 }} // Already had springy hover
          >
            <img
              src={src}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default GalleryPage;