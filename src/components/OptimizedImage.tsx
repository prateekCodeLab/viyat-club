import React from 'react'
import { motion } from 'framer-motion'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
  animate?: boolean
  priority?: boolean
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  animate = true,
  priority = false
}) => {
  const imgElement = (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      {...(priority && { fetchPriority: 'high' })}
    />
  )

  return animate ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {imgElement}
    </motion.div>
  ) : (
    imgElement
  )
}

export default OptimizedImage