import ServiceDetailsTopImage from "./ServiceDetailsTopImage";
import CheckMark from "../../assets/common/check-mark.webp";
import ServiceDetailsMiddleImage from "./ServiceDetailsMiddleImage";
import I1 from "../../assets/app/icon/instant/instant.webp";
import OurServiceForm from "./OurServiceForm";
import OurServiceSidebarMenu from "./OurServiceSidebarMenu";

const features = [
  {
    icon: CheckMark,
    title: "Generative Funnel Analysis",
    description:
      "Track user journeys from entry point to final action, providing...",
  },
  {
    icon: CheckMark,
    title: "Real-Event Tracking",
    description:
      "Configure KPIs such as form submissions, checkout completions...",
  },
  {
    icon: CheckMark,
    title: "A/B Testing Integration",
    description:
      "Measure the impact of different design elements, campaigns, or CTAs.",
  },
  {
    icon: CheckMark,
    title: "Attribution Modeling",
    description:
      "Identify which channels (search, social, email, referral) contribute most to your highest conversions.",
  },
  {
    icon: CheckMark,
    title: "Real-Time Dashboards",
    description:
      "Monitor website performance, active users, and key events with live data refreshed...",
  },
  {
    icon: CheckMark,
    title: "Segmentation & Funnel Designers",
    description:
      "Slice your data by demographics, devices, traffic sources, or user behavior...",
  },
];

const processes = [
  {
    number: "1.",
    title: "Discovery & Setup",
    description:
      "Define conversion goals and integrate analytics tools (Google Analytics, Mixpanel, etc.).",
  },
  {
    number: "2.",
    title: "Data Collection",
    description:
      "Track user interactions across web, mobile, and marketing channels.",
  },
  {
    number: "3.",
    title: "Analysis & Reporting",
    description:
      "Generate insights on conversion rates, bottlenecks, and opportunities.",
  },
  {
    number: "4.",
    title: "Optimization",
    description:
      "Recommend design, copy, or funnel improvements to boost conversions.",
  },
  {
    number: "5.",
    title: "Continuous Monitoring",
    description: "Provide ongoing reports and alerts for performance shifts.",
  },
];

const features2 = [
  {
    icon: I1,
    title: "Streamline",
    description:
      "Unified dashboards that bring all your accounts, transactions, and budgets together. Stop juggling multiple tools. Our app streamlines your financial life.",
  },
  {
    icon: I1,
    title: "Simplify",
    description:
      "Clear, user-friendly insights with smart categorization. No clutter, no confusion—just clean, actionable insights that make smarter tracking easy.",
  },
  {
    icon: I1,
    title: "Automate",
    description:
      "Automated tracking, alerts, and savings recommendations. Smart alerts and recommendations keep you ahead without constant manual input.",
  },
  {
    icon: I1,
    title: "Scale",
    description:
      "Flexible tools that grow with your needs. With scalable features and secure integrations. You'll have the confidence to expand without worry.",
  },
];

export default function ServiceDetails() {
  return (
    <div className="bg-bg">
      <div className="Container grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 lg:col-span-8 order-2 lg:order-1 ">
          <ServiceDetailsTopImage />
          <h2 className="Title2">Measure conversion metrics</h2>
          <p className="text-light mb-6 md:mb-8 lg:mb-10 2xl:mb-[50px]">
            Our Conversion Metrics Measurement service helps businesses track,
            analyze, and optimize how effectively visitors turn into customers,
            subscribers, or leads. By combining analytics, user behavior
            insights, and tailored reporting, we ensure every marketing effort
            is tied to measurable outcomes
          </p>
          <h2 className="text-dark text-base md:text-lg lg:text-xl 2xl:text-[24px] mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-[30px]">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-[10px] p-6 ">
                <div className="">
                  <div className="flex gap-2.5">
                    <div className="mt-1">
                      <img src={CheckMark} alt="Check Mark" />
                    </div>
                    <h3 className=" font-medium text-dark mb-4 2xl:mb-6">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="">
                    <p className="text-sm text-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ServiceDetailsMiddleImage />
          <div className="">
            <div className="">
              <h2 className="text-lg lg:text-xl 2xl:text-[24px] font-bold text-dark  mb-5 lg:mb-7">
                Process
              </h2>

              <div className="space-y-4 md:space-y-6">
                {processes.map((process, index) => (
                  <div key={index} className="">
                    <h3 className="text-base font-semibold text-dark mb-3 2xl:mb-5">
                      <span className="mr-2">{process.number}</span>
                      {process.title}
                    </h3>
                    <p className="text-sm text-light leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 md:py-8 lg:py-10 2xl:py-[50px]">
            {features2.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white p-6 lg:p-[30px] rounded-[20px]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-2">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-5 h-5 text-gray-900"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3
              className=" text-dark font-bold text-lg lg:text-xl 2xl:text-[24px]
            mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-[30px]"
            >
              Benefit
            </h3>
            <ul className="text-light space-y-2">
              <li>Clear visibility into ROI and campaign effectiveness</li>
              <li>
                Data-driven decision making for design and marketing teams
              </li>
              <li>
                Reduced customer acquisition costs through funnel optimization
              </li>
              <li>Improved user experience by identifying friction points</li>
            </ul>
          </div>
          <OurServiceForm />
        </div>
        <div className="col-span-12 lg:col-span-4 order-1 lg:order-2">
          <OurServiceSidebarMenu />
        </div>
      </div>
    </div>
  );
}
