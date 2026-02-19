"use client"

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#1630FF] pt-16 pb-0">
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%) }
          100% { transform: translateX(-100%) }
        }
        .marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
      
      <div className="px-4 md:px-8 lg:px-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Main Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase leading-none" style={{fontFamily: 'Antique Olive'}}>
                SQUARE PIE<br />GUYS
              </h2>
            </div>
            <p className="text-white text-lg md:text-xl mb-6" style={{fontFamily: 'Antique Olive Nord'}}>
              DETROIT STYLE PIZZA • SQUARE PIES • BOLD FLAVORS
            </p>
            <div className="text-white" style={{fontFamily: 'Antique Olive Nord'}}>
              <p className="mb-2 text-lg">123 PIE STREET</p>
              <p className="mb-2 text-lg">DETROIT, MI 48201</p>
              <p className="mb-2 text-lg">(313) 555-PIES</p>
              <p className="text-lg">INFO@SQUAREPIE.COM</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white uppercase mb-6" style={{fontFamily: 'Antique Olive'}}>
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-white" style={{fontFamily: 'Antique Olive Nord'}}>
              <li><a href="#" className="text-lg hover:underline">MENU</a></li>
              <li><a href="#" className="text-lg hover:underline">LOCATIONS</a></li>
              <li><a href="#" className="text-lg hover:underline">ABOUT</a></li>
              <li><a href="#" className="text-lg hover:underline">CATERING</a></li>
              <li><a href="#" className="text-lg hover:underline">CONTACT</a></li>
              <li><a href="#" className="text-lg hover:underline">CAREERS</a></li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white uppercase mb-6" style={{fontFamily: 'Antique Olive'}}>
              CONNECT
            </h3>
            <div className="space-y-4 text-white" style={{fontFamily: 'Antique Olive Nord'}}>
              <div>
                <p className="text-lg font-bold mb-2">FOLLOW US</p>
                <div className="space-y-2">
                  <p><a href="#" className="hover:underline">INSTAGRAM</a></p>
                  <p><a href="#" className="hover:underline">FACEBOOK</a></p>
                  <p><a href="#" className="hover:underline">TWITTER</a></p>
                  <p><a href="#" className="hover:underline">TIKTOK</a></p>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold mb-2">HOURS</p>
                <p>MON-THU: 11AM-10PM</p>
                <p>FRI-SAT: 11AM-11PM</p>
                <p>SUN: 12PM-9PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white" style={{fontFamily: 'Antique Olive Nord'}}>
            <p className="mb-4 md:mb-0">© 2024 SQUARE PIE GUYS. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:underline">PRIVACY POLICY</a>
              <a href="#" className="hover:underline">TERMS OF SERVICE</a>
              <a href="#" className="hover:underline">ACCESSIBILITY</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="w-full bg-white text-[#1630FF] py-4 overflow-hidden">
        <div className="whitespace-nowrap">
          <div className="inline-block marquee">
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase px-8" style={{fontFamily: 'Antique Olive'}}>
              WE SAY PIE • YOU SAY PIZZA • SQUARE PIE GUYS • DETROIT STYLE PIZZA • WE SAY PIE • YOU SAY PIZZA • SQUARE PIE GUYS • DETROIT STYLE PIZZA • WE SAY PIE • YOU SAY PIZZA • SQUARE PIE GUYS • DETROIT STYLE PIZZA • WE SAY PIE • YOU SAY PIZZA • SQUARE PIE GUYS • DETROIT STYLE PIZZA
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}