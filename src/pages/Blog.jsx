import React from 'react'
import { motion } from 'framer-motion'

const Blog = () => {
  const posts = [
    {
      title: "New Board Director Announcement",
      date: "March 15, 2024",
      excerpt: "We're excited to welcome our newest Board Director overseeing operations in the San Francisco Bay Area.",
      category: "News",
      image: "/images/blog/board-announcement.jpg"
    },
    {
      title: "Community Impact Report 2024",
      date: "March 1, 2024",
      excerpt: "Discover how PAVEN's initiatives have transformed communities across the Bay Area.",
      category: "Reports",
      image: "/images/blog/impact-report.jpg"
    },
    {
      title: "Leadership Workshop Series",
      date: "February 20, 2024",
      excerpt: "Join our upcoming workshop series focused on developing tomorrow's community leaders.",
      category: "Events",
      image: "/images/blog/workshop.jpg"
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
          <h1 className="text-4xl font-bold mb-4">PAVEN Blog</h1>
          <p className="text-xl text-gray-600">Latest updates and insights from our community</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">{post.category}</span>
                <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog 