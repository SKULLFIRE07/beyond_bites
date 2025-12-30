
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
              BEYOND<span className="text-stroke-neon text-transparent">BITES</span>
            </h2>
            <p className="font-mono text-sm text-gray-400">
              Redefining sweetness for the digital age. 100% Organic, 0% junk.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="font-mono font-bold text-neon-lime mb-4 uppercase">Menu</h4>
              <ul className="space-y-2 font-mono text-sm text-gray-400">
                <li><a href="#" className="hover:text-white hover:underline decoration-neon-pink">Root</a></li>
                <li><a href="#" className="hover:text-white hover:underline decoration-neon-pink">Log</a></li>
                <li><a href="#" className="hover:text-white hover:underline decoration-neon-pink">Config</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono font-bold text-neon-lime mb-4 uppercase">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-neon-lime hover:text-black hover:border-neon-lime transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-neon-cyan hover:text-black hover:border-neon-cyan transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center font-mono text-xs text-gray-500">
          <p>&copy; 2025 BEYOND BITES. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
