import { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingOrderButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-40 flex flex-col gap-4 transition-all duration-500 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}>
      <a
        href="tel:+919322973362"
        className="group relative"
        aria-label="Call to Order"
      >
        <div className="absolute inset-0 bg-honey/50 rounded-full blur-lg animate-pulse-glow group-hover:bg-honey/70 transition-all"></div>
        <div className="relative bg-gradient-to-r from-cocoa to-cocoa-800 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 border border-white/10 hover:scale-105 transition-transform duration-300">
          <Phone className="w-5 h-5 animate-bounce-slow" />
          <span className="font-playfair font-bold tracking-wide">Order Now</span>
        </div>
      </a>
    </div>
  );
};

export default FloatingOrderButton;
