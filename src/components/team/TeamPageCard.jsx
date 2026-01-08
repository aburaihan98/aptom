import UpRightArrowBlack from "../../assets/common/up-right-arrow-black.webp";

export default function TeamPageCard({ team }) {
  return (
    <div className="bg-white p-5 md:p-7 lg:p-9 flex flex-col items-center justify-center w-full">
      {/* Content Section */}
      <div className="w-full text-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-[30px]">
        {/* Name */}
        <h3 className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] 2xl:text-[20px] font-medium text-dark mb-3 md:mb-4 lg:mb-5">
          {team.name}
        </h3>
        {/* Title */}
        <p className="text-light leading-relaxed">{team.title}</p>
      </div>
      {/* Profile Image */}
      <div className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[380px] 2xl:h-[418px] relative rounded-lg overflow-hidden">
        <img
          src={team.image || "/placeholder.svg"}
          alt={team.name}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
