import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

// Import the background image for this specific section
import testimonialBgImage from '../assets/homepage-hero.webp' // Make sure the path is correct

const TestimonialSection = () => {
  return (
    // The main container for the testimonial section.
    // The section now has a minimum height and uses flexbox to center the content.
    <section
      className="testimonial-section relative bg-cover bg-center min-h-[80vh] flex items-center justify-center py-20 sm:py-32"
      style={{ backgroundImage: `url(${testimonialBgImage})` }}
    >
      {/* Dark overlay for better text readability and a more premium feel */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content container - Centered with a maximum width */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* The Glassmorphism Card */}
        <div className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-8 sm:p-12 border border-white/20">
          {/* Decorative Quote Icon */}
          <FaQuoteLeft className="absolute -top-6 -left-6 text-blue-500/30 text-8xl sm:text-9xl opacity-50 z-0" />

          <div className="relative z-10">
            {/* Star Rating - Centered */}
            <div className="flex items-center justify-center mb-6">
              <FaStar className="text-blue-500 w-7 h-7" />
              <FaStar className="text-blue-500 w-7 h-7 ml-1" />
              <FaStar className="text-blue-500 w-7 h-7 ml-1" />
              <FaStar className="text-blue-500 w-7 h-7 ml-1" />
              <FaStar className="text-blue-500 w-7 h-7 ml-1" />
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-xl sm:text-2xl text-gray-100 font-light italic leading-relaxed">
              <p>
                "Sergio and the German Sport team have been consistently excellent with their
                communication and performance. Thanks for the great service, guys!"
              </p>
            </blockquote>

            {/* Author of the testimonial */}
            <footer className="mt-6">
              <p className="text-lg font-semibold text-white">Sergio L.</p>
              <p className="text-sm text-gray-400">Valued Customer</p>
            </footer>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/reviews" // Replace with your actual link
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Read More
              </a>
              <a
                href="/write-review" // Replace with your actual link
                className="inline-block bg-transparent border-2 border-blue-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Write a Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
