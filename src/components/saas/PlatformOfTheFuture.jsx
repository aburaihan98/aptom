import TopSectionHeader from "../common/TopSectionHeader";
import UpRightArrowBlack from "../../assets/common/up-right-arrow-black.webp";
import PlatformOfTheFutureCard from "./PlatformOfTheFutureCard";
import Future1 from "../../assets/saas/future/future1.png";
import Future2 from "../../assets/saas/future/future2.png";
import Future3 from "../../assets/saas/future/future3.png";
import Future4 from "../../assets/saas/future/future4.png";
import Future5 from "../../assets/saas/future/future5.png";
import Future6 from "../../assets/saas/future/future6.png";

const bottomFutures = [
  {
    id: 1,
    title: "Revenue Share Screen",
    description:
      "Display commission ratios to the rest of your team. A tech-enabled and software.",
    icon: UpRightArrowBlack,
    image: Future4,
  },
  {
    id: 2,
    title: "Real-Time Analytics",
    description:
      "Get instant insights into your analytics and performance metrics. Analyze your data in real-time.",
    icon: UpRightArrowBlack,
    image: Future5,
  },
  {
    id: 3,
    title: "AI-Driven Sales Forecasting",
    description:
      "Predict outcomes with precision. AI models analyze historical data.",
    icon: UpRightArrowBlack,
    image: Future6,
  },
];

export default function PlatformOfTheFuture() {
  return (
    <div className="Container">
      <TopSectionHeader
        title={
          <>
            Powerful Features To Help <br />
            You Close Sales Faster
          </>
        }
        subtitle="Platform Of The Future"
      />
      <div className="grid md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-[30px]">
        <div className=" relative bg-[#E7DBFF] rounded-[20px] overflow-hidden flex flex-col">
          <div className="relative p-9">
            {/* Title */}
            <h3 className="text-base md:text-lg lg:text-xl 2xl:text-[24px] font-bold text-dark mb-4 md:mb-5 lg:mb-6 2xl:mb-[24px]">
              Smart Lead Management
            </h3>

            {/* Description */}
            <p className="text-base md:text-lg 2xl:text-[20px] text-light mb-8 md:mb-10 lg:mb-12 2xl:mb-[57px]">
              Organize, track, and prioritize leads effectively. Our platform
              ensures no opportunity slips through the cracks.
            </p>

            <div className="">
              <img src={UpRightArrowBlack} alt="Up Right Arrow Black" />
            </div>
          </div>
          <div className="flex justify-end mt-auto ml-7">
            <img src={Future1} alt="image" />
          </div>
          <div className=" absolute right-0 -bottom-12 lg:bottom-0 flex justify-end mt-auto ml-7">
            <img src={Future2} alt="image" />
          </div>
        </div>
        <div className=" relative bg-[#E7DBFF] rounded-[20px] overflow-hidden flex flex-col">
          <div className="relative p-9">
            {/* Title */}
            <h3 className="text-base md:text-lg lg:text-xl 2xl:text-[24px] font-bold text-dark mb-4 md:mb-5 lg:mb-6 2xl:mb-[24px]">
              Automated Follow-Ups
            </h3>

            {/* Description */}
            <p className="text-base md:text-lg 2xl:text-[20px] text-light mb-8 md:mb-10 lg:mb-12 2xl:mb-[57px]">
              Set up automated follow-ups with intelligent reminders and
              automated email sequences.
            </p>

            <div className="">
              <img src={UpRightArrowBlack} alt="Up Right Arrow Black" />
            </div>
          </div>
          <div className="flex justify-end mt-auto ml-7">
            <img src={Future3} alt="image" />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-[30px] mt-4 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-[30px]">
        {bottomFutures?.map((future) => (
          <PlatformOfTheFutureCard key={future?.id} future={future} />
        ))}
      </div>
    </div>
  );
}
