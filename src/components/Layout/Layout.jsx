import React, { Suspense, useEffect } from 'react'
import PropTypes from 'prop-types'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

// Lazy load content components
const Hero = React.lazy(() => import('../Hero'))
const Programs = React.lazy(() => import('../Programs'))
const Impact = React.lazy(() => import('../Impact'))
const Newsletter = React.lazy(() => import('../Newsletter'))
const About = React.lazy(() => import('../About'))
const Contact = React.lazy(() => import('../Contact'))

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Prefetch components
    const prefetchComponents = async () => {
      const components = [Hero, Programs, Impact, Newsletter, About, Contact]
      await Promise.all(components.map(comp => typeof comp.preload === 'function' ? comp.preload() : Promise.resolve()))
    }
    prefetchComponents()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 origin-left z-50"
        style={{ scaleX }}
      />
      
      <header className="fixed w-full z-40 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent pointer-events-none" />
        <Navbar />
      </header>

      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Hero />
            <div className="relative space-y-24">
              <About />
              <Programs />
              <Impact />
              <Contact />
              <Newsletter />
              {children}
            </div>
          </motion.div>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout 