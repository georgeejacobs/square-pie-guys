export default function Specials() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <svg className="w-48 h-12 mb-6" viewBox="0 0 200 50" fill="none">
                <path d="M10 25 Q 30 10, 50 25 Q 70 40, 90 25 Q 110 10, 130 25 Q 150 40, 170 25 Q 180 30, 190 25" 
                      stroke="#f39c12" strokeWidth="2" fill="none"/>
                <text x="10" y="30" className="text-xl" fill="#f39c12" fontFamily="cursive">Deals Over Here</text>
              </svg>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black text-[#1440a0] mb-8 leading-tight">
              TODAY'S DEAL<br />
              IS WAITING...
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Our monthly deals calendar is how to take what made us what we 
                are — the best Detroit-style pizza — and make it more affordable 
                so you can visit us more often.
              </p>
              
              <p>
                Follow us online for special announcements — new specials, 
                late releases, check-outs, and store discounts and such things.
              </p>
            </div>
          </div>
          
          {/* Right Content - Deals Calendar */}
          <div className="relative">
            <div className="bg-gray-50 p-8 rounded-lg relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl lg:text-3xl font-black text-[#1440a0] mb-2">DEALS</h3>
                <h4 className="text-xl lg:text-2xl font-black text-[#1440a0]">CALENDAR</h4>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                <div className="text-center font-semibold text-sm p-2">S</div>
                <div className="text-center font-semibold text-sm p-2">M</div>
                <div className="text-center font-semibold text-sm p-2">T</div>
                <div className="text-center font-semibold text-sm p-2">W</div>
                <div className="text-center font-semibold text-sm p-2">T</div>
                <div className="text-center font-semibold text-sm p-2">F</div>
                <div className="text-center font-semibold text-sm p-2">S</div>
                
                {/* Calendar dates */}
                {Array.from({length: 35}, (_, i) => (
                  <div key={i} className="text-center text-sm p-2 border border-gray-200">
                    {i > 4 && i < 35 ? i - 4 : ''}
                  </div>
                ))}
              </div>
              
              {/* Handwritten annotations */}
              <svg className="absolute top-16 left-12 w-24 h-16" viewBox="0 0 100 80">
                <path d="M10 20 Q 30 10, 50 20 L 80 15" stroke="#f39c12" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#f39c12"/>
                  </marker>
                </defs>
              </svg>
              
              <div className="absolute top-8 left-2 transform -rotate-12">
                <span className="text-sm font-handwriting text-[#f39c12]" style={{fontFamily: 'cursive'}}>
                  deals deals!
                </span>
              </div>
              
              <div className="absolute bottom-4 right-4 transform rotate-6">
                <span className="text-sm font-handwriting text-[#f39c12]" style={{fontFamily: 'cursive'}}>
                  check it out!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}