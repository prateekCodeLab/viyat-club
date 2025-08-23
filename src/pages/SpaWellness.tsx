import React from 'react';
import PageHeader from '@components/PageHeader';
import SectionHeader from '@components/SectionHeader';
import CTAButton from '@components/CTAButton';
import { FaSpa, FaWater, FaHeart, FaLeaf, FaClock, FaUserMd } from 'react-icons/fa';

const SpaWellness = () => {
  const treatments = [
    {
      name: "Signature Viyat Massage",
      duration: "90 minutes",
      price: "₹5,500",
      description: "A bespoke blend of Ayurvedic and Swedish techniques using warm herbal oils to relieve tension and promote deep relaxation.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Aromatherapy Journey",
      duration: "60 minutes",
      price: "₹4,200",
      description: "Custom essential oil blends tailored to your mood and needs, promoting emotional balance and physical well-being.",
      image: "https://images.unsplash.com/photo-1591382386627-349b692688ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Detox Body Wrap",
      duration: "75 minutes",
      price: "₹4,800",
      description: "Mineral-rich marine wrap that detoxifies, hydrates, and revitalizes the skin while promoting overall wellness.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const facilities = [
    {
      icon: <FaWater className="text-3xl text-viyat-gold" />,
      title: "Hydrotherapy Pool",
      description: "Therapeutic water massage with temperature-controlled zones for relaxation and recovery",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031d5b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <FaLeaf className="text-3xl text-viyat-gold" />,
      title: "Herbal Steam Room",
      description: "Infused with essential oils to cleanse, detoxify, and rejuvenate",
      image: "https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <FaHeart className="text-3xl text-viyat-gold" />,
      title: "Fitness Center",
      description: "State-of-the-art equipment with personal training and group classes",
      image: "https://images.unsplash.com/photo-1571019614244-c52cb4cad84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const wellnessPrograms = [
    {
      title: "Stress Management",
      duration: "3 days",
      includes: ["Yoga sessions", "Meditation", "Nutrition consultation", "3 spa treatments"],
      image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Detox & Cleanse",
      duration: "5 days",
      includes: ["Colon hydrotherapy", "Juice cleanse", "Yoga", "Daily massages"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Fitness Retreat",
      duration: "7 days",
      includes: ["Personal training", "Nutrition planning", "Group activities", "Recovery treatments"],
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Spa & Wellness"
        subtitle="Rejuvenate your mind, body, and spirit"
        backgroundImage="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        overlay
      />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <SectionHeader
              title="Holistic Wellness"
              subtitle="A sanctuary for complete rejuvenation"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Our 15,000 sq ft wellness center combines ancient healing traditions with modern techniques to create personalized journeys for every guest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-viyat-navy mb-2">{treatment.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-viyat-gold font-medium">{treatment.price}</span>
                    <span className="flex items-center text-gray-600 text-sm">
                      <FaClock className="mr-2 text-viyat-gold" />
                      {treatment.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{treatment.description}</p>
                  <CTAButton
                    text="Book Treatment"
                    to="/contact"
                    variant="primary"
                    size="full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
                <div className="mb-6">{facility.icon}</div>
                <h3 className="text-xl font-bold text-viyat-navy mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <SectionHeader
              title="Wellness Programs"
              subtitle="Comprehensive journeys for transformative results"
              className="text-center mb-12"
            />
            <div className="grid md:grid-cols-3 gap-8">
              {wellnessPrograms.map((program, index) => (
                <div key={index} className="bg-viyat-champagne p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-viyat-navy mb-3">{program.title}</h3>
                  <p className="text-viyat-gold font-medium mb-6">Duration: {program.duration}</p>
                  <ul className="space-y-3 mb-8">
                    {program.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-viyat-gold mr-3">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <CTAButton
                    text="Learn More"
                    to="/contact"
                    variant="outline"
                    size="full"
                    className="border-2 border-viyat-navy text-viyat-navy hover:bg-viyat-navy hover:text-white"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-viyat-navy text-white p-12 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  title="Expert Therapists"
                  subtitle="Trained in global wellness traditions"
                  light
                  align="left"
                  className="mb-8"
                />
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Our team of certified therapists brings expertise from around the world, combining traditional Ayurvedic practices with contemporary wellness techniques.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaUserMd className="text-viyat-gold mr-3" />
                    <span>Internationally certified practitioners</span>
                  </li>
                  <li className="flex items-center">
                    <FaSpa className="text-viyat-gold mr-3" />
                    <span>Minimum 10 years of experience</span>
                  </li>
                  <li className="flex items-center">
                    <FaHeart className="text-viyat-gold mr-3" />
                    <span>Personalized consultation for every guest</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden h-80">
                <img
                  src="https://images.unsplash.com/photo-1591382386627-349b692688ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Professional spa therapist at work"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpaWellness;