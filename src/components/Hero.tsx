import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
  overlay?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl, ctaText, ctaLink, overlay = true }) => {
  return (
    <div className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Hero background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {overlay && <div className="absolute inset-0 bg-black/40"></div>}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto text-white">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          {ctaText && ctaLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <CTAButton 
                text={ctaText} 
                to={ctaLink}
                variant="primary"
                size="lg"
              />
              <CTAButton 
                text="Explore More" 
                to="/about"
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10"
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;