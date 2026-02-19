import Image from "next/image"

export default function Features() {
  return (
    <section className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-black leading-tight">
              ON MONDAYS WE ORDER THE BIG BOX.
            </h2>
            <div className="space-y-4 text-lg lg:text-xl">
              <p>
                Don't just get Deep Mondays*. Get our BEST Big Monday specials every week and order online now.
              </p>
              <p>
                Our specialty food catering is from all our great restaurants — order now. Check multiple locations as part of your experience — and check special offers.
              </p>
            </div>
            <button className="bg-white text-primary px-8 py-3 font-bold hover:bg-gray-100 transition-colors">
              ORDER NOW
            </button>
          </div>
          <div className="relative">
            <Image
              src="/image-1.webp"
              alt="A family meal with various dishes including a large rectangular pizza with toppings, a slice of pepperoni pizza, fried chicken wings garnished with green onions, a bowl of salad with lettuce and cheese, a side of French fries, and glasses of pink and red drinks."
              width={1440}
              height={960}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}