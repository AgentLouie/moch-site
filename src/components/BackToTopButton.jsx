import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 👀 Detect scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 🆙 Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#a78bfa] to-[#f5a9b8]
                 hover:from-[#f5a9b8] hover:to-[#86efac]
                 p-4 rounded-full shadow-[0_0_25px_rgba(167,139,250,0.4)]
                 text-white backdrop-blur-lg border border-white/10
                 transition-transform duration-300 hover:scale-110"
      aria-label="Scroll to top"
    >
      <ArrowUp size={22} />
    </motion.button>
  );
};

export default ScrollToTopButton;
