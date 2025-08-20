import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import CTAButton from './CTAButton';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageTitle: string;
  packageId: number;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, packageTitle, packageId }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success(`Brochure for ${packageTitle} requested successfully! We'll email it to you shortly.`);
      setFormData({ name: '', email: '', phone: '', message: '' });
      onClose();
    } catch (error) {
      toast.error('Failed to request brochure. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
            className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <FaDownload className="text-viyat-gold text-xl mr-3" />
                  <h2 className="text-2xl font-bold text-viyat-navy">
                    Request Brochure
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              <p className="text-gray-600 mb-6">
                Request the brochure for <span className="font-semibold text-viyat-gold">{packageTitle}</span>. 
                We'll send it to your email address.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viyat-gold focus:border-transparent"
                    placeholder="Any specific requirements or questions?"
                  />
                </div>

                <input type="hidden" name="packageId" value={packageId} />
                <input type="hidden" name="packageTitle" value={packageTitle} />

                <div className="flex gap-4 pt-4">
                  <CTAButton
                    type="button"
                    text="Cancel"
                    variant="outline"
                    size="full"
                    onClick={onClose}
                    disabled={isSubmitting}
                  />
                  <CTAButton
                    type="submit"
                    text={isSubmitting ? 'Requesting...' : 'Request Brochure'}
                    variant="primary"
                    size="full"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    icon={<FaDownload />}
                  />
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrochureModal;