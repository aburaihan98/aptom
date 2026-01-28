import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import App1 from "../../assets/app/app-screens/app1.png";
import App2 from "../../assets/app/app-screens/app2.png";
import App3 from "../../assets/app/app-screens/app3.png";
import App4 from "../../assets/app/app-screens/app4.png";
import App5 from "../../assets/app/app-screens/app5.png";

const appScreens = [App1, App2, App3, App4, App5];

export default function AppScreens() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto slide every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % appScreens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Get position relative to center (-2, -1, 0, 1, 2)
  const getPosition = (index) => {
    const diff = index - currentIndex;
    if (diff > 2) return diff - appScreens.length;
    if (diff < -2) return diff + appScreens.length;
    return diff;
  };

  // Get scale and opacity based on position
  const getStyle = (position) => {
    const absPos = Math.abs(position);

    if (absPos === 0) {
      return {
        scale: 1,
        opacity: 1,
        zIndex: 5,
        translateX: "0%",
      };
    } else if (absPos === 1) {
      return {
        scale: 0.75,
        opacity: 0.6,
        zIndex: 4,
        translateX: position > 0 ? "20%" : "-20%",
      };
    } else {
      return {
        scale: 0.5,
        opacity: 0.3,
        zIndex: 3,
        translateX: position > 0 ? "40%" : "-40%",
      };
    }
  };

  return (
    <div className="bg-[#000000]">
      <div className="Container">
        <div>
          <SectionHeader
            title="Seamlessly Styled Screens for Every Feature"
            subtitle="App Screens"
            textColor="#FFFFFF"
            textAlign="center"
          />
        </div>

        {/* Carousel Container */}
        <div className="relative mt-6 md:mt-8 lg:mt-10">
          {/* Main Carousel */}
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
            {appScreens.map((screen, index) => {
              const position = getPosition(index);
              const style = getStyle(position);

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    transform: `translateX(calc(${position * 200}px + ${style.translateX})) scale(${style.scale})`,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                  }}
                  onClick={() => goToSlide(index)}
                >
                  <img
                    src={screen}
                    alt={`App ${index + 1}`}
                    className="w-48 md:w-64 h-auto rounded-lg shadow-2xl -z-50 "
                  />
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {appScreens.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-purple-500"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
