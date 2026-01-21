import LeftImage from "../../assets/saas/banner/left-texture.webp";
import RightImage from "../../assets/saas/banner/right-texture.webp";
import NavBar from "./NavBar";
import BannerImage from "../../assets/saas/banner/banner.webp";

export default function Banner() {
  return (
    <>
      <div className="bg-[#031e2d]">
        <div className="relative overflow-hidden pb-[90px] md:pb-[180px] lg:pb-[300px] 2xl:pb-[500px] max-w-[1920px] mx-auto">
          {/* Left Image */}
          <div className="absolute -left-[29px] top-0 pointer-events-none">
            <img src={LeftImage} alt="Left Texture" className="h-full w-auto" />
          </div>
          {/* Right Image */}
          <div className="absolute -right-[29px] -top-[72px] pointer-events-none">
            <img
              src={RightImage}
              alt="Right Texture"
              className="h-full w-auto"
            />
          </div>
          {/* navbar  */}
          <NavBar />

          <div className="mt-[90px] md:mt-[100px] lg:mt-[85px] flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between gap-6 text-white py-6 md:py-8 lg:py-16 xl:py-20 2xl:py-[120px]  mx-4 sm:mx-6 md:mx-12 lg:mx-16">
            {/* Content */}
            <div>
              <div className="flex items-center gap-2 lg:gap-2.5 mb-4 md:mb-5 lg:mb-6">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                <h3 className="font-medium">
                  Turning complexity into clarity.
                </h3>
              </div>
              <h2 className="max-w-xl text-[32px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[64px] 2xl:text-[70px] leading-[1]">
                Unlock the Power of Web3 with SaaS Solutions
              </h2>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <button className=" bg-primary rounded-full px-5 py-2 md:px-6 md:py-3 lg:px-[30px] lg:py-5 font-bold cursor-pointer">
                Try For Free
              </button>
              <button className="bg-transparent border border-white rounded-full px-5 py-2 md:px-6 md:py-3 lg:px-[30px] lg:py-5 font-bold cursor-pointer">
                See All Features
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-16 max-w-[1920px] flex justify-center -translate-y-1/2">
        <img src={BannerImage} alt="Banner Image" className="w-full" />
      </div>
    </>
  );
}
