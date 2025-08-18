// src/types/components.d.ts
import { ReactNode } from 'react';

declare module '@components/*'

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
  overlay?: boolean;
}

interface GalleryItem {
  image: string
  alt: string
  caption?: string
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}