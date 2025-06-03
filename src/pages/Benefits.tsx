import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Heart, Leaf, Activity, Zap, Sun, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-honey" />,
      title: 'Heart Health',
      description: 'Rich in potassium and magnesium, our jaggery helps maintain healthy blood pressure and supports cardiovascular function.',
    },
    {
      icon: <Leaf className="w-8 h-8 text-honey" />,
      title: 'Digestive Aid',
      description: 'Natural digestive enzymes help improve gut health and prevent digestive issues like constipation and indigestion.',
    },
    {
      icon: <Activity className="w-8 h-8 text-honey" />,
      title: 'Energy Booster',
      description: 'Complex carbohydrates provide sustained energy release without the crash associated with refined sugar.',
    },
    {
      icon: <Zap className="w-8 h-8 text-honey" />,
      title: 'Rich in Iron',
      description: 'Helps prevent anemia by increasing hemoglobin levels and improving blood quality.',
    },
    {
      icon: <Sun className="w-8 h-8 text-honey" />,
      title: 'Immunity Support',
      description: 'Packed with antioxidants and minerals that strengthen the immune system and fight infections.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-honey" />,
      title: 'Metabolism Booster',
      description: 'Helps maintain a healthy metabolism and supports weight management when used in moderation.',
    }
  ];

  const faqs = [
    {
      question: 'How is jaggery better than sugar?',
      answer: 'Unlike refined sugar which is stripped of nutrients during processing, jaggery retains essential minerals like iron, magnesium, and potassium. It also has a lower glycemic index, causing slower blood sugar spikes.'
    },
    {
      question: 'How much jaggery should I consume daily?',
      answer: 'Moderation is key. We recommend 1-2 teaspoons (5-10g) per day as part of a balanced diet. While jaggery is healthier than sugar, it should still be consumed in controlled amounts.'
    },
    {
      question: 'Is jaggery safe for diabetics?',
      answer: 'While jaggery has a lower glycemic index than sugar, it still affects blood sugar levels. Diabetics should consult their healthcare provider before including jaggery in their diet.'
    },
    {
      question: 'How should I store jaggery?',
      answer: 'Store in an airtight container in a cool, dry place away from moisture. Properly stored, it can last up to a year. If it becomes hard, you can grate it or warm it slightly before use.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9f5f0]">
      <Navigation />
      
      {/* Hero Section */}
      <div 
        className="relative h-64 md:h-96 bg-cover bg-center flex items-center justify-center mb-16"
        style={{
          backgroundImage: `linear-gradient(rgba(90, 45, 12, 0.7), rgba(90, 45, 12, 0.5)), url('/images/ChatGPT%20Image%20Jun%202%2C%202025%2C%2004_38_22%20PM.png')`
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Health Benefits</h1>
          <p className="text-xl md:text-2xl">Nature's sweet gift for your health and wellness</p>
        </motion.div>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our products are carefully crafted to bring you the best of nature's goodness.
            Here's what makes them special:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none flex justify-between items-center"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 pt-2 bg-gray-50">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Benefits;
