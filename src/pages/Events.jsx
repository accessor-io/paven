import React from 'react'
import { motion } from 'framer-motion'

const Events = () => {
  const events = [
    {
      title: "Leadership Summit 2024",
      date: "April 15-16, 2024",
      location: "San Francisco, CA",
      description: "Annual gathering of community leaders and changemakers",
      status: "Upcoming"
    },
    {
      title: "Community Workshop Series",
      date: "Monthly",
      location: "Various Locations",
      description: "Hands-on workshops for community development",
      status: "Ongoing"
    },
    {
      title: "Youth Leadership Program",
      date: "Summer 2024",
      location: "Bay Area",
      description: "Intensive program for young leaders",
      status: "Registration Open"
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
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600">Join us in making a difference</p>
        </motion.div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 md:flex justify-between items-center">
                <div className="md:flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <span className={`ml-4 px-3 py-1 rounded-full text-sm ${
                      event.status === 'Upcoming' ? 'bg-green-100 text-green-800' :
                      event.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                  <div className="text-sm text-gray-500">
                    <span className="mr-4">📅 {event.date}</span>
                    <span>📍 {event.location}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="btn-primary">Register Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events 