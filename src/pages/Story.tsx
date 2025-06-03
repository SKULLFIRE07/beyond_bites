import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Story = () => {
  const storySections = [
    {
      title: 'The Sweet Beginning',
      description: 'Our journey began with a simple love for authentic, handcrafted jaggery. Inspired by traditional recipes passed down through generations, we set out to bring the purest form of sweetness to your home.',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop'
    },
    {
      title: 'Our Craft',
      description: 'Each piece of Beyond Bites jaggery is carefully crafted using time-honored techniques. We work directly with local farmers to source the finest sugarcane, ensuring quality from field to table.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
      reverse: true
    },
    {
      title: 'The Beyond Bites Promise',
      description: 'We believe in pure, natural sweetness without any additives. Our jaggery is a healthier alternative to refined sugar, packed with essential minerals and a rich, caramel-like flavor that enhances every dish.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-cocoa to-honey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-ivory mb-6">
            Our Sweet Story
          </h1>
          <p className="text-xl text-ivory/90 max-w-3xl mx-auto">
            Pure, natural sweetness crafted with love and tradition
          </p>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {storySections.map((section, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                section.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <img 
                  src={section.image}
                  alt={section.title}
                  loading="lazy"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl font-playfair font-bold text-cocoa mb-6">
                  {section.title}
                </h3>
                <p className="text-lg text-cocoa/80 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Story;
