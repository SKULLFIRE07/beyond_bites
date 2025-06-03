import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Clock, Star } from 'lucide-react';

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      title: 'Golden Milk Latte',
      prepTime: '5 mins',
      benefits: ['Immunity Boosting', 'Anti-inflammatory'],
      ingredients: [
        '1 cup milk (dairy or plant-based)',
        '1 tsp Beyond Bites Turmeric Jaggery',
        '1/4 tsp cinnamon',
        'Pinch of black pepper',
        '1/4 tsp vanilla extract'
      ],
      instructions: [
        'Heat milk in a small saucepan over medium heat until hot but not boiling.',
        'Add Beyond Bites Turmeric Jaggery and whisk until fully dissolved.',
        'Stir in cinnamon, black pepper, and vanilla extract.',
        'Pour into your favorite mug and enjoy warm.'
      ],
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Energy Balls',
      prepTime: '15 mins',
      benefits: ['Energy Boosting', 'Protein Packed'],
      ingredients: [
        '1 cup dates, pitted',
        '1/2 cup nuts (almonds, cashews, or walnuts)',
        '2 tbsp Beyond Bites Plain Jaggery',
        '2 tbsp cocoa powder',
        '1/4 cup rolled oats',
        '1 tsp vanilla extract',
        'Pinch of salt'
      ],
      instructions: [
        'Add all ingredients to a food processor and blend until well combined.',
        'Roll the mixture into small balls (about 1 tbsp each).',
        'Optional: Roll in shredded coconut or cocoa powder.',
        'Refrigerate for 30 minutes before serving.'
      ],
      image: 'https://cdn.pixabay.com/photo/2017/01/16/17/45/pancake-1984716_1280.jpg',
      rating: 4.9
    },
    {
      id: 3,
      title: 'Ginger Jaggery Tea',
      prepTime: '10 mins',
      benefits: ['Digestive Aid', 'Immunity Boosting'],
      ingredients: [
        '2 cups water',
        '1 tbsp fresh ginger, grated',
        '1 tbsp Beyond Bites Ginger Jaggery',
        '1 tsp loose leaf tea',
        '1/2 cup milk (optional)'
      ],
      instructions: [
        'Bring water to a boil in a small saucepan.',
        'Add grated ginger and simmer for 3-4 minutes.',
        'Add tea leaves and simmer for another minute.',
        'Strain into cups, add Beyond Bites Ginger Jaggery, and stir until dissolved.',
        'Add milk if desired and serve hot.'
      ],
      image: 'https://cdn.pixabay.com/photo/2017/03/01/05/12/tea-cup-2107599_1280.jpg',
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50/30">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-cocoa/90 to-honey/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-ivory mb-4">
            Healthy Recipes
          </h1>
          <p className="text-xl text-ivory/90 max-w-3xl mx-auto">
            Delicious ways to enjoy the natural goodness of Beyond Bites jaggery
          </p>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <div 
                key={recipe.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="h-56 w-full overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://cdn.pixabay.com/photo/2016/03/05/19/02/background-1238927_1280.jpg';
                      target.alt = 'Food placeholder';
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-cocoa">{recipe.title}</h3>
                    <div className="flex items-center bg-amber-100 text-amber-800 text-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {recipe.rating}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-cocoa/70 mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    {recipe.prepTime}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {recipe.benefits.map((benefit, i) => (
                      <span key={i} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-cocoa mb-2">Ingredients</h4>
                    <ul className="space-y-2 text-cocoa/90 text-sm">
                      {recipe.ingredients.map((ingredient, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-honey rounded-full mt-2 mr-2"></span>
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-cocoa mb-2">Instructions</h4>
                    <ol className="space-y-2 text-cocoa/90 text-sm">
                      {recipe.instructions.map((step, i) => (
                        <li key={i} className="flex">
                          <span className="font-bold text-honey mr-2">{i + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
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

export default Recipes;
