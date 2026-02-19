export default function Features() {
  return (
    <section className="bg-primary py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-white text-6xl lg:text-8xl font-black leading-tight mb-8">
              ON MONDAYS<br />
              WE ORDER THE<br />
              BIG BOX.
            </h2>
            <p className="text-white text-lg mb-8 max-w-md">
              Don't you just have Monday's? Well, we don't! On 
              Mondays, we order the big box and deliver our favourite 
              day!
            </p>
            <p className="text-white text-lg mb-8 max-w-md">
              Our Monday and Tuesday big pizza box brings our 
              best pizza deals and offers to your door. It also makes 
              us think about our delicious and fulfilling Square Pie 
              experience!
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
              MORE INFO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}