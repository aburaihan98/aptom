import AppBanner from "../../assets/app/banner/app-banner.webp";
import PlayStor from "../../assets/app/icon/play-stor.webp";
import AppStor from "../../assets/app/icon/app-stor.webp";
import { useEffect, useRef, useState } from "react";

const initialFeatures = [
  "Best for money management",
  "top features integrated",
  "Real‑Time Activity Tracking",
  "AI‑Driven Security",
];

export function Banner() {
  const [items, setItems] = useState(initialFeatures);
  const listRef = useRef(null);

  const ITEM_HEIGHT = 80;

  useEffect(() => {
    const interval = setInterval(() => {
      // animate up
      listRef.current.style.transition = "transform 0.6s ease-in-out";
      listRef.current.style.transform = `translateY(-${ITEM_HEIGHT}px)`;

      setTimeout(() => {
        // rotate array
        setItems((prev) => [...prev.slice(1), prev[0]]);

        // reset position
        listRef.current.style.transition = "none";
        listRef.current.style.transform = "translateY(0)";
      }, 600);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getItemStyle = (index) => {
    const styles = [
      { opacity: 1, blur: 0, scale: 1 },
      { opacity: 0.7, blur: 1, scale: 0.95 },
      { opacity: 0.5, blur: 2, scale: 0.9 },
      { opacity: 0.3, blur: 3, scale: 0.85 },
    ];
    return styles[index] || styles[3];
  };

  return (
    <div className="bg-bg mt-[22px]">
      <div className="pt-6 md:pt-8 lg:pt-16 2xl:pt-[100px] mx-4 sm:mx-6 md:mx-12 lg:mx-16 max-w-[1920px] 2xl:mx-auto">
        <div className=" flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Purple gradient with phone mockup */}
          <div className=" relative flex-1 relative bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 h-96 md:h-full md:min-h-96  rounded-r-[30px]">
            <div className="absolute top-[65px] right-[25px] h-[320px] overflow-hidden">
              <div ref={listRef} className="flex flex-col gap-6">
                {items.map((item, index) => {
                  const style = getItemStyle(index);

                  return (
                    <button
                      key={index}
                      className="py-4 px-6 bg-[#FFFFFF26] rounded-[5px] text-white"
                      style={{
                        top: `${item.position * 80}px`,
                        opacity: style.opacity,
                        filter: `blur(${style.blur}px)`,
                        transform: `scale(${style.scale})`,
                      }}
                    >
                      • {item}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="mt-[170px] mx-4 sm:mx-6 md:mx-12 lg:mx-16 max-w-[1920px] 2xl:mx-auto">
              <img src={AppBanner} alt="App Banner" />
            </div>
          </div>
          {/* Right Side - Content */}
          <div className=" flex-1">
            <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-[50px]">
              <div className="flex items-center gap-2 lg:gap-2.5 mb-4 md:mb-5 lg:mb-6">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                <h3 className="font-medium">Your world, one tap away.</h3>
              </div>
              <h2 className=" text-dark  text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[60px] 2xl:text-[70px] mb-4 md:mb-6 lg:mb-8 2xl:mb-10 leading-[1]">
                One app for Smart money management without limits.
              </h2>
            </div>

            {/* Play Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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
    </div>
  );
}
