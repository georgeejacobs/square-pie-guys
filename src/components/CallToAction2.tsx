export default function CallToAction2() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1440a0] mb-6">
              GIVE THE<br />
              GIFT OF PIE
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Give a gift even better to share the eating than with<br />
              all the people you love.
            </p>
            <button className="bg-[#1440a0] text-white px-8 py-3 font-semibold hover:bg-blue-700 transition-colors">
              SHOP GIFT CARDS
            </button>
          </div>
          <div>
            {/* Gift card visual would go here if there was an image in the HTML */}
          </div>
        </div>
      </div>
    </section>
  )
}