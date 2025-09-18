import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// --- APNE ASSETS YAHAN IMPORT KAREN ---
import shopImage from '../assets/shopimage.webp' // Apni shop ki image yahan daalen
import aseLogo from '../assets/ase.png'
import atiLogo from '../assets/ati-logo.png'
import skillsUsaLogo from '../assets/skillsusa-logo.webp'
import asccaLogo from '../assets/ascca-logo.webp'

// GSAP Plugin ko register karen
gsap.registerPlugin(ScrollTrigger)

// Data for navigation and logos
const navLinks = [
  { name: 'Audi Repair', href: '#' },
  { name: 'Land Rover Repair', href: '#' },
  { name: 'Mercedes-Benz Repair', href: '#' },
  { name: 'BMW Repair', href: '#' },
  { name: 'Volkswagen Repair', href: '#' },
  { name: 'Other Makes', href: '#' },
]

const certificationLogos = [
  { name: 'ASE Certified', image: aseLogo },
  { name: 'ATI', image: atiLogo },
  { name: 'SkillsUSA Official Supporter', image: skillsUsaLogo },
  { name: 'ASCCA', image: asccaLogo },
]

const EuropeanServices = () => {
  const sectionRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Hero Section
      gsap.from(heroRef.current.querySelector('.hero-text'), {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out',
      })
      gsap.from(heroRef.current.querySelector('.hero-image'), {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out',
      })

      // Animate Certifications
      gsap.from('.logo-card', {
        scrollTrigger: {
          trigger: '.certifications-section',
          start: 'top 80%',
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="bg-gray-50">
      {/* --- Navigation Bar --- */}
      <nav className="bg-blue-600/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center flex-wrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-sm font-medium px-4 py-4 tracking-wider uppercase transition-colors duration-300 hover:bg-blue-700"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header ref={heroRef} className="relative bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="hero-text">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-600 leading-tight">
                Your Trusted Experts in European Auto Repair
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                If you’re not an experienced mechanic, sometimes it’s tough to identify the signs
                that your car needs auto repair. However, knowing what to look out for can help you
                mitigate bigger — and more expensive — damage down the road. You should start paying
                extra close attention to any unusual symptoms whenever you smell, hear, see, or feel
                anything out of the ordinary while driving your car.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                If you notice any of these issues, call German Sport in Walnut Creek, California,
                now.
              </p>
              <a
                href="tel:925-722-5741"
                className="inline-block mt-8 bg-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Call: (925) 722-5741
              </a>
            </div>

            {/* Image Content */}
            <div className="hero-image">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  src={shopImage}
                  alt="Auto repair shop with European cars on lifts"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- Certifications Section --- */}
      <section className="bg-gray-100 py-20 sm:py-24 certifications-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Certified & Recognized</h2>
            <p className="mt-3 text-lg text-gray-600">
              We are proud to be associated with the leading names in the industry.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certificationLogos.map((logo) => (
              <div
                key={logo.name}
                className="logo-card flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2"
              >
                <img className="h-20 object-contain" src={logo.image} alt={logo.name} />
                <p className="mt-4 text-sm font-semibold text-gray-700 text-center">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default EuropeanServices
