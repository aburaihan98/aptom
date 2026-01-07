import AboutUsImage from "../../assets/saas/about-us/about-us.webp";
import AboutUsImage2 from "../../assets/saas/about-us/about-us-2.webp";
import SectionHeader from "../common/SectionHeader";
import CheckMark from "../../assets/common/check-mark.webp";
import Button from "../common/Button";

const features = [
  { icon: CheckMark, text: "Innovative Ideas" },
  { icon: CheckMark, text: "Financial Service" },
  { icon: CheckMark, text: "Trusted And Reliable" },
  { icon: CheckMark, text: "Business Advisory" },
];

export default function AboutUs() {
  return (
    <div className="bg-bg">
      <div className="Container flex flex-col-reverse lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-[107px] items-center justify-between">
        <div className=" relative">
          <div className=" relative w-full lg:w-[572px]">
            <img src={AboutUsImage} alt="About Us Image" />
          </div>
          <div className=" absolute bottom-0 md:bottom-8 lg:bottom-10 xl:bottom-12 2xl:bottom-[50px] right-14 md:-right-12 lg:-right-16 xl:-right-20 2xl:-right-[103px]">
            <img className="w-full" src={AboutUsImage2} alt="AboutUsImage2" />
          </div>
        </div>
        <div>
          <div className="mb-4 md:mb-6 lg:mb-8 2xl:mb-10">
            <SectionHeader
              title="Building Smarter Solutions for Tomorrow, From Vision to Value!"
              subtitle="About Us"
              description="Our platform is trusted by startups and enterprises alike, helping organizations cut inefficiencies, boost collaboration, and unlock new opportunities. With a focus on user‑centric design and AI‑driven innovation, we ensure every feature delivers real value from traffic management and security to content marketing and SEO"
            />
          </div>
          <p className="text-light mb-4 md:mb-6 lg:mb-8 2xl:mb-10">
            We deliver scalable SaaS solutions that transform data into
            decisions, automate repetitive tasks, and drive measurable growth.
          </p>
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-[28px] 2xl:gap-[34px] mb-4 md:mb-6 lg:mb-8 2xl:mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <img src={feature.icon} alt="feature icon" />
                <span className="text-gray-700 font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button title="Get Free Consulting" />
            <Button
              title="Read More"
              bg="transparent"
              textColor="#864FFD"
              borderColor="#864FFD"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
