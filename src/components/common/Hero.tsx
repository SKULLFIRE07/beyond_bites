import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
    external?: boolean;
  };
  secondaryCTA?: {
    text: string;
    href: string;
    external?: boolean;
  };
  backgroundImage?: string;
  overlay?: 'light' | 'dark' | 'none';
  height?: 'small' | 'medium' | 'large' | 'full';
  align?: 'left' | 'center';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  overlay = 'dark',
  height = 'medium',
  align = 'center'
}) => {
  const heightClasses = {
    small: 'min-h-[40vh]',
    medium: 'min-h-[60vh]',
    large: 'min-h-[80vh]',
    full: 'min-h-screen'
  };

  const overlayClasses = {
    light: 'bg-white/60',
    dark: 'bg-brown/70',
    none: ''
  };

  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center'
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background Pattern or Color */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-hero-gradient bg-organic-pattern"></div>
      )}

      {/* Overlay */}
      {overlay !== 'none' && (
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`}></div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`max-w-4xl mx-auto flex flex-col ${alignClasses[align]} gap-6 animate-fade-up`}>

          {subtitle && (
            <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-semibold uppercase tracking-wide">
              {subtitle}
            </span>
          )}

          <h1 className={`font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight ${
            overlay === 'dark' || backgroundImage ? 'text-white' : 'text-brown'
          }`}>
            {title}
          </h1>

          {description && (
            <p className={`text-lg md:text-xl max-w-2xl ${
              overlay === 'dark' || backgroundImage ? 'text-white/90' : 'text-brown-light'
            }`}>
              {description}
            </p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              {primaryCTA && (
                primaryCTA.external ? (
                  <a
                    href={primaryCTA.href}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-primary-dark transition-all shadow-card hover:shadow-hover group"
                  >
                    {primaryCTA.text}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link
                    to={primaryCTA.href}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-primary-dark transition-all shadow-card hover:shadow-hover group"
                  >
                    {primaryCTA.text}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )
              )}

              {secondaryCTA && (
                secondaryCTA.external ? (
                  <a
                    href={secondaryCTA.href}
                    className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-semibold transition-all ${
                      overlay === 'dark' || backgroundImage
                        ? 'bg-white/10 text-white border-2 border-white/30 hover:bg-white/20'
                        : 'bg-cream text-brown border-2 border-brown/20 hover:bg-cream-dark'
                    }`}
                  >
                    {secondaryCTA.text}
                  </a>
                ) : (
                  <Link
                    to={secondaryCTA.href}
                    className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-semibold transition-all ${
                      overlay === 'dark' || backgroundImage
                        ? 'bg-white/10 text-white border-2 border-white/30 hover:bg-white/20'
                        : 'bg-cream text-brown border-2 border-brown/20 hover:bg-cream-dark'
                    }`}
                  >
                    {secondaryCTA.text}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Decorative Bottom Wave (optional) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 48h1440V24c-180 16-360 24-540 24S540 40 360 24 180 8 0 24v24z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
