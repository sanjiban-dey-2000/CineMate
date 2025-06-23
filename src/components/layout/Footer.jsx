import React from 'react'
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
     <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-xl font-semibold text-blue-600">CineMate</div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-6 text-gray-600">
            <a href="/" className="hover:text-blue-600 transition">Home</a>
            <a href="/about" className="hover:text-blue-600 transition">About</a>
            <a href="/services" className="hover:text-blue-600 transition">Services</a>
            <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-600">
            <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5 hover:text-blue-600" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5 hover:text-blue-400" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5 hover:text-blue-700" /></a>
            <a href="#" aria-label="GitHub"><Github className="w-5 h-5 hover:text-black" /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} BrandName. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer