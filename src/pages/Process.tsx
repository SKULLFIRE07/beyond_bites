import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../components/common/Hero';
import { Sprout, Droplets, Flame, FlaskConical, Package, CheckCircle, Truck, Award } from 'lucide-react';
import { companyInfo } from '../constants/company';
import { Link } from 'react-router-dom';

const Process = () => {
  // Map icons to process steps
  const iconMap: { [key: string]: any } = {
    'Sprout': Sprout,
    'Droplets': Droplets,
    'Flame': Flame,
    'FlaskConical': FlaskConical,
    'Package': Package,
    'CheckCircle': CheckCircle,
    'Truck': Truck,
    'Award': Award
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <Hero
          title="Our Manufacturing Process"
          subtitle="From Farm to Table"
          description="Discover how we combine our patented technology with traditional methods to create the finest jaggery products in the world."
          primaryCTA={{
            text: "View Products",
            href: "/products"
          }}
          height="medium"
          overlay="gradient"
        />

        {/* Patent Technology Highlight */}
        <section className="py-12 bg-gradient-to-r from-accent to-primary text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
              <Award className="w-16 h-16 flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-3xl mb-2">Patented Manufacturing Technology</h3>
                <p className="text-white/90 text-lg">
                  Our globally patented process ensures superior nutrient retention and consistent quality
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm uppercase tracking-wide mb-6">
                Our Methodology
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-brown mb-6">
                The Art of Pure Jaggery Making
              </h2>
              <p className="text-lg text-brown-light leading-relaxed">
                We combine ancient wisdom with modern innovation to create jaggery products that are
                pure, nutritious, and delicious. Our {companyInfo.process.length}-step process ensures
                that every batch meets the highest standards of quality.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps Timeline */}
        <section className="py-20 bg-gradient-to-b from-cream to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2"></div>

                {/* Process steps */}
                <div className="space-y-16">
                  {companyInfo.process.map((step, index) => {
                    const Icon = iconMap[step.icon] || CheckCircle;
                    const isEven = index % 2 === 0;

                    return (
                      <div
                        key={index}
                        className={`flex flex-col lg:flex-row items-center gap-8 ${
                          isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                        }`}
                      >
                        {/* Content */}
                        <div className={`lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                          <div className="bg-white p-8 rounded-3xl shadow-card hover:shadow-hover transition-all border border-cream">
                            <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                              <span className="text-sm font-bold text-primary uppercase tracking-wider">
                                Step {step.step}
                              </span>
                            </div>
                            <h3 className="font-display font-bold text-2xl text-brown mb-4">
                              {step.title}
                            </h3>
                            <p className="text-brown-light leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Timeline Dot (Desktop) */}
                        <div className="hidden lg:block lg:w-2/12 flex-shrink-0">
                          <div className="relative flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg border-4 border-white"></div>
                          </div>
                        </div>

                        {/* Number Bubble */}
                        <div className={`lg:w-5/12 flex ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                            <span className="font-display font-black text-4xl text-white">
                              {step.step}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full text-sm uppercase tracking-wide mb-6">
                    Quality Assurance
                  </span>
                  <h2 className="font-display font-bold text-4xl md:text-5xl text-brown mb-6">
                    Our Quality Promise
                  </h2>
                  <p className="text-lg text-brown-light mb-8 leading-relaxed">
                    At Migliore Agrotech, we're committed to delivering only the highest quality jaggery.
                    Every batch undergoes rigorous testing and quality checks to ensure purity and excellence.
                  </p>

                  <div className="space-y-4">
                    {[
                      '100% natural with no additives or preservatives',
                      'Rich in essential minerals like iron, magnesium, and potassium',
                      'Made using patented methods that preserve nutrients',
                      'Lab tested for purity and safety',
                      'Packaged in food-grade eco-friendly materials',
                      'Certified by leading quality organizations'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-brown-light text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications Grid */}
                <div className="bg-gradient-to-br from-cream to-cream-light p-10 rounded-3xl shadow-card">
                  <h3 className="font-display font-bold text-2xl text-brown mb-8 text-center">
                    Our Certifications
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {companyInfo.certifications.map((cert, index) => {
                      const certIconMap: { [key: string]: any } = {
                        'Award': Award,
                        'Shield': CheckCircle,
                        'FileCheck': CheckCircle,
                        'ClipboardCheck': CheckCircle,
                        'Leaf': Sprout
                      };
                      const CertIcon = certIconMap[cert.icon] || Award;

                      return (
                        <div
                          key={index}
                          className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all"
                        >
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                            <CertIcon className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="font-semibold text-brown text-sm mb-1">
                            {cert.name}
                          </h4>
                          <p className="text-xs text-brown-light">
                            {cert.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Commitment */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Sprout className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-display font-bold text-4xl md:text-5xl text-brown mb-6">
                Committed to Sustainability
              </h2>
              <p className="text-lg text-brown-light mb-10 leading-relaxed">
                We're dedicated to sustainable practices that protect our planet while delivering
                premium products to you. Every step of our process is designed with environmental
                responsibility in mind.
              </p>

              <div className="grid sm:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Zero-Waste Production',
                    desc: 'By-products are repurposed as organic fertilizer and animal feed'
                  },
                  {
                    title: 'Eco-Friendly Packaging',
                    desc: 'Biodegradable and recyclable materials for all our products'
                  },
                  {
                    title: 'Fair Trade Practices',
                    desc: 'Supporting local farming communities with fair wages'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-card hover:shadow-hover transition-all"
                  >
                    <h3 className="font-display font-bold text-xl text-brown mb-3">
                      {item.title}
                    </h3>
                    <p className="text-brown-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-secondary to-secondary-dark text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Have Questions About Our Process?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              We believe in complete transparency. If you have any questions about our manufacturing
              process, ingredients, or quality standards, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-secondary px-8 py-4 rounded-md font-semibold hover:bg-white/90 transition-all shadow-hover"
              >
                Contact Us
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-primary-dark transition-all shadow-hover"
              >
                View Products
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Process;
