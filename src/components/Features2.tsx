import Image from "next/image"

export default function Features2() {
  return (
    <section className="w-full bg-white py-20">
      <div className="px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1">
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1630FF] uppercase leading-tight mb-8"
              style={{fontFamily: 'Antique Olive'}}
            >
              DELIVERY & REWARDS
            </h2>
            <div className="space-y-6">
              <p 
                className="text-xl md:text-2xl text-[#1630FF] leading-relaxed"
                style={{fontFamily: 'Antique Olive Nord'}}
              >
                GET YOUR SQUARE PIES DELIVERED HOT & FRESH TO YOUR DOOR IN 30 MINUTES OR LESS
              </p>
              <p 
                className="text-lg md:text-xl text-[#1630FF] leading-relaxed"
                style={{fontFamily: 'Antique Olive Nord'}}
              >
                JOIN THE PIE SQUAD REWARDS PROGRAM AND EARN POINTS WITH EVERY ORDER. FREE SLICES, EXCLUSIVE DEALS, AND VIP ACCESS TO NEW FLAVORS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button 
                  className="bg-[#1630FF] text-white px-8 py-4 text-lg font-bold uppercase hover:bg-blue-700 transition-colors"
                  style={{fontFamily: 'Antique Olive'}}
                >
                  ORDER NOW
                </button>
                <button 
                  className="border-2 border-[#1630FF] text-[#1630FF] px-8 py-4 text-lg font-bold uppercase hover:bg-[#1630FF] hover:text-white transition-colors"
                  style={{fontFamily: 'Antique Olive'}}
                >
                  JOIN REWARDS
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <Image 
                src="/logo-7.jpg"
                alt="Meal spread including pizza, lasagna, fried chicken with fries, tomato salad, bread with sauce, and various side dishes with drinks on a wooden table"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}