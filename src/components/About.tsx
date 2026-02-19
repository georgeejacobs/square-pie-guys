import Image from "next/image"

export default function About() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Image 
              src="/image-0.webp" 
              alt="Two men standing together, one wearing a black jacket and the other wearing glasses and a red cap"
              width={1440}
              height={1066}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white bg-[#2C5AA0] px-4 py-2 inline-block transform -rotate-1">
              THE P-LO PIES HERE.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}