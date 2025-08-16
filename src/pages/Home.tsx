import React from 'react';
import Hero from '@components/Hero';
import SectionHeader from '@components/SectionHeader';
import GalleryGrid from '@components/GalleryGrid';
import Testimonials from '@components/Testimonials';
import CTAButton from '@components/CTAButton';
import { FaSwimmingPool, FaSpa, FaUtensils, FaWifi, FaParking, FaConciergeBell } from 'react-icons/fa';

const Home = () => {
  const amenities = [
    {
      icon: <FaSwimmingPool className="text-4xl text-viyat-gold" />,
      title: "Swimming Pools",
      description: "Olympic-sized pool and leisure pool with cabanas"
    },
    {
      icon: <FaSpa className="text-4xl text-viyat-gold" />,
      title: "Spa & Wellness",
      description: "Full-service spa with treatment rooms"
    },
    {
      icon: <FaUtensils className="text-4xl text-viyat-gold" />,
      title: "Dining Venues",
      description: "Multiple restaurants offering diverse cuisines"
    },
    {
      icon: <FaWifi className="text-4xl text-viyat-gold" />,
      title: "High-speed WiFi",
      description: "Complimentary throughout the property"
    },
    {
      icon: <FaParking className="text-4xl text-viyat-gold" />,
      title: "Valet Parking",
      description: "Secure parking with 24/7 surveillance"
    },
    {
      icon: <FaConciergeBell className="text-4xl text-viyat-gold" />,
      title: "24/7 Concierge",
      description: "Personalized service at any hour"
    }
  ];

  return (
    <div>
      <Hero 
        title="Luxury Redefined"
        subtitle="Discover an oasis of sophistication in Greater Noida"
        imageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        ctaText="Explore Membership"
        ctaLink="/membership"
        overlay
      />

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Our World-Class Amenities"
            subtitle="Designed for your comfort and pleasure"
            className="text-center mb-16"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
                <div className="mb-6">{amenity.icon}</div>
                <h3 className="text-xl font-bold text-viyat-navy mb-3">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <CTAButton 
              text="View All Facilities" 
              to="/gallery" 
              variant="primary"
              size="lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader 
                title="The Viyat Experience"
                subtitle="More than a club - a lifestyle"
                align="left"
              />
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since 2010, Viyat Club has set the standard for luxury living in North India. Our 10-acre property blends contemporary elegance with timeless hospitality traditions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're joining us for a day of leisure, a business event, or an extended stay, every detail is crafted to exceed your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  text="Our Story" 
                  to="/about" 
                  variant="primary"
                />
                <CTAButton 
                  text="Virtual Tour" 
                  to="#" 
                  variant="secondary"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80" 
                  alt="Viyat Club pool"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Viyat Club event"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Viyat Club room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Viyat Club dining"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-20 px-4 bg-viyat-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Viyat?</h2>
          <p className="text-xl opacity-90 mb-8">
            Become part of our exclusive community or book your stay at North India's premier luxury destination.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton 
              text="Explore Membership" 
              to="/membership" 
              variant="primary"
              size="lg"
              className="bg-viyat-gold hover:bg-white text-viyat-navy"
            />
            <CTAButton 
              text="Book Accommodation" 
              to="/accommodation" 
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;