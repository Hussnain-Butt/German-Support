// src/App.js

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import main layout and pages
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import Login from './pages/Login'

// Import the new Admin Layout
import AdminLayout from './Admin/AdminLayout'

function App() {
  return (
    <Router>
      <Routes>
        {/* Route #1: Public website with Header and Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* Add other public pages like /about, /contact here */}
        </Route>

        {/* Route #2: Full-screen login page (No Header/Footer) */}
        <Route path="/login" element={<Login />} />

        {/* Route #3: Admin Dashboard Area (No public Header/Footer) */}
        {/* The "/*" allows nested routes inside AdminLayout to work */}
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </Router>
  )
}

export default App
