import React, { useState } from 'react';
import PageHeader from '@components/PageHeader';
import SectionHeader from '@components/SectionHeader';
import CTAButton from '@components/CTAButton';
import BrochureModal from '@components/BrochureModal';
import ContactModal from '@components/ContactModal';
import { FaRing, FaCalendarAlt, FaMapMarkerAlt, FaHeart, FaGlassCheers, FaUmbrellaBeach, FaDownload, FaCalendar, FaUser } from 'react-icons/fa';

const Weddings = () => {
  const [selectedPackage, setSelectedPackage] = useState<{ id: number; title: string } | null>(null);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'venue-tour' | 'wedding-planner'>('venue-tour');

  const weddingPackages = [
    {
      id: 1,
      title: "Royal Wedding",
      description: "Our most extravagant package for the wedding of your dreams",
      price: "₹25,00,000+",
      capacity: "500+ guests",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      highlights: [
        "Grand ballroom with crystal chandeliers",
        "Bridal suite with personal attendants",
        "Custom floral designs by renowned florists",
        "Five-star gourmet catering with international menu",
        "Professional wedding planning team"
      ]
    },
    {
      id: 2,
      title: "Intimate Affair",
      description: "Elegant celebration for smaller gatherings",
      price: "₹12,00,000+",
      capacity: "Up to 150 guests",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      highlights: [
        "Garden or terrace venue options",
        "Personalized decor themes",
        "Gourmet dining experience",
        "Dedicated wedding coordinator",
        "Complimentary spa treatment for couple"
      ]
    },
    {
      id: 3,
      title: "Destination Wedding",
      description: "Exotic location with complete wedding services",
      price: "₹35,00,000+",
      capacity: "Up to 300 guests",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      highlights: [
        "Beachfront or palace venue options",
        "Complete guest accommodation",
        "Custom cultural ceremonies",
        "International chef team",
        "Photography and videography package"
      ]
    }
  ];

  const weddingVenues = [
    {
      name: "Grand Ballroom",
      capacity: "500 guests",
      description: "Majestic space with 20-foot ceilings and crystal chandeliers",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Garden Pavilion",
      capacity: "200 guests",
      description: "Elegant outdoor setting surrounded by lush gardens",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Beachfront Terrace",
      capacity: "150 guests",
      description: "Stunning ocean views with sunset ceremony options",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  const services = [
    {
      icon: <FaRing className="text-3xl text-viyat-gold" />,
      title: "Wedding Planning",
      description: "Complete coordination from concept to execution"
    },
    {
      icon: <FaHeart className="text-3xl text-viyat-gold" />,
      title: "Bridal Services",
      description: "Makeup, hairstyling and relaxation treatments"
    },
    {
      icon: <FaGlassCheers className="text-3xl text-viyat-gold" />,
      title: "Catering",
      description: "Custom menus from our award-winning culinary team"
    },
    {
      icon: <FaUmbrellaBeach className="text-3xl text-viyat-gold" />,
      title: "Guest Accommodations",
      description: "Luxury rooms and suites for wedding parties"
    }
  ];

  const handleBrochureRequest = (pkgId: number, pkgTitle: string) => {
    setSelectedPackage({ id: pkgId, title: pkgTitle });
    setIsBrochureModalOpen(true);
  };

  const handleVenueTour = () => {
    setModalType('venue-tour');
    setIsContactModalOpen(true);
  };

  const handleWeddingPlanner = () => {
    setModalType('wedding-planner');
    setIsContactModalOpen(true);
  };

  const closeModals = () => {
    setIsBrochureModalOpen(false);
    setIsContactModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Weddings & Celebrations"
        subtitle="Where dreams become reality"
        backgroundImage="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
        overlay
      />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <SectionHeader
              title="Wedding Packages"
              subtitle="Tailored experiences for your special day"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Our comprehensive wedding packages take care of every detail, allowing you to enjoy your celebration stress-free.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {weddingPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white">{pkg.title}</h3>
                    <div className="flex items-center text-gray-200 mt-2">
                      <FaCalendarAlt className="mr-2" />
                      <span>Capacity: {pkg.capacity}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <p className="text-2xl font-bold text-viyat-gold mb-6">{pkg.price}</p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-800 mb-4">Package Highlights:</h4>
                    <ul className="space-y-3">
                      {pkg.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-viyat-gold mr-2">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <CTAButton
                    text="Request Brochure"
                    size="full"
                    variant="primary"
                    onClick={() => handleBrochureRequest(pkg.id, pkg.title)}
                    icon={<FaDownload />}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <SectionHeader
              title="Our Wedding Venues"
              subtitle="Stunning settings for your celebration"
              className="text-center"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 text-center">
              Each of our venues offers unique charm and character to match your wedding vision.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {weddingVenues.map((venue, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl h-96">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{venue.name}</h3>
                      <div className="flex items-center text-gray-200 mb-3">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>Capacity: {venue.capacity}</span>
                      </div>
                      <p className="text-gray-200">{venue.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-12 rounded-2xl shadow-xl">
            <SectionHeader
              title="Wedding Services"
              subtitle="Comprehensive offerings for your special day"
              className="text-center mb-12"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-viyat-navy mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-viyat-navy mb-6">
              Begin Your Wedding Journey
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Schedule a consultation with our wedding specialists to start planning your perfect day.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton
                text="Book a Venue Tour"
                size="lg"
                variant="primary"
                onClick={handleVenueTour}
                icon={<FaCalendar />}
              />
              <CTAButton
                text="Contact Wedding Planner"
                size="lg"
                variant="outline"
                onClick={handleWeddingPlanner}
                icon={<FaUser />}
              />
            </div>

              {selectedPackage && (
            <BrochureModal
              isOpen={isBrochureModalOpen}
              onClose={closeModals}
              packageTitle={selectedPackage.title}
              packageId={selectedPackage.id}
            />
          )}

          <ContactModal
            isOpen={isContactModalOpen}
            onClose={closeModals}
            modalType={modalType}
          />

          </div>
        </div>
      </section>
    </div>
  );
};

export default Weddings;