import Image from "next/image"

export default function Specials() {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1630FF] uppercase leading-tight"
                style={{fontFamily: 'Antique Olive'}}
              >
                TODAY'S DEAL IS WAITING...
              </h2>
              <div className="relative">
                <p 
                  className="text-2xl md:text-3xl text-[#1630FF] font-bold transform -rotate-2"
                  style={{fontFamily: 'Antique Olive Nord'}}
                >
                  DON'T MISS OUT!
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#1630FF] text-white p-8 rounded-lg">
                <h3 
                  className="text-3xl md:text-4xl font-bold uppercase mb-4"
                  style={{fontFamily: 'Antique Olive'}}
                >
                  MONDAY MADNESS
                </h3>
                <p 
                  className="text-xl mb-4"
                  style={{fontFamily: 'Antique Olive Nord'}}
                >
                  BUY ONE LARGE SQUARE PIE, GET ONE 50% OFF!
                </p>
                <div className="text-lg font-bold">
                  <span className="line-through opacity-75">$32.99</span>
                  <span className="text-yellow-300 ml-3 text-2xl">NOW $24.74</span>
                </div>
              </div>
              
              <button 
                className="bg-[#1630FF] text-white px-12 py-4 text-xl font-bold uppercase rounded-lg hover:bg-blue-800 transition-colors w-full md:w-auto"
                style={{fontFamily: 'Antique Olive'}}
              >
                ORDER NOW
              </button>
            </div>
          </div>

          {/* Right Calendar Graphic */}
          <div className="relative">
            <div className="bg-[#1630FF] rounded-3xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 
                  className="text-3xl font-bold uppercase mb-2"
                  style={{fontFamily: 'Antique Olive'}}
                >
                  WEEKLY DEALS
                </h3>
                <p 
                  className="text-lg"
                  style={{fontFamily: 'Antique Olive Nord'}}
                >
                  SOMETHING FRESH EVERY DAY
                </p>
              </div>
              
              <div className="grid grid-cols-7 gap-2 text-center">
                {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                  <div key={day} className="text-sm font-bold mb-2" style={{fontFamily: 'Antique Olive Nord'}}>
                    {day}
                  </div>
                ))}
                
                {Array.from({length: 35}, (_, i) => {
                  const dayNum = i < 31 ? i + 1 : '';
                  const isToday = i === 6; // Monday
                  const hasDeals = [6, 13, 20, 27, 8, 15, 22, 29, 10, 17, 24, 31].includes(i);
                  
                  return (
                    <div 
                      key={i} 
                      className={`
                        h-10 w-10 flex items-center justify-center text-sm rounded
                        ${isToday ? 'bg-yellow-300 text-[#1630FF] font-bold' : 
                          hasDeals ? 'bg-white bg-opacity-20 font-bold' : 
                          'bg-white bg-opacity-10'}
                      `}
                      style={{fontFamily: 'Antique Olive Nord'}}
                    >
                      {dayNum}
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 text-center">
                <p 
                  className="text-sm font-bold uppercase"
                  style={{fontFamily: 'Antique Olive Nord'}}
                >
                  🍕 = PIZZA DEALS | 🍗 = WING SPECIALS | 🥗 = COMBO OFFERS
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#1630FF] rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}