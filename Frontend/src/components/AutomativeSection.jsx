import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaCar, FaCog, FaWrench } from 'react-icons/fa'
import ServicesImages from '../assets/services-image-allservices.webp'

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger)

const AutomotiveSection = () => {
  // Refs for elements to animate
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textContentRef = useRef(null)
  const titleRef = useRef(null)
  const headingRef = useRef(null)
  const featuresRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
      })

      // Animate headings
      tl.from(titleRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power3.out',
      })
        .from(
          headingRef.current,
          {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5',
        )
        // Animate the main content and image
        .from(
          textContentRef.current,
          {
            opacity: 0,
            x: -50,
            duration: 1,
            ease: 'power3.out',
          },
          'start',
        )
        .from(
          imageRef.current,
          {
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: 'power3.out',
          },
          'start',
        )
        // Animate feature icons with a stagger effect
        .from(
          featuresRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power3.out',
          },
          '-=0.5',
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    // Wrapper div to fix any global text color issues
    <div className="text-gray-900">
      <section ref={sectionRef} className="bg-slate-50 font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">
            {/* Left Column: Text Content */}
            <div ref={textContentRef} className="relative">
              <div className="mb-10">
                <h2
                  ref={titleRef}
                  className="text-base font-semibold text-indigo-600 tracking-wide uppercase"
                >
                  Quality Auto Repair in Walnut Creek, California
                </h2>
                <h1
                  ref={headingRef}
                  className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
                >
                  Honest and Transparent Car Care Services
                </h1>
              </div>

              <div className="space-y-6 text-slate-600 text-base leading-relaxed">
                <h3 className="text-2xl font-bold text-gray-800">
                  Automotive Repair Excellence Since 1986
                </h3>
                <p>
                  For almost 40 years, the drivers of Walnut Creek, California have trusted German
                  Sport with all of their automotive repair solutions. That’s because our friendly
                  and dependable ASE-certified mechanics specialize in all types of car repair
                  services. Whether you need brake repair or an engine rebuild, you can count on us
                  for all your auto repair needs. We back all of our services with a 36-month or
                  36,000-mile warranty.
                </p>
                <p>
                  Whether your Land Rover is making strange noises or your BMW is experiencing a
                  reduction in its performance, we’ll fix your ride. German Sport’s approachable,
                  family-oriented staff has your best interest at heart. We’ll never give you the
                  runaround and always provide you with top-notch car repair service with a smile.
                </p>
                <p>
                  Our entire team is passionate about exceeding your expectations and helping to
                  keep your car in great shape. To learn more, call us today at{' '}
                  <a
                    href="tel:9257225741"
                    className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                  >
                    (925) 722-5741
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Right Column: Image & Features */}
            <div className="space-y-10">
              <div ref={imageRef} className="p-2 bg-white rounded-xl shadow-2xl">
                {/* FIX: Using a direct URL for the image to avoid import errors */}
                <img
                  src={ServicesImages}
                  alt="German Sport Auto Repair Shop with luxury cars"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
              {/* Features Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div
                  ref={(el) => (featuresRef.current[0] = el)}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <FaCar className="text-3xl text-indigo-600 mx-auto mb-3" />
                  <span className="font-semibold text-sm text-gray-700">All Makes & Models</span>
                </div>
                <div
                  ref={(el) => (featuresRef.current[1] = el)}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <FaCog className="text-3xl text-indigo-600 mx-auto mb-3" />
                  <span className="font-semibold text-sm text-gray-700">Engine Diagnostics</span>
                </div>
                <div
                  ref={(el) => (featuresRef.current[2] = el)}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <FaWrench className="text-3xl text-indigo-600 mx-auto mb-3" />
                  <span className="font-semibold text-sm text-gray-700">3-Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AutomotiveSection
