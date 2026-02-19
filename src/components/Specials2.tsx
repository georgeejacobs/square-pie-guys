"use client"
import Image from "next/image"

export default function Specials2() {
  return (
    <section className="bg-[#2E3AA1] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              ON MONDAYS<br />
              WE ORDER THE<br />
              BIG BOX.
            </h2>
            <p className="text-lg leading-relaxed max-w-lg">
              Want a good basic Monday? Yeah we hear! Ok so Monday's aren't boring anymore, we've got our Detroit Big Box Deal just for you. Our Detroit Big Box brings out your traditional style along the way. It's your standard Monday Deal.
            </p>
            <button className="bg-white text-[#2E3AA1] px-8 py-4 font-bold text-sm uppercase tracking-wide border-2 border-white hover:bg-transparent hover:text-white transition-colors">
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