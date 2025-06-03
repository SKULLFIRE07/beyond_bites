import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cocoa text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold">Beyond Bites</h3>
            <p className="text-amber-100/80">
              Handcrafted jaggery products made with traditional methods and pure ingredients.
            </p>
            <div className="flex items-center space-x-2 text-amber-100/80">
              <Heart className="w-4 h-4" />
              <span>Made with love in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  className="text-amber-100/80 hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/story" 
                  className="text-amber-100/80 hover:text-white transition-colors duration-200"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a 
                  href="/benefits" 
                  className="text-amber-100/80 hover:text-white transition-colors duration-200"
                >
                  Health Benefits
                </a>
              </li>
              <li>
                <a 
                  href="/recipes" 
                  className="text-amber-100/80 hover:text-white transition-colors duration-200"
                >
                  Recipes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-200" />
                <div>
                  <a 
                    href="tel:+919322973362" 
                    className="text-amber-100/90 hover:text-white transition-colors duration-200"
                  >
                    +91 93229 73362
                  </a>
                  <p className="text-sm text-amber-100/60">Mon-Sat, 10AM - 7PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-200" />
                <a 
                  href="mailto:admin@migliorelifesciences.in" 
                  className="text-amber-100/90 hover:text-white transition-colors duration-200"
                >
                  admin@migliorelifesciences.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-200" />
                <address className="not-italic text-amber-100/80">
                  Pune, Maharashtra, India
                </address>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-amber-100/80 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-amber-50/10 text-white placeholder-amber-100/50 focus:outline-none focus:ring-2 focus:ring-amber-200/50"
                aria-label="Email address for newsletter subscription"
              />
              <button 
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-cocoa font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500/50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-100/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-100/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Beyond Bites. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a 
              href="/privacy-policy" 
              className="text-amber-100/60 hover:text-white text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-amber-100/60 hover:text-white text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a 
              href="/shipping" 
              className="text-amber-100/60 hover:text-white text-sm transition-colors duration-200"
            >
              Shipping & Returns
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
