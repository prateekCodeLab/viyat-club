import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '@components/CTAButton';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-9xl font-bold text-viyat-navy mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-gray-500 mb-8">You may have mistyped the address or the page may have moved.</p>
        <Link to="/">
          <CTAButton 
            text="Return to Homepage" 
            variant="primary"
            size="lg"
            className="mx-auto"
          />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;