import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../components/common/Hero';
import { Heart, Leaf, Activity, Zap, Sun, TrendingUp, ChevronDown, ChevronUp, Check, Shield, Droplet } from 'lucide-react';
import { healthBenefits, nutritionalComparison, faqs } from '../constants/benefits';
import { Link } from 'react-router-dom';

const Benefits = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Icon mapping for benefits
  const iconMap: { [key: string]: any } = {
    'Heart': Heart,
    'Activity': Activity,
    'Zap': Zap,
    'Leaf': Leaf,
    'Sun': Sun,
    'TrendingUp': TrendingUp,
    'Shield': Shield,
    'Droplet': Droplet
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <Hero
          title="Health Benefits of Jaggery"
          subtitle="Nature's Superfood"
          description="Discover why jaggery is more than just a sweetener. Rich in minerals, antioxidants, and natural goodness, it's a healthier alternative to refined sugar."
          primaryCTA={{
            text: "View Products",
            href: "/products"
          }}
          height="medium"
          overlay="gradient"
        />

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm uppercase tracking-wide mb-6">
                Why Jaggery?
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-brown mb-6">
                Ancient Wisdom Meets Modern Science
              </h2>
              <p className="text-lg text-brown-light leading-relaxed">
                For thousands of years, jaggery has been treasured in traditional medicine for its remarkable
                health benefits. Today, modern science confirms what our ancestors knew—jaggery is a powerhouse
                of nutrition that supports overall wellness.
              </p>
            </div>
          </div>
        </section>

        {/* Health Benefits Grid */}
        <section className="py-20 bg-gradient-to-br from-cream to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-brown mb-4">
                Key Health Benefits
              </h2>
              <p className="text-lg text-brown-light max-w-2xl mx-auto">
                Discover the science-backed benefits of incorporating jaggery into your daily diet
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {healthBenefits.map((benefit, index) => {
                const Icon = iconMap[benefit.icon] || Heart;
                const colors = ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-primary-light', 'bg-secondary-dark', 'bg-accent'];

                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-3xl shadow-card hover:shadow-hover transition-all duration-300 border border-cream group"
                  >
                    <div className={`w-16 h-16 ${colors[index % colors.length]} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-brown mb-4 text-center">
                      {benefit.title}
                    </h3>
                    <p className="text-brown-light leading-relaxed text-center">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Nutritional Comparison */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-4xl md:text-5xl text-brown mb-4">
                  Jaggery vs Refined Sugar
                </h2>
                <p className="text-lg text-brown-light max-w-2xl mx-auto">
                  See how jaggery compares to white and brown sugar in nutritional value
                </p>
              </div>

              <div className="bg-gradient-to-br from-cream to-cream-light rounded-3xl shadow-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="px-6 py-4 text-left font-display font-bold">Nutrient</th>
                        <th className="px-6 py-4 text-center font-display font-bold">Jaggery</th>
                        <th className="px-6 py-4 text-center font-display font-bold">White Sugar</th>
                        <th className="px-6 py-4 text-center font-display font-bold">Brown Sugar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {nutritionalComparison.rows.map((row, index) => (
                        <tr
                          key={index}
                          className={`${index % 2 === 0 ? 'bg-white' : 'bg-cream/30'} hover:bg-primary/5 transition-colors`}
                        >
                          <td className="px-6 py-4 font-semibold text-brown">
                            {row.nutrient}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="inline-flex items-center gap-2 text-primary font-semibold">
                              <Check className="w-5 h-5" />
                              {row.jaggery}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center text-brown-light">
                            {row.whiteSugar}
                          </td>
                          <td className="px-6 py-4 text-center text-brown-light">
                            {row.brownSugar}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-r from-primary to-accent p-6 text-white text-center">
                  <p className="font-semibold text-lg">
                    Jaggery retains natural minerals and nutrients lost during sugar refinement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Tips */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-4xl md:text-5xl text-brown mb-4">
                  How to Use Jaggery
                </h2>
                <p className="text-lg text-brown-light">
                  Easy ways to incorporate this superfood into your daily routine
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Morning Tea & Coffee',
                    desc: 'Replace sugar with jaggery cubes for a healthier, mineral-rich start to your day'
                  },
                  {
                    title: 'Baking & Desserts',
                    desc: 'Use jaggery powder in cakes, cookies, and traditional sweets for rich flavor'
                  },
                  {
                    title: 'Smoothies & Beverages',
                    desc: 'Add jaggery to smoothies, lassi, or fresh juice for natural sweetness'
                  },
                  {
                    title: 'Traditional Cooking',
                    desc: 'Perfect for Indian curries, chutneys, and savory dishes that need balanced sweetness'
                  },
                  {
                    title: 'Energy Boost',
                    desc: 'Have a small piece post-workout or during afternoon slumps for sustained energy'
                  },
                  {
                    title: 'Ayurvedic Remedies',
                    desc: 'Combine with ginger, turmeric, or herbs for traditional wellness preparations'
                  }
                ].map((tip, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-card hover:shadow-hover transition-all"
                  >
                    <h3 className="font-display font-bold text-xl text-brown mb-3">
                      {tip.title}
                    </h3>
                    <p className="text-brown-light">
                      {tip.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-4xl md:text-5xl text-brown mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-brown-light">
                  Common questions about jaggery and its benefits
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-cream border border-cream-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 text-left bg-white hover:bg-cream/30 transition-colors focus:outline-none flex justify-between items-center gap-4"
                    >
                      <span className="font-display font-semibold text-lg text-brown pr-4">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0">
                        {openFaq === index ? (
                          <ChevronUp className="w-6 h-6 text-primary" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-primary" />
                        )}
                      </div>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-5 pt-2 bg-cream/30 border-t border-cream-dark">
                        <p className="text-brown-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-secondary to-secondary-light text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Ready to Make the Healthy Switch?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the natural goodness of our premium jaggery products. Your body will thank you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-white text-secondary px-8 py-4 rounded-md font-semibold hover:bg-white/90 transition-all shadow-hover"
              >
                Shop Now
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brown text-white px-8 py-4 rounded-md font-semibold hover:bg-brown-dark transition-all shadow-hover"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Benefits;
