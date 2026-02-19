import Image from "next/image"

export default function Specials2() {
  return (
    <section className="bg-[var(--color-primary)] text-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-black leading-tight" style={{ fontFamily: 'antique-olive-std-j36jj4, serif' }}>
              ON MONDAYS<br />
              WE ORDER THE<br />
              BIG BOX.
            </h2>
            <p className="text-lg lg:text-xl opacity-90" style={{ fontFamily: 'degular, sans-serif' }}>
              Don't just get Big Monterey! With our BIG! On Mondays you can order the big box and get a square deep dish pizza for the whole squad.
            </p>
            <p className="text-lg lg:text-xl opacity-90" style={{ fontFamily: 'degular, sans-serif' }}>
              We're talking the Golden pie championship! — enjoy your big box of pizza. It's the best. Check your cal and our discount and let's roll with it!
            </p>
            <button className="bg-white text-[var(--color-primary)] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors" style={{ fontFamily: 'degular, sans-serif' }}>
              SHOP TODAY
            </button>
          </div>
          <div className="relative">
            <Image
              src="/image-2.webp"
              alt="Meal spread including pizza, lasagna, fried chicken with fries, tomato salad, bread with sauce, and various side dishes with drinks on a wooden table."
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