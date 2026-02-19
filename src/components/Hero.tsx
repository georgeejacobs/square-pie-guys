import Image from "next/image"

export default function Hero() {
  return (
    <main id="page" className="container" role="main">
      <article className="sections" id="sections">
        <section 
          className="page-section has-section-divider full-bleed-section layout-engine-section background-width--full-bleed section-height--custom content-width--wide horizontal-alignment--center vertical-alignment--middle bright bg-primary min-h-screen flex items-center justify-center"
        >
          <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
            <div className="flex-1 text-white">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8">
                THIS IS YOUR SIGN TO ORDER SOME PIZZA
              </h1>
              <button className="bg-accent text-white px-8 py-4 text-xl font-bold rounded hover:bg-yellow-600 transition-colors">
                ORDER NOW
              </button>
            </div>
            <div className="flex-1 flex justify-end">
              <Image 
                src="/image-1.webp" 
                alt="A family meal with various dishes including a large rectangular pizza with toppings, a slice of pepperoni pizza, fried chicken wings garnished with green onions, a bowl of salad with lettuce and cheese, a side of French fries, and glasses of pink and red drinks."
                width={720}
                height={480}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}