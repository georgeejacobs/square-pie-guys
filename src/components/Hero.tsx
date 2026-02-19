import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#2C5AA0] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight tracking-tight">
          THIS IS YOUR<br />
          SIGN TO ORDER<br />
          SOME PIZZA.
        </h1>
      </div>
      
      {/* Modal/Popup Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 max-w-md mx-4 relative">
          <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="text-center mb-4">
            <div className="bg-orange-500 text-white text-xl font-bold px-4 py-2 rounded mb-2 inline-block">
              Get $20
            </div>
            <p className="text-gray-600 text-sm">
              Get $20 off your first order when you order through our mobile app.
            </p>
          </div>
          
          <div className="space-y-3">
            <input 
              type="email" 
              placeholder="Email Address"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <button className="w-full bg-[#2C5AA0] text-white py-2 rounded font-medium hover:bg-blue-700">
              GET STARTED
            </button>
          </div>
          
          <p className="text-xs text-gray-500 text-center mt-3">
            By clicking "Get Started", you agree to receive marketing emails from Square Pie Guys.
          </p>
        </div>
      </div>
    </section>
  );
}