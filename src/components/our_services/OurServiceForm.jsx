import React from "react";

export default function OurServiceForm() {
  return (
    <div className=" bg-bg flex items-center justify-center mt-6 md:mt-8 lg:mt-10 2xl:mt-[50px]">
      <div className="w-full bg-white rounded-[10px] px-[30px] py-[50px]">
        {/* Header */}
        <div className=" mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-9">
          <h2 className="Title2">Contact Us</h2>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 md:space-y-6">
          {/* Your Name */}
          <div>
            <label className="block text-sm font-medium text-dark  mb-[14px]">
              Your name *
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full pl-12 pr-[22px]  py-[18px] bg-bg border-0 rounded-[10px] focus:outline-none   text-light placeholder-gray-400"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-dark mb-[14px]">
              Email *
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter email address "
                className="w-full pl-12 pr-[22px]  py-[18px] bg-bg border-0 rounded-[10px] focus:outline-none   text-light placeholder-gray-400"
              />
            </div>
          </div>

          {/* Your Password */}
          <div>
            <label className="block text-sm font-medium text-dark  mb-[14px]">
              Your Message
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"></div>
              <textarea
                name="name"
                placeholder="Text ..."
                className="w-full pl-12 pr-[22px] py-[18px] bg-bg border-0 rounded-[10px] focus:outline-none   text-light placeholder-gray-400"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button className="w-full py-5 bg-[#031E2D] text-white font-bold rounded-full transition-colors cursor-pointer ">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}

