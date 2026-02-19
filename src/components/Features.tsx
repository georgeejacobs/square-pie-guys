import Image from "next/image";

export default function Features() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight">
              GET ZERO<br />
              DELIVERY FEES +<br />
              CASH-BACK<br />
              REWARDS.
            </h2>
            <button className="mt-8 border-2 border-primary text-primary px-8 py-3 text-lg font-bold hover:bg-primary hover:text-white transition-colors">
              LEARN MORE
            </button>
          </div>
          <div className="lg:w-1/2">
            <Image 
              src="/image-2.webp" 
              alt="Meal spread including pizza, lasagna, fried chicken with fries, tomato salad, bread with sauce, and various side dishes with drinks on a wooden table." 
              width={720} 
              height={480}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}