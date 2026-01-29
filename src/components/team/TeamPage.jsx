import T1 from "../../assets/team/team1.png";
import T2 from "../../assets/team/team2.png";
import T3 from "../../assets/team/team3.png";
import T4 from "../../assets/team/team4.png";
import T5 from "../../assets/team/team5.png";
import T6 from "../../assets/team/team6.png";
import T7 from "../../assets/team/team7.png";
import T8 from "../../assets/team/team8.png";
import T9 from "../../assets/team/team9.png";
import TeamPageCard from "./TeamPageCard";
import { useMemo, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const teamData = [
  {
    id: 1,
    name: "John Anderson",
    title: "CEO & Founder",
    image: T1,
    status: "admin",
  },
  {
    id: 2,
    name: "Sarah Williams",
    title: "Product Manager",
    image: T2,
    status: "hr",
  },
  {
    id: 3,
    name: "Michael Brown",
    title: "Lead Developer",
    image: T3,
    status: "employee",
  },
  {
    id: 4,
    name: "Emily Davis",
    title: "UI/UX Designer",
    image: T4,
    status: "admin",
  },
  {
    id: 5,
    name: "David Wilson",
    title: "Marketing Strategist",
    image: T5,
    status: "hr",
  },
  {
    id: 6,
    name: "Olivia Taylor",
    title: "Content Manager",
    image: T6,
    status: "employee",
  },
  {
    id: 7,
    name: "James Moore",
    title: "Business Analyst",
    image: T7,
    status: "admin",
  },
  {
    id: 8,
    name: "Sophia Martin",
    title: "HR Manager",
    image: T8,
    status: "hr",
  },
  {
    id: 9,
    name: "Sophia Martin",
    title: "HR Manager",
    image: T9,
    status: "employee",
  },
];

export default function TeamPage() {
  const [sortBy, setSortBy] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const sortedTeamData = useMemo(() => {
    const data = [...teamData];

    // Show all
    if (sortBy === "all") {
      return data;
    }

    // Filter by admin
    if (sortBy === "admin") {
      return data.filter((item) => item.status === "admin");
    }

    // Filter by hr
    if (sortBy === "hr") {
      return data.filter((item) => item.status === "hr");
    }

    // Filter by employee
    if (sortBy === "employee") {
      return data.filter((item) => item.status === "employee");
    }

    return data;
  }, [sortBy]);

  // pagination
  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(sortedTeamData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTeamData = sortedTeamData.slice(startIndex, endIndex);

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
            Showing {startIndex + 1}–{Math.min(endIndex, sortedTeamData.length)}{" "}
            of {sortedTeamData.length} Results
          </span>

          <div className="flex items-center gap-2">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="appearance-none  border border-[#E9E9E9] rounded-[30px] px-5 py-4  text-sm cursor-pointer hover:border-gray-400"
              >
                <option value="all">All Members</option>
                <option value="admin">Admin</option>
                <option value="hr">HR</option>
                <option value="employee">Employee</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 ml-4 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6">
          {currentTeamData?.map((team) => (
            <TeamPageCard key={team?.id} team={team} />
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
