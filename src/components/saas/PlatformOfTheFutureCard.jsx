import UpRightArrowBlack from "../../assets/common/up-right-arrow-black.webp";

export default function PlatformOfTheFutureCard({ future }) {
  return (
    <div className=" relative bg-bg rounded-[20px]  relative overflow-hidden ">
      <div className="relative p-9">
        {/* Title */}
        <h3 className="text-base md:text-lg lg:text-xl 2xl:text-[24px] font-bold text-dark mb-4 md:mb-5 lg:mb-6 2xl:mb-[24px]">
          {future.title}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg 2xl:text-[20px] text-light mb-8 md:mb-10 lg:mb-12 2xl:mb-[57px]">
          {future.description}
        </p>

        <div className="">
          <img src={UpRightArrowBlack} alt="Up Right Arrow Black" />
        </div>
      </div>
      <div className="flex justify-end">
        <img src={future.image} alt="image" />
      </div>
    </div>
  );
}
