import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Hero = ({ onDonate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Empowering Communities
            <span className="block text-blue-200">Building Futures</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Join us in creating lasting change through education, leadership, and community development.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onDonate}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Make a Difference Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  onDonate: PropTypes.func
};

Hero.defaultProps = {
  onDonate: () => {}
};

export default Hero; 