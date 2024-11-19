import React from 'react'
import { motion } from 'framer-motion'

const Careers = () => {
  const positions = [
    {
      title: "Community Program Manager",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Lead and develop community programs in the Bay Area.",
      requirements: [
        "5+ years of community program management",
        "Strong leadership skills",
        "Experience in non-profit sector"
      ]
    },
    {
      title: "Outreach Coordinator",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Coordinate outreach programs and build community relationships.",
      requirements: [
        "3+ years of community outreach experience",
        "Excellent communication skills",
        "Program development experience"
      ]
    },
    {
      title: "Volunteer Coordinator",
      location: "Remote",
      type: "Part-time",
      description: "Manage volunteer programs and recruitment.",
      requirements: [
        "2+ years volunteer management",
        "Strong organizational skills",
        "Experience with volunteer databases"
      ]
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
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Make a difference in your community while building a rewarding career with PAVEN
          </p>
        </motion.div>

        <div className="space-y-6">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{position.title}</h2>
                    <div className="mt-2 space-x-4">
                      <span className="inline-flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                      <span className="inline-flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary mt-4 sm:mt-0"
                  >
                    Apply Now
                  </motion.button>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-2">Key Requirements:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {position.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Careers 