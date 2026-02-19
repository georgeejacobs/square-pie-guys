import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2C5AA0]">
      <div className="w-full">
        {/* Scrolling ticker */}
        <div className="relative overflow-hidden bg-[#2C5AA0] py-2">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-white text-sm font-medium mx-8">FOLLOW US</span>
            <span className="text-white text-sm font-medium mx-8">FOR THE LATEST</span>
            <span className="text-white text-sm font-medium mx-8">DEALS & NEWS</span>
            <span className="text-white text-sm font-medium mx-8">FOLLOW US</span>
            <span className="text-white text-sm font-medium mx-8">FOR THE LATEST</span>
            <span className="text-white text-sm font-medium mx-8">DEALS & NEWS</span>
            <span className="text-white text-sm font-medium mx-8">FOLLOW US</span>
            <span className="text-white text-sm font-medium mx-8">FOR THE LATEST</span>
            <span className="text-white text-sm font-medium mx-8">DEALS & NEWS</span>
          </div>
        </div>
        
        {/* Footer content */}
        <div className="px-4 py-8 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo and social */}
              <div className="md:col-span-1">
                <div className="mb-4">
                  <Image 
                    src="/image-6.webp" 
                    alt="Square Pie Guys" 
                    width={150} 
                    height={30}
                    className="h-8 w-auto"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#2C5AA0] text-sm font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#2C5AA0] text-sm font-bold">@</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#2C5AA0] text-sm font-bold">in</span>
                  </div>
                </div>
              </div>
              
              {/* Links columns */}
              <div className="md:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-white font-bold mb-4">MENU</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-white hover:opacity-80">Pizza</a></li>
                      <li><a href="#" className="text-white hover:opacity-80">Salads</a></li>
                      <li><a href="#" className="text-white hover:opacity-80">Sides</a></li>
                      <li><a href="#" className="text-white hover:opacity-80">Drinks</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold mb-4">COMPANY</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-white hover:opacity-80">About</a></li>
                      <li><a href="#" className="text-white hover:opacity-80">Careers</a></li>
                      <li><a href="#" className="text-white hover:opacity-80">Press</a></li>
                      <li><a href="#" className="text-white hover:opacity-80">Contact</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold mb-4">SUPPORT</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-white hover:opacity-80">Help Center</a></li>
                      <li><a href="#" className="text-white hover:opacity-80">Terms</a></li>
                      <li><a href="#" className="text-white hover:opacity-80">Privacy</a></li>
                      <li><a href="#" className="text-white hover:opacity-80">Accessibility</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom row */}
            <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white text-sm mb-4 md:mb-0">© 2024 Square Pie Guys. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-white text-sm hover:opacity-80">Privacy Policy</a>
                <a href="#" className="text-white text-sm hover:opacity-80">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </footer>
  );
}