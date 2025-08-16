import React from 'react';
import PageHeader from '@components/PageHeader';
import SectionHeader from '@components/SectionHeader';
import { FiWifi, FiCoffee, FiDroplet, FiTv, FiMapPin, FiStar, FiZap } from 'react-icons/fi';

const Accommodation = () => {
  const roomTypes = [
    {
      name: "Deluxe Room",
      description: "Spacious 450 sq ft room with premium amenities and garden or city views",
      price: "₹12,000/night",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      amenities: ["Free high-speed WiFi", "King-size bed", "Minibar", "Rain shower", "Smart TV", "24/7 room service"]
    },
    {
      name: "Executive Suite",
      description: "Luxurious 800 sq ft suite with separate living area and executive lounge access",
      price: "₹20,000/night",
      image: "https://images.unsplash.com/photo-1566669437687-7040a6926753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      amenities: ["Free WiFi", "King bed", "Jacuzzi", "Executive lounge", "Complimentary breakfast", "Evening cocktails"]
    },
    {
      name: "Presidential Suite",
      description: "1200 sq ft of pure luxury with panoramic views and butler service",
      price: "₹35,000/night",
      image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      amenities: ["Dedicated butler", "Private terrace", "Dining area", "Spa bath", "Premium minibar", "Chauffeured transfers"]
    }
  ];

  const highlights = [
    {
      icon: <FiStar className="text-3xl text-viyat-gold" />,
      title: "Luxury Amenities",
      description: "Premium bedding, designer toiletries, and state-of-the-art technology"
    },
    {
      icon: <FiMapPin className="text-3xl text-viyat-gold" />,
      title: "Prime Location",
      description: "Centrally located with easy access to business and leisure destinations"
    },
    {
      icon: <FiZap className="text-3xl text-viyat-gold" />,
      title: "Personalized Service",
      description: "24/7 concierge to attend to your every need"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Luxury Stays"
        subtitle="Unparalleled comfort and elegance"
        backgroundImage="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        overlay
      />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <SectionHeader
              title="Rooms & Suites"
              subtitle="Designed for comfort and sophistication"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Each accommodation is meticulously designed to provide the ultimate in luxury and relaxation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {roomTypes.map((room, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{room.name}</h3>
                    <p className="text-white/90 text-sm">{room.description.substring(0, 60)}...</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-viyat-navy mb-3">Amenities:</h4>
                    <ul className="grid grid-cols-2 gap-3">
                      {room.amenities.map((amenity, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <span className="text-viyat-gold mr-2">
                            {amenity.includes("WiFi") && <FiWifi />}
                            {amenity.includes("bed") && <FiCoffee />}
                            {amenity.includes("shower") && <FiDroplet />}
                            {amenity.includes("TV") && <FiTv />}
                          </span>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-2xl font-bold text-viyat-gold mb-6">{room.price}</p>
                  <button className="w-full py-3 bg-viyat-gold hover:bg-viyat-navy text-white rounded-md transition-colors font-medium">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
                <div className="mb-6">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-viyat-navy mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-viyat-champagne p-12 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-viyat-navy mb-6">
                  Special Packages
                </h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Enhance your stay with our curated packages that combine luxury accommodations with exceptional experiences.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-viyat-gold mr-3">✓</span>
                    <span className="font-medium">Spa Retreat Package</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-viyat-gold mr-3">✓</span>
                    <span className="font-medium">Romantic Getaway Package</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-viyat-gold mr-3">✓</span>
                    <span className="font-medium">Business Traveler Package</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-viyat-gold mr-3">✓</span>
                    <span className="font-medium">Family Vacation Package</span>
                  </li>
                </ul>
                <button className="px-8 py-3 border-2 border-viyat-navy text-viyat-navy hover:bg-viyat-navy hover:text-white rounded-md transition-colors font-medium">
                  View All Packages
                </button>
              </div>
              <div className="rounded-xl overflow-hidden h-80">
                <img
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
                  alt="Viyat Club pool"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;