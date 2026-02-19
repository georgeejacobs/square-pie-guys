"use client"

import Image from "next/image"
import { useState } from "react"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#2E3AA1] text-white relative">
      {/* Top banner */}
      <div className="bg-[#1a237e] py-2 px-4 text-center text-sm">
        <div className="marquee-container overflow-hidden">
          <div className="marquee-content whitespace-nowrap animate-marquee">
            ORDER ONLINE FOR PICKUP • DELIVERY AVAILABLE • ORDER ONLINE FOR PICKUP • DELIVERY AVAILABLE • 
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image 
              src="/image-6.webp" 
              alt="Square Pie Guys" 
              width={180} 
              height={24}
              className="h-6 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <a href="#" className="hover:text-gray-300 transition-colors font-medium">MENU</a>
            <a href="#" className="hover:text-gray-300 transition-colors font-medium">LOCATIONS</a>
            <a href="#" className="hover:text-gray-300 transition-colors font-medium">REWARDS</a>
            <a href="#" className="hover:text-gray-300 transition-colors font-medium">GIFT CARDS</a>
            <a href="#" className="hover:text-gray-300 transition-colors font-medium">CATERING</a>
            <a href="#" className="hover:text-gray-300 transition-colors font-medium">ABOUT</a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-white text-[#2E3AA1] px-6 py-2 rounded font-bold hover:bg-gray-100 transition-colors">
              ORDER ONLINE
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-4 pb-4">
            <a href="#" className="hover:text-gray-300 transition-colors font-medium">MENU</a>
            <a href="#" className="hover:text-gray-300 transition-colors font-medium">LOCATIONS</a>
            <a href="#" className="hover:text-gray-300 transition-colors font-medium">REWARDS</a>
            <a href="#" className="hover:text-gray-300 transition-colors font-medium">GIFT CARDS</a>
            <a href="#" className="hover:text-gray-300 transition-colors font-medium">CATERING</a>
            <a href="#" className="hover:text-gray-300 transition-colors font-medium">ABOUT</a>
            <button className="md:hidden bg-white text-[#2E3AA1] px-6 py-2 rounded font-bold hover:bg-gray-100 transition-colors w-full">
              ORDER ONLINE
            </button>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </header>
  )
}