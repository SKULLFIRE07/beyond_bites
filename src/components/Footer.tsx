
import React from 'react';
import { Phone, Mail, MapPin, Leaf, Award, Shield, ClipboardCheck, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <Leaf className="text-white w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Migliore Agrotech
              </h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Innovators, manufacturers and exporters of premium organic jaggery. Global patent holders committed to quality and tradition.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <FileCheck className="w-5 h-5 text-secondary" />
              <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                Global Patent Holder
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/70 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-white/70 hover:text-secondary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-sm text-white/70 hover:text-secondary transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/benefits" className="text-sm text-white/70 hover:text-secondary transition-colors">
                  Health Benefits
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/70 hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Certifications</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">FSSAI Certified</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">ISO 22000 Certified</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">Organic India</span>
              </li>
              <li className="flex items-start gap-2">
                <ClipboardCheck className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">Lab Tested</span>
              </li>
              <li className="flex items-start gap-2">
                <FileCheck className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">Global Patent</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+919322973362" className="text-sm text-white/70 hover:text-secondary transition-colors block">
                    +91 93229 73362
                  </a>
                  <span className="text-xs text-white/50">Mon-Sat: 9 AM - 6 PM IST</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <a href="mailto:admin@miglioreagrotech.com" className="text-sm text-white/70 hover:text-secondary transition-colors break-all">
                  admin@miglioreagrotech.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">
                  Pune, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50 text-center md:text-left">
              &copy; {currentYear} Migliore Agrotech. All rights reserved.
            </p>
            <p className="text-sm text-white/50 text-center md:text-right">
              Bringing pure, traditional jaggery to the world
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
