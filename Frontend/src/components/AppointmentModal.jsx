import React, { useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaTimes, FaOilCan } from 'react-icons/fa' // <-- CORRECTED: Imported FaOilCan
import {
  BsTools,
  BsFillCarFrontFill,
  BsBatteryCharging,
  BsSnow,
  BsCalendarCheck,
  BsCardList,
  BsWrench,
  BsGear,
} from 'react-icons/bs'
import { GiCarWheel } from 'react-icons/gi' // <-- CORRECTED: Removed GiOilCan from here
import { MdOutlineSpeed } from 'react-icons/md'

// Data for our services
const popularServices = [
  { icon: <MdOutlineSpeed />, title: 'Brakes', description: 'Issues, pads, rotors, inspection' },
  { icon: <FaOilCan />, title: 'Oil Change', description: 'Oil change, filters, lube' }, // <-- CORRECTED: Used FaOilCan
  {
    icon: <BsFillCarFrontFill />,
    title: 'Vehicle Inspection',
    description: 'State, emissions, safety',
  },
  { icon: <GiCarWheel />, title: 'Tires', description: 'Replacement, rotations, alignments' },
  { icon: <BsBatteryCharging />, title: 'Battery', description: 'Replacement, testing, starter' },
  {
    icon: <BsGear />,
    title: 'Engine & Transmission',
    description: 'Diagnosis, fluids, drivetrain',
  },
  { icon: <BsSnow />, title: 'Heat or A/C', description: 'No heat, no AC, intermittent issues' },
  {
    icon: <BsCalendarCheck />,
    title: 'Scheduled Maintenance',
    description: 'Services at specific mileage',
  },
]

const customServices = [
  {
    icon: <BsCardList />,
    title: 'Describe Your Issue',
    description: 'Provide details about the problem',
  },
  {
    icon: <BsWrench />,
    title: 'Select Specific Part',
    description: 'Know the part that needs service',
  },
]

const AppointmentModal = ({ isOpen, onClose }) => {
  const modalRef = React.useRef(null)
  const modalBoxRef = React.useRef(null)

  const [currentStep, setCurrentStep] = useState(1)
  const [selectedServices, setSelectedServices] = useState({})

  const handleServiceToggle = (title) => {
    setSelectedServices((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const isNextDisabled = Object.values(selectedServices).every((v) => !v)

  useGSAP(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      gsap.to(modalRef.current, { opacity: 1, duration: 0.3, display: 'flex' })
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

  if (!isOpen && !modalRef.current) return null

  const Step = ({ number, active }) => (
    <div className="flex items-center">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
          active ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-300 text-gray-600'
        }`}
      >
        {number}
      </div>
      {number < 5 && (
        <div className={`flex-1 h-0.5 mx-2 ${active ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
      )}
    </div>
  )

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[101] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      style={{ display: 'none', opacity: 0 }}
      onClick={onClose}
    >
      <div
        ref={modalBoxRef}
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-5 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Schedule Your Appointment</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="Close"
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-center">
            {[1, 2, 3, 4, 5].map((num) => (
              <Step key={num} number={num} active={num === currentStep} />
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-grow p-6 md:p-8 overflow-y-auto">
          {currentStep === 1 && (
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Popular Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {popularServices.map((service) => (
                  <label
                    key={service.title}
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedServices[service.title]
                        ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-500'
                        : 'bg-white border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    <div className="text-blue-600 text-2xl mr-4">{service.icon}</div>
                    <div className="flex-grow">
                      <p className="font-bold text-gray-800">{service.title}</p>
                      <p className="text-sm text-gray-500">{service.description}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={!!selectedServices[service.title]}
                      onChange={() => handleServiceToggle(service.title)}
                      className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                  </label>
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-blue-600 mt-10 mb-4">
                Select Your Own Service
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {customServices.map((service) => (
                  <label
                    key={service.title}
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedServices[service.title]
                        ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-500'
                        : 'bg-white border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    <div className="text-blue-600 text-2xl mr-4">{service.icon}</div>
                    <div className="flex-grow">
                      <p className="font-bold text-gray-800">{service.title}</p>
                      <p className="text-sm text-gray-500">{service.description}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={!!selectedServices[service.title]}
                      onChange={() => handleServiceToggle(service.title)}
                      className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                  </label>
                ))}
              </div>
            </div>
          )}
          {/* Add content for other steps here if needed, e.g., Step 2 */}
          {currentStep > 1 && (
            <div className="text-center p-10">
              <h3 className="text-2xl font-semibold text-gray-700">
                Step {currentStep} Content Goes Here
              </h3>
              <p className="text-gray-500 mt-2">
                This is a placeholder for the next steps of the appointment process.
              </p>
            </div>
          )}
        </div>

        {/* Footer with Next/Prev buttons */}
        <div className="p-5 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">
              Powered by <span className="font-bold text-blue-600">German Sport</span>
            </p>
          </div>
          <button
            // onClick={() => setCurrentStep(prev => prev + 1)} // This would be the real logic
            disabled={isNextDisabled}
            className="bg-blue-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppointmentModal
