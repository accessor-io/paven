import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '../common';

const Programs = () => {
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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50" id="programs">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Impact Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming communities through innovative programs and sustainable solutions.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <ProgramCard
            title="Legion of Leaders"
            description="Empowering youth through leadership development and community service."
            icon="users"
            stats={{ participants: 500, hours: 2000 }}
            color="blue"
          />
          <ProgramCard
            title="Community Development"
            description="Building stronger communities through education and resources."
            icon="building"
            stats={{ families: 200, projects: 45 }}
            color="green"
          />
          <ProgramCard
            title="Youth Mentorship"
            description="Guiding the next generation to success through mentorship."
            icon="star"
            stats={{ mentors: 100, mentees: 300 }}
            color="purple"
          />
        </motion.div>
      </div>
    </section>
  );
};

const ProgramCard = ({ title, description, icon, stats, color }) => {
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500'
  };

  return (
    <motion.div variants={itemVariants}>
      <Card 
        className="h-full flex flex-col hover:translate-y-[-8px] transition-transform duration-300"
        hover={false}
      >
        <div className={`w-12 h-12 ${colors[color]} rounded-lg flex items-center justify-center mb-6`}>
          <Icon name={icon} className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 flex-grow">
          {description}
        </p>

        <div className="border-t pt-4 mt-auto">
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(stats).map(([key, value]) => (
              <div key={key}>
                <div className="text-2xl font-bold text-gray-900">
                  {value}+
                </div>
                <div className="text-sm text-gray-500 capitalize">
                  {key}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Programs; 