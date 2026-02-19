import Image from "next/image"

export default function Specials3() {
  return (
    <section className="bg-[var(--color-primary)] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            GET ZERO DELIVERY FEES + CASH-BACK REWARDS.
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Ordering just got better! Get all your favorites with zero delivery fees + get cash back rewards with every order!
          </p>
          <button className="bg-white text-[var(--color-primary)] px-8 py-3 font-bold text-lg hover:bg-gray-100 transition-colors">
            LEARN MORE
          </button>
        </div>
        <div className="lg:w-1/2">
          <Image 
            src="/image-2.webp" 
            alt="Meal spread including pizza, lasagna, fried chicken with fries, tomato salad, bread with sauce, and various side dishes with drinks on a wooden table." 
            width={1440} 
            height={960} 
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}