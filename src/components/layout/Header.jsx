import React, { useState } from 'react'
import {Menu,X} from "lucide-react";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen,setIsOpen]=useState(false);

  return (
      <nav className="bg-white shadow-md fixed w-full z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-blue-600">CineMate</a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className="text-gray-700 hover:text-blue-600 transition">Home</NavLink>
            <NavLink to="/about" className="text-gray-700 hover:text-blue-600 transition">About</NavLink>
            <NavLink to="/movie" className="text-gray-700 hover:text-blue-600 transition">Movie</NavLink>
            <NavLink to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</NavLink>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</NavLink>
          <NavLink to="/about" className="block py-2 text-gray-700 hover:text-blue-600">About</NavLink>
          <NavLink to="/movie" className="block py-2 text-gray-700 hover:text-blue-600">Movie</NavLink>
          <NavLink to="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</NavLink>
        </div>
      )}
    </nav>
  )
}

export default Header