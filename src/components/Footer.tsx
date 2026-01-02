
import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Matrix Rain Effect Placeholder */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="space-y-6 max-w-sm">
            <h2 className="text-4xl font-display font-black tracking-tighter text-white">
              JAGGY<span className="text-stroke-neon text-transparent">SMART</span>
            </h2>
            <p className="text-gray-500 font-mono text-xs max-w-xs mx-auto md:mx-0 leading-relaxed">
              Redefining the ancient superfood for the digital age. Pure, potent, and powerful.
            </p>
          </div>

          <div className="flex gap-12">
            <p>&copy; 2025 JAGGY SMART. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
