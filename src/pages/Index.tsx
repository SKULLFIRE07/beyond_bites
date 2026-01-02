
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import BrandManifesto from '../components/BrandManifesto';
import FlavourExplosion from '../components/FlavourExplosion';
import HypeSquad from '../components/HypeSquad';
import StorySection from '../components/StorySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-neon-lime selection:text-black">
      <Navigation />

      <main>
        <HeroSection />
        <BrandManifesto />
        <StorySection />
        <FlavourExplosion />

        {/* Interstitial Glitch Section */}
        {/* Interstitial Organic Section */}
        <section className="py-20 bg-neon-purple/5 relative overflow-hidden flex items-center justify-center">
          <div className="text-center z-10">
            <h2 className="text-5xl md:text-8xl font-display font-black text-white mix-blend-soft-light opacity-50">
              PURE_ORIGIN
            </h2>
          </div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </section>

        <HypeSquad />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
