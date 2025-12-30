
import React from 'react';
import { Quote, Star } from 'lucide-react';

const HypeSquad = () => {
    const reviews = [
        {
            id: 1,
            name: "Chef Anjali R.",
            role: "Pastry Chef",
            text: "The texture is unlike anything I've worked with. It doesn't just sweeten; it adds deep, complex caramel notes that refined sugar completely lacks.",
            rating: 5
        },
        {
            id: 2,
            name: "Rahul M.",
            role: "CrossFit Trainer",
            text: "Clean energy. I use the Cardamom infusion in my pre-workout oats. No sugar crash, just sustained power.",
            rating: 5
        },
        {
            id: 3,
            name: "Studio K.",
            role: "Design Agency",
            text: "We replaced all white sugar in our studio pantry with Void Cacao jars. The team is obsessed.",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden" id="hype">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase">
                        <span className="text-neon-lime">Real</span> Feedback
                    </h2>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <div className="flex text-neon-lime">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                        </div>
                        <span className="font-mono text-white/60 text-sm">BASED ON 500+ VERIFIED BITES</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-neon-lime/50 transition-all duration-300 hover:-translate-y-2">
                            <Quote className="w-12 h-12 text-neon-purple opacity-20 mb-6 group-hover:text-neon-lime group-hover:opacity-100 transition-all duration-300" />

                            <p className="text-white/90 font-medium text-lg mb-8 leading-relaxed">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                <div>
                                    <h4 className="font-display font-bold text-white uppercase">{review.name}</h4>
                                    <span className="font-mono text-xs text-neon-lime">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Strip */}
                <div className="mt-20 border-y border-white/10 py-12 flex flex-wrap justify-around text-center gap-8">
                    <div>
                        <div className="text-5xl md:text-7xl font-display font-black text-transparent text-stroke-neon mb-2">0%</div>
                        <div className="font-mono text-gray-400 text-sm uppercase tracking-widest">Added Chemicals</div>
                    </div>
                    <div>
                        <div className="text-5xl md:text-7xl font-display font-black text-transparent text-stroke-neon mb-2">100%</div>
                        <div className="font-mono text-gray-400 text-sm uppercase tracking-widest">Natural Goodness</div>
                    </div>
                    <div>
                        <div className="text-5xl md:text-7xl font-display font-black text-transparent text-stroke-neon mb-2">3</div>
                        <div className="font-mono text-gray-400 text-sm uppercase tracking-widest">Signature Infusions</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HypeSquad;
