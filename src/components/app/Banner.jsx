import AppBanner from "../../assets/app/banner/app-banner.webp";
import PlayStor from "../../assets/app/icon/play-stor.webp";
import AppStor from "../../assets/app/icon/app-stor.webp";

export function Banner() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Purple gradient with phone mockup */}
        <div className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 h-96 md:h-full md:min-h-96 flex items-center justify-center">
          <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-16 max-w-[1920px] 2xl:mx-auto">
            <img src={AppBanner} alt="App Banner" />
          </div>
        </div>
        {/* Right Side - Content */}
        <div className="space-y-6 md:space-y-8 px-4 md:px-0">
          <div>
            <div className="flex items-center gap-2 lg:gap-2.5 mb-4 md:mb-5 lg:mb-6">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              <h3 className="font-medium">Your world, one tap away.</h3>
            </div>
            <h2 className="text-dark  text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[60px] 2xl:text-[70px] mb-4 md:mb-6 lg:mb-8 2xl:mb-10 leading-[1]">
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
