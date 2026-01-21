import { Calendar, MessageCircle, Search, User } from "lucide-react";
import B1 from "../../assets/shared/latest-insights/blog1.jpg";
import B3 from "../../assets/shared/latest-insights/blog3.jpg";
import B4 from "../../assets/shared/latest-insights/blog4.jpg";
import B5 from "../../assets/shared/latest-insights/blog5.jpg";
import B6 from "../../assets/shared/latest-insights/blog6.jpg";
import RightArrowBlack from "../../assets/common/up-right-arrow-black.webp";
import BlogBanner from "../../assets/blog/b.webp";
import A from "../../assets/blog/a.webp";
import C1 from "../../assets/blog/c1.webp";
import C2 from "../../assets/blog/c2.webp";
import Facebook from "../../assets/common/social-media/p-facebook.webp";
import Instagram from "../../assets/common/social-media/p-instagram.webp";
import Youtube from "../../assets/common/social-media/p-youtube.webp";
import Twitch from "../../assets/common/social-media/p-twitch.webp";
import CommentForm from "./CommentForm";
import Calender from "../../assets/blog/calendar.webp";
import MessageMultiple from "../../assets/blog/message-multiple.webp";

export default function BlogDetailsContent() {
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

  const comments = [
    {
      id: 1,
      name: "Alex R.",
      role: "Operations Manager at DemoCorp",
      avatar: C1,
      text: "This app completely transformed how I track my spending. The real-time insights are sharp, and the automated savings feature feels like having a personal finance coach in my pocket.",
    },
    {
      id: 2,
      name: "Martin Jec.",
      role: "Operations Manager at DemoCorp",
      avatar: C2,
      text: "This app completely transformed how I track my spending. The real-time insights are sharp, and the automated savings feature feels like having a personal finance coach in my pocket.",
    },
  ];

  return (
    <div className="bg-bg">
      <div className="Container grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-4">
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
                  <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
                    {/* Image */}
                    <div className="relative h-32">
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
        <div className="col-span-8">
          <div className=" h-[460px]">
            <img className="w-full h-full" src={BlogBanner} alt="Blog" />
          </div>
          <article className="pt-6 md:pt-8 2xl:pt-9">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6 2xl:gap-9 text-sm text-light pb-6 md:pb-8 2xl:pb-9 border-b border-[#E9E9E9]">
              <div className="flex items-center gap-2">
                <img src={A} alt="" />
                <span>BY admin</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={Calender} alt="" />
                <span>10 Feb 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={MessageMultiple} alt="" />
                <span>2 Comments</span>
              </div>
              <div className="ml-auto">
                <span className="px-2.5 py-2 bg-dark text-white text-xs font-medium rounded-[5px]">
                  Computer
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              How SaaS Startups Can Scale Without Burning Out
            </h1>

            {/* Intro Paragraph */}
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Scaling a SaaS startup is exhilarating—but it can also feel like
              sprinting a marathon. Founders and teams often push themselves to
              the brink, chasing growth at all costs. The good news? Sustainable
              scaling is possible without sacrificing health, culture, or
              product quality. Here's how.
            </p>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                1. Prioritize Sustainable Growth Over Hypergrowth
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Avoid vanity metrics:</span>{" "}
                    Focus on customer retention, lifetime value, and product
                    adoption rather than just sign-ups.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Build for longevity:</span>{" "}
                    Growth that outpaces infrastructure or team capacity often
                    leads to burnout.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700">
                    <span className="font-semibold">
                      Adopt a "slow is smooth, smooth is fast" mindset:
                    </span>{" "}
                    Incremental improvements compound into exponential results.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                2. Invest In People, Not Just Processes
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Hire thoughtfully:</span>{" "}
                    Don't scale headcount faster than revenue.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Empower autonomy:</span>{" "}
                    Teams thrive when they have ownership over their decisions.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Protect culture:</span> A
                    healthy work environment reduces turnover and keeps morale
                    high.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
            <div className="h-[300px] 2xl:h-[460px] w-full">
              <img
                className="rounded-[10px] w-full h-full"
                src={B4}
                alt="Blog image"
              />
            </div>
            <div className="h-[300px] 2xl:h-[460px] w-full">
              <img
                className="rounded-[10px] w-full h-full"
                src={B6}
                alt="Blog image"
              />
            </div>
          </div>
          <article className="py-8 md:py-12">
            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                3. Automate And Delegate Early
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">
                      Leverage automation tools:
                    </span>{" "}
                    CRM, billing, onboarding, and analytics can be streamlined
                    with SaaS integrations.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">
                      Delegate non-core tasks:
                    </span>{" "}
                    Outsource accounting, HR, or customer support when possible.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700">
                    <span className="font-semibold">
                      Focus on product-market fit:
                    </span>{" "}
                    Free up founders to concentrate on innovation and customer
                    needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4. Balance Hustle With Rest
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Set boundaries:</span>{" "}
                    Encourage reasonable working hours and discourage
                    "always-on" culture.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Normalize downtime:</span>{" "}
                    Rest fuels creativity and problem-solving.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Lead by example:</span>{" "}
                    Founders who model balance inspire their teams to follow
                    suit.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                5. Build Scalable Systems
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">
                      Design modular architecture:
                    </span>{" "}
                    Ensure your product can handle growth without constant
                    rework.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Document processes:</span>{" "}
                    Create clear playbooks for onboarding, customer success, and
                    product updates.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Measure what matters:</span>{" "}
                    Use KPIs that align with long-term vision, not short-term
                    hype.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                6. Stay Customer-Centric
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Listen actively:</span>{" "}
                    Feedback loops prevent wasted effort on features nobody
                    wants.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">
                      Deliver value consistently:
                    </span>{" "}
                    Happy customers become advocates, reducing marketing spend.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Avoid feature bloat:</span>{" "}
                    Simplicity scales better than complexity.
                  </p>
                </div>
              </div>
            </div>
          </article>
          {/* comment  */}
          <div className="">
            {/* Tags and Social Share Section */}
            <div className="bg-purple-100 rounded-2xl px-8 py-6 mb-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                {/* Tags */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-700 font-medium">Tags :</span>
                  <button className="px-4 py-2 bg-white text-purple-600 rounded-full text-sm font-medium hover:bg-purple-50 transition">
                    #SaaSMarketing
                  </button>
                  <button className="px-4 py-2 bg-white text-purple-600 rounded-full text-sm font-medium hover:bg-purple-50 transition">
                    #ScaleUp
                  </button>
                </div>

                {/* Social Share */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-700 font-medium">
                    Social Share :
                  </span>
                  <div className="flex gap-2 bg-white rounded-full">
                    <button className="w-10 h-10 flex items-center justify-center text-purple-600 hover:bg-purple-50 transition">
                      <img src={Facebook} alt="Facebook" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center text-purple-600 hover:bg-purple-50 transition">
                      <img src={Instagram} alt="Instagram" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center text-purple-600 hover:bg-purple-50 transition">
                      <img src={Youtube} alt="Youtube" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center text-purple-600 hover:bg-purple-50 transition">
                      <img src={Twitch} alt="Twitch" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Comment (2)
              </h2>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="border-b border-gray-200 pb-6 last:border-b-0"
                  >
                    {/* Comment Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={C1}
                          alt={comment.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-gray-800 font-semibold">
                            {comment.name}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {comment.role}
                          </p>
                        </div>
                      </div>
                      <button className="text-purple-600 font-medium text-sm hover:underline">
                        Reply
                      </button>
                    </div>

                    {/* Comment Text */}
                    <p className="text-gray-600 leading-relaxed pl-[60px]">
                      {comment.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Lave a comment  */}
          <CommentForm />
        </div>
      </div>
    </div>
  );
}
