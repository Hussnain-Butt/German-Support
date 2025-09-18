'use client'

import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import CarBackgroundImage from '../assets/homepage-hero.webp' // Make sure this path is correct
import QuoteForm from './QuoteForm' // <-- IMPORT THE NEW FORM COMPONENT

gsap.registerPlugin(useGSAP)

const Hero = () => {
  const heroEl = React.useRef(null)
  const bgEl = React.useRef(null)

  useGSAP(
    () => {
      // Background animation
      if (bgEl.current) {
        gsap.from(bgEl.current, {
          scale: 1.1,
          duration: 3,
          ease: 'power2.inOut',
        })
      }

      // Title lines animation
      gsap.from('.hero-title-line', {
        duration: 1.0,
        y: 60,
        opacity: 0,
        stagger: 0.2,
        delay: 0.4,
        ease: 'power3.out',
      })

      // Button animation
      gsap.from('.hero-button', {
        duration: 1.0,
        y: 50,
        opacity: 0,
        delay: 0.9,
        ease: 'power3.out',
      })
    },
    { scope: heroEl },
  )

  return (
    <div ref={heroEl} className="relative h-auto lg:h-screen w-full overflow-hidden py-20 lg:py-0">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <div
          ref={bgEl}
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${CarBackgroundImage})` }}
        />
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-12">
          {/* Main flex container for layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left Side: Hero Text */}
            <div className="max-w-2xl text-center lg:text-left text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wider leading-tight">
                <span className="hero-title-line block">Your Complete</span>
                <span className="hero-title-line block">Walnut Creek</span>
                <span className="hero-title-line block">Auto Repair Center</span>
              </h1>

              {/* This button is now on the left side */}
              <div className="hero-button mt-10">
                <button className="border-2 border-white bg-transparent px-12 py-4 text-lg font-bold uppercase tracking-widest text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  Schedule Service
                </button>
              </div>
            </div>

            {/* Right Side: Quote Form */}
            <div className="w-full max-w-md">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
