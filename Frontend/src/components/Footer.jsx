import React from 'react'
import {
  FaFacebookF,
  FaGoogle,
  FaYelp,
  FaInstagram,
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from 'react-icons/fa'

// --- IMPORTANT ---
// Apne assets folder se in images ko import karein
import companyLogo from '../assets/logo-white.webp' // <-- Replace with your white logo path
import discoverCard from '../assets/discover.webp' // <-- Replace with your card image paths
import visaCard from '../assets/visa.webp'
import amexCard from '../assets/amx.webp'
import mastercardCard from '../assets/mastercard.webp'
// import autoshopLogo from '../assets/autoshop-logo.png' // <-- Replace with Autoshop logo path

// Footer ab dono onQuoteButtonClick aur onScheduleClick props accept karega
const Footer = ({ onQuoteButtonClick, onScheduleClick }) => {
  const socialLinks = [
    { href: '#', icon: <FaFacebookF /> },
    { href: '#', icon: <FaGoogle /> },
    { href: '#', icon: <FaYelp /> },
    { href: '#', icon: <FaInstagram /> },
  ]

  const quickLinks = [
    { href: '/home', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/warranty', text: 'Warranty' },
    { href: '/makes', text: 'Makes' },
    { href: '/services', text: 'Services' },
    { href: '/specials', text: 'Specials' },
    { href: '/contact', text: 'Contact' },
  ]

  const paymentMethods = [
    { src: discoverCard, alt: 'Discover' },
    { src: visaCard, alt: 'Visa' },
    { src: amexCard, alt: 'American Express' },
    { src: mastercardCard, alt: 'Mastercard' },
  ]

  return (
    <footer className="bg-gray-800 overflow-x-hidden">
      {/* Main Footer Section (Blue) */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-screen-xl mx-auto py-16 px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Brand Info */}
            <div>
              <img src={companyLogo} alt="German Sport" className="h-12 mb-4" />
              <p className="text-sm text-blue-100">European Auto Specialist</p>
              <p className="mt-4 text-sm text-blue-200 leading-relaxed">
                Providing top-tier service and expertise for European vehicles in Walnut Creek.
              </p>
            </div>

            {/* Column 2: Contact Info */}
            <div>
              <h3 className="text-lg font-semibold tracking-wider uppercase">Contact Us</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <span>1400 Autocenter Drive, Walnut Creek, CA 94597</span>
                </li>
                <li className="flex items-start">
                  <FaPhoneAlt className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <a href="tel:925-722-5741" className="hover:text-blue-200">
                    (925) 722-5741
                  </a>
                </li>
                <li className="flex items-start">
                  <FaClock className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p>Mon-Fri: 8:00am - 5:00pm</p>
                    <p>Weekends: By Appointment</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold tracking-wider uppercase">Quick Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="hover:text-blue-200 transition-colors">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Get in Touch & Schedule */}
            <div>
              <h3 className="text-lg font-semibold tracking-wider uppercase">Get in Touch</h3>
              <div className="flex items-center space-x-4 mt-4">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href} className="text-white hover:text-blue-200">
                    {React.cloneElement(link.icon, { size: 22 })}
                  </a>
                ))}
              </div>
              <div className="flex items-center mt-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                ))}
                <p className="ml-2 text-sm">5.0 Stars | 200+ Reviews</p>
              </div>

              {/* ===== UPDATED BUTTONS SECTION ===== */}
              <div className="mt-6 flex flex-col space-y-3">
                <button
                  onClick={onScheduleClick}
                  className="block w-full text-center bg-white text-blue-600 font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105 leading-tight"
                >
                  Schedule
                  <br />
                  Appointment
                </button>
                <button
                  onClick={onQuoteButtonClick}
                  className="w-full text-center bg-transparent border border-white text-white font-bold py-3 px-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300 transform hover:scale-105 leading-tight"
                >
                  Get an
                  <br />
                  Instant Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer Section (Dark) */}
      <div className="bg-gray-900 text-gray-400">
        <div className="max-w-screen-xl mx-auto py-6 px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} All Rights Reserved |{' '}
            <a href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              {paymentMethods.map((card) => (
                <img key={card.alt} src={card.src} alt={card.alt} className="h-6" />
              ))}
            </div>
            {/* <div className="flex items-center gap-2">
              <span className="text-sm">Made In U.S.A.</span>
              <img src={autoshopLogo} alt="Autoshop Solutions" className="h-8" />
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
