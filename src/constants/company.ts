export const companyInfo = {
  name: 'Migliore Agrotech',
  tagline: 'Innovators, Manufacturers & Exporters of Premium Organic Jaggery',
  description: 'Leading the jaggery industry with innovation and quality. We are proud holders of a global patent in jaggery manufacturing, enabling us to create any jaggery-based product with unmatched expertise and quality standards.',
  mission: 'To revolutionize the jaggery industry through innovation, quality, and sustainability while preserving traditional values and supporting farming communities.',
  vision: 'To become the global leader in premium jaggery products, known for innovation, quality, and ethical practices.',

  contact: {
    phone: '+91 93229 73362',
    email: 'admin@miglioreagrotech.com',
    address: {
      city: 'Pune',
      state: 'Maharashtra',
      country: 'India'
    },
    businessHours: 'Monday - Saturday: 9:00 AM - 6:00 PM IST'
  },

  social: {
    whatsapp: '+919322973362',
    // Add other social media links as available
  },

  capabilities: {
    title: 'Our Capabilities',
    description: 'With our global patent and state-of-the-art manufacturing facilities, we can create any product in the jaggery sector.',
    highlights: [
      'Global Patent Holders',
      'Custom Product Development',
      'Bulk Manufacturing',
      'International Export',
      'Quality Assurance & Testing',
      'Traditional + Modern Methods'
    ]
  },

  certifications: [
    {
      id: 'fssai',
      name: 'FSSAI Certified',
      description: 'Food Safety and Standards Authority of India approved',
      icon: 'Shield'
    },
    {
      id: 'iso',
      name: 'ISO 22000',
      description: 'International food safety management standards',
      icon: 'Award'
    },
    {
      id: 'organic',
      name: 'Organic India',
      description: 'Certified organic products',
      icon: 'Leaf'
    },
    {
      id: 'lab',
      name: 'Lab Tested',
      description: 'Rigorous quality testing for every batch',
      icon: 'ClipboardCheck'
    },
    {
      id: 'patent',
      name: 'Global Patent',
      description: 'Patent holder for innovative jaggery manufacturing process',
      icon: 'FileCheck'
    }
  ],

  values: [
    {
      id: 'innovation',
      title: 'Innovation',
      description: 'Pioneering new methods and products in the jaggery industry with our patented technology.',
      icon: 'Lightbulb'
    },
    {
      id: 'quality',
      title: 'Uncompromising Quality',
      description: 'Every product undergoes rigorous testing to meet international quality standards.',
      icon: 'Award'
    },
    {
      id: 'ethical',
      title: 'Ethical Sourcing',
      description: 'Direct partnerships with farmers ensuring fair prices and sustainable practices.',
      icon: 'Handshake'
    },
    {
      id: 'traditional',
      title: 'Traditional Methods',
      description: 'Combining time-tested traditional processes with modern quality controls.',
      icon: 'Heart'
    },
    {
      id: 'natural',
      title: '100% Natural',
      description: 'No chemicals, no artificial additives - just pure, natural goodness.',
      icon: 'Sprout'
    },
    {
      id: 'export',
      title: 'Export Excellence',
      description: 'Bringing Indian jaggery to the world with international export capabilities.',
      icon: 'Globe'
    }
  ],

  whyChooseUs: [
    {
      title: 'Global Patent Holders',
      description: 'Our innovative, patented manufacturing process ensures superior quality and allows us to create any jaggery product you need.',
      icon: 'Award'
    },
    {
      title: 'Full-Service Manufacturing',
      description: 'From concept to export, we handle everything - product development, manufacturing, quality testing, and international shipping.',
      icon: 'Factory'
    },
    {
      title: 'Quality Assurance',
      description: 'Every batch is lab-tested and certified to meet the highest international food safety standards.',
      icon: 'CheckCircle'
    },
    {
      title: 'Farm to Export',
      description: 'Direct farmer partnerships ensure traceability, quality control, and fair trade practices throughout our supply chain.',
      icon: 'Tractor'
    }
  ],

  stats: [
    {
      value: '1',
      label: 'Global Patent',
      suffix: ''
    },
    {
      value: '5',
      label: 'Product Variants',
      suffix: '+'
    },
    {
      value: '100',
      label: 'Pure & Natural',
      suffix: '%'
    },
    {
      value: '500',
      label: 'Farmers Supported',
      suffix: '+'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Source Selection',
      description: 'We carefully select premium sugarcane from partner farms. Only the finest quality sugarcane, grown without harmful pesticides, makes it to our facility.',
      icon: 'Sprout'
    },
    {
      step: 2,
      title: 'Extraction',
      description: 'Fresh sugarcane juice is extracted using traditional methods within hours of harvest to preserve maximum nutrients and natural sweetness.',
      icon: 'Droplets'
    },
    {
      step: 3,
      title: 'Filtration',
      description: 'The juice undergoes natural filtration to remove impurities while preserving essential minerals and nutrients. No chemicals are used in this process.',
      icon: 'Droplets'
    },
    {
      step: 4,
      title: 'Concentration',
      description: 'The filtered juice is slowly concentrated using controlled heating. Our patented process ensures optimal nutrient retention and perfect consistency.',
      icon: 'Flame'
    },
    {
      step: 5,
      title: 'Flavor Infusion',
      description: 'Natural ingredients like cardamom, ginger, or cacao are carefully blended in during the final stages for our flavored varieties.',
      icon: 'Package'
    },
    {
      step: 6,
      title: 'Molding & Packaging',
      description: 'The mixture is poured into molds or processed into powder. Once cooled and set, products are carefully packaged in food-grade materials.',
      icon: 'Package'
    },
    {
      step: 7,
      title: 'Quality Testing',
      description: 'Every batch undergoes rigorous laboratory testing for purity, safety, and nutritional content before receiving our quality certification.',
      icon: 'CheckCircle'
    },
    {
      step: 8,
      title: 'Export Ready',
      description: 'Products are packed according to international export standards and shipped to customers worldwide with full traceability.',
      icon: 'Truck'
    }
  ]
};

export const processSteps = [
  {
    id: 1,
    title: 'Source Selection',
    description: 'We carefully select premium sugarcane from partner farms. Only the finest quality sugarcane, grown without harmful pesticides, makes it to our facility.',
    icon: 'Sprout',
    image: import.meta.env.BASE_URL + 'images/process-source.jpg'
  },
  {
    id: 2,
    title: 'Extraction',
    description: 'Fresh sugarcane juice is extracted using traditional methods within hours of harvest to preserve maximum nutrients and natural sweetness.',
    icon: 'Droplet',
    image: import.meta.env.BASE_URL + 'images/process-extraction.jpg'
  },
  {
    id: 3,
    title: 'Filtration',
    description: 'The juice undergoes natural filtration to remove impurities while preserving essential minerals and nutrients. No chemicals are used in this process.',
    icon: 'Filter',
    image: import.meta.env.BASE_URL + 'images/process-filtration.jpg'
  },
  {
    id: 4,
    title: 'Concentration',
    description: 'The filtered juice is slowly concentrated using controlled heating. Our patented process ensures optimal nutrient retention and perfect consistency.',
    icon: 'Flame',
    image: import.meta.env.BASE_URL + 'images/process-concentration.jpg'
  },
  {
    id: 5,
    title: 'Flavor Infusion',
    description: 'Natural ingredients like cardamom, ginger, or cacao are carefully blended in during the final stages for our flavored varieties.',
    icon: 'Sparkles',
    image: import.meta.env.BASE_URL + 'images/process-flavoring.jpg'
  },
  {
    id: 6,
    title: 'Molding & Packaging',
    description: 'The mixture is poured into molds or processed into powder. Once cooled and set, products are carefully packaged in food-grade materials.',
    icon: 'Package',
    image: import.meta.env.BASE_URL + 'images/process-molding.jpg'
  },
  {
    id: 7,
    title: 'Quality Testing',
    description: 'Every batch undergoes rigorous laboratory testing for purity, safety, and nutritional content before receiving our quality certification.',
    icon: 'ClipboardCheck',
    image: import.meta.env.BASE_URL + 'images/process-testing.jpg'
  },
  {
    id: 8,
    title: 'Export Ready',
    description: 'Products are packed according to international export standards and shipped to customers worldwide with full traceability.',
    icon: 'Truck',
    image: import.meta.env.BASE_URL + 'images/process-export.jpg'
  }
];
