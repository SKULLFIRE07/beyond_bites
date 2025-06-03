import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Leaf, Droplets, Sun, Package, Truck, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Leaf className="w-8 h-8 text-honey" />,
      title: 'Organic Farming',
      description: 'We source sugarcane from certified organic farms that use no synthetic pesticides or fertilizers. Our farmers follow traditional, sustainable practices that enrich the soil and ecosystem.',
      image: 'https://source.unsplash.com/random/800x600/?organic,farming'
    },
    {
      icon: <Droplets className="w-8 h-8 text-honey" />,
      title: 'Cold-Press Extraction',
      description: 'The sugarcane is cold-pressed to extract the juice, preserving vital nutrients and enzymes that are typically lost in conventional high-heat processing methods.',
      image: 'https://source.unsplash.com/random/800x600/?cold,press,extraction'
    },
    {
      icon: <Sun className="w-8 h-8 text-honey" />,
      title: 'Slow Boiling',
      description: 'The juice is slowly boiled in large, open pans at low temperatures. This traditional method ensures maximum nutrient retention and develops the rich, caramel-like flavor.',
      image: 'https://source.unsplash.com/random/800x600/?slow,boiling'
    },
    {
      icon: <Package className="w-8 h-8 text-honey" />,
      title: 'Natural Cooling & Setting',
      description: 'After reaching the perfect consistency, the jaggery is poured into molds and left to cool naturally, allowing it to develop its characteristic texture and color.',
      image: 'https://source.unsplash.com/random/800x600/?natural,cooling,setting'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-honey" />,
      title: 'Quality Testing',
      description: 'Each batch undergoes rigorous testing for purity, texture, and taste. We ensure our jaggery is free from contaminants and meets our high standards of quality.',
      image: 'https://source.unsplash.com/random/800x600/?quality,testing'
    },
    {
      icon: <Truck className="w-8 h-8 text-honey" />,
      title: 'Eco-Packaging & Delivery',
      description: 'We package our jaggery in eco-friendly materials to minimize environmental impact. Your order is carefully packed and shipped with care to ensure it reaches you in perfect condition.',
      image: 'https://source.unsplash.com/random/800x600/?eco,packaging,delivery'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-cocoa/90 to-honey/70">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`
          }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-ivory mb-4">
            Our Process
          </h1>
          <p className="text-xl text-ivory/90 max-w-2xl mx-auto">
            From farm to your home - our commitment to purity and tradition
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-cocoa mb-4">
              The Art of Pure Jaggery Making
            </h2>
            <p className="text-xl text-cocoa/80 max-w-3xl mx-auto">
              We combine ancient wisdom with modern quality standards to bring you the finest jaggery
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-honey/30 -ml-0.5"></div>
            
            {/* Process steps */}
            <div className="space-y-20">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                >
                  <div className="md:w-1/2">
                    <div className="relative rounded-xl overflow-hidden shadow-xl h-80 w-full">
                      <img
                        src={step.image || `https://source.unsplash.com/random/800x600/?${step.title.toLowerCase().split(' ').join(',')}`}
                        alt={step.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://source.unsplash.com/random/800x600/?food,process';
                        }}
                      />
                    </div>
                  </div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="text-cocoa">
                      <span className="text-2xl font-bold text-honey">Step {index + 1}</span>
                      <h3 className="text-3xl font-playfair font-bold mb-4">{step.title}</h3>
                      <p className="text-lg text-cocoa/80">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-cocoa p-8 md:p-12 text-ivory">
                <h2 className="text-3xl font-playfair font-bold mb-6">
                  Our Quality Promise
                </h2>
                <p className="mb-6">
                  At Beyond Bites, we're committed to delivering only the highest quality jaggery. Each batch is:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-honey mr-3 mt-0.5 flex-shrink-0" />
                    <span>100% natural with no additives or preservatives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-honey mr-3 mt-0.5 flex-shrink-0" />
                    <span>Rich in essential minerals like iron, magnesium, and potassium</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-honey mr-3 mt-0.5 flex-shrink-0" />
                    <span>Made using traditional methods that preserve nutrients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-honey mr-3 mt-0.5 flex-shrink-0" />
                    <span>Packaged in eco-friendly materials</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-playfair font-bold text-cocoa mb-6">
                  Have Questions About Our Process?
                </h3>
                <p className="text-cocoa/80 mb-6">
                  We believe in complete transparency about how we make our jaggery. If you have any questions about our process, ingredients, or anything else, we'd love to hear from you.
                </p>
                <a 
                  href="mailto:admin@migliorelifesciences.in?subject=Question%20About%20Your%20Process"
                  className="inline-block bg-honey text-cocoa px-6 py-3 rounded-full font-semibold hover:bg-amber-400 transition-colors"
                >
                  Contact Us
                </a>
                
                <div className="mt-8 pt-8 border-t border-cocoa/10">
                  <h4 className="font-semibold text-cocoa mb-3">Our Commitment to Sustainability</h4>
                  <p className="text-cocoa/80 mb-4">
                    We're dedicated to sustainable practices that protect our planet while delivering premium products to you.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-honey mr-2">•</span>
                      <span>Zero-waste production process</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-honey mr-2">•</span>
                      <span>Biodegradable and recyclable packaging</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-honey mr-2">•</span>
                      <span>Supporting local farming communities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
