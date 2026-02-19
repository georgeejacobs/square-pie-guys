import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#1630FF] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-8 lg:px-16">
        <div className="flex-1 text-left py-20 lg:py-32">
          <h1 
            className="text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase leading-none mb-8"
            style={{fontFamily: 'Antique Olive'}}
          >
            SQUARE<br />
            PIE<br />
            GUYS
          </h1>
          <p 
            className="text-white text-xl md:text-2xl lg:text-3xl uppercase font-bold mb-12"
            style={{fontFamily: 'Antique Olive Nord'}}
          >
            DETROIT STYLE PIZZA<br />
            SERVED LOUD & PROUD
          </p>
          <button 
            className="bg-white text-[#1630FF] px-12 py-4 text-xl md:text-2xl font-black uppercase hover:bg-gray-100 transition-colors"
            style={{fontFamily: 'Antique Olive'}}
          >
            ORDER NOW
          </button>
        </div>
        
        <div className="flex-1 flex justify-center items-center py-20">
          <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-white rounded-full flex items-center justify-center">
            <Image 
              src="/logo-5.png" 
              alt="Two cartoon pizza slices wearing sunglasses and sneakers" 
              width={300}
              height={261}
              className="w-3/4 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}