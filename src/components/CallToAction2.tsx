export default function CallToAction2() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-lg transform rotate-3">
              <div className="text-6xl mb-4">🎁</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">
                Square Pie Guys
              </div>
              <div className="text-gray-600">
                Gift Card
              </div>
            </div>
          </div>
          
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6 leading-tight">
              GIVE THE<br />
              GIFT OF PIE
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
              Give a gift sure to make the drive home worth it.The perfect gift for every occasion.
            </p>
            
            <button className="bg-primary hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
              SHOP GIFT CARDS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}