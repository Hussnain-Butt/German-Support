import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaWifi, FaRegClock, FaShuttleVan, FaEnvelopeOpenText, FaAward } from 'react-icons/fa'

// --- IMPORT YOUR ASSETS HERE ---
// Image for the first section
import mechanicImage from '../assets/mechanic-working.webp'

// Background images for feature cards
import shuttleImage from '../assets/local-shuttle.webp'
import afterHoursImage from '../assets/after-hours.webp'
import wifiImage from '../assets/free-wifi.webp'
import statusUpdateImage from '../assets/status-update.webp'
import warrantyImage from '../assets/warranty.webp'

// Image for the CARFAX banner
import carfaxBanner from '../assets/carfax-banner.webp' // Make sure the path is correct

gsap.registerPlugin(ScrollTrigger)

// Data for the feature cards
const features = [
  {
    title: 'Local Shuttle Service with Repairs',
    image: shuttleImage,
    icon: <FaShuttleVan size={24} />,
  },
  {
    title: 'After Hours Drop-off/Pick-up',
    image: afterHoursImage,
    icon: <FaRegClock size={24} />,
  },
  {
    title: 'Free WiFi',
    image: wifiImage,
    icon: <FaWifi size={24} />,
  },
  {
    title: 'Status Updates via Email/Text',
    image: statusUpdateImage,
    icon: <FaEnvelopeOpenText size={24} />,
  },
  {
    title: '36 Month/36,000 Mile Warranty',
    image: warrantyImage,
    icon: <FaAward size={24} />,
  },
]

const ProfessionalServices = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    // GSAP context istemal karna zaroori hai take React mein animations theek se cleanup hon.
    const ctx = gsap.context(() => {
      // Baaki animations pehle ki tarah...
      gsap.from('.info-text, .info-image', {
        opacity: 0,
        x: (index) => (index === 0 ? -50 : 50),
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.info-section',
          start: 'top 75%',
        },
      })

      gsap.from('.features-heading', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.features-section',
          start: 'top 80%',
        },
      })

      // --- YAHAN BADLAAV KIYA GAYA HAI ---

      // STEP 1: Feature cards ko pehle se hi chupa dein (initial state set karein).
      // Is se "Flash of Unstyled Content" ka masla bhi hal ho jayega.
      gsap.set('.feature-card', { opacity: 0, y: 50 })

      // STEP 2: Ab .from() ke bajaye .to() istemal karke unhein animate karein.
      // Jab trigger point hit hoga, to ye animation cards ko unki aakhri state (opacity: 1, y: 0) par le aayegi.
      gsap.to('.feature-card', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.feature-card-grid',
          start: 'top 85%',
          // DEBUGGING KE LIYE: Agar masla phir bhi aaye to neeche wali line ko uncomment karein.
          // Ye aapko screen par start aur end points dikhayega.
          // markers: true,
        },
      })

      gsap.from('.carfax-banner', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.carfax-section',
          start: 'top 85%',
        },
      })
    }, sectionRef) // context ko sectionRef ke sath scope karein

    // Image load hone par ScrollTrigger ko refresh karna abhi bhi ek acha practice hai.
    const refreshAnimations = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('load', refreshAnimations)

    // Cleanup function
    return () => {
      ctx.revert()
      window.removeEventListener('load', refreshAnimations)
    }
  }, [])

  return (
    <div ref={sectionRef}>
      {/* --- Top Information Section --- */}
      <section className="info-section bg-white py-20 sm:py-28">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="info-text">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
                Automotive Repairs and Hybrid-Vehicle Certified
              </h2>
              <p className="mt-6 text-base text-gray-600 leading-relaxed">
                If you’re in the market for a new car repair mechanic, look no further than German
                Sport in Walnut Creek, California. We are dedicated to offering unmatched European
                car care services to our customers. We are also hybrid-vehicle certified and offer
                smog checks and repairs. Our shop is a green business, and we always use sustainable
                practices to protect the environment better. Whether you need engine repair, brake
                repair, electrical repair, or just a simple tune-up, German Sport is more than happy
                to help. Call us today at{' '}
                <a href="tel:925-722-5741" className="text-blue-600 font-semibold hover:underline">
                  (925) 722-5741
                </a>{' '}
                to schedule your auto repair appointment. See you soon!
              </p>
            </div>
            {/* Image Content */}
            <div className="info-image">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  src={mechanicImage}
                  alt="Mechanic performing car repairs"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="features-section bg-gray-50 py-20 sm:py-28">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center features-heading">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-wider uppercase">
              We're Here With You Every Step of the Way
            </h2>
          </div>
          {/* Grid container for the feature cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 feature-card-grid">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="feature-card bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 right-0 mb-4 mr-4 bg-blue-600 text-white p-3 rounded-full shadow-md">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold uppercase tracking-wider text-gray-800 h-16 flex items-center">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CARFAX Banner Section --- */}
      <section className="carfax-section bg-white py-20 sm:py-28">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Container for the banner image to center it and apply styles */}
          <div className="carfax-banner max-w-4xl mx-auto">
            <img
              src={carfaxBanner}
              alt="CARFAX 2024 Top-Rated Service Center"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProfessionalServices
