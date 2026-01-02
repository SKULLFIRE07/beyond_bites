import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Home, ArrowLeft, Search, Heart, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { name: 'Home', href: '/', description: 'Discover our artisanal jaggery bites' },
    { name: 'Our Story', href: '/story', description: 'Learn about our journey' },
    { name: 'Benefits', href: '/benefits', description: 'Health benefits of our jaggery' },
    { name: 'Recipes', href: '/recipes', description: 'Delicious ways to use our products' },
    { name: 'Order Now', href: '/contact', description: 'Get your Jaggy Smart today' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-honey/5 to-cocoa/10">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated 404 */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-playfair font-bold text-transparent bg-gradient-to-r from-cocoa via-honey to-cocoa bg-clip-text animate-pulse">
              404
            </h1>
            <div className="flex justify-center space-x-2 mt-4">
              <Star className="w-8 h-8 text-honey animate-bounce" style={{ animationDelay: '0ms' }} />
              <Star className="w-8 h-8 text-honey animate-bounce" style={{ animationDelay: '150ms' }} />
              <Star className="w-8 h-8 text-honey animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>

          {/* Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-cocoa mb-4">
              Oops! This page is as elusive as our secret recipe
            </h2>
            <p className="text-xl text-cocoa/80 mb-6 max-w-2xl mx-auto">
              Don't worry, even the sweetest journeys have unexpected detours. Let's get you back to discovering the pure goodness of Jaggy Smart!
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-honey/20 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-cocoa/70">
                <Search className="w-5 h-5" />
                <span className="font-medium">You were looking for:</span>
              </div>
              <p className="text-cocoa font-mono bg-cocoa/10 px-3 py-1 rounded mt-2 text-sm">
                {location.pathname}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="/"
              className="bg-honey text-cocoa px-8 py-4 rounded-full font-semibold text-lg hover:bg-honey/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </a>
            <button
              onClick={() => window.history.back()}
              className="bg-cocoa text-ivory px-8 py-4 rounded-full font-semibold text-lg hover:bg-cocoa/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </section>

      {/* Popular Pages */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-cocoa mb-4">
              Explore Our Sweet Collection
            </h3>
            <p className="text-xl text-cocoa/80">
              Discover what makes Jaggy Smart special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPages.map((page, index) => (
              <a
                key={page.href}
                href={page.href}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-honey/10 hover:border-honey/30"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-honey to-cocoa rounded-full flex items-center justify-center">
                    <span className="text-ivory font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-cocoa group-hover:text-honey transition-colors">
                    {page.name}
                  </h4>
                </div>
                <p className="text-cocoa/70 group-hover:text-cocoa transition-colors">
                  {page.description}
                </p>
                <div className="mt-4 flex items-center text-honey opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Explore</span>
                  <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-honey/20 to-cocoa/20 rounded-3xl p-8 border border-honey/30">
            <Heart className="w-12 h-12 text-honey mx-auto mb-6" />
            <h3 className="text-2xl font-playfair font-bold text-cocoa mb-4">
              Did You Know?
            </h3>
            <p className="text-lg text-cocoa/80 max-w-2xl mx-auto">
              While you're here, our jaggery bites contain over 45 essential nutrients and are made using traditional cold-press methods that preserve every bit of natural goodness. That's something worth exploring!
            </p>
            <a
              href="/"
              className="inline-block mt-6 bg-cocoa text-ivory px-6 py-3 rounded-full font-semibold hover:bg-cocoa/90 transition-colors"
            >
              Learn More About Our Process
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
