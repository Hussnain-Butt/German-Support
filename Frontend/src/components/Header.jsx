import React, { useState, useEffect } from 'react'
import { FaFacebookF, FaGoogle, FaInstagram, FaYelp, FaBars, FaTimes } from 'react-icons/fa'
import { FiPhone, FiMapPin, FiClock, FiChevronDown, FiUser } from 'react-icons/fi'

// Navigation links data (No changes needed here)
const navLinks = [
  { name: 'HOME', href: '#' },
  {
    name: 'ABOUT',
    dropdown: true,
    subLinks: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
    ],
  },
  { name: 'WARRANTY', href: '#' },
  {
    name: 'MAKES',
    dropdown: true,
    subLinks: [
      { name: 'Audi Repair', href: '#' },
      { name: 'Land Rover Repair', href: '#' },
      { name: 'Mercedes-Benz Repair', href: '#' },
      { name: 'BMW Repair', href: '#' },
      { name: 'Volkswagen Repair', href: '#' },
    ],
  },
  { name: 'SERVICES', href: '#' },
  { name: 'SPECIALS', href: '#' },
  { name: 'CONTACT', href: '#' },
]

// Header ab onScheduleClick prop accept karega
const Header = ({ onScheduleClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState('')

  // Function to toggle mobile dropdowns
  const handleMobileDropdown = (name) => {
    setOpenMobileDropdown(openMobileDropdown === name ? '' : name)
  }

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
  }, [isMobileMenuOpen])

  return (
    <>
      {/* ===== TOP ANNOUNCEMENT BAR ===== */}
      <div className="bg-blue-600 text-white text-center py-2.5 px-4 text-xs sm:text-sm font-semibold shadow-sm">
        <p>
          First Responders, Active Military & Veterans: Get 10% Off (Up to $200)! Thank you for your
          service. See advisor for details
        </p>
      </div>

      <header className="bg-white">
        {/* ===== TOP CONTACT & INFO BAR ===== */}
        <div className="bg-gray-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col lg:flex-row justify-between items-center text-center">
            {/* Left & Center Info: Address, Hours, Phone, Reviews */}
            <div className="w-full flex flex-col items-center lg:items-start">
              {/* Address & Hours */}
              <div className="flex flex-col sm:flex-row items-center sm:divide-x sm:divide-gray-600 text-sm font-medium mb-3">
                <div className="flex items-center gap-2 pr-4">
                  <FiMapPin className="text-blue-400" />
                  <span>1400 Autocenter Drive, Walnut Creek, CA 94597</span>
                </div>
                <div className="flex items-center gap-2 pl-4 mt-1 sm:mt-0">
                  <FiClock className="text-blue-400" />
                  <span>Mon-Fri: 8am-5pm | Weekends: By Appointment</span>
                </div>
              </div>
              {/* Phone & Reviews */}
              <div className="flex flex-col sm:flex-row items-center sm:divide-x sm:divide-gray-600">
                <a
                  href="tel:9257225741"
                  className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors tracking-wider pr-4"
                >
                  (925) 722-5741
                </a>
                <div className="flex items-center gap-2 pl-4 mt-1 sm:mt-0">
                  <span className="text-yellow-500 text-lg">★★★★★</span>
                  <span className="text-gray-300 text-sm">5.0 | 200+ Reviews</span>
                </div>
              </div>
            </div>

            {/* Right Info: Socials & Login */}
            <div className="w-full lg:w-auto flex flex-col lg:items-end mt-4 lg:mt-0">
              <div className="flex items-center gap-4 text-lg text-gray-300 mb-3">
                <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="Google" className="hover:text-white transition-colors">
                  <FaGoogle />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="Yelp" className="hover:text-white transition-colors">
                  <FaYelp />
                </a>
              </div>
              <a
                href="/login"
                className="flex items-center gap-2 font-semibold text-gray-200 hover:text-white transition-colors"
              >
                <FiUser className="text-blue-400" />
                <span>Login</span>
              </a>
            </div>
          </div>
        </div>

        {/* ===== LOGO AREA (Desktop) ===== */}
        <div className="hidden lg:flex justify-center items-center py-6 bg-white border-b border-gray-200">
          <a href="/" aria-label="German Sport Home">
            <img
              src="/src/assets/GermanSport-logo.webp"
              alt="German Sport Specialists Logo"
              className="h-[45px] w-auto"
            />
          </a>
        </div>

        {/* ===== MAIN NAVIGATION & CTA BAR ===== */}
        <div className="bg-blue-600 shadow-md">
          <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center h-20">
            {/* Logo for Mobile/Tablet */}
            <a href="/" className="lg:hidden">
              {/* Assuming you have an inverted logo for dark backgrounds */}
              <img
                src="/src/assets/GermanSport-logo-white.webp"
                alt="German Sport Logo"
                className="h-12 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-grow justify-center sticky  top-0 z-50">
              <ul className="flex items-center space-x-10">
                {navLinks.map((link) => (
                  <li key={link.name} className="relative group h-20 flex items-center">
                    <a
                      href={link.href}
                      className="flex items-center gap-1.5 text-white font-bold tracking-wider uppercase text-sm h-full border-b-4 border-transparent group-hover:border-white transition-all duration-300"
                    >
                      {link.name}
                      {link.dropdown && (
                        <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                      )}
                    </a>
                    {link.dropdown && (
                      <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 bg-gray-800 rounded-b-md shadow-2xl py-2 z-20 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 transform-gpu invisible group-hover:visible">
                        {link.subLinks.map((sub) => (
                          <li key={sub.name}>
                            <a
                              href={sub.href}
                              className="block w-full text-left px-5 py-2.5 text-sm text-gray-200 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                            >
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button (Desktop) - UPDATED */}
            <div className="hidden lg:block">
              <button
                onClick={onScheduleClick}
                className="bg-white text-blue-600 font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
              >
                SCHEDULE APPOINTMENT
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                className="text-3xl text-white"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MOBILE MENU (Side Drawer) ===== */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        <div
          className={`relative w-full max-w-sm h-full bg-gray-800 text-white ml-auto flex flex-col transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-5 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Navigation</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="text-3xl text-gray-300 hover:text-white"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-5">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.name} className="border-b border-gray-700">
                  <div
                    onClick={() => link.dropdown && handleMobileDropdown(link.name)}
                    className="flex justify-between items-center text-lg font-semibold hover:text-blue-400 cursor-pointer py-3.5"
                  >
                    <a
                      href={!link.dropdown ? link.href : '#'}
                      onClick={(e) => {
                        if (!link.dropdown) setIsMobileMenuOpen(false)
                        else e.preventDefault()
                      }}
                    >
                      {link.name}
                    </a>
                    {link.dropdown && (
                      <FiChevronDown
                        className={`transition-transform duration-300 ${
                          openMobileDropdown === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </div>
                  {link.dropdown && (
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openMobileDropdown === link.name ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <ul className="pl-4 pt-2 pb-2 flex flex-col gap-y-2">
                        {link.subLinks.map((sub) => (
                          <li key={sub.name}>
                            <a
                              href={sub.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-gray-300 hover:text-blue-400 py-1"
                            >
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 mt-auto border-t border-gray-700 flex flex-col gap-y-4">
            <button
              onClick={() => {
                onScheduleClick()
                setIsMobileMenuOpen(false) // Click ke baad menu band karein
              }}
              className="w-full text-center bg-blue-600 text-white font-bold py-3 px-5 rounded-md hover:bg-blue-700 transition-colors"
            >
              SCHEDULE APPOINTMENT
            </button>
            <a
              href="/login"
              className="w-full text-center bg-gray-700 text-white font-bold py-3 px-5 rounded-md hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
            >
              <FiUser />
              <span>Login</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
