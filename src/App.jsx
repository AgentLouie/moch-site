import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import SloganSection from "./components/SloganSection";
import PortraitCarousel from "./components/PortraitCarousel";
import Footer from "./components/Footer";
import GalleryPage from "./components/GalleryPage"; // ✅ your full gallery component
import Community from './components/Community';
import Faq from './components/Faq';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden">
        <Routes>
          {/* 🏠 Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <SloganSection />
                <PortraitCarousel />
                <Faq />
                <Community />
                <Footer />
              </>
            }
          />

          {/* 🖼️ Gallery Page */}
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
