import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIs from './components/WhatIs';
import HowItWorks from './components/HowItWorks';
import Report from './components/Report';
import EasyToSetup from './components/EasyToSetup';
import Faq from './components/Faq';
import WhatWeProvide from './components/WhatWeProvide';
import Footer from './components/Footer';
import HeroBackground from './components/HeroBackground';

function App() {
  return (
    <div className="bg-[#0D0D0D] text-[#A3A3A3] overflow-x-hidden relative">
      <HeroBackground />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <WhatIs />
          <HowItWorks />
          <Report />
          <EasyToSetup />
          <Faq />
          <WhatWeProvide />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;