export default function Specials() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <div>
            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'antique-olive-nord' }}>
                DEALS OVER HERE
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-primary mb-8" style={{ fontFamily: 'degular' }}>
                TODAY'S DEAL<br />
                IS STARTING...
              </h2>
            </div>
            
            <div className="space-y-4 mb-8" style={{ fontFamily: 'antique-olive-nord' }}>
              <p className="text-gray-700">
                Our monthly deals calendar is here! To see the deals, just use the calendar to the right and select your date.
              </p>
              <p className="text-gray-700">
                When ordering the deals we would recommend — if they offer pick up then choose that option, and if not, just order using delivery.
              </p>
            </div>
            
            <button className="bg-white border-2 border-primary text-primary px-6 py-3 font-medium hover:bg-primary hover:text-white transition-colors" style={{ fontFamily: 'degular' }}>
              More Info
            </button>
          </div>
          
          {/* Right side - Calendar */}
          <div className="relative">
            <div className="bg-blue-50 p-8 rounded-lg">
              {/* Handwritten style text */}
              <div className="text-right mb-4">
                <p className="text-lg italic text-gray-600" style={{ fontFamily: 'antique-olive-nord' }}>
                  For 26 Feb
                </p>
                <p className="text-lg italic text-gray-600" style={{ fontFamily: 'antique-olive-nord' }}>
                  Only on PIE
                </p>
              </div>
              
              {/* Calendar header */}
              <div className="text-right mb-6">
                <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: 'degular' }}>
                  DEALS<br />
                  CALENDAR
                </h3>
              </div>
              
              {/* Calendar grid */}
              <div className="bg-white p-4 rounded border-2 border-gray-200">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  <div className="text-xs font-medium text-gray-500 text-center p-2">SUN</div>
                  <div className="text-xs font-medium text-gray-500 text-center p-2">MON</div>
                  <div className="text-xs font-medium text-gray-500 text-center p-2">TUE</div>
                  <div className="text-xs font-medium text-gray-500 text-center p-2">WED</div>
                  <div className="text-xs font-medium text-gray-500 text-center p-2">THU</div>
                  <div className="text-xs font-medium text-gray-500 text-center p-2">FRI</div>
                  <div className="text-xs font-medium text-gray-500 text-center p-2">SAT</div>
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {/* Calendar days - simplified grid */}
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 3; // Offset for month start
                    const isCurrentMonth = day > 0 && day <= 28;
                    const isToday = day === 26;
                    
                    return (
                      <div key={i} className={`
                        h-8 w-8 flex items-center justify-center text-xs
                        ${isCurrentMonth ? 'text-gray-700' : 'text-gray-300'}
                        ${isToday ? 'bg-primary text-white rounded-full' : ''}
                      `}>
                        {isCurrentMonth ? day : ''}
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Handwritten style notes */}
              <div className="mt-4 text-right">
                <p className="text-sm italic text-gray-600" style={{ fontFamily: 'antique-olive-nord' }}>
                  daily
                </p>
                <p className="text-sm italic text-gray-600" style={{ fontFamily: 'antique-olive-nord' }}>
                  specials!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}