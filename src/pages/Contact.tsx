import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, Check, Zap, Hexagon, MessageSquare } from 'lucide-react';

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
    { name: 'FSSAI CERTIFIED', description: 'Food Safety Protocols Verified', verified: true },
    { name: 'ISO 22000', description: 'Quality Management Systems', verified: true },
    { name: 'ORGANIC INDIA', description: '100% Carbon-Based Goodness', verified: true },
    { name: 'LAB TESTED', description: 'Purity Analysis: 99.9%', verified: true }
  ];

  return (
    <div className="min-h-screen bg-black font-space-mono text-white selection:bg-neon-lime selection:text-black">
      <Navigation />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-lime/10 rounded-full blur-[100px] animate-float-slow"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6 text-neon-lime font-mono text-sm tracking-widest border border-neon-lime/30 px-4 py-2 rounded-full bg-neon-lime/5 backdrop-blur-md">
            <Zap className="w-4 h-4 fill-current" /> SIGNAL_RECEIVED
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-6 leading-none tracking-tighter">
            GET <span className="text-transparent text-stroke-neon">WIRED</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-400 max-w-2xl mx-auto font-mono">
            &gt; Direct line to the source.<br />
            &gt; Initiate communication protocol below.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Main Contact Card */}
            <div className="scroll-reveal bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-12 rounded-3xl relative overflow-hidden group hover:border-neon-lime/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-lime/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-neon-lime/20 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black/50 border border-neon-lime text-neon-lime rounded-2xl flex items-center justify-center mb-6 md:mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <MessageSquare className="w-6 h-6 md:w-8 md:h-8" />
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  START A CONVERSATION
                </h3>

                <p className="text-gray-400 mb-8 font-mono leading-relaxed">
                  Need to stock up on energy? Have questions about our modifications? The line is open.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5 hover:border-neon-lime/30 transition-colors">
                    <div className="mt-1">
                      <Phone className="w-5 h-5 text-neon-lime" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Direct Line</span>
                      <a href="tel:+919322973362" className="text-xl font-mono text-white hover:text-neon-lime transition-colors">
                        +91 93229 73362
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5 hover:border-neon-purple/30 transition-colors">
                    <div className="mt-1">
                      <Mail className="w-5 h-5 text-neon-purple" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Digital Signal</span>
                      <a href="mailto:admin@migliorelifesciences.in" className="text-lg md:text-xl font-mono text-white hover:text-neon-purple transition-colors break-all">
                        admin@migliorelifesciences.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-500 uppercase">
                  <span>Response Time: ~24h</span>
                  <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Online</span>
                </div>
              </div>
            </div>

            {/* Decoration / Side Graphic */}
            <div className="relative h-full min-h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-radial from-neon-purple/20 to-transparent opacity-50 blur-3xl"></div>

              {/* Floating Abstract Shapes */}
              <div className="relative w-full max-w-sm aspect-square">
                <div className="absolute inset-0 border border-neon-lime/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-8 border border-neon-purple/20 rounded-full animate-reverse-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="images/ginger-infusion.png"
                    alt="Energy Source"
                    className="w-2/3 h-2/3 object-contain drop-shadow-[0_0_50px_rgba(204,255,0,0.3)] animate-float"
                  />
                </div>
                {/* Orbiting data points */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-black border border-neon-lime text-neon-lime px-3 py-1 text-xs font-mono rounded">
                  SECURE_CONNECTION
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Seals */}
      <section className="py-20 bg-zinc-900/50 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12">
            <span className="text-neon-purple font-mono text-xs tracking-widest uppercase mb-4">Verification Protocols</span>
            <h2 className="text-3xl font-display font-bold text-white text-center">
              SYSTEM <span className="text-stroke-neon text-transparent">CERTIFIED</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="scroll-reveal group">
                <div className="bg-black border border-white/10 p-6 rounded-2xl hover:border-neon-lime/50 transition-all duration-300 h-full flex flex-col items-center text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-lime/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="mb-4 relative">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10">
                      <Check className="w-5 h-5 text-neon-lime" />
                    </div>
                  </div>
                  <h3 className="font-bold text-white mb-2 font-display tracking-wide">{cert.name}</h3>
                  <p className="text-xs text-gray-400 font-mono uppercase">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
