import Image from "next/image"

export default function Features() {
  return (
    <section className="relative bg-white">
      <div className="relative">
        <Image 
          src="/image-0.webp"
          alt=""
          width={1440}
          height={1066}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
              THE P-LO PIES HERE.
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}