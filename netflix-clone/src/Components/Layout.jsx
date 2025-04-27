import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Outlet /> {/* This renders the current page */}
    </div>
  )
}

export default Layout;