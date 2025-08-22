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

// RSVP Types
export interface RSVPData {
  eventId: number;
  name: string;
  email: string;
  phone: string;
  attendees: number;
  dietaryPreferences?: string;
  message?: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  category: string;
  rsvpCount?: number;
  capacity?: number;
}

// Event Details Types
export interface EventDetails {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  category: string;
  capacity: number;
  location: string;
  dressCode?: string;
  price?: string;
  included?: string[];
  additionalInfo?: string;
  contactPerson?: string;
  contactEmail?: string;
  contactPhone?: string;
}

// Venue Enquiry Types
export interface VenueEnquiryData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  estimatedGuests: number;
  message: string;
}

export interface FloorPlan {
  id: number;
  name: string;
  capacity: string;
  area: string;
  image: string;
  description: string;
  features: string[];
}