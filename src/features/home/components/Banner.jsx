export default function Banner({ dataBanner }) {
  return (
    <div className="px-5 md:px-10 lg:px-20 mt-8">
      <h2 className="mb-5 font-semibold text-lg md:text-xl">
        Temukan promo menarik
      </h2>
      <div className="flex overflow-x-auto gap-4 pb-6 no-scrollbar snap-x snap-mandatory scroll-smooth">
        {dataBanner.map((item, index) => (
          <div key={index} className="shrink-0 snap-start">
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.banner_image}
                alt={item.banner_name || "Promo Banner"}
                className="w-70 md:w-[320px] h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
