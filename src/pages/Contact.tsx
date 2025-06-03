import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Check } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const certifications = [
    { name: 'FSSAI', description: 'Food Safety Certified', verified: true },
    { name: 'ISO 22000', description: 'Quality Management', verified: true },
    { name: 'Organic India', description: '100% Organic Certified', verified: true },
    { name: 'Lab Tested', description: 'Purity Guaranteed', verified: true }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-cocoa to-honey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-ivory mb-6">
            Order Now
          </h1>
          <p className="text-xl text-ivory/90 max-w-3xl mx-auto">
            Ready to taste pure sweetness? Contact us for your order
          </p>
        </div>
      </section>

      {/* Trust Seals */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="scroll-reveal text-3xl font-playfair font-bold text-center text-cocoa mb-12">
            Trusted Quality Assurance
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="scroll-reveal text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-cocoa mb-1">{cert.name}</h3>
                  <p className="text-sm text-cocoa/70">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-gradient-to-r from-honey/10 to-cocoa/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 bg-cocoa rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-ivory" />
              </div>
              
              <h3 className="text-2xl font-playfair font-bold text-cocoa mb-4">
                Email Us
              </h3>
              
              <p className="text-cocoa/70 mb-6">
                Send us your order details and we'll get back to you shortly
              </p>
              
              <a 
                href="mailto:admin@migliorelifesciences.in"
                className="inline-block bg-cocoa text-ivory px-8 py-4 rounded-full font-semibold hover:bg-cocoa/90 transition-colors"
              >
                Email Your Order
              </a>
              
              <p className="mt-4 text-sm text-cocoa/60">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-honey/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-cocoa" />
              </div>
              <h3 className="text-xl font-semibold text-cocoa mb-2">Email</h3>
              <p className="text-cocoa/80">admin@migliorelifesciences.in</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-honey/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-cocoa" />
              </div>
              <h3 className="text-xl font-semibold text-cocoa mb-2">Phone</h3>
              <p className="text-cocoa/80">+91 98765 43210</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-honey/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-cocoa" />
              </div>
              <h3 className="text-xl font-semibold text-cocoa mb-2">Location</h3>
              <p className="text-cocoa/80">Organic Valley, Karnataka, India</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
