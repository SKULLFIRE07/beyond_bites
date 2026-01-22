import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../components/common/Hero';
import { ArrowRight, Check, Star, Package, Truck, Shield, MessageCircle, Phone, X } from 'lucide-react';
import { products, productCategories, flavors } from '../constants/products';
import { Link } from 'react-router-dom';

const Flavours = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFlavor, setActiveFlavor] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  // Filter products
  const filteredProducts = products.filter(p => {
    const categoryMatch = activeCategory === 'all' || p.category === activeCategory;
    const flavorMatch = activeFlavor === 'all' || p.flavor.toLowerCase() === activeFlavor.toLowerCase();
    return categoryMatch && flavorMatch;
  });

  const selectedProductData = products.find(p => p.id === selectedProduct);

  const whatsappNumber = '919322973362';
  const getWhatsAppLink = (productName: string) => {
    const message = encodeURIComponent(`Hello! I'm interested in ${productName}. Please share pricing and availability details.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <Hero
          title="Premium Jaggery Collection"
          subtitle="Pure & Natural"
          description="Discover our range of handcrafted jaggery products. From traditional cubes to innovative flavors, each product is a testament to our commitment to quality and purity."
          primaryCTA={{
            text: "Start Shopping",
            href: "#products"
          }}
          height="medium"
          overlay="dark"
        />

        {/* Trust Indicators */}
        <section className="py-8 bg-cream border-y border-cream-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Shield className="w-6 h-6" />, text: '100% Natural' },
                { icon: <Package className="w-6 h-6" />, text: 'Secure Packaging' },
                { icon: <Truck className="w-6 h-6" />, text: 'Fast Delivery' },
                { icon: <Star className="w-6 h-6" />, text: '4.8★ Rated' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 justify-center text-brown">
                  <div className="text-primary">{item.icon}</div>
                  <span className="font-semibold text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">

            {/* Filters */}
            <div className="mb-12 space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-semibold text-brown uppercase tracking-wide mb-3">Product Type</h3>
                <div className="flex flex-wrap gap-3">
                  {productCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                        activeCategory === cat.id
                          ? 'bg-primary text-white shadow-card'
                          : 'bg-cream text-brown hover:bg-cream-dark'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Flavor Filter */}
              <div>
                <h3 className="text-sm font-semibold text-brown uppercase tracking-wide mb-3">Flavor</h3>
                <div className="flex flex-wrap gap-3">
                  {flavors.map((flavor) => (
                    <button
                      key={flavor.id}
                      onClick={() => setActiveFlavor(flavor.id)}
                      className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                        activeFlavor === flavor.id
                          ? 'bg-secondary text-white shadow-card'
                          : 'bg-cream text-brown hover:bg-cream-dark'
                      }`}
                    >
                      {flavor.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group border border-cream"
                >
                  {/* Product Image */}
                  <div className="relative bg-cream aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.featured && (
                      <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2 uppercase">
                        {product.category}
                      </span>
                      <h3 className="font-display font-bold text-2xl text-brown mb-2">
                        {product.name}
                      </h3>
                      <p className="text-brown-light text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Key Benefits */}
                    <div className="space-y-2">
                      {product.benefits.slice(0, 3).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-brown-light">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={() => setSelectedProduct(product.id)}
                        className="flex-1 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition-all shadow-sm hover:shadow-md"
                      >
                        View Details
                      </button>
                      <a
                        href={getWhatsAppLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] text-white p-3 rounded-md hover:bg-[#20BA5A] transition-all shadow-sm hover:shadow-md"
                        title="Order on WhatsApp"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-brown-light text-lg mb-4">No products found with the selected filters.</p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveFlavor('all');
                  }}
                  className="text-primary font-semibold hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Our Products */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-brown mb-4">
                Why Our Jaggery is Different
              </h2>
              <p className="text-lg text-brown-light max-w-2xl mx-auto">
                Every product is crafted with care, backed by our global patent and quality certifications
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Patented Process',
                  desc: 'Our globally patented manufacturing process ensures optimal nutrient retention and consistent quality in every batch.',
                  icon: '🏆'
                },
                {
                  title: 'Lab Tested Purity',
                  desc: 'Every batch undergoes rigorous laboratory testing for purity, safety, and nutritional content before packaging.',
                  icon: '🔬'
                },
                {
                  title: 'Direct from Farmers',
                  desc: 'We source premium sugarcane directly from partner farms, ensuring traceability and fair trade practices.',
                  icon: '🌾'
                },
                {
                  title: 'No Chemicals',
                  desc: 'Absolutely no sulfates, preservatives, or artificial additives. Just pure, natural jaggery as nature intended.',
                  icon: '🍃'
                },
                {
                  title: 'Custom Solutions',
                  desc: 'Need a unique product? We can create custom jaggery products tailored to your specific requirements.',
                  icon: '⚙️'
                },
                {
                  title: 'Global Export',
                  desc: 'We export worldwide with packaging designed to maintain freshness and quality during international shipping.',
                  icon: '🌍'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-card hover:shadow-hover transition-all text-center"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="font-display font-bold text-xl text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="text-brown-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bulk Orders CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Need Bulk Orders or Custom Products?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              We specialize in bulk manufacturing and custom product development. Contact us for wholesale pricing and custom formulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-white/90 transition-all shadow-hover"
              >
                <Phone className="w-5 h-5" />
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello! I am interested in bulk orders. Please share details.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#20BA5A] transition-all shadow-hover"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && selectedProductData && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="bg-cream rounded-2xl p-8 flex items-center justify-center">
                <img
                  src={selectedProductData.image}
                  alt={selectedProductData.name}
                  className="w-full max-w-sm object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3 uppercase">
                    {selectedProductData.category}
                  </span>
                  <h2 className="font-display font-bold text-3xl text-brown mb-3">
                    {selectedProductData.name}
                  </h2>
                  <p className="text-brown-light leading-relaxed">
                    {selectedProductData.longDescription}
                  </p>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="font-semibold text-brown mb-3">Health Benefits:</h3>
                  <div className="space-y-2">
                    {selectedProductData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-brown-light">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <h3 className="font-semibold text-brown mb-3">Ingredients:</h3>
                  <p className="text-brown-light">{selectedProductData.ingredients.join(', ')}</p>
                </div>

                {/* Nutritional Info */}
                <div className="bg-cream p-6 rounded-2xl">
                  <h3 className="font-semibold text-brown mb-4">Nutritional Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-brown-light">Serving Size</p>
                      <p className="font-semibold text-brown">{selectedProductData.nutritionalInfo.servingSize}</p>
                    </div>
                    <div>
                      <p className="text-brown-light">Calories</p>
                      <p className="font-semibold text-brown">{selectedProductData.nutritionalInfo.calories} kcal</p>
                    </div>
                    <div>
                      <p className="text-brown-light">Iron</p>
                      <p className="font-semibold text-brown">{selectedProductData.nutritionalInfo.iron}</p>
                    </div>
                    <div>
                      <p className="text-brown-light">Calcium</p>
                      <p className="font-semibold text-brown">{selectedProductData.nutritionalInfo.calcium}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={getWhatsAppLink(selectedProductData.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white px-6 py-4 rounded-md font-semibold hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Order on WhatsApp
                  </a>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-6 py-4 border-2 border-cream text-brown rounded-md font-semibold hover:bg-cream transition-all flex items-center gap-2"
                  >
                    <X className="w-5 h-5" />
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Flavours;
