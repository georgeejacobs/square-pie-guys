export default function Features2() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-primary leading-none">
              GET ZERO DELIVERY FEES + CASH-BACK REWARDS.
            </h1>
            
            <button className="bg-primary text-white px-8 py-4 text-lg font-bold hover:bg-blue-800 transition-colors">
              DOWNLOAD THE APP
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="/image-2.webp" 
              alt="Meal spread including pizza, lasagna, fried chicken with fries, tomato salad, bread with sauce, and various side dishes with drinks on a wooden table."
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}