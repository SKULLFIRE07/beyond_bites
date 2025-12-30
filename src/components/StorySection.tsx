import React from 'react';
import { Cog, Zap, Code, ShieldCheck, Database } from 'lucide-react';

export default StorySection;

function StorySection() {
    return (
        <section className="min-h-screen py-32 bg-[#050505] relative overflow-hidden text-white border-t border-white/10" id="story">

            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[150px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-lime/10 rounded-full blur-[150px] animate-float-fast"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="flex flex-col items-center mb-24 text-center">
                    <div className="inline-flex items-center gap-2 mb-4 animate-fade-in px-4 py-1 rounded-full border border-neon-lime/20 bg-neon-lime/5 backdrop-blur-md">
                        <Code className="w-4 h-4 text-neon-lime" />
                        <span className="text-neon-lime font-mono text-sm tracking-widest uppercase">Our Roots</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-display font-black mb-6">
                        THE <span className="text-stroke-neon text-transparent">ORIGIN</span> STORY
                    </h2>
                    <p className="max-w-2xl text-gray-400 font-mono text-lg leading-relaxed border-l-2 border-neon-purple pl-6 text-left md:text-center md:border-l-0 md:border-t-2 md:pt-6">
                        &gt; We didn't just find jaggery. We hacked the supply chain. <br className="hidden md:block" />
                        &gt; Stripping away the bloatware (chemicals). restoring the original kernel (nutrition).
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Hologram Card */}
                    <div className="relative group">
                        {/* Glow Behind */}
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-lime via-transparent to-neon-purple opacity-20 group-hover:opacity-40 blur-2xl transition-all duration-700 rounded-3xl"></div>

                        <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-2 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-black">
                                <img
                                    src="images/cardamom-infusion.png"
                                    alt="Source Essence"
                                    className="absolute w-[140%] h-[140%] object-cover -top-20 -left-20 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700"
                                />

                                {/* Overlay Gradient for text readability */}
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

                                <div className="absolute bottom-8 left-8 right-8 text-left">
                                    <div className="flex items-center gap-2 font-mono text-neon-lime text-xs mb-3">
                                        <div className="w-2 h-2 bg-neon-lime rounded-full animate-ping"></div>
                                        LIVE_FEED: FARM_ID_402
                                    </div>
                                    <h3 className="font-display font-black text-4xl uppercase mb-2 text-white">Legacy<br />Hardware</h3>
                                    <p className="font-mono text-sm text-gray-300 border-l border-white/30 pl-3">
                                        Ancient processing units (farms) running at 100% efficiency. No patches needed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Data Features */}
                    <div className="space-y-8">
                        {[
                            {
                                icon: <Database className="w-6 h-6" />,
                                title: "CLEAN COMPILE",
                                desc: "Sourced directly from the source (farmers). No middlemen messing with the quality."
                            },
                            {
                                icon: <Zap className="w-6 h-6" />,
                                title: "RUNTIME: OPTIMIZED",
                                desc: "Processed in small batches to preserve memory integrity (nutrients). Zero data loss."
                            },
                            {
                                icon: <ShieldCheck className="w-6 h-6" />,
                                title: "FIREWALL ACTIVE",
                                desc: "Blocked: Sulfates, GMOs, and artificial sweeteners. Only trusted packets allowed."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group relative bg-zinc-900/40 border border-white/5 p-8 rounded-2xl hover:border-neon-lime/30 transition-all duration-300 hover:bg-zinc-900/60">
                                <div className="absolute -left-px top-1/2 -translate-y-1/2 w-1 h-0 bg-neon-lime group-hover:h-1/2 transition-all duration-300"></div>

                                <div className="flex items-start gap-6">
                                    <div className="p-3 bg-white/5 rounded-lg text-neon-lime group-hover:scale-110 group-hover:bg-neon-lime/10 transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-display font-black text-2xl text-white mb-2 group-hover:text-neon-lime transition-colors">
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
