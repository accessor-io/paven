import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact', href: '#impact' }
  ]

  const moreLinks = [
    { name: 'Blog', href: '/blog', description: 'Latest updates and stories' },
    { name: 'Resources', href: '/resources', description: 'Tools and materials' },
    { name: 'Events', href: '/events', description: 'Upcoming activities' },
    { name: 'Careers', href: '/careers', description: 'Join our team' },
    { name: 'Partners', href: '/partners', description: 'Our collaborators' },
    { name: 'Contact', href: '#contact', description: 'Get in touch' }
  ]

  return (
    <nav 
      className={`w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-r from-blue-900/80 via-red-900/80 to-blue-900/80'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-red-600 rounded-lg blur group-hover:blur-md transition-all duration-300" />
              <span className={`relative text-2xl font-bold font-americana ${
                isScrolled ? 'text-blue-900' : 'text-white'
              }`}>
                PAVEN
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm font-bold transition-colors ${
                  isScrolled 
                    ? 'text-blue-900 hover:text-red-600' 
                    : 'text-white hover:text-red-200'
                }`}
              >
                {link.name}
              </motion.a>
            ))}

            {/* More Menu */}
            <div className="relative">
              <motion.button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm font-medium transition-colors flex items-center space-x-1 ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                <span>More</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isMoreMenuOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>

              <AnimatePresence>
                {isMoreMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-72 rounded-xl bg-white shadow-xl dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                  >
                    <div className="p-4 grid gap-4">
                      {moreLinks.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-start rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => setIsMoreMenuOpen(false)}
                        >
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 
                       transition-colors shadow-lg hover:shadow-xl font-bold"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative z-50 w-10 h-10 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
                className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                  isScrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'
                }`}
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                  isScrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'
                }`}
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
                className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                  isScrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'
                }`}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white dark:bg-gray-900"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ x: 10 }}
                    className="block px-4 py-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                {/* Mobile More Menu Items */}
                <div className="pt-2 pb-3 border-t border-gray-200 dark:border-gray-700">
                  {moreLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <p className="text-gray-900 dark:text-white">{item.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                    </a>
                  ))}
                </div>

                <div className="px-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary w-full"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar 