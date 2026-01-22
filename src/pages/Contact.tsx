import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../components/common/Hero';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, Shield, Award, Leaf, ClipboardCheck, FileCheck, CheckCircle } from 'lucide-react';
import { companyInfo } from '../constants/company';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Open email client with pre-filled data
      const emailSubject = encodeURIComponent(`Inquiry: ${formData.inquiryType} - ${formData.name}`);
      const emailBody = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Inquiry Type: ${formData.inquiryType}

Message:
${formData.message}
      `);

      window.location.href = `mailto:admin@miglioreagrotech.com?subject=${emailSubject}&body=${emailBody}`;

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          inquiryType: 'general',
          message: ''
        });
        setSubmitStatus('idle');
      }, 2000);
    }, 1000);
  };

  const whatsappNumber = '919322973362';
  const whatsappMessage = encodeURIComponent('Hello! I would like to inquire about Migliore Agrotech products.');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <Hero
          title="Let's Connect"
          subtitle="Get in Touch"
          description="Have questions about our products? Need a custom solution? We're here to help. Reach out to us and let's discuss how we can serve you better."
          height="small"
          overlay="dark"
        />

        {/* Quick Contact Section */}
        <section className="py-12 bg-cream border-y border-cream-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Phone */}
              <a
                href="tel:+919322973362"
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-card hover:shadow-hover transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-brown-light">Call Us</p>
                  <p className="font-semibold text-brown">+91 93229 73362</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:admin@miglioreagrotech.com"
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-card hover:shadow-hover transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-brown-light">Email Us</p>
                  <p className="font-semibold text-brown text-sm">admin@miglioreagrotech.com</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-card hover:shadow-hover transition-all group"
              >
                <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center group-hover:bg-[#25D366] group-hover:scale-110 transition-all">
                  <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-brown-light">WhatsApp</p>
                  <p className="font-semibold text-brown">Chat Now</p>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-card">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-brown-light">Business Hours</p>
                  <p className="font-semibold text-brown text-sm">Mon-Sat: 9AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Contact Form */}
              <div className="bg-cream p-8 md:p-10 rounded-3xl">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-brown mb-4">
                  Send Us a Message
                </h2>
                <p className="text-brown-light mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-brown mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-brown/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brown mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-brown/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-brown mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-brown/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Company (Optional) */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-brown mb-2">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-brown/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-semibold text-brown mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-brown/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="bulk">Bulk Orders</option>
                      <option value="custom">Custom Product Development</option>
                      <option value="export">Export Inquiry</option>
                      <option value="distributor">Become a Distributor</option>
                      <option value="support">Product Support</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-brown mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-brown/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-primary-dark transition-all shadow-card hover:shadow-hover flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Company Info */}
              <div className="space-y-8">
                {/* Address & Details */}
                <div className="bg-white border-2 border-cream p-8 rounded-3xl">
                  <h3 className="font-display font-bold text-2xl text-brown mb-6">
                    Visit Us
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-brown mb-1">Our Location</p>
                        <p className="text-brown-light">
                          Pune, Maharashtra, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-brown mb-1">Phone</p>
                        <a href="tel:+919322973362" className="text-brown-light hover:text-primary transition-colors">
                          +91 93229 73362
                        </a>
                        <p className="text-sm text-brown-light mt-1">
                          Monday - Saturday: 9:00 AM - 6:00 PM IST
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-brown mb-1">Email</p>
                        <a href="mailto:admin@miglioreagrotech.com" className="text-brown-light hover:text-primary transition-colors break-all">
                          admin@miglioreagrotech.com
                        </a>
                        <p className="text-sm text-brown-light mt-1">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-primary text-white p-8 rounded-3xl">
                  <h3 className="font-display font-bold text-2xl mb-6">
                    Our Certifications
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {companyInfo.certifications.map((cert) => (
                      <div key={cert.id} className="flex items-start gap-3">
                        {cert.icon === 'Shield' && <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                        {cert.icon === 'Award' && <Award className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                        {cert.icon === 'Leaf' && <Leaf className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                        {cert.icon === 'ClipboardCheck' && <ClipboardCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                        {cert.icon === 'FileCheck' && <FileCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                        <div>
                          <p className="font-semibold text-sm">{cert.name}</p>
                          <p className="text-xs text-white/80">{cert.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-cream p-8 rounded-3xl">
                  <h3 className="font-display font-bold text-xl text-brown mb-4">
                    Prefer Instant Chat?
                  </h3>
                  <p className="text-brown-light mb-6">
                    Connect with us on WhatsApp for immediate assistance
                  </p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white px-6 py-4 rounded-md font-semibold hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2 shadow-card hover:shadow-hover"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brown mb-4">
              Have Questions?
            </h2>
            <p className="text-lg text-brown-light mb-8 max-w-2xl mx-auto">
              Check out our frequently asked questions or reach out to us directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/benefits#faq"
                className="inline-flex items-center justify-center gap-2 bg-white text-brown px-8 py-4 rounded-md font-semibold hover:bg-cream-dark transition-all border-2 border-brown/10"
              >
                View FAQs
              </a>
              <a
                href="mailto:admin@miglioreagrotech.com"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-primary-dark transition-all shadow-card hover:shadow-hover"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
