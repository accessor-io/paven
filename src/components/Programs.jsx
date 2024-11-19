import React from 'react'
import { motion } from 'framer-motion'

const programs = [
  {
    title: "Legion",
    description: "A comprehensive program designed to develop leadership skills in young adults through mentorship, training, and hands-on experience.",
    icon: "🎯",
    link: "#legion"
  },
  {
    title: "Outreach",
    description: "Community-focused initiatives that create positive impact through volunteer work, education, and local partnerships.",
    icon: "🤝",
    link: "#outreach"
  },
  {
    title: "Mentorship",
    description: "One-on-one guidance from experienced leaders to help individuals reach their full potential and make meaningful contributions.",
    icon: "⭐",
    link: "#mentorship"
  }
]

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our innovative programs designed to foster leadership and create lasting community impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card group hover:bg-blue-50 dark:hover:bg-blue-900/10"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {program.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">{program.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{program.description}</p>
              <a 
                href={program.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs 