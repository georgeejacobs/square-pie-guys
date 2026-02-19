import Image from "next/image"

export default function Features2() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-8">
              GET ZERO DELIVERY FEES + CASH-BACK REWARDS.
            </h2>
            <button className="bg-primary text-white px-8 py-3 rounded text-lg font-semibold hover:bg-opacity-90 transition-colors">
              MORE INFORMATION
            </button>
          </div>
          <div className="flex justify-center">
            <Image 
              src="/image-2.webp"
              alt="Meal spread including pizza, lasagna, fried chicken with fries, tomato salad, bread with sauce, and various side dishes with drinks on a wooden table."
              width={720}
              height={480}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}