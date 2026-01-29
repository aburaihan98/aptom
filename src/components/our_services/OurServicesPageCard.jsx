import UpRightArrow from "../../assets/common/up-right-arrow-black.webp";
import RightArrow from "../../assets/common/right-arrow.webp";

export default function OurServicesPageCard({ service }) {
  return (
    <div className="group grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 2xl:gap-[65px] border-b-[1px] border-[#E9E9E9] mb-6 cursor-pointer">
      <h2 className="text-dark group-hover:text-primary font-bold">
        {service?.title}
      </h2>
      <div className="">
        <p className="text-light mb-6 sm:mb-7 md:mb-8 lg:mb-9 xl:mb-10 2xl:mb-[50px]">
          {service?.description}
        </p>
        <div className="mb-4 md:mb-5 lg:mb-6 2xl:mb-[24px]">
          <div className=" opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <img src={UpRightArrow} alt="Up Right Arrow" />
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-3 md:gap-4">
              <span className="group-hover:text-primary transition-colors duration-300">
                Learn more
              </span>
              <img src={RightArrow} alt="Up Right Arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
