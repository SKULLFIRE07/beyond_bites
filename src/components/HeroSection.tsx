import React, { useEffect, useState, useCallback } from 'react';
import { ArrowDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('flavors');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = '/beyond_bites/images/hero-bg.png';
  }, []);

  return (
    <section 
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
    >
      {/* Background Image with optimized loading */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(90, 45, 12, 0.6), rgba(139, 69, 19, 0.4)), url('/beyond_bites/images/hero-bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `translateY(${scrollY * 0.3}px)`,
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 
          className={`font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Pure Goodness in Every Bite
        </h1>
        
        <p 
          className={`text-lg sm:text-xl md:text-2xl mb-4 opacity-90 transition-all duration-1000 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Why settle for refined sugar when you can indulge in nature's gold?
        </p>
        
        <p 
          className={`text-base sm:text-lg mb-8 opacity-80 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Handcrafted jaggery bites that melt memories of childhood sweetness on your tongue
        </p>
        
        <div 
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button 
            onClick={scrollToNextSection}
            className="bg-honey text-cocoa px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-honey/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-honey/50 focus:ring-offset-2"
            aria-label="Explore our flavors"
          >
            Taste the Tradition
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-white/70 hover:text-white transition-colors duration-300 focus:outline-none"
        aria-label="Scroll to next section"
      >
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default React.memo(HeroSection);
