import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import CTAButton from './CTAButton';

const Footer = () => {
  return (
    <footer className="bg-viyat-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Viyat Club</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              North India's premier luxury destination offering world-class amenities, exquisite dining, and unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/viyatclub" className="text-gray-300 hover:text-viyat-gold transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com/viyatclub" className="text-gray-300 hover:text-viyat-gold transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com/viyatclub" className="text-gray-300 hover:text-viyat-gold transition-colors" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com/company/viyatclub" className="text-gray-300 hover:text-viyat-gold transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-viyat-gold transition-colors">Home</Link></li>
              <li><Link to="/accommodation" className="text-gray-300 hover:text-viyat-gold transition-colors">Accommodation</Link></li>
              <li><Link to="/weddings" className="text-gray-300 hover:text-viyat-gold transition-colors">Weddings</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-viyat-gold transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-viyat-gold transition-colors">Gallery</Link></li>
              <li><Link to="/membership" className="text-gray-300 hover:text-viyat-gold transition-colors">Membership</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-4">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-viyat-gold" />
                <span>Sector Omega I, Greater Noida, Uttar Pradesh 201310</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-viyat-gold" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-viyat-gold" />
                <span>info@viyatclub.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaClock className="text-viyat-gold" />
                <span>Open daily: 6:00 AM - 11:00 PM</span>
              </div>
            </address>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                id="newsletter-email"
                name="email"
                autoComplete="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-viyat-gold text-gray-800"
                required
              />
              <CTAButton
                text="Subscribe"
                type="submit"
                variant="gold-outline"
                size="full"
              />
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Viyat Club. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-viyat-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-viyat-gold transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-viyat-gold transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;