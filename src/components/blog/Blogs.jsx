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
import { useMemo, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

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
    status: "popular",
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
    status: "latest",
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
    status: "popular",
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
    status: "popular",
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
    status: "popular",
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
    status: "popular",
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
    status: "popular",
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
    status: "popular",
  },
];

export default function Blogs() {
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const sortedBlogs = useMemo(() => {
    const data = [...latestInsightsData];

    //  Popular first
    if (sortBy === "popular") {
      return data
        .filter((item) => item.status === "popular")
        .concat(data.filter((item) => item.status !== "popular"));
    }

    //  Latest (date based)
    if (sortBy === "latest") {
      return data.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return data;
  }, [sortBy]);
  // pagination
  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(sortedBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBlogs = sortedBlogs.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Show max 3 page numbers
  const getVisiblePages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="bg-bg">
      <div className="Container">
        {/* Results counter and sort */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm text-gray-600">
            Showing {startIndex + 1}–{Math.min(endIndex, sortedBlogs.length)} of{" "}
            {sortedBlogs.length} Results
          </span>

          <div className="flex items-center gap-2">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="appearance-none  border border-[#E9E9E9] rounded-[30px] px-5 py-4  text-sm cursor-pointer hover:border-gray-400"
              >
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 ml-4 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {currentBlogs.map((item) => (
            <LatestInsightsCard key={item.id} insight={item} />
          ))}
        </div>
        {/* pagination  */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 py-8">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-400 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {getVisiblePages().map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-full font-medium transition flex items-center justify-center ${
                    currentPage === page
                      ? "bg-primary text-white cursor-pointer"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-400 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer "
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
