import SectionHeader from "../common/SectionHeader";
import M1 from "../../assets/app/icon/manage/manage-icon1.webp";
import M2 from "../../assets/app/icon/manage/manage-icon2.webp";
import { CheckCircle, Cloud, Lock, Shield, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const items = [
  {
    id: 1,
    title: "Security",
    icon: <Shield size={40} />,
  },
  {
    id: 2,
    title: "Face ID",
    icon: <Lock size={40} />,
  },
  {
    id: 3,
    title: "Cloud Storage",
    icon: <Cloud size={40} />,
  },
  {
    id: 4,
    title: "Task Management",
    icon: <CheckCircle size={40} />,
  },
  {
    id: 5,
    title: "Trusted & Reliable",
    icon: <Zap size={40} />,
  },
];

export default function ManageAllOfYourStuff() {
  const containerRef = useRef(null);
  const [displayItems, setDisplayItems] = useState(items);

  const ITEM_HEIGHT = 89;

  useEffect(() => {
    const carouselLoop = () => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          y: -ITEM_HEIGHT,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            setDisplayItems((prev) => [...prev.slice(1), prev[0]]);
            gsap.set(containerRef.current, { y: 0 });
          },
        });
      }
    };

    const interval = setInterval(carouselLoop, 3000); // Rotate every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#000000]">
      <div className="Container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <SectionHeader
            title={
              <>
                Secure API access with core <br className=" hidden lg:block" />{" "}
                financial tools, Smart <br className=" hidden lg:block" />{" "}
                budgeting, with cloud sync
              </>
            }
            subtitle="Manage All of Your Stuff"
            textColor="#E9E9E9"
          />
          <div className="flex gap-3 pb-4 sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8 2xl:pb-9  mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-9 border-b-[1px]  border-[#FFFFFF26]">
            <div>
              <img src={M2} alt="Manage icon" />
            </div>
            <div className="flex flex-col gap-2 text-white">
              <h6>Easy Editable Data </h6>
              <p>Begin fine-tuning with a single command</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <img src={M1} alt="Manage icon" />
            </div>
            <div className="flex flex-col gap-2 text-white">
              <h6>Easy Editable Data </h6>
              <p>Begin fine-tuning with a single command</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="space-y-6">
            {/* Carousel Container */}
            <div className="relative h-[360px] overflow-hidden rounded-[10px]">
              {/* Items */}
              <div ref={containerRef} className="flex flex-col gap-[9px]">
                {displayItems.map((item, index) => {
                  const isTop = index === 0; // 50% visible at top
                  const isActive = index === 1; // Active/focused (100% with icon)
                  const isMiddle = index === 2 || index === 3; // 100% visible, no icon
                  const isBottom = index === 4; // 50% visible at bottom

                  return (
                    <div
                      key={item.id}
                      className={`
                        flex-shrink-0 px-10 py-5 rounded-[10px]
                        flex items-center justify-center
                        text-white transition-colors duration-500 ease-in-out
                        ${isActive ? " bg-[#864FFD]" : " bg-[#031E2D]"}
                        ${isTop ? "opacity-50 -mt-[40px]" : ""}
                        ${isBottom ? "opacity-50 -mb-[40px]" : ""}
                        ${isMiddle ? "opacity-100" : ""}
                      `}
                    >
                      <div className="flex flex-col items-center gap-3">
                        {/* icon only for active item */}
                        {isActive && item.icon}
                        <span className="text-lg font-semibold">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
