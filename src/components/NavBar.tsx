"use client"

import Image from "next/image"
import { useState } from "react"

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image 
              src="/image-6.webp" 
              alt="Square Pie Guys" 
              width={200} 
              height={26}
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Menu</a>
            <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Locations</a>
            <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Catering</a>
            <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">About</a>
            <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Contact</a>
          </nav>

          {/* Desktop CTA and Cart */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://order.online/business/square-pie-guys-233210/?hideModal=true&pickup=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Order Now
            </a>
            <button className="flex items-center space-x-2 text-gray-900 hover:text-blue-600">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v6a1 1 0 001 1h9a1 1 0 001-1v-6m-10 0h10" />
              </svg>
              <span className="font-medium">Cart</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Menu</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Locations</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Catering</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">About</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Contact</a>
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
                <a 
                  href="https://order.online/business/square-pie-guys-233210/?hideModal=true&pickup=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium text-center hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </a>
                <button className="flex items-center justify-center space-x-2 text-gray-900 hover:text-blue-600">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v6a1 1 0 001 1h9a1 1 0 001-1v-6m-10 0h10" />
                  </svg>
                  <span className="font-medium">Cart</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}