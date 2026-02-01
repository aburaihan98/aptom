import UpRightArrow from "../../assets/common/up-right-arrow-black.webp";
import RightArrow from "../../assets/common/right-arrow.webp";

export default function OurServicesPageCard({ service }) {
  return (
    <div className="group grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 2xl:gap-[65px] border-b-[1px] border-[#E9E9E9] mb-6 cursor-pointer">
      <h2 className="text-dark group-hover:text-primary font-bold">
        {service?.title}
      </h2>
      <div className="">
        <p className="text-light mb-6">{service?.description}</p>
        <div className="relative mb-6 md:mb-5 lg:mb-6 2xl:mb-[24px] h-6">
          {/* Default icon */}
          <div className="absolute inset-0 flex items-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <img src={UpRightArrow} alt="Up Right Arrow" />
          </div>

          {/* Hover content */}
          <div className="absolute inset-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-3 md:gap-4">
              <span className="group-hover:text-primary transition-colors duration-300">
                Learn more
              </span>
              <img src={RightArrow} alt="Right Arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
