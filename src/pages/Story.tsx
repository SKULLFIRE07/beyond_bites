import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FloatingOrderButton from '../components/FloatingOrderButton';
import { Leaf, Award, Heart, Sun, Code, Terminal, Cpu, Database } from 'lucide-react';

const Story = () => {
  const milestones = [
    {
      year: '2023',
      title: 'PURE ESSENCE',
      description: 'The beginning of everything. A simple idea to replace processed sugar with something real.',
      icon: <Leaf className="w-5 h-5 text-neon-lime" />
    },
    {
      year: '2024',
      title: 'THE JOURNEY',
      description: 'We spent months traversing the land (India), exchanging knowledge with local farmers to learn ancient soil preservation methods.',
      icon: <Code className="w-5 h-5 text-neon-lime" />
    },
    {
      year: 'INIT_SEQ: 03',
      title: 'NETWORK EXPANSION',
      description: 'Our first batch of handcrafted jaggery reached the network nodes (homes). The signal strength increased, and our bandwidth grew.',
      icon: <Cpu className="w-5 h-5 text-neon-pink" />
    },
    {
      year: 'CURRENT_STATE',
      title: 'SYSTEM STABLE',
      description: 'Today, we continue to uphold our prime directive: 100% natural, preservative-free jaggery, infused with the wisdom of Ayurveda.',
      icon: <Database className="w-5 h-5 text-neon-cyan" />
    }
  ];

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-neon-lime selection:text-black">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Video/Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20"></div>
          <img
            src="https://images.unsplash.com/photo-1547514301-b3b0d2d6F3a1?w=1600&auto=format&fit=crop"
            alt="Field background"
            className="w-full h-full object-cover grayscale opacity-40"
          />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 z-10"></div>

        <div className="relative z-30 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-md mb-6 animate-fade-in">
            <div className="flex flex-col items-center">
              <span className="text-white/60 font-mono text-xs tracking-widest uppercase">Our Journey // The Timeline</span>
              <div className="h-24 w-px bg-gradient-to-b from-transparent to-neon-lime/50 mt-4"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-6 leading-none tracking-tighter">
            PRESERVING <br /><span className="text-transparent text-stroke-neon">TRADITION</span>
          </h1>

          <p className="text-xl text-gray-400 font-mono leading-relaxed max-w-2xl mx-auto border-l-2 border-neon-lime pl-6 text-left">
            &gt; From the fertile soils of rural India to your table.<br />
            &gt; Every block of Beyond Bites tells a story of heritage and health.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 -mt-20 relative z-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "ETHICALLY SOURCED", text: "Direct connection with farmers. Fair wages guaranteed." },
            { title: "HANDCRAFTED", text: "Made in small batches to ensure premium quality." },
            { title: "NO NASTIES", text: "Zero preservatives. Zero additives. Just pure goodness." }
          ].map((item, idx) => (
            <div key={idx} className="group relative bg-zinc-900/80 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:border-neon-lime/50 transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden">
              {/* Neon Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-lime/0 to-neon-lime/0 group-hover:from-neon-lime/5 group-hover:to-transparent transition-all duration-500"></div>

              <h3 className="text-3xl font-display font-black text-white mb-4 uppercase">{item.title}</h3>
              <p className="text-gray-400 font-mono leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-black relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-lime/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-black text-center text-white mb-24">
            <span className="text-neon-lime">// </span> THE TIMELINE
          </h2>

          <div className="relative border-l border-white/10 ml-4 md:ml-1/2 space-y-24">
            {milestones.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Dot */}
                <div className="absolute top-0 left-[-5px] md:left-1/2 md:-ml-[5px] w-2.5 h-2.5 rounded-full bg-neon-lime shadow-[0_0_15px_#ccff00] z-10"></div>
                <div className="absolute top-0 left-[-1px] md:left-1/2 md:-ml-[1px] w-0.5 h-full bg-gradient-to-b from-neon-lime/50 to-transparent -z-0"></div>

                <div className="md:w-1/2 px-4 group">
                  <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/10 hover:border-neon-lime/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="flex items-center gap-3 mb-6">
                      <span className="p-2 bg-black rounded-lg border border-white/10">{item.icon}</span>
                      <span className="text-neon-lime font-mono font-bold tracking-widest text-xs uppercase">{item.year}</span>
                    </div>
                    <h3 className="text-3xl font-display font-black text-white mb-4 uppercase">{item.title}</h3>
                    <p className="text-gray-400 font-mono text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-32 bg-neon-lime text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply"></div>
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-black text-black mb-8 leading-none tracking-tighter">JOIN THE<br />REVOLUTION</h2>
          <p className="text-black/80 font-mono text-lg mb-10 font-bold">Be a part of a movement that values health, heritage, and heart.</p>
          <a href="#/products" className="inline-block bg-black text-neon-lime px-10 py-5 rounded-full font-display font-black text-xl hover:scale-105 transition-transform">START YOUR JOURNEY</a>
        </div>
      </div>

      <Footer />
      <FloatingOrderButton />
    </div>
  );
};

export default Story;
