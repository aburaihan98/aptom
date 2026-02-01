import UpRightArrowBlack from "../../assets/common/up-right-arrow-black.webp";

export default function TeamPageCard({ team }) {
  return (
    <div className=" relative rounded-[10px] bg-white px-5 md:px-7 lg:px-9 pt-5 md:pt-7 lg:pt-9 flex flex-col items-center justify-center w-full group">
      {/* Content Section */}
      <div className="w-full text-left mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-[30px]">
        {/* Name */}
        <h3 className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] 2xl:text-[20px] font-medium text-dark mb-3 md:mb-4 lg:mb-5">
          {team.name}
        </h3>
        {/* Title */}
        <p className="text-light leading-relaxed">{team.title}</p>
      </div>
      {/* Profile Image */}
      <div className=" flex justify-center w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[380px] 2xl:h-[418px] relative rounded-lg overflow-hidden">
        <img
          src={team.image || "/placeholder.svg"}
          alt={team.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute bottom-5 py-5 px-6 bg-primary text-white rounded-[10px] hidden group-hover:block transition-all duration-300">
        <div className="flex items-center gap-3 text-sm font-medium">
          <span className="cursor-pointer hover:opacity-80 transition">
            fb.
          </span>
          <span>/</span>
          <span className="cursor-pointer hover:opacity-80 transition">
            tw.
          </span>
          <span>/</span>
          <span className="cursor-pointer hover:opacity-80 transition">
            in.
          </span>
          <span>/</span>
          <span className="cursor-pointer hover:opacity-80 transition">
            be.
          </span>
        </div>
      </div>
    </div>
  );
}
