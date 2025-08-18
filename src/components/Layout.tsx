import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'
import { Toaster } from 'react-hot-toast'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  )
}

export default Layout