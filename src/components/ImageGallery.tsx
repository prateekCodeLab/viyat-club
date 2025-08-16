import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiZoomIn, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  description: string;
}

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'Luxury resort exterior at sunset',
      category: 'Exterior',
      description: 'Our stunning 10-acre property features contemporary architecture with traditional Indian design elements'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'Deluxe suite with city view',
      category: 'Accommodations',
      description: 'Spacious 450 sq ft deluxe rooms with premium amenities and elegant decor'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
      alt: 'Infinity pool overlooking gardens',
      category: 'Amenities',
      description: 'Olympic-sized swimming pool with private cabanas and poolside service'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'Fine dining restaurant',
      category: 'Dining',
      description: 'Gourmet dining experiences with menus crafted by our award-winning culinary team'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'Luxury spa treatment room',
      category: 'Wellness',
      description: 'Award-winning spa offering traditional and contemporary treatments'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'Grand ballroom event space',
      category: 'Events',
      description: 'Versatile event spaces accommodating from 10 to 500 guests'
    }
  ];

  const openImage = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction: 'prev' | 'next') => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-viyat-gold font-medium">{image.category}</span>
                <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
              </div>
              <button
                onClick={() => openImage(image, index)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-viyat-gold"
                aria-label="View image"
              >
                <FiZoomIn size={20} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            >
              <button
                onClick={closeImage}
                className="absolute top-6 right-6 text-white hover:text-viyat-gold transition-colors"
                aria-label="Close gallery"
              >
                <FiX size={32} />
              </button>

              <button
                onClick={() => navigate('prev')}
                className="absolute left-6 text-white hover:text-viyat-gold transition-colors p-2"
                aria-label="Previous image"
              >
                <FiChevronLeft size={32} />
              </button>

              <div className="max-w-6xl w-full max-h-[90vh] flex flex-col">
                <div className="flex-grow flex items-center justify-center">
                  <motion.img
                    key={selectedImage.id}
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-[70vh] object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="mt-6 text-center text-white">
                  <h3 className="text-xl font-medium">{selectedImage.category}</h3>
                  <p className="mt-2 max-w-2xl mx-auto">{selectedImage.description}</p>
                  <p className="mt-4 text-gray-300">
                    {currentIndex + 1} / {images.length}
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate('next')}
                className="absolute right-6 text-white hover:text-viyat-gold transition-colors p-2"
                aria-label="Next image"
              >
                <FiChevronRight size={32} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ImageGallery;