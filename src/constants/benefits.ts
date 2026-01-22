export interface HealthBenefit {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: string;
}

export const healthBenefits: HealthBenefit[] = [
  {
    id: 'heart-health',
    title: 'Heart Health',
    description: 'Rich in potassium and magnesium, supports cardiovascular function',
    details: 'Jaggery contains essential minerals like potassium and magnesium that help maintain healthy blood pressure levels and support overall heart function. Regular consumption may contribute to better cardiovascular health.',
    icon: 'Heart'
  },
  {
    id: 'digestion',
    title: 'Digestive Aid',
    description: 'Natural enzymes improve gut health and aid digestion',
    details: 'The natural enzymes present in jaggery activate digestive enzymes in the body, helping to cleanse the digestive system and prevent constipation. It also helps in proper digestion of food and absorption of nutrients.',
    icon: 'Activity'
  },
  {
    id: 'energy',
    title: 'Energy Booster',
    description: 'Complex carbs provide sustained energy without crash',
    details: 'Unlike refined sugar, jaggery provides sustained energy release due to its complex carbohydrate structure. It helps prevent fatigue and provides the body with a steady supply of energy throughout the day.',
    icon: 'Zap'
  },
  {
    id: 'iron',
    title: 'Rich in Iron',
    description: 'Prevents anemia and improves blood quality',
    details: 'Jaggery is an excellent source of iron, making it beneficial for preventing and treating iron-deficiency anemia. It helps increase hemoglobin levels and improves overall blood quality.',
    icon: 'Droplet'
  },
  {
    id: 'immunity',
    title: 'Immunity Support',
    description: 'Antioxidants and minerals strengthen immune system',
    details: 'Packed with antioxidants, zinc, and selenium, jaggery helps boost immunity and protects the body from infections. It supports the body\'s natural defense mechanisms against common ailments.',
    icon: 'Shield'
  },
  {
    id: 'metabolism',
    title: 'Metabolism Booster',
    description: 'Supports healthy metabolism and weight management',
    details: 'Jaggery helps improve metabolic rate and aids in proper utilization of nutrients. The presence of minerals and vitamins helps regulate body functions and may support healthy weight management when consumed in moderation.',
    icon: 'TrendingUp'
  }
];

export const nutritionalComparison = {
  headers: ['Nutrient (per 100g)', 'Jaggery', 'White Sugar', 'Brown Sugar'],
  rows: [
    { nutrient: 'Calories', jaggery: '383 kcal', whiteSugar: '387 kcal', brownSugar: '380 kcal' },
    { nutrient: 'Iron', jaggery: '11 mg', whiteSugar: '0.01 mg', brownSugar: '0.71 mg' },
    { nutrient: 'Magnesium', jaggery: '70-90 mg', whiteSugar: 'Negligible', brownSugar: '9 mg' },
    { nutrient: 'Potassium', jaggery: '1050 mg', whiteSugar: '2 mg', brownSugar: '133 mg' },
    { nutrient: 'Calcium', jaggery: '80 mg', whiteSugar: '1 mg', brownSugar: '83 mg' },
    { nutrient: 'Processing', jaggery: 'Minimal', whiteSugar: 'Highly Refined', brownSugar: 'Refined' },
    { nutrient: 'Additives', jaggery: 'None', whiteSugar: 'May contain', brownSugar: 'May contain' },
    { nutrient: 'Glycemic Index', jaggery: '84 (Moderate)', whiteSugar: '65 (High)', brownSugar: '64 (High)' }
  ]
};

export const faqs = [
  {
    question: 'How is jaggery better than white sugar?',
    answer: 'Jaggery is unrefined and retains all the natural minerals and vitamins present in sugarcane, including iron, magnesium, potassium, and calcium. White sugar, on the other hand, is highly processed and stripped of all nutrients. Jaggery also contains natural enzymes that aid digestion and provide sustained energy without the sudden spike and crash associated with refined sugar.'
  },
  {
    question: 'How much jaggery should I consume daily?',
    answer: 'For adults, 20-30 grams (about 2-3 small cubes or 1-1.5 tablespoons of powder) per day is generally recommended as a healthy amount. This provides health benefits while keeping sugar intake moderate. However, individual needs may vary based on activity level, overall diet, and health conditions. Consult with a healthcare provider for personalized advice.'
  },
  {
    question: 'Is jaggery safe for diabetics?',
    answer: 'While jaggery has a moderate glycemic index and contains more nutrients than white sugar, it still affects blood sugar levels. Diabetics should consume jaggery in very limited quantities and only after consulting with their healthcare provider. It is not a sugar-free alternative but may be a better choice than refined sugar when consumed in strict moderation as part of a doctor-approved meal plan.'
  },
  {
    question: 'How should I store jaggery?',
    answer: 'Store jaggery in an airtight container in a cool, dry place away from direct sunlight. Properly stored, it can last for 6-12 months. If exposed to moisture, jaggery may become soft or sticky, but this doesn\'t affect its quality - simply store it in a sealed container. In very humid climates, refrigeration can help maintain texture, though it\'s not necessary.'
  },
  {
    question: 'Can jaggery help with weight loss?',
    answer: 'Jaggery can be part of a weight management plan when consumed in moderation. It helps boost metabolism, aids digestion, and provides sustained energy. However, it still contains calories and should replace, not add to, your sugar intake. The key is portion control and using it as a healthier alternative to refined sugar, combined with a balanced diet and regular exercise.'
  },
  {
    question: 'What makes your jaggery different from others?',
    answer: 'Our jaggery stands out due to our global patented manufacturing process, which ensures optimal nutrient retention and consistent quality. We source directly from partner farms, use no chemicals or additives, and conduct rigorous lab testing on every batch. Our range of flavored varieties and both cube and powder formats offer convenience and variety not commonly available.'
  },
  {
    question: 'Can I use jaggery powder in baking?',
    answer: 'Absolutely! Jaggery powder is excellent for baking and can replace refined sugar in most recipes. It adds a rich, caramel-like flavor to cakes, cookies, and breads. Use the same quantity as you would sugar, though you may need to slightly adjust liquid content as jaggery can be slightly more moist. It works beautifully in traditional Indian sweets as well as modern baked goods.'
  },
  {
    question: 'Do you export internationally?',
    answer: 'Yes! As manufacturers and exporters, we ship our products internationally. We comply with all international food safety standards and can handle bulk orders. Our products are packaged to withstand long-distance shipping while maintaining freshness. For export inquiries, please contact us directly at admin@miglioreagrotech.com or call +91 93229 73362.'
  },
  {
    question: 'Are your products certified organic?',
    answer: 'Yes, we are Organic India certified. Our sugarcane is sourced from farms that follow organic farming practices without harmful pesticides or chemicals. Every batch is tested and certified to meet organic standards. We also hold FSSAI and ISO 22000 certifications, ensuring comprehensive food safety and quality management.'
  },
  {
    question: 'Can you create custom jaggery products?',
    answer: 'Yes! With our global patent and manufacturing capabilities, we can develop custom jaggery products for your specific needs. Whether you need a unique flavor combination, special packaging, or private labeling for your brand, we can help. Contact us to discuss your requirements and we\'ll work with you to create the perfect product.'
  }
];
