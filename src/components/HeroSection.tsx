import React, { useEffect, useState, useRef } from 'react';
import { Zap, Hexagon, Circle, Star, Sparkles } from 'lucide-react';

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
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black perspective-1000"
    >
      {/* 3D Grid Floor & Horizon Glow */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-30 transform rotate-x-60 scale-150 origin-bottom pointer-events-none"
        style={{
          transform: `perspective(1000px) rotateX(60deg) translateY(${mousePos.y * 30}px) translateX(${mousePos.x * 30}px)`
        }}
      ></div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neon-lime/10 to-transparent pointer-events-none blur-3xl"></div>

      {/* Neural Network Connections (SVG Layer) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 opacity-40">
        {/* Connection to Top Left (Ginger) */}
        <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="#ff0099" strokeWidth="1" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
        </line>
        <circle cx="20%" cy="30%" r="4" fill="#ff0099" className="animate-ping" />

        {/* Connection to Bottom Right (Cardamom) */}
        <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="#ccff00" strokeWidth="1" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="3s" repeatCount="indefinite" />
        </line>
        <circle cx="80%" cy="70%" r="4" fill="#ccff00" className="animate-ping" style={{ animationDelay: '1s' }} />

        {/* Connection to Top Right (Cacao) */}
        <line x1="50%" y1="50%" x2="85%" y2="20%" stroke="#7f00ff" strokeWidth="1" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="20" dur="4s" repeatCount="indefinite" />
        </line>
        <circle cx="85%" cy="20%" r="4" fill="#7f00ff" className="animate-ping" style={{ animationDelay: '0.5s' }} />
      </svg>


      {/* Central Core: Main Title */}
      <div className="relative z-40 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-4 animate-fade-in px-4 py-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-md">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-mono text-white/60 tracking-[0.2em] uppercase">Energy: Peak</span>
        </div>

        <h1 className="relative cursor-default group">
          {/* Glow Layer */}
          <span className="absolute inset-0 blur-2xl text-neon-lime opacity-30 select-none text-[6rem] md:text-[10rem] font-display font-black leading-none tracking-tighter group-hover:blur-3xl transition-all duration-300">
            BEYOND<br />BITES
          </span>
          {/* Main Layer with Glitch Hover */}
          <span className="relative z-10 text-[6rem] md:text-[10rem] font-display font-black text-white leading-none tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] block group-hover:animate-pulse">
            BEYOND<br /><span className="text-[#e2e2e2] group-hover:text-white transition-colors">BITES</span>
          </span>
        </h1>

        <div className="mt-8">
          <button className="group relative px-10 py-4 bg-transparent border border-neon-lime text-neon-lime font-display font-bold text-xl uppercase tracking-widest overflow-hidden hover:bg-neon-lime hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_40px_rgba(204,255,0,0.6)]">
            <span className="relative flex items-center gap-3">
              Taste the Rush <Zap className="w-5 h-5 fill-current" />
            </span>
          </button>
        </div>
      </div>

      {/* Orbiting Elements */}
      <div className="absolute inset-0 z-30 pointer-events-none">

        {/* Ginger (Top Left) */}
        <div
          className="absolute top-[15%] left-[5%] md:left-[10%] w-[200px] md:w-[350px] aspect-square"
          style={{ transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)` }}
        >
          <div className="absolute inset-0 bg-neon-pink/20 blur-[80px] rounded-full animate-pulse"></div>
          <img
            src="images/ginger-infusion.png"
            alt="Ginger"
            className="w-full h-full object-contain animate-float-fast drop-shadow-2xl grayscale-[30%] contrast-125 hover:grayscale-0 transition-all duration-500"
          />
          {/* Data Tag */}
          <div className="absolute -bottom-8 left-10 bg-black/80 backdrop-blur border border-neon-pink/30 px-3 py-1 text-neon-pink font-mono text-xs skew-x-[-10deg]">
            GINGER_KICK
          </div>
        </div>

        {/* Cardamom (Bottom Right) */}
        <div
          className="absolute bottom-[20%] right-[5%] md:right-[15%] w-[220px] md:w-[400px] aspect-square"
          style={{ transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)` }}
        >
          <div className="absolute inset-0 bg-neon-lime/20 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <img
            src="images/cardamom-infusion.png"
            alt="Cardamom"
            className="w-full h-full object-contain animate-float-slow drop-shadow-2xl grayscale-[30%] contrast-125 hover:grayscale-0 transition-all duration-500"
            style={{ animationDelay: '1.5s' }}
          />
          <div className="absolute -top-8 right-10 bg-black/80 backdrop-blur border border-neon-lime/30 px-3 py-1 text-neon-lime font-mono text-xs skew-x-[-10deg]">
            CARDAMOM_SPARK
          </div>
        </div>

        {/* Cacao (Top Right) */}
        <div
          className="absolute top-[10%] right-[5%] md:right-[10%] w-[150px] md:w-[300px] aspect-square"
          style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * -30}px)` }}
        >
          <div className="absolute inset-0 bg-neon-purple/20 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <img
            src="images/cacao-infusion.png"
            alt="Cacao"
            className="w-full h-full object-contain animate-float-fast drop-shadow-2xl grayscale-[30%] contrast-125 hover:grayscale-0 transition-all duration-500"
            style={{ animationDelay: '0.5s' }}
          />
          <div className="absolute -bottom-8 right-10 bg-black/80 backdrop-blur border border-neon-purple/30 px-3 py-1 text-neon-purple font-mono text-xs skew-x-[-10deg]">
            PURE_CACAO
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 animate-pulse">
        <Star className="w-4 h-4 text-white opacity-50" />
      </div>
      <div className="absolute bottom-1/3 right-1/3 animate-ping" style={{ animationDuration: '3s' }}>
        <Circle className="w-2 h-2 text-neon-lime opacity-60 fill-current" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-spin-slow opacity-30">
        <Hexagon className="w-8 h-8 text-neon-purple" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float-fast opacity-40">
        <Sparkles className="w-6 h-6 text-neon-pink" />
      </div>

      {/* Background Texture Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05] select-none overflow-hidden"
        style={{ transform: `translateX(${mousePos.x * -20}px)` }}>
        <span className="text-[20vw] font-display font-black text-white whitespace-nowrap">
          ELECTRIC ROOTS
        </span>
      </div>

    </section>
  );
};

export default HeroSection;
