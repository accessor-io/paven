import { motion } from 'framer-motion';
import { Icon } from './Icon';

const QuickActionButton = ({ icon, onClick, label }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex items-center justify-center w-12 h-12 
                 bg-blue-600 text-white rounded-full shadow-lg 
                 hover:bg-blue-700 transition-colors"
      onClick={onClick}
    >
      <Icon name={icon} className="w-6 h-6" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-2 py-1 
                     bg-gray-800 text-white text-sm rounded
                     opacity-0 group-hover:opacity-100 
                     transition-opacity whitespace-nowrap">
        {label}
      </span>
    </motion.button>
  );
}; 