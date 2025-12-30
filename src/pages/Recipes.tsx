import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FloatingOrderButton from '../components/FloatingOrderButton';
import { Clock, Star, ChefHat, Flame, Coffee, Heart, Database, Search, Zap } from 'lucide-react';

const Recipes = () => {
  const [filter, setFilter] = useState('All');

  const recipes = [
    {
      id: 1,
      title: 'Golden Milk Latte',
      category: 'Beverage',
      prepTime: '5 mins',
      difficulty: 'Easy',
      benefits: ['Immunity', 'Anti-inflammatory'],
      ingredients: ['1 cup milk', '1 tsp Turmeric Jaggery', 'Pinch of Cinnamon'],
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&auto=format&fit=crop',
      rating: 4.9
    },
    {
      id: 2,
      title: 'Energy Balls',
      category: 'Snack',
      prepTime: '15 mins',
      difficulty: 'Medium',
      benefits: ['Energy', 'Protein'],
      ingredients: ['Dates', 'Nuts', 'Plain Jaggery', 'Cocoa Powder'],
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop',
      rating: 5.0
    },
    {
      id: 3,
      title: 'Ginger Jaggery Tea',
      category: 'Beverage',
      prepTime: '10 mins',
      difficulty: 'Easy',
      benefits: ['Digestion', 'Immunity'],
      ingredients: ['Ginger', 'Tea Leaves', 'Ginger Jaggery'],
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop',
      rating: 4.8
    },
    {
      id: 4,
      title: 'Jaggery Glazed Carrots',
      category: 'Meal',
      prepTime: '25 mins',
      difficulty: 'Medium',
      benefits: ['Vitamin A', 'Fiber'],
      ingredients: ['Carrots', 'Butter', 'Plain Jaggery'],
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&auto=format&fit=crop',
      rating: 4.7
    }
  ];

  const categories = ['All', 'Beverage', 'Snack', 'Meal'];
  const filteredRecipes = filter === 'All' ? recipes : recipes.filter(r => r.category === filter);

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-neon-lime selection:text-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-black border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        {/* Neon Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-purple/20 blur-[100px] rounded-full pointing-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 text-neon-lime font-mono text-sm tracking-widest border border-neon-lime/30 px-4 py-2 rounded-full bg-neon-lime/5">
            <Database className="w-4 h-4" /> RECIPE_COLLECTION_V1.0
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter">
            EDIBLE <span className="text-transparent text-stroke-neon">CREATIONS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono leading-relaxed">
            &gt; Fuel your body with nature's original energy source.<br />
            &gt; Select a creation below to begin.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-24 relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-lime/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-none font-mono font-bold uppercase tracking-wider skew-x-[-10deg] transition-all duration-300 border ${filter === cat
                  ? 'bg-neon-lime text-black border-neon-lime shadow-[0_0_20px_rgba(204,255,0,0.4)]'
                  : 'bg-black text-gray-400 border-white/20 hover:border-white/50 hover:text-white'
                  }`}
              >
                <span className="block skew-x-[10deg]">{cat}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="group bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-neon-lime/50 transition-all duration-500 hover:-translate-y-2 relative"
              >
                {/* Image Section */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>

                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md px-3 py-1 border border-neon-lime/30 text-neon-lime text-xs font-mono font-bold uppercase tracking-wider">
                    {recipe.category}
                  </span>

                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-display font-black text-white group-hover:text-neon-lime transition-colors leading-none uppercase">
                      {recipe.title}
                    </h3>
                    <div className="flex items-center gap-1 text-neon-lime font-mono text-sm">
                      <Star className="w-3 h-3 fill-current" /> {recipe.rating}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-xs font-mono text-gray-400 mb-6 pb-6 border-b border-white/10 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-neon-purple" /> {recipe.prepTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-neon-pink" /> {recipe.difficulty}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-bold text-neon-lime uppercase tracking-widest block mb-2">The Goodness (Ingredients)</span>
                      <p className="text-sm text-gray-400 font-mono leading-relaxed">{recipe.ingredients.join(', ')}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {recipe.benefits.map((b, i) => (
                        <span key={i} className="text-[10px] bg-white/5 text-gray-300 px-2 py-1 border border-white/10 uppercase tracking-wider hover:border-neon-lime/30 transition-colors">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full mt-8 py-4 bg-white/5 border border-white/10 hover:bg-neon-lime hover:text-black hover:border-neon-lime transition-all duration-300 font-display font-black uppercase tracking-widest text-sm group-hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingOrderButton />
    </div>
  );
};

export default Recipes;
