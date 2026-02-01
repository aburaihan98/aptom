import Calendar from "../../assets/saas/icon/calendar.webp";

export default function LatestInsightsCard({ insight }) {
  return (
    <div>
      <div className="w-full cursor-pointer ">
        {/* Hero Image Section */}
        <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-[20px]">
          <img
            src={insight.image}
            alt="Abstract architectural space with person"
            className="h-full w-full object-cover"
          />
          {/* Category Badge */}
          <div className="absolute right-4 bottom-4">
            <span className="rounded-md bg-dark px-3 py-1.5 text-[11px] font-bold tracking-wider text-white uppercase">
              {insight.category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="">
          <h3 className="mb-4 md:mb-6 lg:mb-8 2xl:mb-10 text-[22px] font-bold leading-tight tracking-tight text-dark">
            {insight.title}
          </h3>

          {/* Footer Meta */}
          <div className="flex items-center justify-between pb-4 md:pb-5 border-b border-[#E9E9E9]">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 overflow-hidden rounded-full bg-slate-200">
                <img
                  src={insight.author.avatar}
                  alt="Admin"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-[13px] font-medium text-light uppercase">
                BY <span className="text-slate-500">{insight.author.name}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img src={Calendar} alt="Calendar" />
              <span className="text-[13px] font-medium text-light">
                {insight.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
