import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Patriotic Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/stars-bg.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-12 bg-red-600" />
            <h2 className="text-4xl font-americana font-bold px-4">About PAVEN</h2>
            <div className="h-1 w-12 bg-blue-600" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg border-2 border-blue-100 shadow-xl">
                <h3 className="text-2xl font-americana font-bold mb-4 text-blue-900">Our Mission</h3>
                <p className="text-gray-700">
                  We look to inspire individuals, families and communities to come together, 
                  embrace American values, and make their communities better through involvement 
                  and working together!
                </p>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-xl font-americana italic text-red-600">
                    "Strong individuals for stronger families form the strongest communities"
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg border-2 border-red-100 shadow-xl">
                <h3 className="text-2xl font-americana font-bold mb-4 text-red-900">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">★</span>
                    <span className="text-gray-700">Leadership Excellence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">★</span>
                    <span className="text-gray-700">Community Service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">★</span>
                    <span className="text-gray-700">American Innovation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">★</span>
                    <span className="text-gray-700">Patriotic Spirit</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r 
                       from-red-600 via-red-500 to-red-600 text-white rounded-lg
                       hover:from-red-700 hover:via-red-600 hover:to-red-700
                       transition-all duration-200 shadow-lg hover:shadow-xl
                       font-americana"
            >
              <span>Join Our Mission</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 