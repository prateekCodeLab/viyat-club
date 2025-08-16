import React from 'react';
import ImageGallery from '@components/ImageGallery';
import PageHeader from '@components/PageHeader';
import CTAButton from '@components/CTAButton';
import { FaCamera, FaSwimmingPool, FaUtensils, FaSpa, FaBed, FaTree } from 'react-icons/fa';

const Gallery = () => {
  const galleryCategories = [
    {
      name: "Exterior",
      description: "Our stunning architecture and landscapes",
      icon: <FaTree className="text-3xl text-viyat-gold" />,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Accommodations",
      description: "Luxurious rooms and suites",
      icon: <FaBed className="text-3xl text-viyat-gold" />,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Dining",
      description: "Gourmet culinary experiences",
      icon: <FaUtensils className="text-3xl text-viyat-gold" />,
      image: "https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Facilities",
      description: "World-class amenities",
      icon: <FaSwimmingPool className="text-3xl text-viyat-gold" />,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
    },
    {
      name: "Events",
      description: "Memorable celebrations",
      icon: <FaCamera className="text-3xl text-viyat-gold" />,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Wellness",
      description: "Spa and relaxation",
      icon: <FaSpa className="text-3xl text-viyat-gold" />,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Visual Journey"
        subtitle="Explore Viyat through our lens"
        backgroundImage="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        overlay
      />

      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-viyat-navy mb-6">
            Discover Our World
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our collections to experience the luxury and elegance of Viyat Club
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {galleryCategories.map((category, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
            >
              <img 
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                <div className="mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-white text-center">{category.name}</h3>
                <p className="text-white/90 text-sm text-center">{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <ImageGallery />
        </div>

        <div className="bg-viyat-champagne p-12 rounded-2xl text-center">
          <h3 className="text-3xl font-bold text-viyat-navy mb-6">
            Capture Your Moments
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Our professional photographers are available to document your special occasions at Viyat Club.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton 
              text="Book Photoshoot" 
              to="/contact" 
              variant="primary"
            />
            <CTAButton 
              text="View Event Galleries" 
              to="/events" 
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;