import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import QuoteModal from '../components/QuoteModal' // Import the new modal
import AppointmentModal from '../components/AppointmentModal' // <-- NAYE MODAL KO IMPORT KAREIN
const Layout = () => {
  // State to control the visibility of the quote modal
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  // Handlers to open and close the modal
  const openQuoteModal = () => setIsQuoteModalOpen(true)
  const closeQuoteModal = () => setIsQuoteModalOpen(false)

  // --- NEW: Appointment modal ke liye State ---
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const openAppointmentModal = () => setIsAppointmentModalOpen(true)
  const closeAppointmentModal = () => setIsAppointmentModalOpen(false)
  return (
    <div>
      {/* The modal is rendered at the top level of the app */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
      <AppointmentModal isOpen={isAppointmentModalOpen} onClose={closeAppointmentModal} />{' '}
      {/* <-- NAYE MODAL KO RENDER KAREIN */}
      <Header onScheduleClick={openAppointmentModal} />
      <main>
        {/* Child routes (HomePage, etc.) will be rendered here */}
        <Outlet />
      </main>
      <Footer onQuoteButtonClick={openQuoteModal} onScheduleClick={openAppointmentModal} />{' '}
      {/* <-- Handler ko Footer mein pass karein */}
    </div>
  )
}

export default Layout
