import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  align = 'center', 
  className = '',
  light = false
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const textColor = light ? 'text-white' : 'text-viyat-navy';
  const subtitleColor = light ? 'text-gray-200' : 'text-gray-600';

  return (
    <div className={`${alignmentClasses[align]} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-3xl mx-auto ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;