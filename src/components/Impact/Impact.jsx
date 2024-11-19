import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Icon } from '../common';

const Impact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stats = [
    {
      number: "10,000+",
      label: "Lives Impacted",
      icon: "heart",
      description: "People directly benefiting from our programs"
    },
    {
      number: "500+",
      label: "Youth Leaders",
      icon: "users",
      description: "Trained and empowered young leaders"
    },
    {
      number: "100+",
      label: "Community Partners",
      icon: "handshake",
      description: "Organizations working together for change"
    },
    {
      number: "25+",
      label: "Years of Service",
      icon: "calendar",
      description: "Dedicated to community development"
    }
  ];

  return (
    <section ref={ref} className="relative py-24" id="impact">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-blue-600">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90" />
        <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Making a measurable difference in communities across the nation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <ImpactStat key={index} {...stat} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 
                     rounded-lg font-semibold hover:bg-blue-50 transition-colors
                     shadow-lg hover:shadow-xl"
          >
            Join Our Mission
            <Icon name="arrow-right" className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ImpactStat = ({ number, label, icon, description }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="stat-card group"
    >
      <div className="mb-4 p-3 bg-white/10 rounded-full 
                    group-hover:bg-white/20 transition-colors">
        <Icon name={icon} className="w-8 h-8 text-white" />
      </div>
      
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="text-4xl font-bold text-white mb-2"
      >
        {number}
      </motion.div>
      
      <div className="text-lg font-semibold text-blue-100 mb-2">
        {label}
      </div>
      
      <div className="text-sm text-blue-200 opacity-80">
        {description}
      </div>
    </motion.div>
  );
};

export default Impact; 