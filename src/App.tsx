import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'
import ScrollToTop from '@components/ScrollToTop';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Accommodation = lazy(() => import('./pages/Accommodation'))
const Membership = lazy(() => import('./pages/Membership'))
const Weddings = lazy(() => import('./pages/Weddings'))
const Events = lazy(() => import('./pages/Events'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))
const Dining = lazy(() => import('./pages/Dining'))
const SpaWellness = lazy(() => import('./pages/SpaWellness'))
const NotFound = lazy(() => import('./pages/NotFound'))

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner fullScreen />}>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/accommodation" element={<Layout><Accommodation /></Layout>} />
          <Route path="/membership" element={<Layout><Membership /></Layout>} />
          <Route path="/weddings" element={<Layout><Weddings /></Layout>} />
          <Route path="/events" element={<Layout><Events /></Layout>} />
          <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/dining" element={<Layout><Dining /></Layout>} />
          <Route path="/spa-wellness" element={<Layout><SpaWellness /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App