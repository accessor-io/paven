import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  {
    number: '1000+',
    label: 'Leaders Trained',
    icon: '👥'
  },
  {
    number: '50+',
    label: 'Communities Served',
    icon: '🌍'
  },
  {
    number: '25+',
    label: 'Active Programs',
    icon: '📊'
  },
  {
    number: '95%',
    label: 'Success Rate',
    icon: '⭐'
  }
]

const Impact = () => {
  return (
    <section className="py-24 bg-blue-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Making a measurable difference in communities across the nation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact 