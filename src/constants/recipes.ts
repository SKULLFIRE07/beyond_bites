export interface Recipe {
  id: string;
  title: string;
  category: 'beverage' | 'snack' | 'dessert' | 'meal';
  prepTime: string;
  cookTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  description: string;
  ingredients: string[];
  instructions: string[];
  benefits: string[];
  rating: number;
  image: string;
  tips?: string[];
}

export const recipes: Recipe[] = [
  {
    id: 'golden-milk-latte',
    title: 'Golden Milk Latte',
    category: 'beverage',
    prepTime: '5 mins',
    cookTime: '5 mins',
    difficulty: 'easy',
    servings: 2,
    description: 'A warm, comforting beverage with turmeric and jaggery - perfect for immunity and relaxation.',
    ingredients: [
      '2 cups milk (dairy or plant-based)',
      '1 tablespoon jaggery powder',
      '1/2 teaspoon turmeric powder',
      '1/4 teaspoon cinnamon powder',
      'Pinch of black pepper',
      '1/4 teaspoon vanilla extract (optional)'
    ],
    instructions: [
      'Heat milk in a saucepan over medium heat',
      'Add turmeric, cinnamon, and black pepper',
      'Stir in jaggery powder until completely dissolved',
      'Simmer for 3-4 minutes, stirring occasionally',
      'Add vanilla extract if using',
      'Pour into mugs and serve warm'
    ],
    benefits: ['Boosts immunity', 'Anti-inflammatory', 'Better sleep', 'Sustained energy'],
    rating: 4.8,
    image: '/images/recipes/golden-milk.jpg',
    tips: [
      'Black pepper enhances turmeric absorption',
      'Can be served cold over ice',
      'Add a pinch of ginger for extra warmth'
    ]
  },
  {
    id: 'energy-balls',
    title: 'Jaggery Energy Balls',
    category: 'snack',
    prepTime: '15 mins',
    cookTime: '0 mins',
    difficulty: 'easy',
    servings: 12,
    description: 'Nutritious no-bake energy balls packed with nuts, dates, and jaggery - perfect pre-workout snack.',
    ingredients: [
      '1 cup dates, pitted',
      '1/2 cup almonds',
      '1/2 cup cashews',
      '3 tablespoons jaggery powder',
      '2 tablespoons cocoa powder (optional)',
      '1 tablespoon chia seeds',
      'Desiccated coconut for rolling'
    ],
    instructions: [
      'Soak dates in warm water for 10 minutes, drain well',
      'Add dates, nuts, jaggery powder, cocoa, and chia seeds to a food processor',
      'Pulse until mixture comes together and is sticky',
      'Roll into 12 equal-sized balls',
      'Roll each ball in desiccated coconut',
      'Refrigerate for 30 minutes before serving',
      'Store in an airtight container in the fridge for up to 2 weeks'
    ],
    benefits: ['Quick energy', 'Protein-rich', 'Healthy fats', 'Portable snack'],
    rating: 4.9,
    image: '/images/recipes/energy-balls.jpg',
    tips: [
      'Add protein powder for extra nutrition',
      'Try rolling in crushed nuts instead of coconut',
      'Perfect for kids\' lunch boxes'
    ]
  },
  {
    id: 'ginger-jaggery-tea',
    title: 'Ginger Jaggery Tea',
    category: 'beverage',
    prepTime: '5 mins',
    cookTime: '10 mins',
    difficulty: 'easy',
    servings: 2,
    description: 'Traditional Indian chai sweetened with jaggery - perfect for digestion and immunity.',
    ingredients: [
      '2 cups water',
      '2 teaspoons tea leaves (black tea)',
      '1 inch fresh ginger, crushed',
      '2-3 jaggery cubes (ginger or plain)',
      '1/2 cup milk',
      '2 cardamom pods, crushed (optional)'
    ],
    instructions: [
      'Boil water in a saucepan',
      'Add crushed ginger and cardamom, simmer for 2 minutes',
      'Add tea leaves and boil for 2-3 minutes',
      'Add jaggery cubes and stir until dissolved',
      'Add milk and bring to a boil',
      'Strain into cups and serve hot'
    ],
    benefits: ['Aids digestion', 'Boosts immunity', 'Relieves cold symptoms', 'Energy boost'],
    rating: 5.0,
    image: '/images/recipes/ginger-tea.jpg',
    tips: [
      'Use ginger-infused jaggery cubes for extra flavor',
      'Adjust jaggery amount to taste',
      'Can be enjoyed without milk for a lighter version'
    ]
  },
  {
    id: 'jaggery-glazed-carrots',
    title: 'Jaggery Glazed Carrots',
    category: 'meal',
    prepTime: '10 mins',
    cookTime: '15 mins',
    difficulty: 'easy',
    servings: 4,
    description: 'Sweet and savory roasted carrots with a beautiful jaggery glaze - a healthy side dish.',
    ingredients: [
      '500g carrots, peeled and cut into sticks',
      '2 tablespoons jaggery powder',
      '2 tablespoons ghee or olive oil',
      '1/2 teaspoon cumin seeds',
      'Salt to taste',
      'Fresh herbs for garnish (coriander or parsley)'
    ],
    instructions: [
      'Preheat oven to 200°C (400°F)',
      'Toss carrots with oil, salt, and cumin seeds',
      'Spread on a baking sheet in a single layer',
      'Roast for 10 minutes',
      'Remove from oven, sprinkle jaggery powder over carrots',
      'Toss well and roast for another 5-7 minutes until caramelized',
      'Garnish with fresh herbs and serve'
    ],
    benefits: ['Rich in beta-carotene', 'Fiber-rich', 'Antioxidants', 'Eye health'],
    rating: 4.7,
    image: '/images/recipes/glazed-carrots.jpg',
    tips: [
      'Can also be made on stovetop in a pan',
      'Add a squeeze of lemon for tang',
      'Try with other root vegetables like parsnips or sweet potatoes'
    ]
  },
  {
    id: 'jaggery-banana-bread',
    title: 'Jaggery Banana Bread',
    category: 'dessert',
    prepTime: '15 mins',
    cookTime: '50 mins',
    difficulty: 'medium',
    servings: 8,
    description: 'Moist, naturally sweetened banana bread using jaggery instead of refined sugar.',
    ingredients: [
      '3 ripe bananas, mashed',
      '1/2 cup jaggery powder',
      '1/3 cup melted coconut oil or butter',
      '2 eggs',
      '1 teaspoon vanilla extract',
      '1.5 cups whole wheat flour',
      '1 teaspoon baking soda',
      '1/2 teaspoon cinnamon',
      '1/4 teaspoon salt',
      '1/2 cup chopped walnuts (optional)'
    ],
    instructions: [
      'Preheat oven to 180°C (350°F). Grease a 9x5 inch loaf pan',
      'In a large bowl, mix mashed bananas, jaggery powder, and melted oil',
      'Beat in eggs and vanilla extract',
      'In another bowl, mix flour, baking soda, cinnamon, and salt',
      'Fold dry ingredients into wet ingredients until just combined',
      'Fold in walnuts if using',
      'Pour batter into prepared pan',
      'Bake for 45-50 minutes until a toothpick comes out clean',
      'Cool in pan for 10 minutes, then transfer to a wire rack'
    ],
    benefits: ['No refined sugar', 'Rich in potassium', 'Whole grain', 'Satisfying treat'],
    rating: 4.9,
    image: '/images/recipes/banana-bread.jpg',
    tips: [
      'The riper the bananas, the better',
      'Can add chocolate chips for extra indulgence',
      'Freezes well for up to 3 months'
    ]
  },
  {
    id: 'jaggery-lemon-drink',
    title: 'Refreshing Jaggery Lemonade',
    category: 'beverage',
    prepTime: '5 mins',
    cookTime: '5 mins',
    difficulty: 'easy',
    servings: 4,
    description: 'A healthier version of lemonade sweetened with jaggery - perfect summer cooler.',
    ingredients: [
      '4 cups cold water',
      '4 tablespoons jaggery powder',
      '4 lemons, juiced',
      '1/2 teaspoon black salt',
      'Pinch of cumin powder',
      'Fresh mint leaves',
      'Ice cubes'
    ],
    instructions: [
      'In a small saucepan, warm 1/2 cup water and dissolve jaggery powder',
      'Let the jaggery syrup cool completely',
      'In a large pitcher, combine cold water, lemon juice, and jaggery syrup',
      'Add black salt and cumin powder',
      'Stir well and add fresh mint leaves',
      'Serve over ice'
    ],
    benefits: ['Hydrating', 'Electrolyte balance', 'Vitamin C', 'Digestive aid'],
    rating: 4.8,
    image: '/images/recipes/jaggery-lemonade.jpg',
    tips: [
      'Adjust sweetness and tartness to taste',
      'Can be made carbonated with soda water',
      'Perfect post-workout drink'
    ]
  },
  {
    id: 'oatmeal-jaggery',
    title: 'Jaggery Spiced Oatmeal',
    category: 'meal',
    prepTime: '5 mins',
    cookTime: '10 mins',
    difficulty: 'easy',
    servings: 2,
    description: 'Warm, comforting breakfast oatmeal sweetened naturally with jaggery and warming spices.',
    ingredients: [
      '1 cup rolled oats',
      '2 cups milk or water',
      '2 tablespoons jaggery powder',
      '1/2 teaspoon cinnamon',
      '1/4 teaspoon cardamom powder',
      'Sliced banana and nuts for topping',
      'Pinch of salt'
    ],
    instructions: [
      'In a saucepan, bring milk/water to a boil',
      'Add oats and a pinch of salt, reduce heat',
      'Cook for 5-7 minutes, stirring occasionally',
      'Add jaggery powder, cinnamon, and cardamom',
      'Stir well and cook for another 2 minutes',
      'Remove from heat, let stand for 1 minute',
      'Top with sliced banana, nuts, and a drizzle of honey if desired'
    ],
    benefits: ['Sustained energy', 'Heart-healthy', 'Filling breakfast', 'Fiber-rich'],
    rating: 4.7,
    image: '/images/recipes/oatmeal.jpg',
    tips: [
      'Add a tablespoon of chia seeds for extra nutrition',
      'Can be made overnight in the fridge',
      'Try with different fruit toppings'
    ]
  },
  {
    id: 'jaggery-coconut-ladoo',
    title: 'Coconut Jaggery Ladoo',
    category: 'dessert',
    prepTime: '10 mins',
    cookTime: '10 mins',
    difficulty: 'medium',
    servings: 15,
    description: 'Traditional Indian sweet made with coconut and jaggery - perfect for festivals or gifting.',
    ingredients: [
      '2 cups desiccated coconut',
      '1 cup jaggery, grated or powdered',
      '1/2 cup water',
      '2 tablespoons ghee',
      '1/2 teaspoon cardamom powder',
      '2 tablespoons chopped cashews (optional)'
    ],
    instructions: [
      'In a pan, heat ghee and roast coconut until lightly golden',
      'Remove coconut and set aside',
      'In the same pan, add jaggery and water',
      'Heat until jaggery dissolves and reaches one-string consistency',
      'Add roasted coconut, cardamom, and cashews',
      'Mix well and cook for 2-3 minutes',
      'Turn off heat and let mixture cool slightly',
      'While still warm, shape into small balls (ladoos)',
      'Let them cool completely and firm up'
    ],
    benefits: ['Traditional sweet', 'No refined sugar', 'Festival special', 'Natural ingredients'],
    rating: 5.0,
    image: '/images/recipes/coconut-ladoo.jpg',
    tips: [
      'Grease your palms with ghee while rolling to prevent sticking',
      'Add a pinch of saffron for special occasions',
      'Store in airtight container for up to 1 week'
    ]
  }
];

export const recipeCategories = [
  { id: 'all', name: 'All Recipes', count: 8 },
  { id: 'beverage', name: 'Beverages', count: 3 },
  { id: 'snack', name: 'Snacks', count: 1 },
  { id: 'dessert', name: 'Desserts', count: 2 },
  { id: 'meal', name: 'Meals', count: 2 }
];
