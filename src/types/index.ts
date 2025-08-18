// Component Props
export interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumbs?: boolean
  backgroundImage?: string
  overlay?: boolean
  overlayOpacity?: number
}

export interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  light?: boolean
}

export interface CTAButtonProps {
  text: string
  href?: string
  to?: string
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'gold-outline'
  className?: string
  disabled?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  type?: 'button' | 'submit' | 'reset'
  newTab?: boolean
}

// Data Types
export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image: string
}

export interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  description: string
}

export interface RoomType {
  name: string
  description: string
  price: string
  image: string
  amenities: string[]
}