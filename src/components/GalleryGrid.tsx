import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const GalleryGrid = () => {
  const images = [
    { 
      id: 1, 
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
      alt: 'Luxury Resort Exterior',
      category: 'Architecture'
    },
    { 
      id: 2, 
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
      alt: 'Deluxe Suite',
      category: 'Accommodations'
    },
    { 
      id: 3, 
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
      alt: 'Grand Ballroom',
      category: 'Events'
    },
    { 
      id: 4, 
      url: 'https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
      alt: 'Fine Dining',
      category: 'Culinary'
    },
    { 
      id: 5, 
      url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
      alt: 'Spa Retreat',
      category: 'Wellness'
    },
    { 
      id: 6, 
      url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80', 
      alt: 'Infinity Pool',
      category: 'Amenities'
    },
  ];

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <div>
                <span className="text-sm text-viyat-gold font-medium">{image.category}</span>
                <h3 className="text-xl font-bold text-white mt-1">{image.alt}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <CTAButton 
          text="View Full Gallery" 
          to="/gallery" 
          variant="outline"
          size="lg"
        />
      </div>
    </div>
  );
};

export default GalleryGrid;