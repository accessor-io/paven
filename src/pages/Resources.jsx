import React from 'react'
import { motion } from 'framer-motion'

const Resources = () => {
  const resources = [
    {
      title: "Leadership Toolkit",
      description: "Essential resources for developing leadership skills",
      type: "PDF Guide",
      link: "#"
    },
    {
      title: "Community Building Manual",
      description: "Step-by-step guide for community initiatives",
      type: "Online Course",
      link: "#"
    },
    {
      title: "Mentorship Program Guide",
      description: "Best practices for mentors and mentees",
      type: "Video Series",
      link: "#"
    }
  ]

  return (
    <div className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-gray-600">Tools and materials to support your journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4">
                {resource.type}
              </span>
              <a 
                href={resource.link}
                className="block w-full text-center btn-primary"
              >
                Access Resource
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resources 