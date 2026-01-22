export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  product?: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'Switched to Migliore Agrotech\'s jaggery powder six months ago and haven\'t looked back. It dissolves perfectly in my morning chai and I feel so much better knowing I\'m giving my family something truly natural. The quality is exceptional!',
    product: 'Jaggery Powder',
    verified: true
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    location: 'Delhi, NCR',
    rating: 5,
    text: 'As someone conscious about what I eat, I appreciate that this jaggery is certified organic and lab-tested. The cardamom flavor is my favorite - perfect balance of sweetness and aroma. Highly recommend to anyone looking for a healthy sugar alternative.',
    product: 'Cardamom Cubes',
    verified: true
  },
  {
    id: '3',
    name: 'Anita Desai',
    location: 'Pune, Maharashtra',
    rating: 5,
    text: 'I\'ve been buying jaggery for years, but Migliore Agrotech\'s quality is unmatched. The ginger cubes are perfect for my evening tea - they boost immunity and taste wonderful. So glad I found this brand!',
    product: 'Ginger Cubes',
    verified: true
  },
  {
    id: '4',
    name: 'Vikram Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    text: 'Excellent product quality and packaging. I use the powder for all my cooking and baking needs. The fact that they have a global patent and multiple certifications gives me complete confidence in the purity and safety of their products.',
    product: 'Jaggery Powder',
    verified: true
  },
  {
    id: '5',
    name: 'Meera Iyer',
    location: 'Bangalore, Karnataka',
    rating: 4.5,
    text: 'The cacao jaggery cubes are a game-changer! My kids love them as a healthy snack alternative to chocolates. Rich flavor without any guilt. Great work by Migliore Agrotech in creating such innovative products.',
    product: 'Cacao Cubes',
    verified: true
  },
  {
    id: '6',
    name: 'Amit Malhotra',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    text: 'We use this for our restaurant and our customers absolutely love desserts made with Migliore\'s jaggery. The consistent quality and natural taste make a huge difference. Their export capabilities are also impressive for bulk orders.',
    product: 'Pure Jaggery Cubes',
    verified: true
  },
  {
    id: '7',
    name: 'Deepa Nair',
    location: 'Kochi, Kerala',
    rating: 5,
    text: 'Finally, a jaggery brand I can trust! No artificial additives, just pure natural goodness. I\'ve noticed improved digestion and more sustained energy since I switched. The plain cubes are perfect for traditional recipes.',
    product: 'Pure Jaggery Cubes',
    verified: true
  },
  {
    id: '8',
    name: 'Sanjay Gupta',
    location: 'Hyderabad, Telangana',
    rating: 5,
    text: 'Impressed by their commitment to quality and ethical sourcing. Knowing that they work directly with farmers and maintain high standards throughout production makes me feel good about supporting this brand.',
    verified: true
  }
];

export const testimonialStats = {
  totalReviews: 500,
  averageRating: 4.8,
  fiveStarPercentage: 85,
  wouldRecommend: 95
};
