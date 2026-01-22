export interface Product {
  id: string;
  name: string;
  category: 'cubes' | 'powder';
  flavor: string;
  description: string;
  longDescription: string;
  benefits: string[];
  ingredients: string[];
  nutritionalInfo: {
    servingSize: string;
    calories: number;
    carbohydrates: string;
    protein: string;
    iron: string;
    calcium: string;
    magnesium: string;
  };
  image: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 'plain-cubes',
    name: 'Pure Jaggery Cubes',
    category: 'cubes',
    flavor: 'Plain',
    description: 'The pure, unadulterated essence of sweetness. 100% natural jaggery processed to golden perfection.',
    longDescription: 'Our Pure Jaggery Cubes are made from the finest sugarcane, processed using traditional methods that preserve all the natural minerals and nutrients. Free from sulfates, GMOs, and artificial additives - just pure, natural sweetness as nature intended.',
    benefits: [
      'Rich in iron and minerals',
      'Aids digestion naturally',
      'Boosts immunity',
      'Provides sustained energy',
      'Purifies blood'
    ],
    ingredients: ['100% Pure Sugarcane Jaggery'],
    nutritionalInfo: {
      servingSize: '20g (approx. 2 cubes)',
      calories: 75,
      carbohydrates: '18g',
      protein: '0.4g',
      iron: '2.4mg',
      calcium: '80mg',
      magnesium: '70mg'
    },
    image: '/images/plain-jaggery-bites.png',
    featured: true
  },
  {
    id: 'cardamom-cubes',
    name: 'Cardamom Infused Cubes',
    category: 'cubes',
    flavor: 'Cardamom',
    description: 'Premium jaggery infused with aromatic green cardamom. A timeless classic with enhanced freshness.',
    longDescription: 'Experience the perfect blend of pure jaggery and aromatic green cardamom. Each cube delivers a burst of traditional flavor while providing all the health benefits of natural jaggery. The cardamom adds digestive properties and a delightful aroma.',
    benefits: [
      'Improves digestive health',
      'Freshens breath naturally',
      'Rich in antioxidants',
      'Enhances respiratory health',
      'Natural energy booster'
    ],
    ingredients: ['Pure Sugarcane Jaggery', 'Green Cardamom (Elaichi)'],
    nutritionalInfo: {
      servingSize: '20g (approx. 2 cubes)',
      calories: 76,
      carbohydrates: '18g',
      protein: '0.4g',
      iron: '2.4mg',
      calcium: '80mg',
      magnesium: '70mg'
    },
    image: '/images/cardamom-infusion.png',
    featured: true
  },
  {
    id: 'ginger-cubes',
    name: 'Ginger Infused Cubes',
    category: 'cubes',
    flavor: 'Ginger',
    description: 'Pure jaggery with the warming power of ginger. Perfect for immunity and digestive wellness.',
    longDescription: 'Our Ginger Infused Jaggery Cubes combine the natural sweetness of jaggery with the therapeutic properties of fresh ginger. Known for boosting immunity and aiding digestion, this blend is perfect for daily wellness.',
    benefits: [
      'Boosts immune system',
      'Anti-inflammatory properties',
      'Aids in digestion',
      'Relieves nausea',
      'Improves circulation'
    ],
    ingredients: ['Pure Sugarcane Jaggery', 'Ginger (Adrak)'],
    nutritionalInfo: {
      servingSize: '20g (approx. 2 cubes)',
      calories: 76,
      carbohydrates: '18g',
      protein: '0.5g',
      iron: '2.5mg',
      calcium: '80mg',
      magnesium: '72mg'
    },
    image: '/images/ginger-infusion.png',
    featured: true
  },
  {
    id: 'cacao-cubes',
    name: 'Cacao Infused Cubes',
    category: 'cubes',
    flavor: 'Cacao',
    description: '100% raw cacao blended with pure jaggery. A guilt-free chocolate experience rich in antioxidants.',
    longDescription: 'Indulge in the rich taste of pure cacao combined with natural jaggery sweetness. Made with 100% raw cacao powder, these cubes are packed with antioxidants and provide a healthy alternative to conventional chocolate treats.',
    benefits: [
      'Rich in antioxidants',
      'Mood-enhancing properties',
      'Heart-healthy flavonoids',
      'Natural energy boost',
      'Supports brain function'
    ],
    ingredients: ['Pure Sugarcane Jaggery', '100% Raw Cacao Powder'],
    nutritionalInfo: {
      servingSize: '20g (approx. 2 cubes)',
      calories: 78,
      carbohydrates: '17g',
      protein: '0.8g',
      iron: '3.2mg',
      calcium: '85mg',
      magnesium: '80mg'
    },
    image: '/images/cacao-infusion.png',
    featured: true
  },
  {
    id: 'jaggery-powder',
    name: 'Pure Jaggery Powder',
    category: 'powder',
    flavor: 'Plain',
    description: 'Fine jaggery powder for instant sweetness. Dissolves quickly, perfect for beverages and cooking.',
    longDescription: 'Our finely ground Jaggery Powder offers the convenience of quick dissolution while retaining all the nutritional benefits of traditional jaggery. Perfect for sweetening tea, coffee, milk, smoothies, and baking. The fine texture ensures even distribution in any recipe.',
    benefits: [
      'Quick and easy to use',
      'Dissolves instantly',
      'Perfect for beverages',
      'Ideal for baking',
      'Retains all nutrients'
    ],
    ingredients: ['100% Pure Sugarcane Jaggery (Powdered)'],
    nutritionalInfo: {
      servingSize: '20g (approx. 1 tablespoon)',
      calories: 75,
      carbohydrates: '18g',
      protein: '0.4g',
      iron: '2.4mg',
      calcium: '80mg',
      magnesium: '70mg'
    },
    image: '/images/jaggery-powder.png',
    featured: false
  }
];

export const productCategories = [
  { id: 'all', name: 'All Products', description: 'View our complete range' },
  { id: 'cubes', name: 'Jaggery Cubes', description: 'Convenient bite-sized pieces' },
  { id: 'powder', name: 'Jaggery Powder', description: 'Fine powder for instant use' }
];

export const flavors = [
  { id: 'all', name: 'All Flavors' },
  { id: 'plain', name: 'Plain' },
  { id: 'cardamom', name: 'Cardamom' },
  { id: 'ginger', name: 'Ginger' },
  { id: 'cacao', name: 'Cacao' }
];
