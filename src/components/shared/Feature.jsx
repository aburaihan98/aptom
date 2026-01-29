import { useState } from "react";
import CheckMark from "../../assets/common/check-mark-black.webp";

const features = [
  {
    title: "Real Time Activity",
    description:
      "Track Every Move Instantly With Real-Time Activity Monitoring",
    checks: [
      "Reach Your Social Goals Faster",
      "Branding, Finance Management & Testing Expertise",
      "Trusted And Reliable",
    ],
  },
  {
    title: "Easy Integrations",
    description:
      "Seamlessly Connect All Your Tools With Effortless Integrations",
    checks: [
      "Connect All Tools",
      "Automate Your Workflow",
      "Trusted And Reliable",
    ],
  },
  {
    title: "Instant Deploy",
    description: "Deploy In Seconds And Start Scaling Without Delay",
    checks: ["Quick Setup", "No Downtime", "Trusted And Reliable"],
  },
];

export default function Feature() {
  const [activeIndex, setActiveIndex] = useState(0); // first item active by default

  return (
    <div>
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`text-dark py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 2xl:py-[60px] 2xl:px-[30px] transition-colors rounded-[20px] ${
                  isActive
                    ? "bg-[#E0C0FF]"
                    : "bg-transparent hover:bg-[#E0C0FF]"
                }`}
              >
                <h3 className="font-bold text-base md:text-lg lg:text-xl 2xl:text-[24px] mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-9">
                  {feature.title}
                </h3>
                <p className="font-medium mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-9">
                  {feature.description}
                </p>

                <ul className={`space-y-4 ${isActive ? "block" : "hidden"}`}>
                  {feature.checks.map((check, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <img src={CheckMark} alt="Check Mark" />
                      <span className="text-[14px] font-medium leading-tight">
                        {check}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
