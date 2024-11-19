import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  variant = 'default',
  hover = true,
  className = '',
  onClick,
}) => {
  const variants = {
    default: "bg-white shadow-lg",
    outlined: "border border-gray-200",
    elevated: "bg-white shadow-xl",
  };

  const hoverEffects = hover ? 
    "hover:shadow-xl transition-all duration-300 hover:-translate-y-1" : "";

  return (
    <motion.div
      whileHover={hover ? { scale: 1.01 } : {}}
      className={`
        rounded-xl p-6
        ${variants[variant]}
        ${hoverEffects}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'outlined', 'elevated']),
  hover: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
}; 