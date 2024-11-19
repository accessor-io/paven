import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const LoadingDots = ({ 
  color = 'blue', 
  size = 'md',
  speed = 'normal',
  className = '' 
}) => {
  const sizes = {
    xs: 'w-1 h-1',
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4'
  };

  const colors = {
    blue: 'bg-blue-600',
    white: 'bg-white',
    gray: 'bg-gray-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    purple: 'bg-purple-600'
  };

  const speeds = {
    slow: 0.8,
    normal: 0.6,
    fast: 0.4
  };

  return (
    <div className={`flex items-center space-x-1.5 ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.4, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [-2, 0, -2]
          }}
          transition={{
            duration: speeds[speed],
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * (speeds[speed] / 3),
            ease: "easeInOut"
          }}
          className={`rounded-full ${sizes[size]} ${colors[color]}`}
        />
      ))}
    </div>
  );
};

LoadingDots.propTypes = {
  color: PropTypes.oneOf(['blue', 'white', 'gray', 'green', 'red', 'purple']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  speed: PropTypes.oneOf(['slow', 'normal', 'fast']),
  className: PropTypes.string
};

export default LoadingDots; 