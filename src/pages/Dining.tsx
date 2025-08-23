import React from 'react';
import PageHeader from '@components/PageHeader';
import SectionHeader from '@components/SectionHeader';
import CTAButton from '@components/CTAButton';
import { FaUtensils, FaWineGlass, FaCoffee, FaStar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Dining = () => {
  const restaurants = [
    {
      name: "Saffron",
      cuisine: "Fine Indian & Mughlai",
      description: "Experience the rich flavors of traditional Indian cuisine with a modern twist in an elegant setting.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      hours: "6:30 PM - 11:30 PM",
      dressCode: "Smart Casual",
      features: ["Live Music", "Wine Pairing", "Private Dining"]
    },
    {
      name: "Azure",
      cuisine: "Mediterranean & Seafood",
      description: "Coastal Mediterranean flavors with fresh seafood and panoramic views of the pool and gardens.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      hours: "12:00 PM - 3:00 PM, 7:00 PM - 11:00 PM",
      dressCode: "Resort Elegant",
      features: ["Outdoor Seating", "Sunset Views", "Raw Bar"]
    },
    {
      name: "The Verandah",
      cuisine: "International & Grill",
      description: "All-day dining with live cooking stations, international buffet, and à la carte specialties.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      hours: "6:30 AM - 11:00 PM",
      dressCode: "Casual",
      features: ["Live Counters", "Theme Nights", "Family Friendly"]
    }
  ];

  const specialFeatures = [
    {
      icon: <FaWineGlass className="text-3xl text-viyat-gold" />,
      title: "Wine Cellar",
      description: "Extensive collection of international and Indian wines with sommelier service"
    },
    {
      icon: <FaStar className="text-3xl text-viyat-gold" />,
      title: "Chef's Table",
      description: "Exclusive dining experience with personalized menu and kitchen view"
    },
    {
      icon: <FaCoffee className="text-3xl text-viyat-gold" />,
      title: "Afternoon Tea",
      description: "Traditional English tea service with pastries and live piano music"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Culinary Excellence"
        subtitle="A journey through world-class dining experiences"
        backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        overlay
      />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <SectionHeader
              title="Our Restaurants"
              subtitle="Distinct venues for every occasion"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              From intimate dinners to grand celebrations, our culinary team crafts unforgettable experiences with locally sourced ingredients and global techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-viyat-navy mb-2">{restaurant.name}</h3>
                  <p className="text-viyat-gold font-medium mb-4">{restaurant.cuisine}</p>
                  <p className="text-gray-600 mb-6">{restaurant.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaClock className="text-viyat-gold mr-2" />
                      <span>{restaurant.hours}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaUtensils className="text-viyat-gold mr-2" />
                      <span>Dress: {restaurant.dressCode}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-viyat-navy mb-3">Features:</h4>
                    <ul className="space-y-1">
                      {restaurant.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <span className="text-viyat-gold mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <CTAButton
                    text="Make Reservation"
                    to="/contact"
                    variant="primary"
                    size="full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {specialFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-viyat-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-viyat-champagne p-12 rounded-2xl text-center">
            <SectionHeader
              title="Private Dining & Events"
              subtitle="Create unforgettable moments in our exclusive spaces"
              className="mb-8"
            />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Our private dining rooms and event spaces are perfect for intimate gatherings, business dinners, and special celebrations. Custom menus and dedicated service ensure a memorable experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton
                text="View Event Spaces"
                to="/events"
                variant="primary"
                size="lg"
              />
              <CTAButton
                text="Contact Our Team"
                to="/contact"
                variant="outline"
                size="lg"
                className="border-2 border-viyat-navy text-viyat-navy hover:bg-viyat-navy hover:text-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dining;