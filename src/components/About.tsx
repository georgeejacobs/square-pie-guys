import Image from "next/image"

export default function About() {
  return (
    <section className="bg-[var(--color-background)] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <Image
            src="/image-0.webp"
            alt=""
            width={1440}
            height={1066}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-4xl md:text-6xl lg:text-8xl font-black mb-4">
                THE P-LO PIES HERE.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}