import Image from "next/image"

export default function About() {
  return (
    <section className="w-full bg-[#1630FF]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative">
          <Image
            src="/image-0.png"
            alt="Two people in front of blue circular logo wall"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-center px-8 py-16 lg:py-24">
          <div className="max-w-lg">
            <h2 
              className="text-white text-5xl lg:text-7xl font-bold uppercase leading-tight mb-8"
              style={{fontFamily: 'Antique Olive'}}
            >
              THE P-LO PIES HERE.
            </h2>
            <p 
              className="text-white text-lg lg:text-xl leading-relaxed"
              style={{fontFamily: 'Antique Olive Nord'}}
            >
              From the streets to your plate, P-Lo brings that authentic flavor that hits different. Our square pies ain't just pizza - they're a statement. Bold ingredients, bigger attitude, and the kind of taste that makes you come back for more. This is where real flavor lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}