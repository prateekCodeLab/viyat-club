# Viyat Club Website

A luxury hospitality website for Viyat Club, built with React, TypeScript, Tailwind CSS, and Vite. This project delivers a premium digital experience for club members and guests, showcasing world-class amenities, exclusive membership, events, and more.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Key Pages & Components](#key-pages--components)
- [Development](#development)
- [Pending Tasks](#pending-tasks)
- [Next Steps](#next-steps)
- [License](#license)

---

## Features

- **Modern UI**: Responsive, accessible, and visually stunning design using Tailwind CSS and custom themes.
- **Comprehensive Pages**: Home, About, Accommodation, Membership, Weddings, Events, Dining, Spa & Wellness, Gallery, Contact, and 404.
- **Dynamic Modals**: RSVP, Membership Application, Brochure Request, Venue Enquiry, Contact, and Floor Plans.
- **Interactive Gallery**: Lightbox, category filters, and animated transitions.
- **Event Management**: RSVP flow, event details, and capacity tracking.
- **Newsletter & Forms**: Newsletter subscription and contact forms with simulated backend.
- **Testimonials**: Guest and client feedback with option to submit experiences.
- **Accessibility**: Keyboard navigation, focus management, and ARIA best practices.
- **Performance**: Code splitting, lazy loading, and optimized assets.
- **Error Handling**: Global error boundary for graceful error recovery.

---

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS 3, custom themes, framer-motion for animations
- **Routing**: React Router v7
- **Icons**: react-icons
- **Notifications**: react-hot-toast
- **Utilities**: Custom hooks, helpers, and utility functions

---

## Project Structure
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

## Key Pages & Components

### Pages

- **Home**: Hero, amenities, club experience, testimonials, CTAs.
- **About**: Club history, milestones, distinctions, sustainability.
- **Accommodation**: Room types, packages, booking modal.
- **Membership**: Tiered plans, amenities, benefits, application modal.
- **Weddings**: Packages, venues, services, brochure/contact modals.
- **Events**: Upcoming events, RSVP, event details, venue enquiry, floor plans.
- **Dining**: Restaurants, features, private dining, reservation CTA.
- **Spa & Wellness**: Treatments, facilities, wellness programs.
- **Gallery**: Category grid, image gallery with lightbox.
- **Contact**: Contact form, club info, hours, location.
- **404**: Custom not found page.

### Components

- **Layout**: Header, Footer, ErrorBoundary, Toaster.
- **Header/Footer**: Navigation, social links, quick links, newsletter.
- **Modals**: RSVPModal, MembershipModal, BrochureModal, VenueEnquiryModal, ContactModal, FloorPlansModal.
- **UI**: CTAButton, SectionHeader, PageHeader, GalleryGrid, ImageGallery, Testimonials, LoadingSpinner, OptimizedImage, ScrollToTop.

### Utilities

- **helpers.ts**: Currency formatting, date formatting, RSVP and enquiry submission (simulated).
- **useScrollDirection**: Custom hook for scroll-based UI effects.

---

## Development

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Install Dependencies

```sh
npm install
```

- **Start Dev Server:**  
  ```sh
  npm run dev
  ```

- **Build for Production:**  
  ```sh
  npm run build
  ```

- **Preview Production Build:**  
  ```sh
  npm run preview
  ```

- **Linting & Formatting:**  
  ```sh
  npm run lint
  npm run format
  ```

---

## Pending Tasks

- **Backend Integration**
  - Connect forms (contact, RSVP, membership, newsletter) to a real backend or email service.

- **Content Finalization**
  - Replace placeholder images and text with final content
  - Add more real testimonials and gallery images

- **SEO & Analytics**
  - Add meta tags, Open Graph data, and analytics tracking.
  - Optimize images and assets for faster loading

- **Testing**
  - Add unit and integration tests for components and pages
  - Manual QA on multiple devices and browsers

- **Accessibility Audit**
  - Further improve ARIA, keyboard navigation, and color contrast.

- **Performance Optimization**
  - Further optimize images and assets.

- **Deployment**
  - Set up CI/CD and deploy to production hosting.

---

## Next Steps

1. **Backend/API Integration**
   - Set up endpoints for contact, brochure, and newsletter forms
   - Store and display user-submitted testimonials
   - Integrate backend APIs for form submissions and dynamic content

2. **Content & Visual Polish**
   - Gather and upload final images, copy, and branding assets
   - Refine UI details and microinteractions
   - Finalize content and upload all official images, copy, and branding

3. **Testing & QA**
   - Write and run tests for critical components
   - Conduct accessibility and performance audits
   - Add tests and perform manual QA across devices and browsers.

4. **SEO & Analytics**
   - Add SEO enhancements and analytics tracking
   - Enhance SEO and add analytics.

5. **Go Live**
   - Prepare production build
   - Deploy to a production environment (Vercel, Netlify, or custom server).

---

## License
This project is for internal use by Viyat Club. All rights reserved.
Made with ❤️ by the prateekCodeLab