import Image from "next/image";

export default function Features2() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-black text-[#1440a0] mb-8 leading-tight">
              GET ZERO DELIVERY FEES + CASH-BACK REWARDS.
            </h2>
            <button className="bg-[#1440a0] text-white px-8 py-4 text-lg font-semibold hover:bg-opacity-90 transition-colors">
              Order Online
            </button>
          </div>
          <div>
            <Image
              src="/image-2.webp"
              alt="Meal spread including pizza, lasagna, fried chicken with fries, tomato salad, bread with sauce, and various side dishes with drinks on a wooden table."
              width={1440}
              height={960}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}