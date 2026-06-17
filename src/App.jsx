import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HowToBuy from './pages/HowToBuy';
import Roadmap from './pages/Roadmap';
import Tokenomics from './pages/Tokenomics';
import AboutUs from './pages/AboutUs';
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full overflow-visible ">
      <Navbar />

      <div className="relative z-40">
        <Home />
      </div>

      <div className="relative -mt-30 z-50">
        <AboutUs />
      </div>

      <div className="relative -mt-2 z-30">
        <Roadmap />
      </div>

      <div className="relative -mt-1 z-50">
        <HowToBuy />
      </div>

      {/* Tokenomics: overlap on both mobile and desktop */}
<div className="relative -mt-[300px] md:-mt-[316px] z-[70]">
  <Tokenomics />
</div>

      <Footer />
    </div>
  );
}