import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const Tokenomics = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "SOON";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { label: "Total Supply", value: "1,000,000,000" },
    { label: "Liquidity", value: "BURNED 🔥" },
    { label: "Tax", value: "0%" },
    { label: "Mint & Freeze", value: "REVOKED 🔒" },
  ];

  return (
    <section id="tokenomics" className="relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#0b0b1a] via-[#141421] to-[#0a0a0f] overflow-hidden py-24 sm:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(167,139,250,0.08),transparent_70%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(134,239,172,0.05),transparent_70%)] blur-2xl" />
      
      <img src="/paw.png" alt="Paw" className="absolute top-16 left-12 w-32 h-32 opacity-10 rotate-12 z-0" />
      <img src="/paw.png" alt="Paw" className="absolute bottom-24 right-16 w-40 h-40 opacity-10 -rotate-12 z-0" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center gap-12"> {/* Reduced gap from 16 to 12 */}
        
        {/* Title & Description Container */}
        <div className="flex flex-col items-center gap-6 text-center max-w-3xl">
          {/* Title */}
          <motion.div 
            className="relative flex items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img src="/paw.png" alt="Paw" className="w-8 h-8 sm:w-10 sm:h-10 opacity-70 -rotate-12" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bungee font-bold bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent text-center">
              Tokenomics
            </h2>
            <img src="/paw.png" alt="Paw" className="w-8 h-8 sm:w-10 sm:h-10 opacity-70 rotate-12" />
          </motion.div>

          {/* ✨ NEW: Description Text */}
          <motion.p
            className="text-base sm:text-lg text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
          >
            $MOCHI launched with transparency and simplicity to ensure long-term growth and trust. 
            No team allocation. Just a 100% fair launch designed to let the community decide the future.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mt-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center p-6 min-h-[160px] rounded-2xl bg-[#1a1a1f]/40 border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(167,139,250,0.1)] text-center group hover:border-white/20 hover:bg-[#1a1a1f]/60 transition-all"
            >
              <h3 className="text-white/60 text-sm sm:text-base font-sans mb-2">{stat.label}</h3>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#a78bfa] to-[#f5a9b8] bg-clip-text text-transparent font-bungee break-words w-full">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contract Address Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
          className="w-full max-w-3xl"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#a78bfa]/10 to-[#86efac]/10 border border-white/10 backdrop-blur-md">
             <div className="flex-1 text-center sm:text-left overflow-hidden w-full">
                <p className="text-white/50 text-sm mb-1 font-sans">Contract Address (CA)</p>
                <p className="text-white/90 text-sm sm:text-base md:text-lg font-mono truncate w-full">
                  {contractAddress}
                </p>
             </div>
             <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#a78bfa] hover:bg-[#9061f9] text-white font-semibold transition-all active:scale-95 shadow-lg shadow-[#a78bfa]/20 whitespace-nowrap"
             >
               {copied ? <Check size={20} /> : <Copy size={20} />}
               {copied ? "Copied!" : "Copy CA"}
             </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Tokenomics;