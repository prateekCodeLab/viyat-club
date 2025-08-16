declare module '@components/*'

interface HeroProps {
  title: string
  subtitle: string
  image: string
}

interface GalleryItem {
  image: string
  alt: string
  caption?: string
}

interface Testimonial {
  quote: string
  author: string
  role: string
}