import React, { useState } from 'react';
import PageHeader from '@components/PageHeader';
import SectionHeader from '@components/SectionHeader';
import CTAButton from '@components/CTAButton';
import { FiWifi, FiCoffee, FiDroplet, FiTv, FiMapPin, FiStar, FiZap } from 'react-icons/fi';

interface RoomType {
  name: string;
  description: string;
  price: string;
  image: string;
  amenities: string[];
}

interface PackageType {
  name: string;
  price: string;
  includes: string[];
  image?: string;
}

const Accommodation = () => {
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showPackagesModal, setShowPackagesModal] = useState(false);
  const [bookingDates, setBookingDates] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1
  });

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

  const packages = [
    {
      name: "Spa Retreat Package",
      price: "₹18,000/night",
      includes: [
        "Luxury accommodation",
        "60-minute spa treatment",
        "Daily yoga session",
        "Healthy breakfast"
      ]
    },
    {
      name: "Romantic Getaway Package",
      price: "₹22,000/night",
      includes: [
        "Champagne on arrival",
        "Couples massage",
        "Candlelit dinner",
        "Late checkout"
      ]
    },
    {
      name: "Business Traveler Package",
      price: "₹20,000/night",
      includes: [
        "Executive lounge access",
        "Daily laundry service",
        "Airport transfers",
        "Meeting room credits"
      ]
    },
    {
      name: "Family Vacation Package",
      price: "₹25,000/night",
      includes: [
        "Connecting rooms available",
        "Kids activities",
        "Family dinner credit",
        "Complimentary babysitting"
      ]
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

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', selectedRoom, bookingDates);
    setShowBookingModal(false);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingDates(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
                  <CTAButton
                    text="Book Now"
                    onClick={() => {
                      setSelectedRoom(room);
                      setShowBookingModal(true);
                    }}
                    variant="primary"
                    size="full"
                  />
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
                  {packages.slice(0, 4).map((pkg, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-viyat-gold mr-3">✓</span>
                      <span className="font-medium">{pkg.name}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton
                  text="View All Packages"
                  onClick={() => setShowPackagesModal(true)}
                  variant="outline"
                  className="border-2 border-viyat-navy text-viyat-navy hover:bg-viyat-navy hover:text-white"
                />
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

      {/* Packages Modal */}
      {showPackagesModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-3xl font-bold text-viyat-navy mb-8 text-center">
              Our Special Packages
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {packages.map((pkg, index) => (
                <div key={index} className="border border-viyat-champagne rounded-xl p-6 hover:shadow-md transition-all">
                  <h4 className="text-xl font-bold text-viyat-navy mb-3">{pkg.name}</h4>
                  <p className="text-viyat-gold font-medium mb-4">{pkg.price}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-viyat-gold mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <CTAButton
                    text="Book This Package"
                    onClick={() => {
                      setShowPackagesModal(false);
                      // Optional: Auto-scroll to booking section
                    }}
                    variant="primary"
                    size="full"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <CTAButton
                text="Close"
                onClick={() => setShowPackagesModal(false)}
                variant="outline"
                className="border border-viyat-navy text-viyat-navy hover:bg-gray-100"
              />
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && selectedRoom && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold text-viyat-navy mb-2">
              Book {selectedRoom.name}
            </h3>
            <p className="text-viyat-gold font-medium mb-6">{selectedRoom.price}</p>
            
            <form onSubmit={handleBookingSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Check-in</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={bookingDates.checkIn}
                    onChange={handleDateChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Check-out</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={bookingDates.checkOut}
                    onChange={handleDateChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                    required
                    min={bookingDates.checkIn || new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-1">Guests</label>
                <select
                  name="guests"
                  value={bookingDates.guests}
                  onChange={handleDateChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                >
                  {[1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end gap-4">
                <CTAButton
                  text="Cancel"
                  onClick={() => setShowBookingModal(false)}
                  variant="outline"
                  className="border border-viyat-navy text-viyat-navy hover:bg-gray-100"
                />
                <CTAButton
                  text="Confirm Booking"
                  type="submit"
                  variant="primary"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accommodation;