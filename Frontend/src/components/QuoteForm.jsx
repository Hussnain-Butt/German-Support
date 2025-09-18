import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { FiSend } from 'react-icons/fi'

const QuoteForm = () => {
  const formContainer = React.useRef(null)

  useGSAP(
    () => {
      // Animate the form container
      gsap.from(formContainer.current, {
        opacity: 0,
        x: 50, // Slide in from the right
        duration: 1.2,
        delay: 0.8, // Start after the main hero text animation
        ease: 'power3.out',
      })
    },
    { scope: formContainer },
  )

  return (
    <div
      ref={formContainer}
      className="w-full max-w-md bg-gray-800 bg-opacity-80 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-gray-700"
    >
      <h3 className="text-2xl font-bold text-white mb-2 text-center">Get an Instant Quote</h3>
      <p className="text-gray-300 text-center text-sm mb-6">
        Fill out the form and we'll get back to you.
      </p>
      <form action="#" method="POST" className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-300 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="John"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-300 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Doe"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="(123) 456-7890"
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Message/Service Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            How can we help?
          </label>
          <textarea
            name="message"
            id="message"
            rows="3"
            placeholder="Tell us about the service you need..."
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
          >
            <FiSend />
            <span>Request Quote</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default QuoteForm
