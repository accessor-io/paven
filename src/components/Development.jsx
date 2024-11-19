import React from 'react'

const Development = () => {
  return (
    <section id="development" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Development</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Software Development</h3>
            <p>
              We specialize in creating cutting-edge software solutions, focusing on:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Web Applications</li>
              <li>Mobile Development</li>
              <li>Cloud Solutions</li>
              <li>Custom Software</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Professional Development</h3>
            <p>
              Empowering individuals through:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Technical Training</li>
              <li>Career Guidance</li>
              <li>Mentorship Programs</li>
              <li>Industry Networking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Development 