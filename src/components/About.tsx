import Image from "next/image"

export default function About() {
  return (
    <section className="relative bg-background">
      <div className="relative h-screen">
        <Image
          src="/image-3.webp"
          alt=""
          width={1440}
          height={798}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-white text-6xl md:text-8xl font-black text-center px-4">
              THE P-LO PICKS HERE.
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}