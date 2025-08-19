import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const Testimonials = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Wedding Planner',
      content: 'Viyat Club provided the perfect venue for our client\'s dream wedding. The attention to detail and exceptional service made the entire process seamless. Our clients were thrilled with the results!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Corporate Event Organizer',
      content: 'Our annual conference at Viyat Club was a resounding success. The facilities were impeccable, the technology worked flawlessly, and the catering exceeded all expectations. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Loyal Member',
      content: 'As a member for 5 years, I can confidently say Viyat Club offers the best luxury experience in the region. The staff remembers my preferences, and the amenities are always pristine.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
    }
  ];

  return (
    <section className="py-20 px-4 bg-viyat-champagne">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Guest Experiences"
          subtitle="Hear from those who've experienced Viyat firsthand"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all h-full"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-viyat-navy">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-6 flex text-viyat-gold">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}
                    size={18}
                  />
                ))}
              </div>
              
              <div className="relative">
                <FaQuoteLeft className="text-viyat-gold/20 text-5xl absolute -top-2 -left-2" />
                <p className="text-gray-700 relative z-10 pl-8">
                  {testimonial.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button 
            onClick={() => setShowFeedbackModal(true)}
            className="px-8 py-3 bg-viyat-navy text-white rounded-lg hover:bg-viyat-navy/90 transition-colors font-medium"
          >
            Share Your Experience
          </button>
        </motion.div>

          {/* Feedback Modal (matches existing design) */}
        {showFeedbackModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
              <h3 className="text-2xl font-bold text-viyat-navy mb-6">Share Your Feedback</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Your Experience</label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="consent"
                    className="mr-2 h-5 w-5 text-viyat-gold rounded focus:ring-viyat-gold"
                  />
                  <label htmlFor="consent" className="text-gray-700">
                    I agree to share my feedback publicly
                  </label>
                </div>
                
                <div className="flex justify-end gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowFeedbackModal(false)}
                    className="px-6 py-2 border border-viyat-navy text-viyat-navy rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-viyat-gold text-viyat-navy rounded-lg hover:bg-viyat-gold/90 transition-colors font-medium"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Testimonials;