import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// --- FAQ Content ---
const faqData = [
  {
    q: "What is $MOCHI?",
    a: "Mochi is a community-driven memecoin on Solana — inspired by love, fun, and our adorable mascot dog, Mochi. It’s a movement for memes, positivity, and togetherness, where every holder becomes part of a growing, playful family.",
  },
  {
    q: "Why does Mochi matter in 2025?",
    a: "In a market full of hype-driven memecoins, Mochi stands out by prioritizing community, creativity, and genuine connection. As crypto matures, real engagement and purpose matter more than speculation — and Mochi leads that charge with love and authenticity.",
  },
  {
    q: "What’s the vision for the future of $MOCHI?",
    a: "Mochi’s vision is to grow into a cultural symbol of joy and kindness within the Solana ecosystem — expanding through community projects, collaborations, and creative initiatives that keep the fun alive.",
  },
  {
    q: "Why should I join the Mochi Community?",
    a: "Joining the Mochi community means joining a positive, meme-loving movement built on fun and friendship. It’s not just about holding a coin — it’s about spreading smiles, building culture, and being part of something wholesome in crypto.",
  },
];

// --- Single Accordion Item ---
const FaqItem = ({ question, answer, isOpen, onClick, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="group bg-[#13131a]/70 border border-white/10 rounded-2xl backdrop-blur-md hover:border-[#a78bfa]/40 transition-all duration-300 overflow-hidden"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left p-5 sm:p-6 focus:outline-none"
      >
        <span className="text-base sm:text-lg font-semibold text-white/90 group-hover:text-white transition">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-white/70 group-hover:text-[#a78bfa]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="px-5 sm:px-6 pb-5 sm:pb-6"
          >
            <p className="text-white/70 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Main FAQ Section ---
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-gradient-to-br from-[#0b0b1a] via-[#141421] to-[#0a0a0f] overflow-hidden py-24 sm:py-32"
    >
      {/* Subtle animated gradient glow background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.07),transparent_70%)] blur-3xl"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Floating Paw Decor */}
      <motion.img
        src="/paw.png"
        alt="Paw print"
        className="absolute top-1/2 left-8 sm:left-16 w-20 sm:w-28 opacity-20"
        animate={{ y: [0, -8, 0], rotate: [12, 15, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-12 px-6">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bungee font-bold text-center bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="w-full max-w-3xl space-y-5">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              index={index}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
