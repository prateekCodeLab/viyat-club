// src/components/FloorPlansModal.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaArrowLeft, FaArrowRight, FaExpand, FaCompress, FaRuler, FaUsers } from 'react-icons/fa';

interface FloorPlansModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FloorPlansModal: React.FC<FloorPlansModalProps> = ({ isOpen, onClose }) => {
  const [currentPlanIndex, setCurrentPlanIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const floorPlans = [
    {
      id: 1,
      name: "Grand Ballroom",
      capacity: "Up to 300 guests",
      area: "450 sqm",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2098&q=80",
      description: "Our largest and most elegant venue, perfect for grand weddings and major corporate events.",
      features: ["Stage with professional lighting", "Dance floor", "Built-in audio system", "Projector screen", "Separate green room"]
    },
    {
      id: 2,
      name: "Garden Pavilion",
      capacity: "Up to 150 guests",
      area: "280 sqm",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      description: "A beautiful outdoor venue with glass walls that can be opened for al fresco events.",
      features: ["Panoramic garden views", "Retractable glass walls", "Outdoor terrace", "Weather-proof design", "Natural lighting"]
    },
    {
      id: 3,
      name: "Executive Boardroom",
      capacity: "Up to 40 guests",
      area: "120 sqm",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      description: "Perfect for corporate meetings, presentations, and intimate gatherings.",
      features: ["Conference table", "High-speed WiFi", "Video conferencing", "Catering kitchen access", "Private restrooms"]
    },
    {
      id: 4,
      name: "Poolside Terrace",
      capacity: "Up to 100 guests",
      area: "200 sqm",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      description: "A stunning outdoor venue overlooking our resort-style swimming pool.",
      features: ["Pool access", "Outdoor bar", "Lounge seating", "Dance area", "Weather canopy"]
    }
  ];

  const currentPlan = floorPlans[currentPlanIndex];

  const nextPlan = () => {
    setCurrentPlanIndex((prev) => (prev + 1) % floorPlans.length);
  };

  const prevPlan = () => {
    setCurrentPlanIndex((prev) => (prev - 1 + floorPlans.length) % floorPlans.length);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 ${
            isFullscreen ? 'bg-black' : 'bg-black bg-opacity-90'
          }`}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`bg-white rounded-2xl shadow-xl ${
              isFullscreen 
                ? 'w-full h-full max-h-full rounded-none' 
                : 'max-w-6xl w-full max-h-[90vh]'
            } overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between p-6 bg-viyat-navy text-white">
                <h2 className="text-2xl font-bold">Venue Floor Plans</h2>
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 hover:bg-white/10 rounded-md transition-colors"
                  >
                    {isFullscreen ? <FaCompress /> : <FaExpand />}
                  </button>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-md transition-colors"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-2/3 relative">
                  <img
                    src={currentPlan.image}
                    alt={currentPlan.name}
                    className="w-full h-64 md:h-96 lg:h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevPlan}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={nextPlan}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <FaArrowRight />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm">
                    {currentPlanIndex + 1} / {floorPlans.length}
                  </div>
                </div>

                {/* Details */}
                <div className="lg:w-1/3 p-6 overflow-y-auto">
                  <h3 className="text-2xl font-bold text-viyat-navy mb-4">
                    {currentPlan.name}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <FaUsers className="text-viyat-gold mr-3" />
                      <span className="font-medium">{currentPlan.capacity}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaRuler className="text-viyat-gold mr-3" />
                      <span className="font-medium">{currentPlan.area}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {currentPlan.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-viyat-navy mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {currentPlan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-viyat-gold rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Thumbnails */}
                  <div className="mt-6">
                    <h4 className="font-bold text-viyat-navy mb-3">All Venues:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {floorPlans.map((plan, index) => (
                        <button
                          key={plan.id}
                          onClick={() => setCurrentPlanIndex(index)}
                          className={`relative group overflow-hidden rounded-lg ${
                            index === currentPlanIndex ? 'ring-2 ring-viyat-gold' : ''
                          }`}
                        >
                          <img
                            src={plan.image}
                            alt={plan.name}
                            className="w-full h-20 object-cover group-hover:scale-110 transition-transform"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <span className="text-white text-sm font-medium text-center px-1">
                              {plan.name}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloorPlansModal;