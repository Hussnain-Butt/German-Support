import React from 'react'
import Hero from '../components/Hero.jsx'
import AutomativeSection from '../components/AutomativeSection.jsx'
// File extension ko .jsx kiya gaya hai jo standard hai
import FeaturedServices from '../components/FeaturedServices.jsx'
import EuropeanServices from '../components/EuropeanServices.jsx'
import ProfessionalServices from '../components/ProfessionalServices.jsx'
import TestimonialSection from '../components/TestimonialSection.jsx'
import CustomerAdvantages from '../components/CustomerAdvantages.jsx'
const HomePage = () => {
  return (
    <div>
      <Hero />

      {/* Automotive Repair section */}
      <AutomativeSection />

      {/* Featured Services section (Slider wala) */}
      <FeaturedServices />
      <EuropeanServices />
      <ProfessionalServices />
      <TestimonialSection />
      <CustomerAdvantages />
    </div>
  )
}

export default HomePage
