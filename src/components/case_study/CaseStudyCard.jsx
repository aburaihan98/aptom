import UpRightArrowBlack from "../../assets/common/up-right-arrow-black.webp";

export default function CaseStudyCard({ study }) {
  return (
    <div className=" relative mb-[120px] group cursor-pointer ">
      <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[591px]">
        <img
          src={study.image}
          alt="Business team consulting"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content Section */}
      <div className=" absolute transform -translate-y-8/12 mx-5 md:mx-6 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-[50px] bg-white rounded-[20px]">
        {/* Heading */}
        <h3 className="font-medium text-primary mb-3 md:mb-4 lg:mb-5">
          {study?.category}
        </h3>

        <h3 className="font-bold text-dark text-base md:text-lg lg:text-xl 2xl:text-[24px] mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-[30px]">
          {study?.title}
        </h3>

        {/* Description */}
        <p className="text-light mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-[70px]">
          {study?.description}
        </p>
        <div className="flex items-center justify-start gap-4">
          view case study{" "}
          <img
            src={UpRightArrowBlack}
            alt="Up Right Arrow"
            className=" group-hover:rotate-45"
          />
        </div>
      </div>
    </div>
  );
}
