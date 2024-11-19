import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const LoadingSkeleton = ({
  variant = 'rectangle',
  width = 'full',
  height = 'md',
  animate = true,
  className = ''
}) => {
  const heights = {
    xs: 'h-2',
    sm: 'h-4',
    md: 'h-8',
    lg: 'h-16',
    xl: 'h-24',
    '2xl': 'h-32',
    full: 'h-full'
  };

  const widths = {
    xs: 'w-16',
    sm: 'w-24',
    md: 'w-32',
    lg: 'w-48',
    xl: 'w-64',
    '2xl': 'w-96',
    full: 'w-full'
  };

  const variants = {
    rectangle: 'rounded-md',
    circle: 'rounded-full',
    text: 'rounded'
  };

  const shimmerAnimation = {
    hidden: {
      backgroundPosition: '-200% 0'
    },
    visible: {
      backgroundPosition: '200% 0'
    }
  };

  return (
    <motion.div
      initial={animate ? "hidden" : false}
      animate={animate ? "visible" : false}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "linear"
      }}
      variants={shimmerAnimation}
      className={`
        ${heights[height]}
        ${widths[width]}
        ${variants[variant]}
        bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200
        bg-[length:200%_100%]
        ${className}
      `}
    />
  );
};

LoadingSkeleton.propTypes = {
  variant: PropTypes.oneOf(['rectangle', 'circle', 'text']),
  width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full']),
  height: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full']),
  animate: PropTypes.bool,
  className: PropTypes.string
};

export default LoadingSkeleton; 