import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="bg-[#F5F5F5] py-16 px-4 md:py-24 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black text-[#2C5AA0] mb-6" style={{fontFamily: 'degular'}}>
          GIVE THE<br />GIFT OF PIE
        </h2>
        <p className="text-lg md:text-xl text-black mb-8 max-w-lg mx-auto" style={{fontFamily: 'antique-olive-nord'}}>
          Give a gift card today to share the pizza love with a friend or loved one!
        </p>
        <button className="bg-[#2C5AA0] text-white px-8 py-4 text-lg font-bold border-2 border-[#2C5AA0] hover:bg-white hover:text-[#2C5AA0] transition-colors" style={{fontFamily: 'antique-olive-nord'}}>
          SHOP GIFT CARDS
        </button>
      </div>
    </section>
  );
}