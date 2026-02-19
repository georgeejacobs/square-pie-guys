"use client"

export default function Marquee() {
  return (
    <>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .marquee-content {
          animation: scroll 20s linear infinite;
        }
      `}</style>
      <section className="w-full bg-[#1630FF] py-3 overflow-hidden">
        <div className="whitespace-nowrap">
          <div className="marquee-content inline-block">
            <span 
              className="text-white text-sm md:text-base font-bold uppercase tracking-wider"
              style={{fontFamily: 'Antique Olive Nord'}}
            >
              WE SAY PIE • YOU SAY PIZZA • SQUARE PIE GUYS • DETROIT STYLE PIZZA • WE SAY PIE • YOU SAY PIZZA • SQUARE PIE GUYS • DETROIT STYLE PIZZA • WE SAY PIE • YOU SAY PIZZA • SQUARE PIE GUYS • DETROIT STYLE PIZZA • WE SAY PIE • YOU SAY PIZZA • SQUARE PIE GUYS • DETROIT STYLE PIZZA •&nbsp;
            </span>
          </div>
        </div>
      </section>
    </>
  )
}