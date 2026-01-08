import TopSectionHeader from "../common/TopSectionHeader";
import B4 from "../../assets/shared/latest-insights/blog4.jpg";
import B2 from "../../assets/shared/latest-insights/blog2.jpg";
import Avatar from "../../assets/shared/latest-insights/avatar.png";
import LatestInsightsCard from "../shared/LatestInsightsCard";

const latestInsightsData = [
  {
    title: "5 Proven Ways SaaS Tools Help You Close Deals Faster",
    category: "Computer",
    image: B4,
    author: {
      name: "Admin",
      avatar: Avatar,
    },
    date: "10 Feb 2026",
  },
  {
    title: "Maximizing Team Productivity with Cloud Solutions",
    category: "Productivity",
    image: B2,
    author: {
      name: "Admin",
      avatar: Avatar,
    },
    date: "15 Mar 2026",
  },
];

export default function LatestInsights() {
  return (
    <div className="bg-bg">
      <div className="Container">
        <div className="">
          <TopSectionHeader
            title={
              <>
                Increase efficiency & reach your{" "}
                <br className=" hidden lg:block" /> goals faster
              </>
            }
            subtitle="Latest Insights "
            linkText="More Insights"
          />
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-9">
            {latestInsightsData.map((insight, index) => (
              <LatestInsightsCard key={index} insight={insight} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
