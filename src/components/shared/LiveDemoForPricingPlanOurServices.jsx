import { useState } from "react";
import VideoBanner from "../../assets/saas/full-control/video-banner.webp";
import VideoIcon from "../../assets/saas/icon/video.webp";

export default function LiveDemoForPricingPlanOurServices({ banner }) {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <div className="bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-16 2xl:mx-0 max-w-[1920px]">
          <div className="relative w-full">
            {/* Video Banner */}
            <img
              src={banner ? banner : VideoBanner}
              alt="video banner"
              className="w-full h-auto"
            />
            {/* Icon centered */}
            <div
              onClick={() => setOpenVideo(true)}
              className="absolute inset-0 flex justify-center items-center"
            >
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
        {/* ================= MODAL ================= */}
        {openVideo && (
          <div
            className="fixed inset-0 md:items-start lg:items-start md:pt-36 lg:pt-36  bg-black/70 flex items-center justify-center z-50"
            onClick={() => setOpenVideo(false)}
          >
            <div
              className="bg-white rounded-lg w-[90%] md:w-[80%] lg:w-[800px] p-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpenVideo(false)}
                className="absolute -top-3 -right-3 bg-black text-white w-8 h-8 rounded-full cursor-pointer"
              >
                ✕
              </button>

              {/* YouTube Video */}
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/vquNo3S5eYI"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
