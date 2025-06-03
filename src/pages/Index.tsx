import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FlavourCarousel from '../components/FlavourCarousel';
import SocialProof from '../components/SocialProof';
import Footer from '../components/Footer';
import { Star, Shield, Truck, Heart, CheckCircle, Award, Users, Clock, Mail, Leaf, Activity, Zap, Sun, TrendingUp } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-honey" />,
      title: "45+ Essential Nutrients",
      description: "Iron, calcium, magnesium, potassium, and vital B-vitamins naturally present in every bite"
    },
    {
      icon: <Shield className="w-8 h-8 text-honey" />,
      title: "Zero Artificial Additives",
      description: "No preservatives, colors, or chemicals. Just pure jaggery infused with natural herbs"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-honey" />,
      title: "Low Glycemic Index",
      description: "Steady energy release without blood sugar spikes, perfect for diabetic-friendly diets"
    },
    {
      icon: <Award className="w-8 h-8 text-honey" />,
      title: "Ayurvedic Wisdom",
      description: "Traditional healing herbs like turmeric, ginger, and cardamom for holistic wellness"
    }
  ];

  const healthBenefits = [
    {
      icon: <Heart className="w-8 h-8 text-honey" />,
      title: "Heart Health",
      description: "Rich in potassium and magnesium, our jaggery helps maintain healthy blood pressure and supports cardiovascular function."
    },
    {
      icon: <Leaf className="w-8 h-8 text-honey" />,
      title: "Digestive Aid",
      description: "Natural digestive enzymes help improve gut health and prevent digestive issues like constipation and indigestion."
    },
    {
      icon: <Activity className="w-8 h-8 text-honey" />,
      title: "Energy Booster",
      description: "Complex carbohydrates provide sustained energy release without the crash associated with refined sugar."
    },
    {
      icon: <Zap className="w-8 h-8 text-honey" />,
      title: "Rich in Iron",
      description: "Helps prevent anemia by increasing hemoglobin levels and improving blood quality."
    },
    {
      icon: <Sun className="w-8 h-8 text-honey" />,
      title: "Immunity Support",
      description: "Packed with antioxidants and minerals that strengthen the immune system and fight infections."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-honey" />,
      title: "Metabolism Booster",
      description: "Helps maintain a healthy metabolism and supports weight management when used in moderation."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Nutritionist, Mumbai",
      text: "I recommend Beyond Bites to all my patients. The nutrient profile is exceptional, and the taste makes healthy eating enjoyable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      role: "Father of 2, Delhi",
      text: "My kids stopped asking for chocolates after I introduced them to Beyond Bites. Now it's our family's go-to healthy sweet!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Meera Patel",
      role: "Yoga Instructor, Bangalore",
      text: "The turmeric-ginger variant has become my daily immunity booster. Pure, natural, and incredibly effective.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const faqs = [
    {
      question: "What makes Beyond Bites different from regular jaggery?",
      answer: "We use traditional cold-press extraction and slow-boil methods to preserve maximum nutrients. Each batch is infused with carefully selected Ayurvedic herbs and tested for purity."
    },
    {
      question: "Are these suitable for diabetics?",
      answer: "Our jaggery has a lower glycemic index than refined sugar, but we recommend consulting your doctor for personalized dietary advice."
    },
    {
      question: "How long do they stay fresh?",
      answer: "Each pack has a 12-month shelf life when stored in a cool, dry place. No refrigeration needed!"
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes! We offer special pricing for bulk orders and corporate gifting. Contact us at admin@migliorelifesciences.in for custom quotes."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Benefits Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-cocoa mb-4">
              Nature's Sweetness, Perfected
            </h2>
            <p className="text-xl text-cocoa/80 max-w-3xl mx-auto">
              Every bite is crafted with care, combining ancient wisdom with modern wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow scroll-reveal">
                <div className="w-12 h-12 bg-honey/10 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-cocoa mb-2">{benefit.title}</h3>
                <p className="text-cocoa/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-cocoa mb-4">
              Why Choose Beyond Bites Jaggery?
            </h2>
            <p className="text-xl text-cocoa/80 max-w-3xl mx-auto">
              Packed with essential nutrients and health benefits that refined sugar simply can't match
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-cocoa mb-3">
                  {benefit.title}
                </h3>
                <p className="text-cocoa/80 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritional Comparison */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-ivory">
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
      </section>

      <FlavourCarousel />
      <SocialProof />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cocoa to-honey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Ready to Experience Pure Goodness?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who've made the switch to healthier sweetness
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-cocoa px-8 py-4 rounded-full font-semibold hover:bg-ivory transition-colors"
            >
              Order Now
            </a>
            <a
              href="mailto:admin@migliorelifesciences.in"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center text-cocoa mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-cocoa mb-2">{faq.question}</h3>
                <p className="text-cocoa/80">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-cocoa/80 mb-4">Still have questions?</p>
            <a 
              href="mailto:admin@migliorelifesciences.in"
              className="inline-flex items-center text-honey font-semibold hover:underline"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
