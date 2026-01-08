import LatestInsightsCard from "../shared/LatestInsightsCard";
import B1 from "../../assets/shared/latest-insights/blog1.jpg";
import B2 from "../../assets/shared/latest-insights/blog2.jpg";
import B3 from "../../assets/shared/latest-insights/blog3.jpg";
import B4 from "../../assets/shared/latest-insights/blog4.jpg";
import B5 from "../../assets/shared/latest-insights/blog5.jpg";
import B6 from "../../assets/shared/latest-insights/blog6.jpg";
import B7 from "../../assets/shared/latest-insights/blog7.jpg";
import B8 from "../../assets/shared/latest-insights/blog8.jpg";
import Avatar from "../../assets/shared/latest-insights/avatar.png";

const latestInsightsData = [
  {
    id: 1,
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
    id: 2,
    title: "Maximizing Team Productivity with Cloud Solutions",
    category: "Productivity",
    image: B2,
    author: {
      name: "Admin",
      avatar: Avatar,
    },
    date: "15 Mar 2026",
  },
  {
    id: 3,
    title: "How AI Automation Is Transforming Modern SaaS Platforms",
    category: "Artificial Intelligence",
    image: B3,
    author: {
      name: "Admin",
      avatar: Avatar,
    },
    date: "22 Mar 2026",
  },
  {
    id: 4,
    title: "Top Security Practices Every SaaS Company Should Follow",
    category: "Security",
    image: B1,
    author: {
      name: "Admin",
      avatar: Avatar,
    },
    date: "30 Mar 2026",
  },
  {
    id: 5,
    title: "Building Scalable SaaS Products for Long-Term Growth",
    category: "Startup",
    image: B5,
    author: {
      name: "Admin",
      avatar: Avatar,
    },
    date: "05 Apr 2026",
  },
  {
    id: 6,
    title: "Why Data-Driven Decisions Matter in SaaS Businesses",
    category: "Analytics",
    image: B6,
    author: {
      name: "Admin",
      avatar: Avatar,
    },
    date: "12 Apr 2026",
  },
  {
    id: 7,
    title: "Cloud Cost Optimization Tips for Growing SaaS Teams",
    category: "Cloud Computing",
    image: B7,
    author: {
      name: "Admin",
      avatar: Avatar,
    },
    date: "18 Apr 2026",
  },
  {
    id: 8,
    title: "Future of SaaS: Trends That Will Dominate in 2026",
    category: "Trends",
    image: B8,
    author: {
      name: "Admin",
      avatar: Avatar,
    },
    date: "25 Apr 2026",
  },
];

export default function BlogsWithSidebar() {
  return (
    <div className="bg-bg">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          <div className="col-span-1"></div>
          <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {latestInsightsData.map((item) => (
              <LatestInsightsCard key={item?.id} insight={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
