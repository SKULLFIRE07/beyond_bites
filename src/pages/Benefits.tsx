import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Heart, Leaf, Activity, Zap, Sun, TrendingUp, Award, CheckCircle, Mail } from 'lucide-react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-honey" />,
      title: 'Heart Health',
      description: 'Rich in potassium and magnesium, our jaggery helps maintain healthy blood pressure and supports cardiovascular function.',
      image: 'https://source.unsplash.com/random/800x600/?heart,health'
    },
    {
      icon: <Leaf className="w-8 h-8 text-honey" />,
      title: 'Digestive Aid',
      description: 'Natural digestive enzymes help improve gut health and prevent digestive issues like constipation and indigestion.',
      image: 'https://source.unsplash.com/random/800x600/?leaf,health'
    },
    {
      icon: <Activity className="w-8 h-8 text-honey" />,
      title: 'Energy Booster',
      description: 'Complex carbohydrates provide sustained energy release without the crash associated with refined sugar.',
      image: 'https://source.unsplash.com/random/800x600/?energy,health'
    },
    {
      icon: <Zap className="w-8 h-8 text-honey" />,
      title: 'Rich in Iron',
      description: 'Helps prevent anemia by increasing hemoglobin levels and improving blood quality.',
      image: 'https://source.unsplash.com/random/800x600/?iron,health'
    },
    {
      icon: <Sun className="w-8 h-8 text-honey" />,
      title: 'Immunity Support',
      description: 'Packed with antioxidants and minerals that strengthen the immune system and fight infections.',
      image: 'https://source.unsplash.com/random/800x600/?sun,health'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-honey" />,
      title: 'Metabolism Booster',
      description: 'Helps maintain a healthy metabolism and supports weight management when used in moderation.',
      image: 'https://source.unsplash.com/random/800x600/?metabolism,health'
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
    <div className="min-h-screen bg-[#f9f5f0] py-16 px-4">
      <Navigation />
      
      {/* Hero Section */}
      <div 
        className="relative h-64 md:h-96 bg-cover bg-center flex items-center justify-center mb-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our products are carefully crafted to bring you the best of nature's goodness.
            Here's what makes them special:
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Nutritional Comparison */}
      <div className="py-20 bg-gradient-to-br from-amber-50 to-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-playfair font-bold text-cocoa mb-6">
                  Nutritional Powerhouse
                </h2>
                <p className="text-cocoa/80 mb-6">
                  Beyond Bites jaggery is packed with essential nutrients that are completely absent in refined sugar. Each serving provides:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-honey mr-3 mt-0.5 flex-shrink-0" />
                    <span>Iron for healthy blood</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-honey mr-3 mt-0.5 flex-shrink-0" />
                    <span>Magnesium for muscle and nerve function</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-honey mr-3 mt-0.5 flex-shrink-0" />
                    <span>Potassium for heart health</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-honey mr-3 mt-0.5 flex-shrink-0" />
                    <span>Antioxidants that fight free radicals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-honey mr-3 mt-0.5 flex-shrink-0" />
                    <span>Natural electrolytes for hydration</span>
                  </li>
                </ul>
                <a 
                  href="/process" 
                  className="inline-block bg-cocoa text-ivory px-6 py-3 rounded-full font-semibold hover:bg-cocoa/90 transition-colors"
                >
                  Learn About Our Process
                </a>
              </div>
              <div className="md:w-1/2 bg-cocoa p-8 md:p-12 text-ivory">
                <div className="bg-white/10 p-6 rounded-xl h-full">
                  <h3 className="text-2xl font-playfair font-bold mb-4">
                    Jaggery vs. Refined Sugar
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-honey mb-2">Beyond Bites Jaggery</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-honey mr-2">✓</span>
                          <span>Rich in minerals and antioxidants</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-honey mr-2">✓</span>
                          <span>Slow release of energy</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-honey mr-2">✓</span>
                          <span>Supports digestion</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-honey mr-2">✓</span>
                          <span>Boosts immunity</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-300/80 mb-2">Refined Sugar</h4>
                      <ul className="space-y-2 text-sm text-ivory/80">
                        <li className="flex items-start">
                          <span className="text-red-300 mr-2">✗</span>
                          <span>Empty calories, no nutrients</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-300 mr-2">✗</span>
                          <span>Rapid blood sugar spikes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-300 mr-2">✗</span>
                          <span>Can cause energy crashes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-300 mr-2">✗</span>
                          <span>May contribute to inflammation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-cocoa mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-cocoa/80">
              Everything you need to know about jaggery and its benefits
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-cocoa mb-2">{faq.question}</h3>
                <p className="text-cocoa/80">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-playfair font-bold text-cocoa mb-6">
              Still have questions?
            </h3>
            <p className="text-cocoa/80 mb-6 max-w-2xl mx-auto">
              Our team is here to help you understand how Beyond Bites jaggery can benefit your health and wellness journey.
            </p>
            <a 
              href="mailto:admin@migliorelifesciences.in?subject=Question%20About%20Jaggery%20Benefits"
              className="inline-flex items-center bg-honey text-cocoa px-8 py-4 rounded-full font-semibold hover:bg-amber-400 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Benefits;
