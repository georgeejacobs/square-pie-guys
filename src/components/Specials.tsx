import Image from "next/image"

export default function Specials() {
  return (
    <section className="bg-[var(--color-background)] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="flex-1">
            <h2 className="text-5xl lg:text-6xl font-black text-[var(--color-primary)] mb-6" style={{ fontFamily: 'degular' }}>
              TODAY'S DEAL<br />
              IS STARTING...
            </h2>
            <p className="text-lg text-black mb-8 max-w-lg" style={{ fontFamily: 'degular' }}>
              Our monthly deals calendar is here! This year, we've put a schedule and calendar together to give you the ability to plan ahead for our best deal of the day!
            </p>
            <button className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3 font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors" style={{ fontFamily: 'degular' }}>
              ORDER NOW
            </button>
          </div>
          <div className="flex-1 relative">
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="text-right mb-4">
                <span className="text-sm text-gray-500" style={{ fontFamily: 'degular' }}>For 2024 Only</span>
                <svg className="inline-block ml-2 w-16 h-8" viewBox="0 0 64 32">
                  <path d="M5 20 C20 10, 40 10, 55 20" stroke="#2E3AA1" strokeWidth="2" fill="none" />
                  <path d="M50 15 L55 20 L50 25" stroke="#2E3AA1" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3 className="text-3xl font-black text-[var(--color-primary)] mb-4" style={{ fontFamily: 'degular' }}>
                DEALS<br />
                CALENDAR
              </h3>
              <Image 
                src="/image-11.webp" 
                alt="Deals Calendar" 
                width={420} 
                height={111}
                className="w-full"
              />
              <div className="mt-4 text-right">
                <span className="text-sm text-gray-500 italic" style={{ fontFamily: 'degular' }}>deals every month!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}