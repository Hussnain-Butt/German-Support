// src/Admin/Sidebar.jsx

import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

// --- CHANGE 1: Solid icons ko import karein taake dynamic switching ho sake ---
import {
  ChartBarIcon as ChartBarIconOutline,
  PlusIcon as PlusIconOutline,
  DocumentTextIcon as DocumentTextIconOutline,
  UserGroupIcon as UserGroupIconOutline,
  TagIcon as TagIconOutline,
  PresentationChartLineIcon as PresentationChartLineIconOutline,
  Cog6ToothIcon as Cog6ToothIconOutline,
  ArrowRightOnRectangleIcon as ArrowRightOnRectangleIconOutline,
} from '@heroicons/react/24/outline'
import {
  ChartBarIcon as ChartBarIconSolid,
  PlusIcon as PlusIconSolid,
  DocumentTextIcon as DocumentTextIconSolid,
  UserGroupIcon as UserGroupIconSolid,
  TagIcon as TagIconSolid,
  PresentationChartLineIcon as PresentationChartLineIconSolid,
  Cog6ToothIcon as Cog6ToothIconSolid,
  ArrowRightOnRectangleIcon as ArrowRightOnRectangleIconSolid,
} from '@heroicons/react/24/solid'

import logo from '../assets/logo.jpg'

const ADMIN_BASE_PATH = '/admin'

// --- CHANGE 2: Har link ke liye solid aur outline dono icons ko define karein ---
const navLinks = [
  {
    text: 'Dashboard',
    path: `${ADMIN_BASE_PATH}`,
    iconOutline: ChartBarIconOutline,
    iconSolid: ChartBarIconSolid,
  },
  {
    text: 'New Estimate',
    path: `${ADMIN_BASE_PATH}/new-estimate`,
    iconOutline: PlusIconOutline,
    iconSolid: PlusIconSolid,
  },
  {
    text: 'Estimates',
    path: `${ADMIN_BASE_PATH}/estimates`,
    iconOutline: DocumentTextIconOutline,
    iconSolid: DocumentTextIconSolid,
  },
  {
    text: 'Customers',
    path: `${ADMIN_BASE_PATH}/customers`,
    iconOutline: UserGroupIconOutline,
    iconSolid: UserGroupIconSolid,
  },
  {
    text: 'Vendors',
    path: `${ADMIN_BASE_PATH}/vendors`,
    iconOutline: TagIconOutline,
    iconSolid: TagIconSolid,
  },
  {
    text: 'Reports',
    path: `${ADMIN_BASE_PATH}/reports`,
    iconOutline: PresentationChartLineIconOutline,
    iconSolid: PresentationChartLineIconSolid,
  },
]

const Sidebar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  const NavLinkItem = ({ to, end, iconOutline: IconOutline, iconSolid: IconSolid, text }) => (
    <NavLink to={to} end={end}>
      {({ isActive }) => (
        <div
          className={`flex items-center w-full p-3 my-1 rounded-lg transition-all duration-300 group ${
            isActive
              ? 'bg-primary text-white shadow-lg'
              : 'text-text-secondary hover:text-text-primary hover:bg-white/5 transform hover:translate-x-1'
          }`}
        >
          {isActive ? (
            <IconSolid className="h-6 w-6 mr-4" />
          ) : (
            <IconOutline className="h-6 w-6 mr-4" />
          )}
          <span className="font-semibold text-sm">{text}</span>
        </div>
      )}
    </NavLink>
  )

  return (
    // --- CHANGE 3: Right border add kiya gaya hai aur padding adjust ki gayi hai ---
    <aside className="w-64 flex-shrink-0 bg-surface p-5 flex flex-col justify-between h-screen border-r border-border">
      <div>
        {/* Logo and Title Section */}
        <div className="flex items-center space-x-4 mb-10">
          <img src={logo} alt="Estimaro Logo" className="h-12 w-12" />
          <div>
            <h1 className="text-text-primary text-lg font-bold">German Sport</h1>
            <p className="text-sm text-text-secondary">Estimaro</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link.text}>
                <NavLinkItem
                  to={link.path}
                  end={link.path === ADMIN_BASE_PATH}
                  iconOutline={link.iconOutline}
                  iconSolid={link.iconSolid}
                  text={link.text}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-border pt-5">
        <NavLinkItem
          to={`${ADMIN_BASE_PATH}/settings`}
          iconOutline={Cog6ToothIconOutline}
          iconSolid={Cog6ToothIconSolid}
          text="Settings"
        />

        {/* Logout button ko bhi NavLinkItem jaisa look & feel diya gaya hai for consistency */}
        <button
          onClick={handleLogout}
          className="flex items-center w-full p-3 my-1 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transform hover:translate-x-1 transition-all duration-300 group"
        >
          <ArrowRightOnRectangleIconOutline className="h-6 w-6 mr-4" />
          <span className="font-semibold text-sm">Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
