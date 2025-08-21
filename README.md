# Viyat Club Website

A modern, luxury hospitality website for Viyat Club, built with React, TypeScript, Tailwind CSS, and Vite.

---

## Project Overview

This project aims to deliver a premium web experience for Viyat Club, showcasing its world-class amenities, exclusive membership, event offerings, and more. The site is designed to be visually stunning, mobile-friendly, and easy to navigate, reflecting the club's brand values of sophistication and excellence.

---

## Folder Structure
Viyat-Club/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── assets/            # Images, icons, etc.
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── index.html             # Main HTML entry point
---

## Work Completed So Far

- **Project Setup**
  - Vite + React + TypeScript configured
  - Tailwind CSS, PostCSS, and autoprefixer integrated
  - ESLint and TypeScript strictness enabled
  - Aliases set up for cleaner imports

- **Core Pages & Routing**
  - Home, About, Accommodation, Membership, Weddings, Events, Gallery, Contact, and 404 Not Found pages implemented
  - Routing with React Router

- **UI Components**
  - Reusable components: Header, Footer, Layout, SectionHeader, PageHeader, CTAButton, NewsletterForm, ErrorBoundary, LoadingSpinner, GalleryGrid, ImageGallery, Testimonials, BrochureModal, ContactModal
  - Responsive design and accessibility best practices

- **Content & Features**
  - Hero sections with dynamic backgrounds and CTAs
  - Amenities, packages, and highlights for Accommodation
  - Wedding packages, venues, and services
  - Corporate event services and testimonials
  - Gallery with category filtering and image modal
  - Newsletter subscription form (UI only)
  - Downloadable brochure link in Footer

- **Styling**
  - Custom color palette and fonts
  - Animations and transitions for interactive elements
  - Consistent use of Tailwind utility classes

---

## Pending Tasks

- **Backend Integration**
  - Connect forms (Contact, Brochure, Newsletter) to backend/email service
  - Implement real API calls for feedback/testimonials

- **Content Finalization**
  - Replace placeholder images and text with final content
  - Add more real testimonials and gallery images

- **SEO & Performance**
  - Add meta tags and Open Graph data
  - Optimize images and assets for faster loading

- **Testing**
  - Add unit and integration tests for components and pages
  - Manual QA on multiple devices and browsers

- **Accessibility**
  - Full accessibility audit and improvements (ARIA, keyboard navigation, etc.)

- **Deployment**
  - Set up production build and deployment pipeline

---

## Next Steps

1. **Backend/API Integration**
   - Set up endpoints for contact, brochure, and newsletter forms
   - Store and display user-submitted testimonials

2. **Content & Visual Polish**
   - Gather and upload final images, copy, and branding assets
   - Refine UI details and microinteractions

3. **Testing & QA**
   - Write and run tests for critical components
   - Conduct accessibility and performance audits

4. **SEO & Analytics**
   - Add SEO enhancements and analytics tracking

5. **Go Live**
   - Prepare production build
   - Deploy to hosting (e.g., Vercel, Netlify, or custom server)

---

## Development

- **Start Dev Server:**  
  ```sh
  npm run dev

**Contributing**
Pull requests and suggestions are welcome! Please open an issue to discuss any major changes.

**License**
This project is for internal use by Viyat Club. All rights reserved.