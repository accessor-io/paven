import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Icon } from '../common';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useClickOutside } from '../../hooks/useClickOutside';
import throttle from 'lodash/throttle';

const Navbar = ({ onDonate, onContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 20);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useClickOutside(mobileMenuRef, () => setIsMobileMenuOpen(false));

  useEffect(() => {
    if (isMobileMenuOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isMobileMenuOpen]);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg dark:bg-gray-900/90' 
          : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            aria-label="PAVEN Home"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img 
                src="/logo.svg" 
                alt=""
                className="h-10 w-auto filter drop-shadow-lg"
                initial={{ rotate: 0 }}
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.span 
              className={`font-bold text-xl transition-colors
                ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}
                group-hover:text-blue-500`}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              PAVEN
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks isScrolled={isScrolled} />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onContact}
              className={`btn-nav ${
                isScrolled 
                  ? 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Contact
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onDonate}
              className="btn-primary"
            >
              Donate
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <div className="space-y-1.5">
              {[0, 1, 2].map((index) => (
                <motion.span
                  key={index}
                  className={`block w-6 h-0.5 transition-all transform
                    ${isScrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'}
                    ${isMobileMenuOpen && index === 0 ? 'rotate-45 translate-y-2' : ''}
                    ${isMobileMenuOpen && index === 1 ? 'opacity-0' : ''}
                    ${isMobileMenuOpen && index === 2 ? '-rotate-45 -translate-y-2' : ''}`}
                />
              ))}
            </div>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: 'auto',
              transition: { type: "spring", stiffness: 300, damping: 30 }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: { duration: 0.2 }
            }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <MobileNavLink href="#programs">Programs</MobileNavLink>
              <MobileNavLink href="#impact">Impact</MobileNavLink>
              <MobileNavLink href="#team">Team</MobileNavLink>
              <MobileNavLink href="#about">About</MobileNavLink>
              <div className="pt-4 space-y-3">
                <button
                  onClick={onContact}
                  className="w-full text-left px-4 py-2 text-blue-600 
                    hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Contact
                </button>
                <button
                  onClick={onDonate}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg 
                    hover:bg-blue-700 transition-colors"
                >
                  Donate
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavLink = ({ href, children, isScrolled }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05 }}
    className={`transition-colors relative group ${
      isScrolled 
        ? 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400' 
        : 'text-white hover:text-blue-200'
    }`}
  >
    {children}
    <motion.span 
      className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-left"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.2 }}
    />
  </motion.a>
);

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
  >
    {children}
  </a>
);

export default Navbar; 