import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = ({ onNewsletter, onContact }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="space-y-4">
            <img src="/logo.svg" alt="Logo" className="h-10" />
            <p className="text-gray-400">
              Empowering communities through education, leadership, and sustainable development.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon="facebook" />
              <SocialLink href="#" icon="twitter" />
              <SocialLink href="#" icon="instagram" />
              <SocialLink href="#" icon="linkedin" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#programs">Our Programs</FooterLink>
              <FooterLink href="#impact">Our Impact</FooterLink>
              <FooterLink href="#team">Our Team</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <FooterLink href="#volunteer">Volunteer</FooterLink>
              <FooterLink href="#donate">Donate</FooterLink>
              <FooterLink href="#partner">Partner With Us</FooterLink>
              <FooterLink href="#careers">Careers</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and news.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNewsletter}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg
                       hover:bg-blue-700 transition-colors"
            >
              Subscribe Now
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} PAVEN. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <button
              onClick={onContact}
              className="text-gray-400 hover:text-white text-sm"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
             hover:bg-blue-600 transition-colors"
  >
    <Icon name={icon} className="w-5 h-5" />
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
    >
      {children}
    </a>
  </li>
); 