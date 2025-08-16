import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'gold-outline';
type ButtonType = 'button' | 'submit' | 'reset';

interface CTAButtonProps {
  text: string;
  href?: string;
  to?: string;
  onClick?: () => void;
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: ButtonType;
  newTab?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  href,
  to,
  onClick,
  size = 'md',
  variant = 'primary',
  className = '',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  type = 'button',
  newTab = false,
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
    full: 'w-full py-3 text-base',
  };

  const variantClasses = {
    primary: 'bg-viyat-gold text-viyat-navy hover:bg-viyat-gold/90 focus:ring-2 focus:ring-viyat-gold focus:ring-offset-2',
    secondary: 'bg-viyat-navy text-white hover:bg-viyat-navy/90 focus:ring-2 focus:ring-viyat-navy focus:ring-offset-2',
    outline: 'bg-transparent border-2 border-viyat-navy text-viyat-navy hover:bg-viyat-navy/10 focus:ring-2 focus:ring-viyat-navy focus:ring-offset-2',
    'gold-outline': 'bg-transparent border-2 border-viyat-gold text-viyat-gold hover:bg-viyat-gold/10 focus:ring-2 focus:ring-viyat-gold focus:ring-offset-2',
    ghost: 'bg-transparent text-viyat-navy hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2',
  };

  const disabledClasses = 'opacity-60 cursor-not-allowed pointer-events-none';
  const loadingClasses = 'relative text-transparent';

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className={`mr-3 ${loading ? 'invisible' : ''}`}>
          {icon}
        </span>
      )}
      {loading ? (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full"></span>
        </span>
      ) : (
        <span>{text}</span>
      )}
      {icon && iconPosition === 'right' && (
        <span className={`ml-3 ${loading ? 'invisible' : ''}`}>
          {icon}
        </span>
      )}
    </>
  );

  const baseClasses = `
    inline-flex items-center justify-center font-display font-semibold rounded-lg
    transition-all duration-200 ease-in-out whitespace-nowrap
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled || loading ? disabledClasses : ''}
    ${loading ? loadingClasses : ''}
    ${className}
  `;

  if ((disabled || loading) && (href || to)) {
    return (
      <span className={baseClasses} aria-disabled="true">
        {content}
      </span>
    );
  }

  if (to) {
    return (
      <motion.div
        whileHover={!disabled && !loading ? { scale: 1.03 } : {}}
        whileTap={!disabled && !loading ? { scale: 0.97 } : {}}
      >
        <Link
          to={to}
          className={baseClasses}
          onClick={onClick}
          aria-disabled={disabled || loading}
          target={newTab ? '_blank' : '_self'}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={newTab ? '_blank' : '_self'}
        rel={newTab ? 'noopener noreferrer' : undefined}
        whileHover={!disabled && !loading ? { scale: 1.03 } : {}}
        whileTap={!disabled && !loading ? { scale: 0.97 } : {}}
        className={baseClasses}
        onClick={onClick}
        aria-disabled={disabled || loading}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={!disabled && !loading ? { scale: 1.03 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.97 } : {}}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {content}
    </motion.button>
  );
};

export default CTAButton;