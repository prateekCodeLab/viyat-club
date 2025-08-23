import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import CTAButton from './CTAButton';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com/viyatclub", label: "Facebook" },
    { icon: <FaInstagram />, url: "https://instagram.com/viyatclub", label: "Instagram" },
    { icon: <FaTwitter />, url: "https://twitter.com/viyatclub", label: "Twitter" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/company/viyatclub", label: "LinkedIn" }
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "123 Club Avenue, Mumbai 400001" },
    { icon: <FaPhone />, text: "+91 22 1234 5678" },
    { icon: <FaEnvelope />, text: "info@viyatclub.com" }
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Rooms & Suites", path: "/accommodation" },
    { name: "Dining", path: "/dining" },
    { name: "Spa & Wellness", path: "/spa-wellness" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" }
  ];

  return (
    <footer className="bg-viyat-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Club Information */}
          <div>
            <h3 className="text-xl font-bold mb-6">VIYAT CLUB</h3>
            <p className="text-gray-300 mb-6">
              An exclusive retreat offering world-class amenities and unparalleled hospitality in the heart of the city.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-viyat-gold transition-colors text-xl"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-viyat-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-viyat-gold mr-3 mt-1">{item.icon}</span>
                  <span className="text-gray-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
            <NewsletterForm />
            {/* Download Brochure button removed from footer as requested */}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Viyat Club. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-viyat-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-viyat-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;