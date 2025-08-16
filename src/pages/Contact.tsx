import React from 'react';
import PageHeader from '@components/PageHeader';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <PageHeader
        title="Get In Touch"
        subtitle="We're here to help"
        backgroundImage="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        overlay
      />

      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-viyat-navy mb-8">Send us a message</h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                    placeholder="Your email"
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
                  autoComplete="off"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  autoComplete="off"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-viyat-gold hover:bg-viyat-navy text-white rounded-lg transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-viyat-navy mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-viyat-champagne p-4 rounded-full mr-6">
                  <FaMapMarkerAlt className="text-2xl text-viyat-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-viyat-navy mb-2">Address</h3>
                  <p className="text-gray-600">Viyat Club, Sector Omega I</p>
                  <p className="text-gray-600">Greater Noida, Uttar Pradesh 201310</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-viyat-champagne p-4 rounded-full mr-6">
                  <FaPhoneAlt className="text-2xl text-viyat-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-viyat-navy mb-2">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 120 1234567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-viyat-champagne p-4 rounded-full mr-6">
                  <FaEnvelope className="text-2xl text-viyat-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-viyat-navy mb-2">Email</h3>
                  <p className="text-gray-600">info@viyatclub.com</p>
                  <p className="text-gray-600">membership@viyatclub.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-viyat-champagne p-4 rounded-full mr-6">
                  <FaClock className="text-2xl text-viyat-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-viyat-navy mb-2">Hours</h3>
                  <p className="text-gray-600">Monday - Sunday: 6:00 AM - 11:00 PM</p>
                  <p className="text-gray-600">24/7 for resident guests</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-viyat-navy mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="bg-viyat-champagne p-3 rounded-full text-viyat-navy hover:bg-viyat-gold hover:text-white transition-colors" aria-label="Facebook">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="https://instagram.com" className="bg-viyat-champagne p-3 rounded-full text-viyat-navy hover:bg-viyat-gold hover:text-white transition-colors" aria-label="Instagram">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="https://twitter.com" className="bg-viyat-champagne p-3 rounded-full text-viyat-navy hover:bg-viyat-gold hover:text-white transition-colors" aria-label="Twitter">
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>

            <div className="mt-12 bg-gray-100 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-viyat-navy mb-4">Getting Here</h3>
              <p className="text-gray-600 mb-4">Viyat Club is conveniently located in Greater Noida, just 45 minutes from Indira Gandhi International Airport.</p>
              <Link to="/location" className="block w-full py-3 border border-viyat-navy text-viyat-navy hover:bg-gray-200 rounded-lg transition-colors font-medium text-center">
                View on Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;