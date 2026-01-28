import React from "react";
import TopSectionHeader from "../common/TopSectionHeader";
import F1 from "../../assets/saas/full-control/f1.webp";
import F2 from "../../assets/saas/full-control/f2.webp";
import F3 from "../../assets/saas/full-control/f3.webp";
import F4 from "../../assets/saas/full-control/f4.webp";

const fullControl = [
  {
    title: "Start Simple",
    description:
      "Begin with an intuitive setup designed for speed and clarity. No complex configuration required.",
    icon: F1,
  },
  {
    title: "Business Planning, Strategy",
    description:
      "Plan smarter with tools that align vision and execution. Keep your team on the same page.",
    icon: F2,
  },
  {
    title: "Go Deep",
    description:
      "Dive beyond surface-level insights with advanced analytics. Explore trends, uncover hidden opportunities.",
    icon: F3,
  },
  {
    title: "Financial Analysis",
    description:
      "Turn complex numbers into clear strategies. Our financial analysis tools simplify forecasting, budgeting.",
    icon: F4,
  },
];

export default function FullControlForMassiveAIWorkloads() {
  return (
    <div className="bg-bg">
      <div className="Container">
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-[70px]">
          <TopSectionHeader
            title={
              <>
                Powerful Dashboard And High <br className=" hidden lg:block" />{" "}
                Performance Framework
              </>
            }
            subtitle="Full control for massive AI workloads"
            linkText="Learn More"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-5 lg:gap-x-[23px] gap-y-0 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-[100px]">
          {fullControl?.map((item, index) => (
            <div
              key={index}
              className={`
                ${index % 2 === 0 ? "md:border-r border-[#E9E9E9]" : ""}
                ${
                  Math.floor(index / 2) % 2 === 0
                    ? "border-b border-[#E9E9E9]"
                    : ""
                }
              `}
            >
              <div className="py-4 md:py-6 lg:py-7 2xl:py-[30px] flex gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-5">
                <div className="mt-1 lg:mt-0">
                  <img src={item.icon} alt="icon" />
                </div>
                <div>
                  <h2 className="text-dark font-medium mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-5">
                    {item.title}
                  </h2>
                  <p className=" text-light text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
