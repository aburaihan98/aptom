import PlayStor from "../../assets/app/icon/play-stor.webp";
import AppStor from "../../assets/app/icon/app-stor.webp";
import D1 from "../../assets/app/download-app-today/d1.webp";

export default function DownloadAppToday() {
  return (
    <div className="bg-primary">
      <div className="Container flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-12 2xl:gap-[65px]">
        <div className="flex-1">
          <img src={D1} alt="App Banner" />
        </div>
        {/* Right Side - Content */}
        <div className=" flex-1 space-y-6 md:space-y-8 px-4 md:px-0">
          <div>
            <div className="flex items-center gap-2 lg:gap-2.5 mb-4 md:mb-5 lg:mb-6">
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <h3 className="font-medium text-white">
                Your world, one tap away.
              </h3>
            </div>
            <h2 className="text-white  text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[60px] 2xl:text-[70px] mb-4 md:mb-6 lg:mb-8 2xl:mb-10 leading-[1]">
              One app for Smart money management without limits.
            </h2>
          </div>

          {/* Play Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center  gap-2 text-sm md:text-base cursor-pointer">
              <img src={PlayStor} alt="Play Store" />
              <div className="">
                <h6 className="text-left text-[#B4B9C1]">get it on</h6>
                <p>start free trial</p>
              </div>
            </button>

            <button className="bg-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center  gap-2 text-sm md:text-base cursor-pointer">
              <img src={AppStor} alt="App Store" />
              <div className="">
                <h6 className="text-left text-[#B4B9C1]">get it on</h6>
                <p className="text-dark">start free trial</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
