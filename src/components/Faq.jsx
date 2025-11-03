import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // Using a simple icon for the accordion

// --- Your FAQ Content ---
const faqData = [
  {
    q: "What is $MOCHI?",
    a: "Mochi is a community-driven memecoin on Solana, inspired by love, fun, and our adorable mascot dog, Mochi, it’s a movement for memes, positivity, and togetherness, where holders are part of a growing, playful community.",
  },
  {
    q: "Why does Mochi matter in 2025?",
    a: "In a market saturated with memecoins driven by hype, Mochi stands out by prioritizing community, creativity, and genuine engagement. As the crypto space matures, projects that foster real connections and value beyond price speculation will thrive. Mochi embodies this shift, focusing on fun, memes, and a supportive community rather than just short-term gains.",
  },
  {
    q: "What’s the vision for the future of $MOCHI?",
    a: "Mochi aims to be more than a memecoin; it’s a thriving community built on love, fun, and creativity. In the future, Mochi envisions expanding its presence in the Solana ecosystem",
  },
  {
    q: "Why should I join the Mochi Community?",
    a: "Joining the Mochi Community means being part of a fun, positive, and supportive group of people who love memes and dogs. It’s a place to share laughs, connect with like-minded individuals, and be part of something bigger than just a coin. Plus, you get to support a project that values love over hype.",
  },
];

// --- The Accordion Item Sub-Component ---
const FaqItem = ({ question, answer, isOpen, onClick, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-[#1a1a1f]/60 border border-white/10 rounded-xl overflow-hidden"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered fade-in
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left p-5 sm:p-6"
      >
        <span className="text-lg font-medium text-white/90">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-white/70" />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", paddingBottom: '24px' },
              collapsed: { opacity: 0, height: 0, paddingBottom: '0px' },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-5 sm:px-6"
          >
            <p className="text-white/70">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- The Main FAQ Component ---
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    // This allows toggling the item open and closed
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // You can add an id="faq" if you want to link to it from the header
    <section 
      id="faq" 
      className="relative w-full bg-gradient-to-br from-[#0b0b1a] via-[#141421] to-[#0a0a0f] overflow-hidden py-24 sm:py-32"
    >
      {/* Background elements (matching your other sections) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.07),transparent_70%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,169,184,0.05),transparent_70%)] blur-2xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(134,239,172,0.05),transparent_70%)] blur-2xl" />
      <img
        src="/paw.png"
        alt="Paw print"
        className="absolute top-1/2 -translate-y-1/2 left-8 sm:left-16 w-24 h-24 sm:w-32 sm:h-32 rotate-12 z-0"
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center gap-12 px-6">
        
        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bungee font-bold bg-gradient-to-r from-[#a78bfa] via-[#f5a9b8] to-[#86efac] bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ List */}
        <div className="w-full max-w-3xl space-y-4">
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