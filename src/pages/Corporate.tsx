import React from 'react';
import PageHeader from '@components/PageHeader';
import CTAButton from '@components/CTAButton';
import { FaBuilding, FaUsers, FaChartLine, FaUtensils, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Corporate = () => {
  const services = [
    {
      icon: <FaBuilding className="text-4xl text-viyat-gold" />,
      title: "Conference Facilities",
      description: "State-of-the-art meeting rooms and auditoriums with cutting-edge technology for impactful presentations"
    },
    {
      icon: <FaUsers className="text-4xl text-viyat-gold" />,
      title: "Team Building",
      description: "Customized programs designed to enhance collaboration, communication and leadership skills"
    },
    {
      icon: <FaChartLine className="text-4xl text-viyat-gold" />,
      title: "Executive Retreats",
      description: "Secluded spaces for strategic planning with premium amenities for C-level executives"
    },
    {
      icon: <FaUtensils className="text-4xl text-viyat-gold" />,
      title: "Corporate Dining",
      description: "Michelin-star chefs creating bespoke menus for your business events and galas"
    }
  ];

  const testimonials = [
    {
      quote: "Our global leadership summit at Viyat Club was flawless. The technology integration was seamless and the service impeccable.",
      author: "Neha Sharma",
      position: "HR Director, TechSolutions Inc.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    },
    {
      quote: "The team building retreat exceeded all expectations. Our employees are still talking about the experience months later.",
      author: "Rahul Gupta",
      position: "CEO, Innovate Consulting",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    }
  ];

  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Corporate Excellence"
        subtitle="Where business meets luxury"
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
        overlay
      />

      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-viyat-navy mb-6">
            Business Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your corporate events into extraordinary experiences with our premium facilities and dedicated service team
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-viyat-navy mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 bg-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-viyat-navy mb-6">
              Custom Corporate Packages
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our concierge team will design a completely bespoke package tailored to your company's specific requirements and objectives.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-viyat-navy mb-4">Meeting Spaces</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-viyat-gold mr-2">✓</span>
                    <span>Boardrooms for 10 to grand ballrooms for 500</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-viyat-gold mr-2">✓</span>
                    <span>Advanced AV with 4K projection and telepresence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-viyat-gold mr-2">✓</span>
                    <span>Dedicated technical support team</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-viyat-navy mb-4">Accommodations</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-viyat-gold mr-2">✓</span>
                    <span>Luxury rooms with executive lounge access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-viyat-gold mr-2">✓</span>
                    <span>Airport transfers and local transportation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-viyat-gold mr-2">✓</span>
                    <span>Team building activity coordination</span>
                  </li>
                </ul>
              </div>
            </div>
            <CTAButton
              text="Request Custom Proposal"
              to="/contact"
              variant="primary"
              size="lg"
            />
          </div>

          <div className="bg-viyat-champagne p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-viyat-navy mb-6">
              Client Experiences
            </h3>
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="italic text-gray-700">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-viyat-navy text-white p-12 rounded-2xl mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Corporate Event Planning</h3>
            <p className="text-xl mb-8 opacity-90">
              Our dedicated event specialists will handle every detail of your corporate gathering, from initial concept to flawless execution.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <FaPhoneAlt className="text-3xl text-viyat-gold mx-auto mb-4" />
                <p>+91 98765 43210</p>
              </div>
              <div>
                <FaMapMarkerAlt className="text-3xl text-viyat-gold mx-auto mb-4" />
                <p>Greater Noida, Delhi NCR</p>
              </div>
              <div>
                <FaEnvelope className="text-3xl text-viyat-gold mx-auto mb-4" />
                <p>corporate@viyatclub.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;