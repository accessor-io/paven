import React from 'react'
import { motion } from 'framer-motion'

const Partners = () => {
  const partners = [
    {
      category: "Corporate Partners",
      organizations: [
        {
          name: "Tech Innovation Corp",
          description: "Supporting technology education initiatives",
          logo: "/images/partners/tech-corp.svg"
        },
        {
          name: "Community Bank SF",
          description: "Financial literacy programs sponsor",
          logo: "/images/partners/bank-sf.svg"
        }
      ]
    },
    {
      category: "Non-Profit Partners",
      organizations: [
        {
          name: "Youth Development Foundation",
          description: "Collaborative youth mentorship programs",
          logo: "/images/partners/youth-dev.svg"
        },
        {
          name: "Bay Area Community Alliance",
          description: "Local community development partner",
          logo: "/images/partners/bay-alliance.svg"
        }
      ]
    },
    {
      category: "Educational Partners",
      organizations: [
        {
          name: "SF State University",
          description: "Academic research and program development",
          logo: "/images/partners/sf-state.svg"
        },
        {
          name: "Leadership Institute",
          description: "Professional development programs",
          logo: "/images/partners/leadership-inst.svg"
        }
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
          <h1 className="text-4xl font-bold mb-4">Our Partners</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Working together with leading organizations to create lasting impact
          </p>
        </motion.div>

        <div className="space-y-16">
          {partners.map((section, index) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-8">{section.category}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {section.organizations.map((org, orgIndex) => (
                  <motion.div
                    key={org.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + (orgIndex * 0.1) }}
                    className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-6"
                  >
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src={org.logo}
                        alt={org.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{org.name}</h3>
                      <p className="text-gray-600">{org.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in our mission to build stronger communities through leadership and innovation
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Partner With Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Partners 