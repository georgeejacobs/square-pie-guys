import Image from "next/image";

export default function Specials() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="text-xs font-bold text-[#2C5AA0] uppercase tracking-wide">
              DEALS EVERY WEEK
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2C5AA0] leading-tight">
              TODAY'S DEAL<br />
              IS WAITING...
            </h2>
            <p className="text-base text-black">
              Our monthly deals calendar is here!
            </p>
            <p className="text-sm text-gray-600 max-w-md">
              Save money. Check out our calendar packed with special deals daily. From deals where you get additional items for cheap to completely free options...
            </p>
            <button className="bg-[#2C5AA0] text-white px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-blue-700 transition-colors">
              VIEW DEALS
            </button>
          </div>
          <div className="relative">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div className="text-sm text-gray-600">
                  For my pizza lovers only!
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-[#2C5AA0]">DEALS</div>
                  <div className="text-xs text-gray-600">CALENDAR</div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-xs">
                <div className="text-center p-2 text-gray-400">S</div>
                <div className="text-center p-2 text-gray-400">M</div>
                <div className="text-center p-2 text-gray-400">T</div>
                <div className="text-center p-2 text-gray-400">W</div>
                <div className="text-center p-2 text-gray-400">T</div>
                <div className="text-center p-2 text-gray-400">F</div>
                <div className="text-center p-2 text-gray-400">S</div>
                <div className="text-center p-2"></div>
                <div className="text-center p-2"></div>
                <div className="text-center p-2"></div>
                <div className="text-center p-2"></div>
                <div className="text-center p-2"></div>
                <div className="text-center p-2 bg-[#2C5AA0] text-white rounded">1</div>
                <div className="text-center p-2">2</div>
                <div className="text-center p-2">3</div>
                <div className="text-center p-2">4</div>
                <div className="text-center p-2">5</div>
                <div className="text-center p-2">6</div>
                <div className="text-center p-2">7</div>
                <div className="text-center p-2">8</div>
                <div className="text-center p-2">9</div>
                <div className="text-center p-2">10</div>
                <div className="text-center p-2">11</div>
                <div className="text-center p-2">12</div>
                <div className="text-center p-2">13</div>
                <div className="text-center p-2">14</div>
                <div className="text-center p-2">15</div>
                <div className="text-center p-2">16</div>
                <div className="text-center p-2">17</div>
                <div className="text-center p-2">18</div>
                <div className="text-center p-2">19</div>
                <div className="text-center p-2">20</div>
                <div className="text-center p-2">21</div>
                <div className="text-center p-2">22</div>
                <div className="text-center p-2">23</div>
                <div className="text-center p-2">24</div>
                <div className="text-center p-2">25</div>
                <div className="text-center p-2">26</div>
                <div className="text-center p-2">27</div>
                <div className="text-center p-2">28</div>
                <div className="text-center p-2">29</div>
                <div className="text-center p-2">30</div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 transform rotate-12">
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                deals!
              </div>
            </div>
            <svg className="absolute -top-4 -left-4 w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 100 100">
              <path d="M20,80 Q10,70 20,60 Q30,50 20,40 Q10,30 20,20 L80,20 Q90,30 80,40 Q70,50 80,60 Q90,70 80,80 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}