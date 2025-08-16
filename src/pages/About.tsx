import React from 'react';
import PageHeader from '@components/PageHeader';
import SectionHeader from '@components/SectionHeader';
import { FaAward, FaUsers, FaMapMarkerAlt, FaHeart, FaLeaf, FaHistory } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaAward className="text-4xl text-viyat-gold mb-4" />,
      title: "Award Winning",
      description: "Recipient of 'India's Best Luxury Club' for 5 consecutive years"
    },
    {
      icon: <FaUsers className="text-4xl text-viyat-gold mb-4" />,
      title: "Exclusive Community",
      description: "Home to 5,000+ distinguished members from across the globe"
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-viyat-gold mb-4" />,
      title: "Prime Location",
      description: "10 acres of lush greenery in the heart of Greater Noida"
    }
  ];

  const milestones = [
    { year: "2010", event: "Viyat Club founded with vision of luxury hospitality" },
    { year: "2013", event: "Expanded to include residential accommodations" },
    { year: "2016", event: "Awarded 'Best Luxury Club in North India'" },
    { year: "2019", event: "Completed major renovation and expansion" },
    { year: "2022", event: "Launched corporate retreat facilities" }
  ];

  return (
    <div>
      <PageHeader
        title="Our Heritage"
        subtitle="A legacy of excellence since 2010"
        backgroundImage="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        overlay
      />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader
                title="The Viyat Story"
                subtitle="Where tradition meets contemporary luxury"
                align="left"
              />
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Established in 2010, Viyat Club has redefined luxury hospitality in North India. What began as a premier social club has evolved into a complete lifestyle destination, offering world-class amenities across 10 acres of meticulously landscaped grounds.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our philosophy blends timeless Indian hospitality with global standards of excellence. Every detail, from our architecture to our service ethos, reflects this harmonious balance between heritage and innovation.
              </p>
              <div className="flex items-center space-x-4">
                <FaHeart className="text-2xl text-viyat-gold" />
                <span className="text-gray-600">Over 1 million guests served since opening</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Viyat Club exterior"
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl w-3/4">
                <div className="flex items-center mb-2">
                  <FaLeaf className="text-viyat-gold mr-2" />
                  <h4 className="font-bold">Sustainability Commitment</h4>
                </div>
                <p className="text-sm text-gray-600">LEED-certified buildings with solar power and water recycling systems</p>
              </div>
            </div>
          </div>

          <SectionHeader
            title="Our Distinction"
            subtitle="What sets Viyat apart"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all text-center h-full">
                {feature.icon}
                <h3 className="text-2xl font-bold text-viyat-navy mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-viyat-champagne p-12 rounded-2xl">
            <SectionHeader
              title="Our Journey"
              subtitle="Milestones in excellence"
              align="left"
              className="mb-10"
            />
            <div className="relative">
              <div className="absolute left-5 h-full w-0.5 bg-viyat-gold"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-16">
                    <div className="absolute left-0 w-10 h-10 rounded-full bg-viyat-gold flex items-center justify-center text-white">
                      <FaHistory />
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-xl font-bold text-viyat-navy mb-2">{milestone.year}</h4>
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;