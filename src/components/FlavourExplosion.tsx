import React, { useState } from 'react';
import { Sparkles, Zap, Sprout, Flame } from 'lucide-react';

const FlavourExplosion = () => {
    const [activeFlavour, setActiveFlavour] = useState(0);

    const flavours = [
        {
            id: 0,
            name: 'Cardamom Spark',
            color: 'bg-neon-lime',
            text: 'text-neon-lime',
            border: 'border-neon-lime',
            image: 'images/cardamom-infusion.png',
            description: "NATURE'S AWAKENING: Green Cardamom essence. Raw aromatic goodness directly to your senses.",
            stats: { purity: 100, aroma: 95, intensity: 80 }
        },
        {
            id: 1,
            name: 'Ginger Roots',
            color: 'bg-neon-pink',
            text: 'text-neon-pink',
            border: 'border-neon-pink',
            image: 'images/ginger-infusion.png',
            description: "ROOT POWER: Crystallized heat. A spicy twist for your sophisticated palette.",
            stats: { purity: 100, heat: 90, zest: 85 }
        },
        {
            id: 2,
            name: 'Deep Cacao',
            color: 'bg-neon-purple',
            text: 'text-neon-purple',
            border: 'border-neon-purple',
            image: 'images/cacao-infusion.png',
            description: "MIDNIGHT CRAVING: 100% Raw Cacao dust swirling in a golden void of sweetness.",
            stats: { purity: 100, depth: 95, mood: 100 }
        },
        {
            id: 3,
            name: 'Golden Standard',
            color: 'bg-neon-gold',
            text: 'text-neon-gold',
            border: 'border-neon-gold',
            image: 'images/plain-jaggery-bites.png',
            description: "PURE ESSENCE: The raw, unadulterated essence of sweetness. Pure jaggery processed to golden perfection.",
            stats: { purity: 100, origin: 100, glow: 90 }
        },
        {
            id: 4,
            name: 'Sweet Dust',
            color: 'bg-neon-orange',
            text: 'text-neon-orange',
            border: 'border-neon-orange',
            image: 'images/jaggery-powder.png',
            description: "ENERGY FLOW: Fine-tuned sweetness for rapid integration. Dissolves instantly into your system.",
            stats: { speed: 100, flow: 95, warm: 85 }
        }
    ];

    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden" id="flavors">
            {/* Background Details */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-neon-pink font-mono text-sm tracking-wider">
                            <Flame className="w-4 h-4" />
                            <span>FLAVOUR_PROFILE</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-4 leading-none text-center">
                            FLAVOR <span className="text-transparent text-stroke-neon">SURGE</span>
                        </h2>
                    </div>

                    <div className="flex gap-2 p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                        {flavours.map((f, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveFlavour(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeFlavour === idx ? `${f.color} scale-125` : 'bg-white/20 hover:bg-white/40'}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 h-[700px] lg:h-[600px]">

                    {/* Visual Display */}
                    <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-white/10 group bg-black">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/30 via-black/50 to-black z-0"></div>

                        {flavours.map((flavour, index) => (
                            <div
                                key={flavour.id}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeFlavour === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'}`}
                            >
                                <img
                                    src={flavour.image}
                                    alt={flavour.name}
                                    className="w-full h-full object-contain p-12 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                                />
                                {/* Title Overlay */}
                                <div className="absolute bottom-8 left-8 right-8 mix-blend-difference">
                                    <h3 className={`text-6xl md:text-8xl font-display font-black uppercase tracking-tighter text-white opacity-20 select-none`}>
                                        {flavour.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Data Panel */}
                    <div className="lg:col-span-4 flex flex-col gap-4">

                        {/* Description Card */}
                        <div className={`flex-1 bg-zinc-900 border border-white/10 rounded-3xl p-8 flex flex-col transition-colors duration-500`}>
                            <div className="flex items-center justify-between mb-6">
                                <span className="font-mono text-xs text-gray-500">// ANALYSIS</span>
                                <Sprout className={`w-5 h-5 ${flavours[activeFlavour].text}`} />
                            </div>

                            <h3 className={`text-3xl font-display font-black text-white mb-4 uppercase`}>
                                {flavours[activeFlavour].name}
                            </h3>

                            <p className="text-gray-300 font-mono text-sm leading-relaxed mb-8 border-l border-white/20 pl-4">
                                {flavours[activeFlavour].description}
                            </p>

                            <div className="mt-auto space-y-4">
                                {Object.entries(flavours[activeFlavour].stats).map(([key, value]) => (
                                    <div key={key}>
                                        <div className="flex justify-between text-xs font-mono uppercase mb-1">
                                            <span className="text-gray-500">{key}</span>
                                            <span className="text-white">{value}%</span>
                                        </div>
                                        <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${flavours[activeFlavour].color} transition-all duration-1000 ease-out`}
                                                style={{ width: `${value}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cartridge Selectors */}
                        <div className="grid grid-cols-3 gap-2">
                            {flavours.map((flavour, idx) => (
                                <button
                                    key={flavour.id}
                                    onClick={() => setActiveFlavour(idx)}
                                    className={`
                                        relative group py-4 px-2 rounded-xl border transition-all duration-300 overflow-hidden
                                        ${activeFlavour === idx
                                            ? `bg-zinc-900 ${flavour.border} opacity-100`
                                            : 'bg-black border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'}
                                    `}
                                >
                                    <div className={`absolute top-0 left-0 w-full h-1 ${flavour.color} opacity-0 group-hover:opacity-100 transition-opacity ${activeFlavour === idx ? 'opacity-100' : ''}`}></div>
                                    <span className="font-mono text-xs font-bold text-white block text-center">0{idx + 1}</span>
                                </button>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlavourExplosion;
