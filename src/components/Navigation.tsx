
import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Phone } from 'lucide-react';
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
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Our Process', path: '/process' },
    { name: 'Health Benefits', path: '/benefits' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-white shadow-soft py-3'
            : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Leaf className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl md:text-2xl text-brown group-hover:text-primary transition-colors leading-tight">
                Migliore Agrotech
              </span>
              <span className="text-[10px] text-brown-light uppercase tracking-wider leading-tight">
                Innovators • Manufacturers • Exporters
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all relative ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/5'
                    : 'text-brown-light hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 bg-primary text-white px-6 py-2.5 text-sm font-semibold rounded-md hover:bg-primary-dark transition-all shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-brown hover:text-primary transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-cream transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[600px] shadow-lg' : 'max-h-0 border-t-0'
          }`}
        >
          <div className="flex flex-col p-6 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`py-3 px-4 text-base font-medium rounded-md transition-all ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/5'
                    : 'text-brown hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-primary text-white px-6 py-3 text-center font-semibold rounded-md hover:bg-primary-dark transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
