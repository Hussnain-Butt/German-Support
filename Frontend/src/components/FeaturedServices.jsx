import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowRight } from 'react-icons/fi'

// Import assets
import landRover from '../assets/landrover.webp'
import porsche from '../assets/porsche-911.png'
import audi from '../assets/Audi_A7_Front.jpg'
import bmw from '../assets/BMW.avif'
import mercedes from '../assets/mercedes.jpg'

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

// Services data with shorter, impactful descriptions
const services = [
  {
    title: 'Land Rover',
    tagline: 'Engineering Adventure, Refined.',
    image: landRover,
    link: '/services/land-rover',
  },
  {
    title: 'Audi',
    tagline: 'Progress Through Technology.',
    image: audi,
    link: '/services/audi',
  },
  {
    title: 'Mercedes-Benz',
    tagline: 'The Best or Nothing.',
    image: mercedes,
    link: '/services/mercedes',
  },
  {
    title: 'BMW',
    tagline: 'The Ultimate Driving Machine.',
    image: bmw,
    link: '/services/bmw',
  },
  {
    title: 'Porsche',
    tagline: 'There Is No Substitute.',
    image: porsche,
    link: '/services/porsche',
  },
]

const FeaturedServices = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Scope GSAP animations to the component for proper cleanup
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.service-panel')

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${(panels.length - 1) * window.innerHeight}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })

      // Loop through each panel to create the wipe animation
      panels.forEach((panel, i) => {
        // We don't need to animate the last panel away
        if (i < panels.length - 1) {
          const content = panel.querySelector('.panel-content')

          // Animate the text content of the current panel out of view
          timeline.to(
            content.children,
            {
              autoAlpha: 0,
              y: -30,
              stagger: 0.05,
              ease: 'power2.in',
            },
            `panel-${i}-start`,
          ) // Use a label for timing

          // Animate the panel itself away using a diagonal clip-path wipe
          timeline.to(
            panel,
            {
              // This clip-path creates a diagonal wipe from bottom-left to top-right
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
              ease: 'power2.inOut',
              duration: 1,
            },
            `panel-${i}-start`,
          ) // Start wipe at the same time as text animation
        }
      })
    }, sectionRef)

    // Cleanup function
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-gray-900 text-white relative overflow-x-hidden">
      {/* Container for all panels */}
      <div className="relative h-screen w-screen">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-panel absolute inset-0"
            // The key fix: Stack panels correctly with z-index. The first panel must be on top.
            style={{
              zIndex: services.length - index,
              // Set the initial state for the clip-path animation
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content Container */}
            <div className="panel-content relative z-10 flex h-full items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <p className="text-base font-semibold text-blue-400 tracking-wider uppercase">
                  Specialized Care For
                </p>
                <h2 className="mt-3 text-5xl sm:text-7xl font-extrabold tracking-tight text-white">
                  {service.title}
                </h2>
                <p className="mt-4 text-2xl text-gray-200">{service.tagline}</p>
                <a
                  href={service.link}
                  className="group inline-flex items-center mt-8 text-lg font-semibold text-white hover:text-blue-300 transition-colors"
                >
                  Discover Service
                  <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedServices
