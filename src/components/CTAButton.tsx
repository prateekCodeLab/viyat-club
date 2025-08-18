import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import LoadingSpinner from './LoadingSpinner'

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'gold-outline'
type ButtonType = 'button' | 'submit' | 'reset'

interface CTAButtonProps {
  text: string
  href?: string
  to?: string
  onClick?: () => void
  size?: ButtonSize
  variant?: ButtonVariant
  className?: string
  disabled?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  type?: ButtonType
  newTab?: boolean
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
  }

  const variantClasses = {
    primary: 'bg-viyat-gold text-viyat-navy hover:bg-viyat-gold/90 focus:ring-2 focus:ring-viyat-gold focus:ring-offset-2',
    secondary: 'bg-viyat-navy text-white hover:bg-viyat-navy/90 focus:ring-2 focus:ring-viyat-navy focus:ring-offset-2',
    outline: 'bg-transparent border-2 border-viyat-navy text-viyat-navy hover:bg-viyat-navy/10 focus:ring-2 focus:ring-viyat-navy focus:ring-offset-2',
    'gold-outline': 'bg-transparent border-2 border-viyat-gold text-viyat-gold hover:bg-viyat-gold/10 focus:ring-2 focus:ring-viyat-gold focus:ring-offset-2',
    ghost: 'bg-transparent text-viyat-navy hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2',
  }

  const baseClasses = `inline-flex items-center justify-center font-display font-semibold rounded-lg transition-all duration-200 ease-in-out whitespace-nowrap ${
    sizeClasses[size]
  } ${
    variantClasses[variant]
  } ${
    (disabled || loading) ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''
  } ${
    className
  }`

  const content = (
    <>
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-3">{icon}</span>
      )}
      {loading ? (
        <>
          <span className="opacity-0">{text}</span>
          <span className="absolute inset-0 flex items-center justify-center">
            <LoadingSpinner fullScreen={false} size="sm" />
          </span>
        </>
      ) : (
        <span>{text}</span>
      )}
      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-3">{icon}</span>
      )}
    </>
  )

  if ((disabled || loading) && (href || to)) {
    return (
      <span className={`${baseClasses} relative`} aria-disabled="true">
        {content}
      </span>
    )
  }

  if (to) {
    return (
      <motion.div
        whileHover={!disabled && !loading ? { scale: 1.03 } : {}}
        whileTap={!disabled && !loading ? { scale: 0.97 } : {}}
        className="inline-block"
      >
        <Link
          to={to}
          className={`${baseClasses} relative`}
          onClick={onClick}
          aria-disabled={disabled || loading}
          target={newTab ? '_blank' : '_self'}
          rel={newTab ? 'noopener noreferrer' : undefined}
        >
          {content}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseClasses} relative`}
        whileHover={!disabled && !loading ? { scale: 1.03 } : {}}
        whileTap={!disabled && !loading ? { scale: 0.97 } : {}}
        onClick={onClick}
        aria-disabled={disabled || loading}
        target={newTab ? '_blank' : '_self'}
        rel={newTab ? 'noopener noreferrer' : undefined}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={`${baseClasses} relative`}
      whileHover={!disabled && !loading ? { scale: 1.03 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.97 } : {}}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {content}
    </motion.button>
  )
}

export default CTAButton