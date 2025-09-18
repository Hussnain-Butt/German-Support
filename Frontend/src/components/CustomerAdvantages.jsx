import React from 'react'

// Make sure to place your image in the assets folder and import it
import advantageImage from '../assets/giants-promo-image.webp' // <-- APNI IMAGE KA PATH YAHAN DAALEIN

const CustomerAdvantages = () => {
  return (
    // Section with a subtle background color to stand out
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="text-content">
            {/* Accent line for visual flair */}
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-4"></div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Customer Advantages
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Besides offering quality service and expertise, we also give away tickets to Golden
              State Warriors and San Francisco Giants games throughout the year as a token of our
              appreciation.
            </p>

            {/* Call-to-action button */}
            <div className="mt-8">
              <a
                href="/services" // Replace with your actual link
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right Side: Image with engaging styling */}
          <div className="image-container flex justify-center lg:justify-end">
            <img
              src={advantageImage}
              alt="Promotional graphic for German Sport and San Francisco Giants"
              className="w-full max-w-lg h-auto rounded-xl shadow-2xl transform lg:rotate-2 transition-transform duration-500 ease-in-out hover:rotate-0 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerAdvantages
