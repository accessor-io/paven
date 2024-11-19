import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const LoadingBar = ({ 
  progress, 
  color = 'blue',
  height = 'md',
  showPercentage = false 
}) => {
  const heights = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  const colors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    red: 'bg-red-600'
  };

  return (
    <div className="w-full">
      <div className={`w-full ${heights[height]} bg-gray-200 rounded-full overflow-hidden`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
          className={`${heights[height]} ${colors[color]} rounded-full`}
        />
      </div>
      {showPercentage && (
        <p className="text-sm text-gray-600 mt-1 text-right">
          {Math.round(progress)}%
        </p>
      )}
    </div>
  );
};

LoadingBar.propTypes = {
  progress: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['blue', 'green', 'red']),
  height: PropTypes.oneOf(['sm', 'md', 'lg']),
  showPercentage: PropTypes.bool
};

export default LoadingBar; 