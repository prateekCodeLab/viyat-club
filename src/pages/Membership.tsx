import React from 'react';
import PageHeader from '@components/PageHeader';
import SectionHeader from '@components/SectionHeader';
import CTAButton from '@components/CTAButton';
import { FaStar, FaSwimmingPool, FaSpa, FaDumbbell, FaGlassCheers, FaConciergeBell, FaUserTie } from 'react-icons/fa';

const Membership = () => {
  const membershipTiers = [
    {
      name: "Platinum",
      price: "₹2,50,000/year",
      description: "Our most exclusive membership with premium privileges",
      features: [
        "Unlimited access to all facilities",
        "Priority reservations at all venues",
        "Monthly complimentary spa treatments",
        "Access to platinum-only events",
        "25% discount on dining and services",
        "10 guest passes per year"
      ],
      popular: true
    },
    {
      name: "Gold",
      price: "₹1,50,000/year",
      description: "Premium membership with extensive benefits",
      features: [
        "Access to all facilities",
        "Weekday priority reservations",
        "Quarterly spa credits",
        "Access to member events",
        "15% discount on dining",
        "6 guest passes per year"
      ],
      popular: false
    },
    {
      name: "Silver",
      price: "₹1,00,000/year",
      description: "Standard membership with full amenities",
      features: [
        "Access to fitness center and pools",
        "Weekday reservations",
        "10% discount on dining",
        "Invitations to select events",
        "4 guest passes per year"
      ],
      popular: false
    }
  ];

  const amenities = [
    {
      icon: <FaSwimmingPool className="text-4xl text-viyat-gold" />,
      title: "Aquatic Facilities",
      description: "Olympic pool, leisure pool, and private cabanas"
    },
    {
      icon: <FaSpa className="text-4xl text-viyat-gold" />,
      title: "Wellness Center",
      description: "Full-service spa, sauna, and steam rooms"
    },
    {
      icon: <FaDumbbell className="text-4xl text-viyat-gold" />,
      title: "Fitness Complex",
      description: "State-of-the-art equipment with personal training"
    },
    {
      icon: <FaGlassCheers className="text-4xl text-viyat-gold" />,
      title: "Dining Privileges",
      description: "Multiple restaurants with member discounts"
    },
    {
      icon: <FaConciergeBell className="text-4xl text-viyat-gold" />,
      title: "Concierge Services",
      description: "24/7 personalized assistance"
    },
    {
      icon: <FaUserTie className="text-4xl text-viyat-gold" />,
      title: "Business Center",
      description: "Fully equipped meeting rooms and workspaces"
    }
  ];

  const benefits = [
    "Access to exclusive member-only events and parties",
    "Complimentary valet parking",
    "Priority booking for accommodations and event spaces",
    "Special rates for guest rooms and suites",
    "Invitations to wine tastings and culinary events",
    "Access to our global reciprocal club network"
  ];

  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Membership"
        subtitle="Join our exclusive community"
        backgroundImage="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
        overlay
      />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <SectionHeader
              title="Membership Tiers"
              subtitle="Select the perfect plan for your lifestyle"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Our membership options cater to diverse needs, from social enthusiasts to business professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden ${tier.popular ? "transform md:-translate-y-4 shadow-2xl" : "shadow-xl"} transition-all`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-viyat-gold text-white py-2 text-center font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className={`p-8 h-full ${tier.popular ? "bg-white" : "bg-white"}`}>
                  <h3 className="text-2xl font-bold text-viyat-navy mb-2">{tier.name}</h3>
                  <p className="text-3xl font-bold text-viyat-gold mb-4">{tier.price}</p>
                  <p className="text-gray-600 mb-6">{tier.description}</p>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaStar className="text-viyat-gold mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-medium transition-colors ${tier.popular ? "bg-viyat-gold hover:bg-viyat-navy text-white" : "bg-white border-2 border-viyat-gold text-viyat-gold hover:bg-viyat-gold/10"}`}>
                    Join Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <SectionHeader
              title="Member Amenities"
              subtitle="World-class facilities at your fingertips"
              className="text-center"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 text-center">
              Enjoy unlimited access to our exceptional amenities and services.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {amenities.map((amenity, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="mb-6">{amenity.icon}</div>
                  <h3 className="text-xl font-bold text-viyat-navy mb-3">{amenity.title}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-viyat-navy text-white p-12 rounded-2xl mb-20">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                title="Additional Benefits"
                subtitle="More reasons to join our community"
                className="text-center mb-12"
                light
              />
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-viyat-gold mr-3 mt-1">✓</span>
                    <span className="opacity-90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-viyat-navy mb-6">
              Ready to Become a Member?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Schedule a private tour or speak with our membership director about joining options.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton
                text="Schedule Tour"
                to="/contact"
                variant="primary"
                size="lg"
              />
              <CTAButton
                text="Download Brochure"
                to="#"
                variant="secondary"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;