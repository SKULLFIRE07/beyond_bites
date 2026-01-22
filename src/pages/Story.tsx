import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../components/common/Hero';
import { Award, Shield, Users, Globe, Sparkles, Leaf, TrendingUp, Heart, FileCheck, ClipboardCheck } from 'lucide-react';
import { companyInfo } from '../constants/company';
import { Link } from 'react-router-dom';

const Story = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <Hero
          title="Innovators in Jaggery Manufacturing"
          subtitle="About Migliore Agrotech"
          description="We are proud holders of a global patent in jaggery manufacturing technology. As innovators, manufacturers, and exporters, we're revolutionizing the way the world experiences this ancient superfood."
          primaryCTA={{
            text: "View Our Products",
            href: "/products"
          }}
          secondaryCTA={{
            text: "Contact Us",
            href: "/contact"
          }}
          height="medium"
          overlay="gradient"
        />

        {/* Global Patent Highlight */}
        <section className="py-12 bg-gradient-to-r from-primary to-primary-light text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
              <Award className="w-16 h-16 flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-3xl mb-2">Global Patent Holders</h3>
                <p className="text-white/90 text-lg">
                  The only jaggery manufacturer with patented technology for superior quality and innovation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Mission */}
              <div className="bg-cream p-10 rounded-3xl shadow-card">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-3xl text-brown mb-4">Our Mission</h3>
                <p className="text-brown-light text-lg leading-relaxed">
                  {companyInfo.mission}
                </p>
              </div>

              {/* Vision */}
              <div className="bg-cream p-10 rounded-3xl shadow-card">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-3xl text-brown mb-4">Our Vision</h3>
                <p className="text-brown-light text-lg leading-relaxed">
                  {companyInfo.vision}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-gradient-to-br from-cream to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm uppercase tracking-wide mb-4">
                  Our Story
                </span>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-brown mb-6">
                  From Innovation to Global Excellence
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-brown-light text-lg leading-relaxed mb-6">
                  {companyInfo.description}
                </p>

                <div className="bg-white p-8 rounded-2xl shadow-card border-l-4 border-primary mt-8">
                  <p className="text-brown-light text-lg leading-relaxed italic">
                    "With our global patent, we can manufacture any product in the jaggery sector.
                    From traditional cubes to innovative flavored variants, we combine ancient wisdom
                    with modern technology to deliver exceptional quality."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-brown mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-brown-light max-w-2xl mx-auto">
                The principles that guide everything we do at Migliore Agrotech
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {companyInfo.values.map((value, index) => {
                const icons = [Shield, Leaf, Heart, Users, Award, Globe];
                const Icon = icons[index % icons.length];
                const colors = ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-primary-light', 'bg-secondary-dark', 'bg-accent'];

                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 border border-cream group"
                  >
                    <div className={`w-12 h-12 ${colors[index % colors.length]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-brown mb-3">
                      {value.title}
                    </h3>
                    <p className="text-brown-light leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certifications & Trust */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-brown mb-4">
                Certified Excellence
              </h2>
              <p className="text-lg text-brown-light max-w-2xl mx-auto">
                Our commitment to quality is validated by industry-leading certifications
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {companyInfo.certifications.map((cert, index) => {
                const iconMap: { [key: string]: any } = {
                  'Award': Award,
                  'Shield': Shield,
                  'FileCheck': FileCheck,
                  'ClipboardCheck': ClipboardCheck,
                  'Leaf': Leaf
                };
                const Icon = iconMap[cert.icon] || Award;

                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-card hover:shadow-hover transition-all text-center group"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-brown mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-brown-light">
                      {cert.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
              {[
                { number: '1', label: 'Global Patent', suffix: '' },
                { number: '5', label: 'Certifications', suffix: '+' },
                { number: '100', label: 'Natural & Pure', suffix: '%' },
                { number: '500', label: 'Happy Customers', suffix: '+' }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="font-display font-black text-5xl md:text-6xl mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-white/90 font-semibold uppercase tracking-wide text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-brown mb-4">
                Why Choose Migliore Agrotech?
              </h2>
              <p className="text-lg text-brown-light max-w-2xl mx-auto">
                We're not just manufacturers—we're innovators changing the jaggery industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {companyInfo.whyChooseUs.map((reason, index) => {
                const iconMap: { [key: string]: any } = {
                  'Award': Award,
                  'Globe': Globe,
                  'Shield': Shield,
                  'Users': Users
                };
                const Icon = iconMap[reason.icon] || Award;

                return (
                  <div
                    key={index}
                    className="flex gap-6 p-8 bg-cream rounded-2xl shadow-card hover:shadow-hover transition-all"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-brown mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-brown-light leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-secondary to-secondary-light text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Ready to Experience Premium Quality?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Discover our range of innovative jaggery products or get in touch to discuss custom solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-white text-secondary px-8 py-4 rounded-md font-semibold hover:bg-white/90 transition-all shadow-hover"
              >
                View Products
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

export default Story;
