import React, { useEffect, useState, useRef } from 'react';
import { Leaf, Sun, Sprout, Star, Wind, Zap } from 'lucide-react';

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePos({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background perspective-1000"
    >
      {/* 1. Cinematic Background & Lighting */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-neon-gold/10 to-transparent mix-blend-screen pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light z-10"></div>

      {/* Warm Main Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-gold/20 blur-[150px] rounded-full pointer-events-none animate-pulse-slow"></div>


      {/* 2. Main Title Core */}
      <div className="relative z-40 text-center flex flex-col items-center select-none">

        <div className="inline-flex items-center gap-2 mb-6 animate-fade-in px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <Zap className="w-4 h-4 text-neon-gold animate-bounce" />
          <span className="text-xs md:text-sm font-mono text-white/80 tracking-[0.2em] uppercase">Premium. World Class.</span>
        </div>

        <h1 className="relative cursor-default group transform transition-transform duration-700 hover:scale-105">
          {/* Metallic Glow Layer */}
          <span className="absolute inset-0 blur-3xl text-neon-gold opacity-30 text-[12vw] md:text-[7rem] lg:text-[9rem] font-display font-black leading-none tracking-tighter">
            JAGGY<br />SMART
          </span>
          {/* Main Title */}
          <span className="relative z-10 text-[12vw] md:text-[7rem] lg:text-[9rem] font-display font-black text-white leading-none tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] block">
            JAGGY<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500">SMART</span>
          </span>
        </h1>

        <div className="mt-10 relative z-50">
          <button className="group relative px-12 py-5 bg-gradient-to-r from-neon-gold to-neon-orange text-black font-display font-black text-xl uppercase tracking-widest overflow-hidden hover:brightness-110 transition-all duration-300 shadow-[0_0_40px_rgba(255,204,0,0.4)] rounded-full skew-x-[-10deg]">
            <span className="relative flex items-center gap-3 skew-x-[10deg]">
              Taste Luxury <Sun className="w-5 h-5 fill-current animate-spin-slow" />
            </span>
          </button>
        </div>
      </div>

      {/* 3. The 5 Flavor Constellation */}
      <div className="absolute inset-0 z-30 pointer-events-none">

        {/* CENTER: Plain Jaggery (Golden Standard) - The Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[300px] md:w-[500px] aspect-square animate-float-slow z-20 mix-blend-normal opacity-90 hover:opacity-100 transition-opacity duration-700">
          <img src="images/plain-jaggery-bites.png" alt="Pure Jaggery" className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" />
        </div>

        {/* LEFT TOP: Ginger Roots */}
        <div className="absolute top-[10%] left-[5%] md:left-[10%] w-[180px] md:w-[300px] aspect-square animate-float-organic"
          style={{ transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)` }}>
          <img src="images/ginger-infusion.png" alt="Ginger" className="w-full h-full object-contain drop-shadow-2xl blur-[1px] hover:blur-0 transition-all duration-700" />
        </div>

        {/* RIGHT TOP: Cacao (Deep) */}
        <div className="absolute top-[15%] right-[5%] md:right-[10%] w-[160px] md:w-[280px] aspect-square animate-float-organic z-10"
          style={{ animationDelay: '1s', transform: `translate(${mousePos.x * 20}px, ${mousePos.y * -20}px)` }}>
          <img src="images/cacao-infusion.png" alt="Cacao" className="w-full h-full object-contain drop-shadow-2xl blur-[2px] opacity-80" />
        </div>

        {/* LEFT BOTTOM: Powder (Explosion) */}
        <div className="absolute bottom-[5%] left-[-5%] md:left-[5%] w-[300px] md:w-[500px] aspect-square animate-pulse-slow z-30"
          style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * 15}px)` }}>
          <img src="images/jaggery-powder.png" alt="Powder" className="w-full h-full object-contain drop-shadow-2xl opacity-90" />
        </div>

        {/* RIGHT BOTTOM: Cardamom */}
        <div className="absolute bottom-[10%] right-[0%] md:right-[5%] w-[200px] md:w-[350px] aspect-square animate-float-organic z-30"
          style={{ animationDelay: '2s', transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}>
          <img src="images/cardamom-infusion.png" alt="Cardamom" className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform" />
        </div>

      </div>

      {/* 4. Atmospheric Particles */}
      <div className="absolute top-1/4 left-1/4 animate-float-fast opacity-40 mix-blend-screen">
        <Leaf className="w-8 h-8 text-neon-gold rotate-45" />
      </div>
      <div className="absolute bottom-1/3 right-1/3 animate-float-organic opacity-30" style={{ animationDuration: '12s' }}>
        <Wind className="w-16 h-16 text-white blur-[2px]" />
      </div>

    </section>
  );
};

export default HeroSection;
