import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureMultimodal, FeatureContext } from './components/Features';
import { FeatureAssistant } from './components/FeatureAssistant';
import { FeatureAction } from './components/FeatureAction';
import { WaitlistForm } from './components/WaitlistForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <FeatureMultimodal />
        <FeatureContext />
        <FeatureAssistant />
        <FeatureAction />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;