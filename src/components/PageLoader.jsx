import React from "react";
import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0b1a]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.img
        src="/logo.png"
        alt="Loading..."
        className="w-24 h-24"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default PageLoader;