import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <Image
              src="/image-0.webp"
              alt=""
              width={1440}
              height={1066}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#1440a0] leading-tight">
                THE P-LO PIES HERE.
              </h2>
              <div className="mt-4">
                <svg width="120" height="8" className="text-[#1440a0]" fill="currentColor">
                  <path d="M0 4 Q30 0 60 4 Q90 8 120 4 L120 8 Q90 4 60 8 Q30 12 0 8 Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}