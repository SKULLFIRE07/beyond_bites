import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { debounce } from 'lodash';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect with debounce for performance
  useEffect(() => {
    const handleScroll = debounce(() => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    }, 10);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Benefits', path: '/benefits' },
    { name: 'Recipes', path: '/recipes' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen ? 'bg-white/95 shadow-md' : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cocoa/50 rounded"
              aria-label="Beyond Bites Home"
            >
              <img 
                src="/images/ChatGPT Image Jun 2, 2025, 04_38_22 PM.png" 
                alt="Beyond Bites Logo"
                className="h-10 w-10 object-cover rounded-full"
              />
              <span className="text-2xl font-playfair font-bold text-cocoa">Beyond Bites</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-2 px-1 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-cocoa font-semibold'
                      : 'text-gray-700 hover:text-cocoa/90'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cocoa/50 rounded`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cocoa rounded-full"></span>
                  )}
                </Link>
              ))}
              
              <a 
                href="tel:+919322973362"
                className="ml-4 flex items-center space-x-2 bg-cocoa text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-cocoa/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cocoa/70"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
                <span>Order Now</span>
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-cocoa focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cocoa/50 rounded p-1"
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-4 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-cocoa/10 text-cocoa font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="tel:+919322973362"
              className="flex items-center justify-center space-x-2 bg-cocoa text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-cocoa/90 transition-colors mt-4"
            >
              <Phone className="w-5 h-5" />
              <span>Call to Order</span>
            </a>
          </div>
        </div>
      </header>
      {/* Add padding to account for fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default React.memo(Navigation);
