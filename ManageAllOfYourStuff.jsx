import SectionHeader from "../common/SectionHeader";
import M1 from "../../assets/app/icon/manage/manage-icon1.webp";
import M2 from "../../assets/app/icon/manage/manage-icon2.webp";
import { CheckCircle, Cloud, Lock, Shield, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const items = [
  { id: 1, title: "Security", icon: <Shield size={40} /> },
  { id: 2, title: "Face ID", icon: <Lock size={40} /> },
  { id: 3, title: "Cloud Storage", icon: <Cloud size={40} /> },
  { id: 4, title: "Task Management", icon: <CheckCircle size={40} /> },
  { id: 5, title: "Trusted & Reliable", icon: <Zap size={40} /> },
];

export default function ManageAllOfYourStuff() {
  const containerRef = useRef(null);
  const [displayItems, setDisplayItems] = useState(items);
  const [activeIndex, setActiveIndex] = useState(1);

  const ITEM_HEIGHT = 89;

  useEffect(() => {
    let delayedCall = null;

    const loop = () => {
      // 🔹 incoming item becomes active smoothly
      delayedCall = gsap.delayedCall(0.5, () => {
        setActiveIndex(2);
      });

      gsap.to(containerRef.current, {
        y: -ITEM_HEIGHT,
        duration: 1.2,
        ease: "power1.inOut",
        onComplete: () => {
          setDisplayItems((prev) => [...prev.slice(1), prev[0]]);
          gsap.set(containerRef.current, { y: 0 });
          setActiveIndex(1);
        },
      });
    };

    const interval = setInterval(loop, 4500);

    return () => {
      clearInterval(interval);
      if (delayedCall) delayedCall.kill();
    };
  }, []);

  return (
    <div className="bg-black">
      <div className="Container grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT */}
        <div>
          <SectionHeader
            title={
              <>
                Secure API access with core <br className="hidden lg:block" />
                financial tools, Smart <br className="hidden lg:block" />
                budgeting, with cloud sync
              </>
            }
            subtitle="Manage All of Your Stuff"
            textColor="#E9E9E9"
          />

          <div className="flex gap-3 pb-6 mb-6 border-b border-[#FFFFFF26]">
            <img src={M2} alt="" />
            <div className="text-white">
              <h6>Easy Editable Data</h6>
              <p>Begin fine-tuning with a single command</p>
            </div>
          </div>

          <div className="flex gap-3">
            <img src={M1} alt="" />
            <div className="text-white">
              <h6>Easy Editable Data</h6>
              <p>Begin fine-tuning with a single command</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center">
          <div className="relative h-[360px] overflow-hidden rounded-[10px]">
            <div ref={containerRef} className="flex flex-col gap-[9px]">
              {displayItems.map((item, index) => {
                const isTop = index === 0;
                const isActive = index === activeIndex;
                const isBottom = index === 4;

                return (
                  <div
                    key={item.id}
                    className={`
                      relative flex-shrink-0 px-10 py-5 rounded-[10px]
                      flex items-center justify-center text-white
                      transition-all duration-700 ease-in-out
                      bg-[#031E2D]
                      ${isTop ? "opacity-50 -mt-[40px]" : ""}
                      ${isBottom ? "opacity-50 -mb-[40px]" : ""}
                    `}
                  >
                    {/* 🔥 Smooth BG overlay */}
                    <div
                      className={`
                        absolute inset-0 rounded-[10px]
                        bg-[#864FFD]
                        transition-opacity duration-700 ease-in-out
                        ${isActive ? "opacity-100" : "opacity-0"}
                      `}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isActive
                            ? "max-h-[40px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.icon}
                      </div>

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
  );
}
