import React from 'react'

interface LoadingSpinnerProps {
  fullScreen?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  fullScreen = true, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8 border-2',
    md: 'h-12 w-12 border-t-2 border-b-2',
    lg: 'h-16 w-16 border-t-4 border-b-4'
  }

  return (
    <div className={`flex items-center justify-center ${fullScreen ? 'fixed inset-0 bg-white/80 z-50' : 'py-8'}`}>
      <div 
        className={`animate-spin rounded-full border-viyat-gold ${sizeClasses[size]}`}
        aria-label="Loading"
      />
    </div>
  )
}

export default LoadingSpinner