import React, { useState, useEffect } from 'react';

const FlavourCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const flavours = [
    {
      name: 'Cardamom Bliss',
      description: 'Aromatic green cardamom pods crushed into golden jaggery',
      benefits: 'Digestive aid & breath freshener',
      overlay: 'from-green-900/70 to-transparent',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },
    {
      name: 'Ginger Zing',
      description: 'Fiery fresh ginger root meets cooling jaggery sweetness',
      benefits: 'Immunity booster & anti-inflammatory',
      overlay: 'from-amber-900/70 to-transparent',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },
    {
      name: 'Dark Choco Delight',
      description: 'Raw cacao powder swirled with organic jaggery cubes',
      benefits: 'Antioxidant rich & mood enhancer',
      overlay: 'from-brown-900/70 to-transparent',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },
    {
      name: 'Fennel Fresh',
      description: 'Licorice-sweet fennel seeds in traditional jaggery',
      benefits: 'After-meal digestive & cooling',
      overlay: 'from-teal-900/70 to-transparent',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },
    {
      name: 'Turmeric Gold',
      description: 'Golden turmeric powder in healing jaggery bites',
      benefits: 'Anti-inflammatory & immune support',
      overlay: 'from-yellow-900/70 to-transparent',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % flavours.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [flavours.length]);

  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-playfair font-bold text-center text-cocoa mb-16">
          Discover Our <span className="gradient-text">Signature Flavours</span>
        </h2>
        
        <div className="relative overflow-hidden rounded-2xl h-[500px]">
          {flavours.map((flavour, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <div 
                className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105"
                style={{
                  backgroundImage: `url('${flavour.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${flavour.overlay} to-transparent flex items-center`}>
                  <div className="max-w-md ml-8 text-white">
                    <h3 className="text-3xl font-playfair font-bold mb-4">{flavour.name}</h3>
                    <p className="text-lg mb-4 opacity-90">{flavour.description}</p>
                    <div className="inline-block bg-honey text-cocoa px-4 py-2 rounded-full text-sm font-semibold">
                      {flavour.benefits}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {flavours.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-honey' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlavourCarousel;
