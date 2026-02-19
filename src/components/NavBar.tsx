"use client"

import Image from "next/image"

export default function NavBar() {
  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image 
              src="/image-6.webp" 
              alt="Square Pie Guys" 
              width={200} 
              height={26}
              className="h-8 lg:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-black hover:text-[var(--color-primary)] font-medium transition-colors">
              ORDER ONLINE
            </a>
            <a href="#" className="text-black hover:text-[var(--color-primary)] font-medium transition-colors">
              MENU
            </a>
            <a href="#" className="text-black hover:text-[var(--color-primary)] font-medium transition-colors">
              ABOUT
            </a>
            <a href="#" className="text-black hover:text-[var(--color-primary)] font-medium transition-colors">
              LOCATIONS
            </a>
            <a href="#" className="text-black hover:text-[var(--color-primary)] font-medium transition-colors">
              CAREERS
            </a>
            <a href="#" className="text-black hover:text-[var(--color-primary)] font-medium transition-colors">
              EVENTS
            </a>
            <a href="#" className="text-black hover:text-[var(--color-primary)] font-medium transition-colors">
              CATERING
            </a>
            <a href="#" className="text-black hover:text-[var(--color-primary)] font-medium transition-colors">
              PRESS
            </a>
            <a href="#" className="text-black hover:text-[var(--color-primary)] font-medium transition-colors">
              CONTACT US
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden flex items-center justify-center w-10 h-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}