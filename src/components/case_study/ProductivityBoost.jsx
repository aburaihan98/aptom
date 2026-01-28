export default function ProductivityBoost() {
  const caseStudy = {
    category: "Productivity Boost",
    title: "Business Consulting For Team Coxmo",
    description:
      "Our platform empowered Team Coxmo to streamline their consulting operations, aligning strategy with execution.",
    client: "Pasific Inc.",
    website: "Coxmo LTD",
    date: "01.10.2026",
    industry: "Software & IT Services",
    budget: "$3000.00",
  };

  return (
    <div className="transform -translate-y-1/12 md:-translate-y-1/2 flex items-center justify-center z-50">
      <div className=" bg-white rounded-[20px]">
        {/* Content Area */}
        <div className=" p-4 md:p-[50px]">
          {/* Category Badge */}
          <div className="inline-block mb-4 lg:mb-5">
            <span className="text-sm font-medium text-primary tracking-wide">
              {caseStudy.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px] font-bold text-dark mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-9 leading-tight">
            {caseStudy.title}
          </h2>

          {/* Description */}
          <p className="text-light text-base leading-relaxed mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-[70px]">
            {caseStudy.description}
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {/* Client */}
            <div>
              <h4 className="text-sm font-medium text-dark mb-1">Client:</h4>
              <p className="text-sm text-light">{caseStudy.client}</p>
            </div>

            {/* Website */}
            <div>
              <h4 className="text-sm font-medium text-dark mb-1">Website</h4>
              <p className="text-sm text-light">{caseStudy.website}</p>
            </div>

            {/* Date */}
            <div>
              <h4 className="text-sm font-medium text-dark mb-1">Date:</h4>
              <p className="text-sm text-light">{caseStudy.date}</p>
            </div>

            {/* Industry */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                Industry:
              </h4>
              <p className="text-sm text-light">{caseStudy.industry}</p>
            </div>

            {/* Budget */}
            <div>
              <h4 className="text-sm font-medium text-dark mb-1">Budget:</h4>
              <p className="text-sm text-light">{caseStudy.budget}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
