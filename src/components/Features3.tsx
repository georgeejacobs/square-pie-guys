export default function Features3() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-12 flex items-center justify-center min-h-[400px]">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6">
            GIVE THE<br />
            GIFT OF PIE
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-md">
            Giving a gift never tasted so good. We know the saying goes with
            pizza on your mind.
          </p>
          <button className="border-2 border-primary text-primary px-8 py-3 text-lg font-semibold hover:bg-primary hover:text-white transition-colors">
            SHOP GIFT CARDS
          </button>
        </div>
      </div>
    </section>
  );
}