import React from 'react';
import { Sun, Leaf, Shield, Sprout, Heart } from 'lucide-react';

export default StorySection;

function StorySection() {
    return (
        <section className="min-h-screen py-32 bg-[#120d08] relative overflow-hidden text-white border-t border-white/5" id="story">

            {/* Ambient Background - Organic Textures */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-gold/10 rounded-full blur-[150px] animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-neon-orange/10 rounded-full blur-[150px] animate-float-slow"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="flex flex-col items-center mb-20 text-center">
                    <div className="inline-flex items-center gap-2 mb-6 animate-fade-in px-6 py-2 rounded-full border border-neon-gold/30 bg-neon-gold/10 backdrop-blur-md">
                        <Sprout className="w-5 h-5 text-neon-gold" />
                        <span className="text-neon-gold font-display font-bold tracking-widest uppercase text-sm">Our Roots</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white mb-6 leading-none tracking-tight">
                        PREMIUM <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-gold to-neon-orange text-stroke-none">HERITAGE</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
                        We didn't just find jaggery. We rediscovered it. <br className="hidden md:block" />
                        Stripping away the impurities, restoring the original golden essence.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* MAIN VISUAL: 5-Product Floating Showcase */}
                    <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000">
                        {/* Central Glow */}
                        <div className="absolute inset-0 bg-neon-gold/20 blur-[100px] rounded-full animate-pulse-slow"></div>

                        {/* Orbiting Products */}
                        {/* 1. Plain Jaggery (Center) */}
                        <div className="absolute z-30 w-64 h-64 md:w-80 md:h-80 animate-float-slow">
                            <img src="images/plain-jaggery-bites.png" alt="Golden Standard" className="w-full h-full object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-700" />
                        </div>

                        {/* 2. Powder (Bottom Left) */}
                        <div className="absolute z-20 bottom-10 left-0 w-48 h-48 md:w-56 md:h-56 animate-float-organic opacity-90" style={{ animationDelay: '1s' }}>
                            <img src="images/jaggery-powder.png" alt="Sweet Dust" className="w-full h-full object-contain drop-shadow-xl hover:rotate-12 transition-transform duration-700" />
                        </div>

                        {/* 3. Ginger (Top Left) */}
                        <div className="absolute z-10 top-10 left-10 w-40 h-40 animate-float-fast opacity-80" style={{ animationDelay: '2s' }}>
                            <img src="images/ginger-infusion.png" alt="Ginger" className="w-full h-full object-contain drop-shadow-lg blur-[1px] hover:blur-0 transition-all duration-700" />
                        </div>

                        {/* 4. Cardamom (Top Right) */}
                        <div className="absolute z-10 top-20 right-0 w-44 h-44 animate-float-organic opacity-85" style={{ animationDelay: '0.5s' }}>
                            <img src="images/cardamom-infusion.png" alt="Cardamom" className="w-full h-full object-contain drop-shadow-lg hover:scale-110 transition-transform duration-700" />
                        </div>

                        {/* 5. Cacao (Bottom Right) */}
                        <div className="absolute z-20 bottom-20 right-10 w-40 h-40 animate-float-slow opacity-80" style={{ animationDelay: '3s' }}>
                            <img src="images/cacao-infusion.png" alt="Cacao" className="w-full h-full object-contain drop-shadow-lg blur-[1px] hover:blur-0 transition-all duration-700" />
                        </div>

                        {/* Overlay Text */}
                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-neon-gold/20 px-4 py-2 rounded-lg z-40 transform rotate-[-2deg]">
                            <div className="flex items-center gap-2 font-mono text-neon-gold text-xs">
                                <Sun className="w-3 h-3 animate-spin-slow" />
                                <span>ORIGIN: PURE_EARTH</span>
                            </div>
                        </div>
                    </div>

                    {/* Features List (Organic) */}
                    <div className="space-y-8 relative">
                        {/* Decorative Line */}
                        <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-neon-gold/30 to-transparent lg:block hidden"></div>

                        {[
                            {
                                icon: <Leaf className="w-6 h-6" />,
                                title: "ETHICALLY SOURCED",
                                desc: "Sourced directly from the farmers. No middlemen, just pure connection."
                            },
                            {
                                icon: <Heart className="w-6 h-6" />,
                                title: "MINIMAL PROCESSING",
                                desc: "Processed in small batches to preserve natural nutrients. Zero essence loss."
                            },
                            {
                                icon: <Shield className="w-6 h-6" />,
                                title: "PURITY GUARANTEED",
                                desc: "Free from sulfates, GMOs, and artificial sweeteners. Only nature allowed."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group relative bg-white/5 border border-white/5 p-8 rounded-3xl hover:border-neon-gold/30 transition-all duration-500 hover:bg-white/10 ml-0 lg:ml-12 overflow-hidden">
                                {/* Hover Glow */}
                                <div className="absolute -left-20 -top-20 w-40 h-40 bg-neon-gold/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                <div className="flex items-start gap-6 relative z-10">
                                    <div className="p-4 bg-gradient-to-br from-neon-gold to-neon-orange rounded-2xl text-black shadow-lg shadow-neon-gold/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-neon-gold transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="font-mono text-gray-400 leading-relaxed text-sm group-hover:text-gray-300">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
