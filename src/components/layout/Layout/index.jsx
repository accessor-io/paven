import React, { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import PropTypes from 'prop-types'

// Lazy load components for better performance
const Navbar = lazy(() => import('../Navbar'))
const Footer = lazy(() => import('../Footer'))
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'))
const LoadingFallback = lazy(() => import('../../common/loading/LoadingPage'))
const ErrorFallback = lazy(() => import('../../common/ErrorBoundary'))

const Layout = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
        <Suspense fallback={<LoadingFallback />}>
          <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <Navbar />
          </header>

          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-7xl mx-auto">
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Suspense fallback={<LoadingFallback />}>
                  {children}
                </Suspense>
              </ErrorBoundary>
            </div>
          </main>

          <Footer />
          <ScrollToTop />
        </Suspense>
      </div>
    </ErrorBoundary>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout 