
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'STORY', path: '/story' },
    { name: 'FLAVORS', path: '/flavors' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled || isOpen
          ? 'bg-black/80 backdrop-blur-lg border-neon-lime/30 py-4'
          : 'bg-transparent border-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-neon-lime flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <Zap className="text-black w-6 h-6 fill-current" />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter text-white group-hover:text-neon-lime transition-colors">
              JAGGY<span className="text-stroke text-transparent">SMART</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-mono text-sm font-bold text-white/70 hover:text-neon-lime hover:tracking-widest transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-lime group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link to="/contact" className="bg-transparent border border-neon-purple text-neon-purple px-6 py-2 font-mono font-bold uppercase hover:bg-neon-purple hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(127,0,255,0.2)] hover:shadow-[0_0_25px_rgba(127,0,255,0.6)]">
              Get Wired
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white hover:text-neon-lime transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-black border-b border-neon-lime/30 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="flex flex-col p-8 gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="font-display text-3xl text-white hover:text-neon-lime uppercase"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
