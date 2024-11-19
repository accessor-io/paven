import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Contact Us
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 mb-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <address className="not-italic text-center space-y-2 text-gray-700">
              <p className="text-xl font-semibold text-blue-600">PAVEN</p>
              <p>c/o Chris Kline</p>
              <p>250 Kearny St, #618</p>
              <p>San Francisco, CA 94108</p>
              <a 
                href="tel:+14155139334" 
                className="block text-blue-600 hover:text-blue-700 transition-colors"
              >
                (415) 513-9334
              </a>
            </address>
          </div>
          
          <motion.div 
            className="bg-blue-50 p-8 rounded-xl border border-blue-100 shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Help Our Cause</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Your support and contributions will enable us to meet our goals and improve conditions. 
              Your generous donation will fund our mission. PAVEN is a tax exempt non profit under 501(c)(3).
            </p>
            <motion.button 
              className="btn-primary group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <span className="relative z-10">Donate Now</span>
              <motion.div 
                className="absolute inset-0 bg-blue-700"
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? 0 : "-100%" }}
                transition={{ type: "tween" }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact 