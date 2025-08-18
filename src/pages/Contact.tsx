import React, { useState } from 'react';
import PageHeader from '@components/PageHeader';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <PageHeader
        title="Get In Touch"
        subtitle="We're here to help"
        backgroundImage="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&id=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        overlay
      />

      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-viyat-navy mb-8">Send us a message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-viyat-gold hover:bg-viyat-navy text-white rounded-lg transition-colors font-medium ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-viyat-navy mb-6">Contact Information</h2>
              <p className="text-gray-700 mb-8">
                Have questions about membership, events, or our facilities? Our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-viyat-champagne p-3 rounded-full mr-4">
                  <FaPhoneAlt className="text-viyat-gold text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-viyat-navy mb-1">Phone</h3>
                  <p className="text-gray-700">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-viyat-champagne p-3 rounded-full mr-4">
                  <FaEnvelope className="text-viyat-gold text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-viyat-navy mb-1">Email</h3>
                  <p className="text-gray-700">membership@viyatclub.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-viyat-champagne p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-viyat-gold text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-viyat-navy mb-1">Address</h3>
                  <p className="text-gray-700">
                    Viyat Club, Bandra Kurla Complex<br />
                    Mumbai, Maharashtra 400051
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-viyat-champagne p-3 rounded-full mr-4">
                  <FaClock className="text-viyat-gold text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-viyat-navy mb-1">Hours</h3>
                  <p className="text-gray-700">
                    Monday - Sunday: 6:00 AM - 11:00 PM<br />
                    (24/7 access for Platinum members)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;