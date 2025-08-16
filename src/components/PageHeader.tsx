import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { FiHome, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: boolean;
  backgroundImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs = true,
  backgroundImage,
  overlay = true,
  overlayOpacity = 0.4,
}) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="relative">
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          {overlay && (
            <div
              className="absolute inset-0"
              style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
            />
          )}
        </div>
      )}

      <div className={`relative ${backgroundImage ? 'py-28' : 'py-20'} px-4`}>
        <div className="container mx-auto">
          {breadcrumbs && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center text-sm mb-6"
            >
              <Link 
                to="/" 
                className={`flex items-center ${backgroundImage ? 'text-gray-300 hover:text-viyat-gold' : 'text-gray-600 hover:text-viyat-navy'}`}
              >
                <FiHome className="mr-2" />
                Home
              </Link>
              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return (
                  <React.Fragment key={name}>
                    <FiChevronRight className={`mx-2 ${backgroundImage ? 'text-gray-400' : 'text-gray-500'}`} />
                    {isLast ? (
                      <span className={`font-medium ${backgroundImage ? 'text-viyat-gold' : 'text-viyat-navy'}`}>
                        {name.replace(/-/g, ' ')}
                      </span>
                    ) : (
                      <Link
                        to={routeTo}
                        className={`${backgroundImage ? 'text-gray-300 hover:text-viyat-gold' : 'text-gray-600 hover:text-viyat-navy'}`}
                      >
                        {name.replace(/-/g, ' ')}
                      </Link>
                    )}
                  </React.Fragment>
                );
              })}
            </motion.div>
          )}

          <motion.h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight ${backgroundImage ? 'text-white' : 'text-viyat-navy'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              className={`text-xl md:text-2xl ${backgroundImage ? 'text-gray-200' : 'text-gray-600'} max-w-3xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;