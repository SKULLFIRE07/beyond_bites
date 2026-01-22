import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../components/common/Hero';
import { Shield, Award, Leaf, ClipboardCheck, FileCheck, CheckCircle, Factory, Globe, Tractor, Heart, Activity, Zap, Droplet, TrendingUp, ArrowRight, Star, Quote, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../constants/products';
import { companyInfo } from '../constants/company';
import { testimonials } from '../constants/testimonials';

const Index = () => {
  // Featured products (first 4)
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  // Top testimonials
  const topTestimonials = testimonials.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <Hero
          title="Pure, Traditional Jaggery from Farm to Table"
          subtitle="Global Patent Holders"
          description="Innovators, manufacturers and exporters of premium organic jaggery. Experience the authentic taste of nature's perfect sweetener."
          primaryCTA={{
            text: "Explore Our Products",
            href: "/products"
          }}
          secondaryCTA={{
            text: "Learn About Our Process",
            href: "/process"
          }}
          height="large"
          overlay="dark"
        />

        {/* Trust Bar - Certifications */}
        <section className="py-8 bg-gradient-to-r from-cream via-cream-light to-cream border-y border-cream-dark relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {companyInfo.certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="flex items-center gap-3 text-brown bg-white px-4 py-3 rounded-full shadow-sm hover:shadow-md transition-all group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {cert.icon === 'Shield' && <Shield className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />}
                  {cert.icon === 'Award' && <Award className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />}
                  {cert.icon === 'Leaf' && <Leaf className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />}
                  {cert.icon === 'ClipboardCheck' && <ClipboardCheck className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />}
                  {cert.icon === 'FileCheck' && <FileCheck className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />}
                  <span className="font-semibold text-sm">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-fade-up">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-semibold uppercase tracking-wide">
                    {companyInfo.capabilities.title}
                  </span>
                </div>
                <h2 className="font-display font-bold text-5xl md:text-6xl text-brown leading-tight bg-clip-text">
                  {companyInfo.name}
                </h2>
                <p className="text-xl text-brown-light leading-relaxed">
                  {companyInfo.description}
                </p>
                <ul className="space-y-4">
                  {companyInfo.capabilities.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-3 text-brown-light text-lg">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-3 transition-all group"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-3xl overflow-hidden border-4 border-white shadow-hover">
                  <img
                    src="/images/floating-jaggery.png"
                    alt="Migliore Agrotech Jaggery"
                    className="w-full h-full object-contain p-8 animate-gentle-float"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-secondary to-secondary-dark text-white p-8 rounded-3xl shadow-hover">
                  <FileCheck className="w-10 h-10 mb-3" />
                  <p className="font-bold text-xl">Global Patent</p>
                  <p className="text-sm opacity-90">Innovation Leaders</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-24 bg-gradient-to-br from-cream via-cream-light to-cream relative overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute inset-0 bg-organic-pattern opacity-30"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border-2 border-primary/20 rounded-full mb-6 shadow-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wide">
                  Our Products
                </span>
              </div>
              <h2 className="font-display font-bold text-5xl md:text-6xl text-brown mb-6">
                Premium Jaggery Collection
              </h2>
              <p className="text-xl text-brown-light max-w-2xl mx-auto">
                Crafted with tradition, powered by innovation. Choose from our range of pure and flavored varieties.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              {featuredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-300 group border-2 border-transparent hover:border-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square bg-gradient-to-br from-cream to-cream-light rounded-2xl mb-6 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-display font-bold text-xl text-brown mb-3">
                    {product.name}
                  </h3>
                  <p className="text-sm text-brown-light mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-5 rounded-full font-semibold hover:scale-105 transition-all shadow-card hover:shadow-hover text-lg"
              >
                View All Products
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="font-display font-bold text-5xl md:text-6xl text-brown mb-6">
                Why Choose Migliore Agrotech
              </h2>
              <p className="text-xl text-brown-light max-w-2xl mx-auto">
                Trusted by thousands for quality, innovation, and authenticity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyInfo.whyChooseUs.map((item, index) => {
                const gradients = [
                  'from-primary to-primary-light',
                  'from-secondary to-secondary-light',
                  'from-accent to-primary',
                  'from-secondary-dark to-accent'
                ];
                return (
                  <div
                    key={index}
                    className="p-8 rounded-3xl bg-white border-2 border-cream hover:border-primary/30 hover:shadow-hover transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-card`}>
                      {item.icon === 'Award' && <Award className="w-8 h-8 text-white" />}
                      {item.icon === 'Factory' && <Factory className="w-8 h-8 text-white" />}
                      {item.icon === 'CheckCircle' && <CheckCircle className="w-8 h-8 text-white" />}
                      {item.icon === 'Tractor' && <Tractor className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="font-display font-bold text-xl text-brown mb-3">
                      {item.title}
                    </h3>
                    <p className="text-brown-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Preview */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-accent text-white relative overflow-hidden">
          {/* Animated decorative elements */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-gentle-float"></div>
          <div className="absolute bottom-20 right-10 w-56 h-56 bg-accent/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Our Process
                </span>
              </div>
              <h2 className="font-display font-bold text-5xl md:text-6xl mb-6">
                From Farm to Your Table
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Our patented process ensures every product meets the highest standards of purity and quality
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {[
                { step: '01', title: 'Source Selection', desc: 'Premium organic sugarcane' },
                { step: '02', title: 'Extraction', desc: 'Traditional cold-press method' },
                { step: '03', title: 'Processing', desc: 'Patented quality retention' },
                { step: '04', title: 'Quality Testing', desc: 'Lab certified purity' }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all shadow-card">
                    <span className="font-display font-bold text-3xl text-white">{item.step}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/process"
                className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-full font-semibold hover:scale-105 transition-all shadow-hover text-lg"
              >
                View Complete Process
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>

        {/* Health Benefits Preview */}
        <section className="py-24 bg-gradient-to-br from-cream via-white to-cream-light relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-secondary/10 to-accent/10 border-2 border-secondary/20 rounded-full mb-6">
                <Heart className="w-4 h-4 text-secondary" />
                <span className="text-secondary text-sm font-semibold uppercase tracking-wide">
                  Health Benefits
                </span>
              </div>
              <h2 className="font-display font-bold text-5xl md:text-6xl text-brown mb-6">
                Nature's Superfood
              </h2>
              <p className="text-xl text-brown-light max-w-2xl mx-auto">
                Packed with essential nutrients and minerals for your well-being
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: <Heart className="w-10 h-10" />, title: 'Heart Health', desc: 'Rich in potassium and magnesium', color: 'from-red-500 to-pink-500' },
                { icon: <Activity className="w-10 h-10" />, title: 'Digestive Aid', desc: 'Natural enzymes for gut health', color: 'from-green-500 to-emerald-500' },
                { icon: <Zap className="w-10 h-10" />, title: 'Energy Boost', desc: 'Sustained energy without crash', color: 'from-yellow-500 to-orange-500' }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-10 rounded-3xl shadow-card hover:shadow-hover transition-all border-2 border-cream hover:border-primary/20 group">
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform shadow-card`}>
                    {benefit.icon}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-brown mb-3 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-brown-light text-center text-lg">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/benefits"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary to-secondary-dark text-white px-10 py-5 rounded-full font-semibold hover:scale-105 transition-all shadow-card hover:shadow-hover text-lg"
              >
                Discover All Benefits
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-5xl md:text-6xl text-brown mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-brown-light max-w-2xl mx-auto">
                Trusted by thousands across India and beyond
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {topTestimonials.map((testimonial, index) => {
                const bgColors = ['bg-gradient-to-br from-primary/10 to-accent/10', 'bg-gradient-to-br from-secondary/10 to-primary/10', 'bg-gradient-to-br from-accent/10 to-secondary/10'];
                return (
                  <div
                    key={testimonial.id}
                    className={`${bgColors[index % bgColors.length]} p-10 rounded-3xl relative border-2 border-white shadow-card hover:shadow-hover transition-all`}
                  >
                    <Quote className="w-12 h-12 text-primary/30 absolute top-8 right-8" />
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 ${i < testimonial.rating ? 'text-secondary fill-secondary' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p className="text-brown-light mb-8 leading-relaxed text-lg">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-bold text-brown text-lg">{testimonial.name}</p>
                      <p className="text-sm text-brown-light">{testimonial.location}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-accent to-primary-dark text-white relative overflow-hidden">
          <div className="absolute top-0 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-gentle-float"></div>
          <div className="absolute bottom-0 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-6">
              Ready to Experience Pure Jaggery?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Get in touch with us for bulk orders, custom products, or export inquiries
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary px-10 py-5 rounded-full font-semibold hover:scale-105 transition-all shadow-hover text-lg"
              >
                Browse Products
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-transparent text-white px-10 py-5 rounded-full font-semibold hover:scale-105 transition-all border-2 border-white/30 hover:bg-white/10 text-lg"
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

export default Index;
