import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaFacebook, FaInstagram, FaTwitter, FaLinkedin, 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock 
} from 'react-icons/fa'
import CTAButton from './CTAButton'
import NewsletterForm from './NewsletterForm'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-viyat-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Viyat Club</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              North India's premier luxury destination offering world-class amenities, 
              exquisite dining, and unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <SocialIcon 
                href="https://facebook.com/viyatclub" 
                icon={<FaFacebook />} 
                label="Facebook"
              />
              <SocialIcon 
                href="https://instagram.com/viyatclub" 
                icon={<FaInstagram />} 
                label="Instagram"
              />
              <SocialIcon 
                href="https://twitter.com/viyatclub" 
                icon={<FaTwitter />} 
                label="Twitter"
              />
              <SocialIcon 
                href="https://linkedin.com/company/viyatclub" 
                icon={<FaLinkedin />} 
                label="LinkedIn"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Explore</h3>
            <ul className="space-y-3">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/accommodation" text="Accommodation" />
              <FooterLink to="/weddings" text="Weddings" />
              <FooterLink to="/events" text="Events" />
              <FooterLink to="/gallery" text="Gallery" />
              <FooterLink to="/membership" text="Membership" />
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-4">
              <ContactInfo 
                icon={<FaMapMarkerAlt className="text-viyat-gold" />} 
                text="Sector Omega I, Greater Noida, Uttar Pradesh 201310"
              />
              <ContactInfo 
                icon={<FaPhone className="text-viyat-gold" />} 
                text="+91 98765 43210"
              />
              <ContactInfo 
                icon={<FaEnvelope className="text-viyat-gold" />} 
                text="info@viyatclub.com"
              />
              <ContactInfo 
                icon={<FaClock className="text-viyat-gold" />} 
                text="Open daily: 6:00 AM - 11:00 PM"
              />
            </address>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Viyat Club. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <FooterLink to="/privacy" text="Privacy Policy" small />
            <FooterLink to="/terms" text="Terms of Service" small />
            <FooterLink to="/sitemap" text="Sitemap" small />
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <a 
    href={href} 
    className="text-gray-300 hover:text-viyat-gold transition-colors" 
    aria-label={label}
    target="_blank" 
    rel="noopener noreferrer"
  >
    {icon}
  </a>
)

const FooterLink = ({ to, text, small = false }: { to: string, text: string, small?: boolean }) => (
  <li>
    <Link 
      to={to} 
      className={`${small ? 'text-gray-400' : 'text-gray-300'} hover:text-viyat-gold transition-colors`}
    >
      {text}
    </Link>
  </li>
)

const ContactInfo = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-start gap-4">
    <span className="mt-1">{icon}</span>
    <span>{text}</span>
  </div>
)

export default Footer