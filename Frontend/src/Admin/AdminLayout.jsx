// src/Admin/AdminLayout.jsx

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import Dashboard from './Dashboard'
import NewEstimate from './NewEstimate'
import Estimates from './Estimates'
import Customers from './Customers'
import Vendors from './Vendors'
import Reports from './Reports'
import Settings from './Settings'

const AdminLayout = () => {
  return (
    // Main flex container for the whole admin dashboard
    <div className="flex h-screen bg-surface text-text-primary font-sans">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content Area (Header + Page Content) */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header Component */}
        <Header />

        {/* Page Content - scrollable */}
        {/* Yahan humne background color ko light kiya hai jaisa image mein hai */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 bg-content-bg">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/new-estimate" element={<NewEstimate />} />
            <Route path="/estimates" element={<Estimates />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
