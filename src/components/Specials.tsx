export default function Specials() {
  return (
    <section className="bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="flex-1 max-w-2xl">
            <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">
              SKILL OVER HYPE
            </p>
            
            <h2 className="text-accent text-4xl lg:text-6xl font-black mb-8 leading-tight">
              TODAY'S DEAL<br />
              IS WAITING...
            </h2>
            
            <div className="mb-8">
              <p className="text-text text-lg mb-4">
                Our specialty pizzas showcase in town this month, and our seasonal partnerships from local makers will be featured throughout the month.
              </p>
              
              <p className="text-text text-lg mb-4">
                Today's feature is either an announcement on — a new pizza idea that we test out and feature, and our feature items.
              </p>
              
              <p className="text-text text-lg">
                We feature our PepSquare, CheeseSquare, and our BreadSquare. Look for special promos and partnerships all month long.
              </p>
            </div>
            
            <button className="bg-accent text-background px-8 py-3 rounded font-medium hover:bg-primary transition-colors">
              VIEW TODAY'S DEAL
            </button>
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative">
              <svg width="300" height="240" viewBox="0 0 300 240" className="text-accent">
                <rect x="40" y="40" width="220" height="160" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
                <g className="text-sm">
                  {/* Calendar grid */}
                  {Array.from({ length: 7 }, (_, i) => (
                    <line key={i} x1={40 + (i * 220/7)} y1="40" x2={40 + (i * 220/7)} y2="200" stroke="currentColor" strokeWidth="1" />
                  ))}
                  {Array.from({ length: 6 }, (_, i) => (
                    <line key={i} x1="40" y1={40 + (i * 160/5)} x2="260" y2={40 + (i * 160/5)} stroke="currentColor" strokeWidth="1" />
                  ))}
                </g>
                
                {/* Calendar numbers */}
                <text x="55" y="75" className="fill-current text-xs">1</text>
                <text x="85" y="75" className="fill-current text-xs">2</text>
                <text x="115" y="75" className="fill-current text-xs">3</text>
                <text x="145" y="75" className="fill-current text-xs">4</text>
                <text x="175" y="75" className="fill-current text-xs">5</text>
                <text x="205" y="75" className="fill-current text-xs">6</text>
                <text x="235" y="75" className="fill-current text-xs">7</text>
                
                <text x="55" y="105" className="fill-current text-xs">8</text>
                <text x="85" y="105" className="fill-current text-xs">9</text>
                <text x="115" y="105" className="fill-current text-xs">10</text>
                <text x="145" y="105" className="fill-current text-xs">11</text>
                <text x="175" y="105" className="fill-current text-xs">12</text>
                <text x="205" y="105" className="fill-current text-xs">13</text>
                <text x="235" y="105" className="fill-current text-xs">14</text>
                
                {/* Handwritten style label */}
                <text x="150" y="230" textAnchor="middle" className="fill-current text-lg font-medium">
                  DEALS CALENDAR
                </text>
                
                {/* Decorative underline */}
                <path d="M80 235 Q150 240 220 235" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}