import CaseStudyCard from "./CaseStudyCard";
import C1 from "../../assets/case-study/case_study1.jpg";
import C2 from "../../assets/case-study/case_study2.jpg";
import C3 from "../../assets/case-study/case_study3.jpg";
import C4 from "../../assets/case-study/case_study4.jpg";
import C5 from "../../assets/case-study/case_study5.jpg";
import C6 from "../../assets/case-study/case_study6.jpg";
import C7 from "../../assets/case-study/case_study7.jpg";
import C8 from "../../assets/case-study/case_study8.jpg";
import { useMemo, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const caseStudyData = [
  {
    id: 1,
    category: "Business Strategy",
    title: "Business Consulting for team coxmo",
    description:
      "Discover proven marketing tactics that help small SaaS startups compete with industry giants and accelerate growth.",
    image: C1,
    date: "2025-01-25",
    status: "popular",
  },
  {
    id: 2,
    category: "Product Development",
    title: "Turning Data into Decisions with SaaS",
    description:
      "Learn essential strategies for scaling your SaaS business while avoiding common mistakes that slow growth.",
    image: C2,
    date: "2025-01-20",
    status: "normal",
  },
  {
    id: 3,
    category: "Business Strategy",
    title: "Scaling Efficiency Time by 40%",
    description:
      "Explore effective methods to retain customers and build lasting relationships that drive sustainable revenue.",
    image: C3,
    date: "2025-01-28",
    status: "popular",
  },
  {
    id: 4,
    category: "Product Development",
    title: "Automating Workflows for a 500+ ",
    description:
      "Understand how AI-powered automation transforms business operations and maximizes team efficiency.",
    image: C4,
    date: "2025-01-15",
    status: "normal",
  },
  {
    id: 5,
    category: "Business Strategy",
    title: "Traffic Management",
    description:
      "Master the art of managing and optimizing web traffic to improve user experience and conversion rates.",
    image: C5,
    date: "2025-01-22",
    status: "normal",
  },
  {
    id: 6,
    category: "Product Development",
    title: "AI-Driven: Shaping A New Future",
    description:
      "Explore how AI technology is revolutionizing industries and creating new opportunities for innovation.",
    image: C6,
    date: "2025-01-18",
    status: "popular",
  },
  {
    id: 7,
    category: "Business Strategy",
    title: "Content Marketing in 2025",
    description:
      "Stay ahead with the latest content marketing trends and strategies that will dominate in 2025.",
    image: C7,
    date: "2025-01-26",
    status: "normal",
  },
  {
    id: 8,
    category: "Product Development",
    title: "Chartered Expansion Of Influencer",
    description:
      "Discover how influencer marketing is evolving and how to leverage it for your brand's growth.",
    image: C8,
    date: "2025-01-12",
    status: "normal",
  },
];

export default function CaseStudyPage() {
  const [sortBy, setSortBy] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const sortedCaseStudy = useMemo(() => {
    const data = [...caseStudyData];

    //  Popular first
    if (sortBy === "popular") {
      return data
        .filter((item) => item.status === "popular")
        .concat(data.filter((item) => item.status !== "popular"));
    }

    //  Latest (date based)
    if (sortBy === "recent") {
      return data.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return data;
  }, [sortBy]);
  // pagination
  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(sortedCaseStudy.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCaseStudy = sortedCaseStudy.slice(startIndex, endIndex);

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
            Showing {startIndex + 1}–
            {Math.min(endIndex, sortedCaseStudy.length)} of{" "}
            {sortedCaseStudy.length} Results
          </span>

          <div className="flex items-center gap-2">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="appearance-none  border border-[#E9E9E9] rounded-[30px] px-5 py-4  text-sm cursor-pointer hover:border-gray-400"
              >
                <option value="recent">Latest</option>
                <option value="popular">Most Popular</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 ml-4 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentCaseStudy?.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
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
