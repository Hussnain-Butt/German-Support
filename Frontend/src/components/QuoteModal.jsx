import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaTimes } from 'react-icons/fa'
import QuoteForm from './QuoteForm' // Assuming QuoteForm is in the same folder

const QuoteModal = ({ isOpen, onClose }) => {
  const modalRef = React.useRef(null)
  const modalBoxRef = React.useRef(null)

  useGSAP(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden' // Prevent background scrolling
      gsap.to(modalRef.current, {
        opacity: 1,
        duration: 0.3,
        display: 'flex',
      })
      gsap.fromTo(
        modalBoxRef.current,
        { y: -50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out', delay: 0.1 },
      )
    } else {
      document.body.style.overflow = 'auto'
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.set(modalRef.current, { display: 'none' })
        },
      })
    }
  }, [isOpen])

  // Return null if not open initially to prevent flash of content
  if (!isOpen && !modalRef.current) return null

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      style={{ display: 'none', opacity: 0 }} // Initially hidden
      onClick={onClose} // Close modal on overlay click
    >
      <div
        ref={modalBoxRef}
        className="relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close form"
        >
          <FaTimes size={20} />
        </button>
        {/* We are reusing the exact same QuoteForm component */}
        <QuoteForm />
      </div>
    </div>
  )
}

export default QuoteModal
