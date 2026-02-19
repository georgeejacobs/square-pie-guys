"use client"

import Image from "next/image";

export default function NavBar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image 
              src="/image-6.webp" 
              alt="Square Pie Guys" 
              width={150} 
              height={20}
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">HOME</a>
            <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">ABOUT</a>
            <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">MENU</a>
            <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">LOCATIONS</a>
            <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">CONTACT</a>
            <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">CAREERS</a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button className="flex items-center text-gray-900 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 6H3m4 7v4a2 2 0 002 2h8a2 2 0 002-2v-4m-6 4h2" />
              </svg>
              <span className="ml-1 text-sm font-medium">Cart</span>
            </button>

            {/* Order Now Button */}
            <a 
              href="https://order.online/business/square-pie-guys-233210/?hideModal=true&pickup=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Order Now
            </a>

            {/* Mobile menu button */}
            <button className="md:hidden flex items-center justify-center w-8 h-8 text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}