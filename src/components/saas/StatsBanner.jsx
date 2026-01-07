export default function StatsBanner() {
  const stats = [
    { number: "449", label: "API Users" },
    { number: "290", label: "AI Services" },
    { number: "100", label: "API Calls Made" },
    { number: "58", label: "API Calls Made" },
  ];

  return (
    <section className="bg-primary">
      <div className="Container px-20">
        <div className="flex justify-between">
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              <div className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] text-white mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-5 leading-[1]">
                <span className="inline-block -ml-3 mr-1">+</span>
                {stat.number}
              </div>
              <p className="text-white text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
