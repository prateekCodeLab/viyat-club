// src/components/EventDetailsModal.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaUserTie,
  FaEnvelope,
  FaPhone,
  FaInfoCircle
} from 'react-icons/fa';
import CTAButton from './CTAButton';

interface EventDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    id: number;
    title: string;
    date: string;
    time: string;
    description: string;
    image: string;
    category: string;
    capacity: number;
    location?: string;
    dressCode?: string;
    price?: string;
    included?: string[];
    additionalInfo?: string;
    contactPerson?: string;
    contactEmail?: string;
    contactPhone?: string;
  };
  onRSVP: () => void;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({ isOpen, onClose, event, onRSVP }) => {
  const defaultLocation = "Viyat Club Main Ballroom, Mumbai";
  const defaultContactPerson = "Event Manager";
  const defaultContactEmail = "events@viyatclub.com";
  const defaultContactPhone = "+91 98765 43210";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="h-64 md:h-80 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-viyat-gold text-white px-3 py-1 text-sm font-bold rounded-full">
                  {event.category}
                </div>
              </div>

              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white text-gray-600 hover:text-gray-800 rounded-full p-2 shadow-md transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold text-viyat-navy mb-4">
                {event.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <FaCalendarAlt className="text-viyat-gold mr-3 text-lg" />
                    <span className="font-medium">{event.date}</span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <FaClock className="text-viyat-gold mr-3 text-lg" />
                    <span className="font-medium">{event.time}</span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="text-viyat-gold mr-3 text-lg" />
                    <span className="font-medium">{event.location || defaultLocation}</span>
                  </div>

                  {event.dressCode && (
                    <div className="flex items-center text-gray-700">
                      <FaUserTie className="text-viyat-gold mr-3 text-lg" />
                      <span className="font-medium">Dress Code: {event.dressCode}</span>
                    </div>
                  )}

                  {event.price && (
                    <div className="flex items-center text-gray-700">
                      <FaMoneyBillWave className="text-viyat-gold mr-3 text-lg" />
                      <span className="font-medium">{event.price}</span>
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-viyat-navy mb-3 flex items-center">
                    <FaInfoCircle className="text-viyat-gold mr-2" />
                    Event Contact
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <span className="font-medium">{event.contactPerson || defaultContactPerson}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaEnvelope className="text-viyat-gold mr-2" />
                      <span>{event.contactEmail || defaultContactEmail}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaPhone className="text-viyat-gold mr-2" />
                      <span>{event.contactPhone || defaultContactPhone}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-viyat-navy mb-3">Event Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {event.included && event.included.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-viyat-navy mb-3">What's Included</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {event.included.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-viyat-gold rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {event.additionalInfo && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-viyat-navy mb-3">Additional Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {event.additionalInfo}
                  </p>
                </div>
              )}

              <div className="flex gap-4 pt-4">
                <CTAButton
                  type="button"
                  text="Close"
                  variant="outline"
                  size="full"
                  onClick={onClose}
                />
                <CTAButton
                  type="button"
                  text="RSVP Now"
                  variant="primary"
                  size="full"
                  onClick={() => {
                    onClose();
                    onRSVP();
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventDetailsModal;