import Image from "next/image";

export default function Features() {
  return (
    <section className="w-full bg-[#1630FF] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-white">
            <h2 
              className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight mb-6"
              style={{fontFamily: 'Antique Olive'}}
            >
              MONDAY
              <br />
              BIG BOX
            </h2>
            <p 
              className="text-lg md:text-xl lg:text-2xl mb-8"
              style={{fontFamily: 'Antique Olive Nord'}}
            >
              START YOUR WEEK RIGHT WITH OUR MASSIVE MONDAY SPECIAL. FOUR DETROIT-STYLE SQUARES PLUS SIDES THAT'LL KEEP YOU SATISFIED ALL DAY.
            </p>
            <div className="space-y-4">
              <div 
                className="text-base md:text-lg"
                style={{fontFamily: 'Antique Olive Nord'}}
              >
                • 4 DETROIT-STYLE PIZZA SQUARES
              </div>
              <div 
                className="text-base md:text-lg"
                style={{fontFamily: 'Antique Olive Nord'}}
              >
                • CRISPY WINGS
              </div>
              <div 
                className="text-base md:text-lg"
                style={{fontFamily: 'Antique Olive Nord'}}
              >
                • LOADED FRIES
              </div>
              <div 
                className="text-base md:text-lg"
                style={{fontFamily: 'Antique Olive Nord'}}
              >
                • FRESH SALAD
              </div>
            </div>
            <button 
              className="bg-white text-[#1630FF] px-8 py-4 text-lg font-bold uppercase mt-8 hover:bg-gray-100 transition-colors"
              style={{fontFamily: 'Antique Olive'}}
            >
              ORDER NOW
            </button>
          </div>
          <div className="relative">
            <Image
              src="/logo-6.jpg"
              alt="Monday Big Box meal spread with Detroit-style pizza, wings, fries, and salad"
              width={375}
              height={250}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}