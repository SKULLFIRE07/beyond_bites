import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FloatingOrderButton from '../components/FloatingOrderButton';
import { Sparkles, Zap, Flame, Sprout, Hexagon, ArrowRight, ShoppingCart } from 'lucide-react';

const Flavours = () => {
    const [activeFlavour, setActiveFlavour] = useState(0);


    const flavours = [
        {
            id: 0,
            name: 'Cardamom Spark',
            subtitle: 'AROMATIC BLOOM',
            color: 'bg-neon-lime',
            text: 'text-neon-lime',
            border: 'border-neon-lime',
            shadow: 'shadow-[0_0_30px_rgba(204,255,0,0.3)]',
            description: "NATURE'S AWAKENING: Green Cardamom essence. Raw aromatic goodness directly to your senses. A timeless classic amplified for maximum freshness.",
            stats: { purity: 100, aroma: 95, intensity: 80 },
            image: 'images/cardamom-infusion.png'
        },
        {
            id: 1,
            name: 'Ginger Roots',
            subtitle: 'EARTH FIRE',
            color: 'bg-neon-pink',
            text: 'text-neon-pink',
            border: 'border-neon-pink',
            shadow: 'shadow-[0_0_30px_rgba(255,0,153,0.3)]',
            description: "ROOT POWER: Crystallized heat. A spicy twist for your sophisticated palette. Boosts immunity and clears your senses.",
            stats: { purity: 100, heat: 90, zest: 85 },
            image: 'images/ginger-infusion.png'
        },
        {
            id: 2,
            name: 'Deep Cacao',
            subtitle: 'NIGHT HARVEST',
            color: 'bg-neon-purple',
            text: 'text-neon-purple',
            border: 'border-neon-purple',
            shadow: 'shadow-[0_0_30px_rgba(127,0,255,0.3)]',
            description: "MIDNIGHT CRAVING: 100% Raw Cacao dust swirling in a golden void of sweetness. A guilt-free chocolate experience that nourishes your soul.",
            stats: { purity: 100, depth: 95, mood: 100 },
            image: 'images/cacao-infusion.png'
        },
        {
            id: 3,
            name: 'Golden Standard',
            subtitle: 'ORIGIN SOURCE',
            color: 'bg-neon-gold',
            text: 'text-neon-gold',
            border: 'border-neon-gold',
            shadow: 'shadow-[0_0_30px_rgba(255,204,0,0.3)]',
            description: "PURE ESSENCE: The raw, unadulterated essence of sweetness. Pure jaggery processed to golden perfection. No additives, just nature's gold.",
            stats: { purity: 100, origin: 100, glow: 90 },
            image: 'images/plain-jaggery-bites.png'
        },
        {
            id: 4,
            name: 'Sweet Dust',
            subtitle: 'GOLDEN SANDS',
            color: 'bg-neon-orange',
            text: 'text-neon-orange',
            border: 'border-neon-orange',
            shadow: 'shadow-[0_0_30px_rgba(255,102,0,0.3)]',
            description: "ENERGY FLOW: Fine-tuned sweetness for rapid integration. Dissolves instantly into your system. High-velocity energy release.",
            stats: { speed: 100, flow: 95, warm: 85 },
            image: 'images/jaggery-powder.png'
        }
    ];

    return (
        <div className="min-h-screen bg-black font-sans selection:bg-neon-lime selection:text-black">
            <Navigation />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-lime/10 rounded-full blur-[150px] animate-pulse"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 mb-6 text-neon-purple font-mono text-sm tracking-widest border border-neon-purple/30 px-4 py-2 rounded-full bg-neon-purple/5 backdrop-blur-md">
                        <Hexagon className="w-4 h-4" /> FLAVOR_VAULT_V2.0
                    </div>
                    <h1 className="text-6xl md:text-9xl font-display font-black text-white mb-6 leading-none tracking-tighter">
                        FLAVOR <span className="text-transparent text-stroke-neon">SURGE</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono leading-relaxed">
                        &gt; Select your flavor experience.<br />
                        &gt; All blends are made from 100% natural ingredients.
                    </p>
                </div>
            </section>

            {/* Main Interface */}
            <section className="pb-32 relative">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-8 items-start">

                        {/* Selector Column (Left) */}
                        <div className="lg:col-span-3 flex flex-col gap-4 sticky top-24">
                            <h3 className="font-mono text-gray-500 text-xs uppercase mb-2 ml-1">// THE_LINEUP</h3>
                            {flavours.map((flavour, idx) => (
                                <button
                                    key={flavour.id}
                                    onClick={() => setActiveFlavour(idx)}
                                    className={`
                                        group relative p-6 rounded-xl border text-left transition-all duration-300 overflow-hidden
                                        ${activeFlavour === idx
                                            ? `bg-zinc-900 ${flavour.border} opacity-100 translate-x-2`
                                            : 'bg-black border-white/10 opacity-60 hover:opacity-100 hover:border-white/30 hover:translate-x-1'}
                                    `}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className={`font-display font-black text-xl uppercase ${activeFlavour === idx ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                            {flavour.name}
                                        </span>
                                        {activeFlavour === idx && <Flame className={`w-4 h-4 ${flavour.text} animate-pulse`} />}
                                    </div>
                                    <span className="font-mono text-[10px] text-gray-500 block">{flavour.subtitle}</span>

                                    {/* Progress Bar background */}
                                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-${flavour.color.split('-')[1]}-${flavour.color.split('-')[2]} to-transparent w-full opacity-0 ${activeFlavour === idx ? 'opacity-100' : ''}`}></div>
                                </button>
                            ))}
                        </div>

                        {/* Visual Core (Center) */}
                        <div className="lg:col-span-5 relative h-[500px] md:h-[600px] flex items-center justify-center">
                            {/* Backdrop Glow */}
                            <div className={`absolute inset-0 ${flavours[activeFlavour].color} blur-[120px] opacity-20 transition-colors duration-700 rounded-full`}></div>

                            {/* Rotating Ring */}
                            <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full animate-spin-slow"></div>
                            <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>

                            <img
                                key={activeFlavour}
                                src={flavours[activeFlavour].image}
                                alt={flavours[activeFlavour].name}
                                className="relative z-10 w-[80%] h-[80%] object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-float-fast transition-all duration-500"
                            />
                        </div>

                        {/* Data Column (Right) */}
                        <div className="lg:col-span-4 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-50">
                                <Sprout className="w-12 h-12 text-white/5" />
                            </div>

                            <div className="mb-8">
                                <span className={`inline-block px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest mb-4 border ${flavours[activeFlavour].border} ${flavours[activeFlavour].text} bg-black`}>
                                    Selected
                                </span>
                                <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-2 leading-none uppercase">
                                    {flavours[activeFlavour].name}
                                </h2>
                                <p className="font-mono text-gray-400 text-sm">{flavours[activeFlavour].subtitle}</p>
                            </div>

                            <div className="mb-8 p-4 bg-black/40 rounded-xl border border-white/5">
                                <p className="text-gray-300 font-mono text-sm leading-relaxed">
                                    {flavours[activeFlavour].description}
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <span className="font-mono text-xs text-gray-500 block uppercase border-b border-white/10 pb-2">Flavor Profile</span>
                                {Object.entries(flavours[activeFlavour].stats).map(([key, value]) => (
                                    <div key={key}>
                                        <div className="flex justify-between text-xs font-mono uppercase mb-1">
                                            <span className="text-gray-400">{key}</span>
                                            <span className={flavours[activeFlavour].text}>{value}%</span>
                                        </div>
                                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${flavours[activeFlavour].color}`}
                                                style={{ width: `${value}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-between gap-6 pt-6 border-t border-white/10">
                                <button className={`flex-1 py-4 px-6 ${flavours[activeFlavour].color} text-black font-display font-black uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 group`}>
                                    Get Yours <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <FloatingOrderButton />
            <Footer />
        </div>
    );
};

export default Flavours;
