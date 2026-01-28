import { useState } from "react";
import Button from "../common/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    serviceNeeded: "",
    email: "",
    phoneNumber: "",
    countryCode: "+1",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="">
      <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-16 max-w-[1920px] 2xl:mx-auto">
        <div className="bg-primary mb-6 md:mb-8 lg:mb-16 2xl:mb-[100px]">
          <div className="flex items-center justify-center py-6 md:py-8 lg:py-16 2xl:py-[100px]">
            <div className="w-full max-w-4xl ">
              {/* Header */}
              <div className="text-center mb-4 md:mb-6 lg:mb-8 2xl:mb-10">
                <h2 className="text-white  font-bold text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px]">
                  Got A Minute? Contact Us Now!
                </h2>
              </div>

              {/* Form Fields */}
              <div className="space-y-6 px-4">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-white text-sm mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      className="w-full px-5 py-[22px] rounded-[10px] bg-[#E0C0FF] focus:outline-none text-gray-700 placeholder-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      className="w-full px-5 py-[22px] rounded-[10px] bg-[#E0C0FF] focus:outline-none text-gray-700 placeholder-white"
                    />
                  </div>
                </div>

                {/* Company Name & Service Needed */}
                <div className="">
                  <div>
                    <label className="block text-white text-sm mb-2">
                      Company Name (If Applicable)
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Enter name"
                      className="w-full px-5 py-[22px] rounded-[10px] bg-[#E0C0FF] focus:outline-none text-gray-700 placeholder-white"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-white text-sm mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address "
                      className="w-full px-5 py-[22px] rounded-[10px] bg-[#E0C0FF] focus:outline-none text-gray-700 placeholder-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">
                      Contact number *
                    </label>
                    <input
                      type="number"
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      placeholder="Enter your number"
                      className="w-full px-5 py-[22px] rounded-[10px] bg-[#E0C0FF] focus:outline-none text-gray-700 placeholder-white"
                    />
                  </div>
                </div>

                {/* Country Code & Phone Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-white text-sm mb-2">
                      Correspondence Postcode *
                    </label>
                    <input
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      placeholder="ex. 215546"
                      className="w-full px-5 py-[22px] rounded-[10px] bg-[#E0C0FF] focus:outline-none text-gray-700 placeholder-white"
                    ></input>
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">
                      House Name/Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter number"
                      className="w-full px-5 py-[22px] rounded-[10px] bg-[#E0C0FF] focus:outline-none text-gray-700 placeholder-white"
                    />
                  </div>
                </div>

                {/* Website URL */}
                <div>
                  <label className="block text-white text-sm mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Enter number"
                    className="w-full px-5 py-[22px] rounded-[10px] bg-[#E0C0FF] focus:outline-none text-gray-700 placeholder-white"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Text ..."
                    className="w-full px-5 py-[22px] rounded-[10px] bg-[#E0C0FF] focus:outline-none text-gray-700 placeholder-white"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <Button
                    onClick={handleSubmit}
                    bg="#031E2D"
                    title="Send Message"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
