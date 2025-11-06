import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTransitionStore } from './hooks/usePageTransition';
import PageLoader from './components/PageLoader';
import Hero from './components/Hero';
import PortraitCarousel from './components/PortraitCarousel';
import Tokenomics from './components/TokenomicsSection';
import Faq from './components/Faq';
import Community from './components/Community';
import Footer from './components/Footer';
// (And your other components)

function App() {
  // Listen to the global state
  const isLoading = useTransitionStore((state) => state.isLoading);

  return (
    <div className="App">
      {/* This will show the PageLoader when isLoading is true */}
      <AnimatePresence>
        {isLoading && <PageLoader />}
      </AnimatePresence>

      <Hero />
      <PortraitCarousel />
      <Tokenomics />
      <Faq />
      <Community />
      <Footer />
      {/* (And the rest of your page) */}
    </div>
  );
}

export default App;