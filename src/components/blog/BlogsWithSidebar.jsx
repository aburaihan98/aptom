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
import { Search } from "lucide-react";

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

const categories = [
  {
    title: "Startup Strategies",
    count: 5,
  },
  {
    title: "Customer Success",
    count: 10,
  },
  {
    title: "Product Development",
    count: 8,
  },
  {
    title: "Analytics & Metrics",
    count: 15,
  },
  {
    title: "User Experience Insights",
    count: 7,
  },
];

const blogPosts = [
  {
    title: "How SaaS Startups Can Scale Without Burning Out",
    comments: 2,
    date: "25.01.26",
    image: B3,
  },
  {
    title: "The Secret To Turning Free Trials Into Paying Customers",
    comments: 2,
    date: "25.01.26",
    image: B1,
  },
  {
    title: "The Future Of SaaS: Trends To Watch In 2026 – Beyond The",
    comments: 2,
    date: "25.01.26",
    image: B5,
  },
  {
    title: "10 Proven Ways SaaS Tools Help You Close Deals...",
    comments: 2,
    date: "25.01.26",
    image: B4,
  },
];

const tags = [
  "LIFE INSURANCE",
  "WELLNESS",
  "TRANSPARENCY",
  "PEACE OF MIND",
  "TRUST",
];

export default function BlogsWithSidebar() {
  return (
    <div className="bg-bg">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-0 lg:gap-6">
          <div className="col-span-1">
            {/* Header */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search your keyword"
                className="w-full py-3.5 pl-6 pr-14 rounded-full bg-white  placeholder-gray-400 focus:outline-none focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Menu Section */}
            <div className=" bg-white rounded-[10px] mt-4 lg:mt-5 p-6 2xl:p-9">
              <h3 className="text-xs font-semibold text-dark uppercase tracking-wider mb-4 lg:mb-6 2xl:mb-[30px]">
                Blog Category
              </h3>

              {/* Menu Items */}
              <div className="space-y-1">
                {categories.map((item, index) => (
                  <div
                    key={index}
                    className=" py-2.5 2xl:py-4 flex items-center justify-between  cursor-pointer group transition-colors border-b border-[#F6F6F6]"
                  >
                    <span className="text-sm text-light ">{item.title}</span>
                    <span className=" w-6 h-6 flex items-center justify-center rounded-full bg-[#F6F6F6] text-primary">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Menu Section */}
            <div className=" bg-white rounded-[10px] mt-4 lg:mt-5 p-6 2xl:p-9">
              <h3 className="text-xs font-semibold text-dark uppercase tracking-wider mb-4 lg:mb-6 2xl:mb-[30px]">
                Trending Post
              </h3>

              {/* Menu Items */}
              <div className="space-y-6 lg:space-y-8 2xl:space-y-10">
                {blogPosts.map((post, index) => (
                  <div key={index} className=" cursor-pointer">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                      {/* Image */}
                      <div className="relative h-32 md:h-56">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover rounded-[10px]"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-between">
                        <h3 className="font-medium text-dark mb-3 leading-snug ">
                          {post.title}
                        </h3>

                        {/* Meta Info */}
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <span>{post.comments} comment</span>
                          <span className="">|</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Section */}
            <div className="bg-white rounded-[10px] mt-4 lg:mt-5 p-6 2xl:p-9">
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Cloud Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-[#E7DBFF] text-primary rounded-full font-medium text-xs cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
            {latestInsightsData.map((item) => (
              <LatestInsightsCard key={item?.id} insight={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
