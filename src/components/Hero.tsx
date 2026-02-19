"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#1440a0] relative">
      {/* Hero Content */}
      <div className="px-6 pt-32 pb-16 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black text-white uppercase leading-tight mb-8">
          THIS IS YOUR<br />
          SIGN TO ORDER<br />
          SOME PIZZA
        </h1>
        
        <p className="text-white text-xl md:text-2xl max-w-2xl mb-12">
          Detroit-style pizza with a crispy, caramelized crust and signature square shape. Order online for pickup or delivery.
        </p>
        
        <button className="bg-[#f39c12] text-black font-bold text-xl px-12 py-4 rounded-none hover:bg-opacity-90 transition-opacity">
          ORDER NOW
        </button>
      </div>

      {/* Promotional Popup Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
          <button className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl">
            ×
          </button>
          
          <div className="text-center">
            <h2 className="text-3xl font-black text-[#f39c12] mb-2">
              Get $29
            </h2>
            <h3 className="text-xl font-bold text-black mb-4">
              OG Bundle Deal
            </h3>
            
            <div className="mb-6">
              <Image 
                src="/image-8.webp" 
                alt="Pizza bundle"
                width={240}
                height={240}
                className="mx-auto rounded-lg"
              />
            </div>
            
            <p className="text-gray-700 mb-6">
              Get our signature Detroit-style pizza bundle with sides and drinks.
            </p>
            
            <button className="w-full bg-[#f39c12] text-black font-bold text-lg py-3 rounded-none hover:bg-opacity-90 transition-opacity">
              Order Here!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}