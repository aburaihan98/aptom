import TopSectionHeader from "../common/TopSectionHeader";
import UpRightArrowBlack from "../../assets/common/up-right-arrow-black.webp";
import PlatformOfTheFutureCard from "./PlatformOfTheFutureCard";
import Future1 from "../../assets/saas/future/future1.webp";
import Future3 from "../../assets/saas/future/future3.webp";
import Future2 from "../../assets/saas/future/future2.webp";

const topFutures = [
  {
    id: 1,
    title: "Smart Lead Management",
    description:
      "Organize, track, and prioritize leads effectively. Our platform ensures no opportunity slips through the cracks.",
    icon: UpRightArrowBlack,
    image: Future1,
  },
  {
    id: 2,
    title: "Automated Follow-Ups",
    description:
      "Set up automated follow-ups with intelligent reminders and automated email sequences.",
    icon: UpRightArrowBlack,
    image: Future3,
  },
];

const bottomFutures = [
  {
    id: 1,
    title: "Revenue Share Screen",
    description:
      "Display commission ratios to the rest of your team. A tech-enabled and software.",
    icon: UpRightArrowBlack,
    image: Future3,
  },
  {
    id: 2,
    title: "Real-Time Analytics",
    description:
      "Get instant insights into your analytics and performance metrics. Analyze your data in real-time.",
    icon: UpRightArrowBlack,
    image: Future3,
  },
  {
    id: 3,
    title: "AI-Driven Sales Forecasting",
    description:
      "Predict outcomes with precision. AI models analyze historical data.",
    icon: UpRightArrowBlack,
    image: Future3,
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
        {topFutures?.map((future) => (
          <PlatformOfTheFutureCard key={future?.id} future={future} />
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-[30px] mt-4 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-[30px]">
        {bottomFutures?.map((future) => (
          <PlatformOfTheFutureCard key={future?.id} future={future} />
        ))}
      </div>
    </div>
  );
}
