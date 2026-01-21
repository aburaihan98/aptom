import { ChevronRight, Search, X } from "lucide-react";
import RightArrow from "../../assets/common/up-right-arrow-white.webp";
import RightArrowBlack from "../../assets/common/up-right-arrow-black.webp";

export default function OurServiceSidebarMenu() {
  const menuItems = [
    "Another Course of Change",
    "Data Privacy",
    "Q&R Registration",
    "More ErgosCare",
    "Trust Transparency",
  ];

  const tags = [
    "LIFE INSURANCE",
    "WELLNESS",
    "TRANSPARENCY",
    "PEACE OF MIND",
    "TRUST",
  ];

  const contactInfo = [
    { label: "Address", value: "123 Main St, Suite 100, New York, NY 10001" },
    { label: "Phone", value: "1-800-555-1234" },
    { label: "Email", value: "contact@example.com" },
    { label: "Hours", value: "Mon-Fri: 9AM-5PM EST" },
  ];

  return (
    <div className=" overflow-hidden">
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
          Services
        </h3>

        {/* Purple CTA Button */}
        <button className="w-full bg-primary text-white rounded-lg py-3 px-4 mb-4 font-medium transition-all  flex items-center gap-2 ">
          <img src={RightArrow} alt="Right Arrow" />
          Apply for General Liability
        </button>

        {/* Menu Items */}
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 px-4 cursor-pointer group transition-colors border-b border-[#F6F6F6]"
            >
              <span className="text-sm text-dark ">{item}</span>
              <img src={RightArrowBlack} alt="Right Arrow" />
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
                className="px-3 py-2 bg-purple-100 text-purple-700 rounded-full text-xs cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-[10px] mt-4 lg:mt-5 p-6 2xl:p-9">
        <h3 className=" font-semibold text-dark uppercase tracking-wider mb-4">
          Contact Information
        </h3>
        <div className="space-y-4">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex">
              <p className="w-[80px] font-semibold text-dark">{info.label}:</p>
              <p className=" text-light leading-relaxed">{info.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
