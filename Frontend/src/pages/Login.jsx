import React, { useState, useRef, useEffect } from 'react'
import { FaGoogle, FaCarSide } from 'react-icons/fa'
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiShield, FiUsers } from 'react-icons/fi'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom' // <-- Redirection ke liye import karein

// Helper component for form inputs (with error styling)
const FormInput = ({ icon, type, placeholder, value, onChange, hasError }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const isPasswordField = type === 'password'
  const togglePasswordVisibility = () => setIsPasswordVisible(!isPassword - visible)

  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
        {icon}
      </div>
      <input
        type={isPasswordField && isPasswordVisible ? 'text' : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`form-stagger w-full bg-slate-700/50 border-2 rounded-lg py-3 pr-12 pl-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-indigo-500 transition-colors duration-300 ${
          hasError ? 'border-red-500 ring-red-500' : 'border-slate-600 focus:ring-indigo-500'
        }`}
        required
      />
      {isPasswordField && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-white"
        >
          {isPasswordVisible ? <FiEyeOff /> : <FiEye />}
        </button>
      )}
    </div>
  )
}

// Main Login/SignUp Component
const Login = () => {
  const navigate = useNavigate() // <-- Redirection ke liye hook initialize karein

  const [isLoginView, setIsLoginView] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signUpRole, setSignUpRole] = useState('customer')
  const [loginRole, setLoginRole] = useState('customer')
  const [error, setError] = useState('') // <-- Error handling ke liye state

  const containerRef = useRef(null)
  const formContentRef = useRef(null)

  // GSAP animations (No changes)
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
      tl.from('.image-panel', { xPercent: -100, duration: 1.2 })
        .from('.image-panel img', { scale: 1.3, duration: 1.5 }, '<')
        .from('.form-panel', { xPercent: 100, duration: 1.2 }, '<')
        .from('.form-stagger', { opacity: 0, y: 20, stagger: 0.1, duration: 0.8 }, '-=0.8')
        .from('.text-stagger', { opacity: 0, y: 20, stagger: 0.2, duration: 1 }, '<')
    },
    { scope: containerRef },
  )

  const animateFormSwitch = () => {
    if (formContentRef.current) {
      gsap.to(formContentRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => setIsLoginView(!isLoginView),
      })
    }
  }

  useEffect(() => {
    setError('') // View switch hone par error clear karein
    if (formContentRef.current) {
      gsap.fromTo(
        formContentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.1 },
      )
    }
  }, [isLoginView])

  // --- UPDATED SUBMIT LOGIC ---
  const handleSubmit = (e) => {
    e.preventDefault()
    setError('') // Har submit par error reset karein

    if (isLoginView) {
      // Admin Login Logic
      if (loginRole === 'admin') {
        if (email === 'admin@example.com' && password === 'admin123') {
          console.log('Admin login successful!')
          navigate('/admin') // <-- SUCCESS: Admin dashboard par redirect karein
        } else {
          setError('Invalid admin credentials.') // <-- FAILURE: Error message set karein
        }
        return // Yahan se function rok dein
      }

      // Customer Login Logic (Placeholder)
      if (loginRole === 'customer') {
        console.log('Logging in as customer:', { email, password })
        setError('Customer login is not available yet.')
        // navigate('/customer/dashboard') // future implementation
      }
    } else {
      // Sign-up Logic (Placeholder)
      console.log('Signing up as:', { name, email, password, role: signUpRole })
      alert('Sign up is currently disabled.')
    }
  }

  const handleGoogleSignIn = () => {
    const roleToUse = isLoginView ? loginRole : signUpRole
    console.log(`Signing in with Google as: ${roleToUse}`)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-900 flex font-sans overflow-hidden">
      {/* ===== LEFT IMAGE PANEL (No Changes) ===== */}
      <div className="image-panel hidden lg:flex lg:w-1/2 bg-gray-800 relative items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60"
          alt="Sports car"
          className="absolute h-full w-full object-cover"
        />
        <div className="absolute h-full w-full bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="relative z-10 text-center text-white p-12">
          <h1 className="text-stagger text-4xl xl:text-5xl font-bold tracking-tight mb-4">
            Precision Engineering.
            <br />
            Expert Care.
          </h1>
          <p className="text-stagger text-lg xl:text-xl text-slate-300">
            Welcome to the German Sport Specialists portal.
          </p>
        </div>
      </div>

      {/* ===== RIGHT FORM PANEL ===== */}
      <div className="form-panel w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-slate-900">
        <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <div className="form-stagger inline-block p-3 bg-slate-700/50 rounded-full mb-4">
              <FaCarSide className="text-indigo-400 text-3xl" />
            </div>
            <h1 className="form-stagger text-3xl font-bold tracking-tight text-white mb-2">
              {isLoginView
                ? `${loginRole.charAt(0).toUpperCase() + loginRole.slice(1)} Login`
                : 'Create Account'}
            </h1>
            <p className="form-stagger text-slate-400">
              {isLoginView
                ? `Sign in to access your ${loginRole} dashboard`
                : 'Join us to experience the difference'}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div ref={formContentRef}>
              {/* Login View */}
              {isLoginView && (
                <>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <button
                      type="button"
                      onClick={() => {
                        setLoginRole('customer')
                        setError('')
                      }}
                      className={`flex items-center justify-center gap-2 p-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        loginRole === 'customer'
                          ? 'bg-indigo-600 text-white shadow-lg scale-105'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      <FiUsers /> Customer
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLoginRole('admin')
                        setError('')
                      }}
                      className={`flex items-center justify-center gap-2 p-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        loginRole === 'admin'
                          ? 'bg-indigo-600 text-white shadow-lg scale-105'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      <FiShield /> Admin
                    </button>
                  </div>
                  <FormInput
                    icon={<FiMail />}
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    hasError={!!error}
                  />
                  <FormInput
                    icon={<FiLock />}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    hasError={!!error}
                  />
                </>
              )}

              {/* Sign-Up View (No functional changes) */}
              {!isLoginView && <>{/* ... sign-up fields ... */}</>}
            </div>

            {/* Display Error Message */}
            {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}

            {isLoginView && (
              <div className="text-right mb-6">
                <a
                  href="#"
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Forgot Password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-indigo-500"
            >
              {isLoginView
                ? `Login as ${loginRole.charAt(0).toUpperCase() + loginRole.slice(1)}`
                : 'Create Account'}
            </button>
          </form>

          {/* Other elements (No changes) */}
          <div className="flex items-center justify-center space-x-4 my-8">
            <span className="h-px w-full bg-slate-600"></span>
            <span className="text-slate-400 font-medium text-sm">OR</span>
            <span className="h-px w-full bg-slate-600"></span>
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 bg-slate-200 text-slate-800 font-bold py-3 px-6 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
          >
            <FaGoogle />
            <span>
              {isLoginView ? `Sign in as ${loginRole}` : `Sign up as ${signUpRole}`} with Google
            </span>
          </button>
          <p className="text-center text-sm text-slate-400 mt-8">
            {isLoginView ? "Don't have an account?" : 'Already have an account?'}
            <button
              onClick={animateFormSwitch}
              className="font-semibold text-indigo-400 hover:text-indigo-300 ml-2"
            >
              {isLoginView ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
