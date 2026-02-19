import Image from "next/image";

export default function CallToAction2() {
  return (
    <section className="w-full bg-gray-100 py-20 px-4">
      <div className="text-center">
        <h2 
          className="text-6xl md:text-7xl lg:text-8xl font-bold uppercase text-blue-600 mb-8"
          style={{fontFamily: 'Antique Olive'}}
        >
          GIVE THE GIFT OF PIE
        </h2>
        <p 
          className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto"
          style={{fontFamily: 'Antique Olive Nord'}}
        >
          SPREAD THE SQUARE LOVE WITH A GIFT CARD THAT DELIVERS BIG FLAVOR AND EVEN BIGGER SMILES
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            className="bg-blue-600 text-white px-12 py-4 text-xl font-bold uppercase hover:bg-blue-700 transition-colors"
            style={{fontFamily: 'Antique Olive'}}
          >
            BUY GIFT CARD
          </button>
          <button 
            className="border-2 border-blue-600 text-blue-600 px-12 py-4 text-xl font-bold uppercase hover:bg-blue-600 hover:text-white transition-colors"
            style={{fontFamily: 'Antique Olive'}}
          >
            CHECK BALANCE
          </button>
        </div>
      </div>
    </section>
  );
}