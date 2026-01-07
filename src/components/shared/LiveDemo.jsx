import VideoBanner from "../../assets/saas/full-control/video-banner.webp";
import VideoIcon from "../../assets/saas/icon/video.webp";

export default function LiveDemo({ banner }) {
  return (
    <div className="bg-bg">
      <div className="Container">
        <div className="relative w-full">
          {/* Video Banner */}
          <img
            src={banner ? banner : VideoBanner}
            alt="video banner"
            className="w-full h-auto"
          />
          {/* Icon centered */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-white p-4 md:p-5 lg:p-[23px] rounded-full cursor-pointer">
              <img
                src={VideoIcon}
                alt="play icon"
                className=" w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8 2xl:w-[36px] 2xl:h-[36px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
