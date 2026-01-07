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
    color: "from-slate-700 to-slate-800",
  },
  {
    id: 2,
    title: "Face ID",
    icon: <Lock size={40} />,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    title: "Cloud Storage",
    icon: <Cloud size={40} />,
    color: "from-slate-700 to-slate-800",
  },
  {
    id: 4,
    title: "Task Management",
    icon: <CheckCircle size={40} />,
    color: "from-slate-700 to-slate-800",
  },
  {
    id: 5,
    title: "Trusted & Reliable",
    icon: <Zap size={40} />,
    color: "from-slate-700 to-slate-800",
  },
];

export default function ManageAllOfYourStuff() {
  const containerRef = useRef(null);
  const [displayItems, setDisplayItems] = useState(items);

  useEffect(() => {
    const carouselLoop = () => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          y: -100,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            // Rotate items array - move first item to end
            setDisplayItems((prev) => [...prev.slice(1), prev[0]]);
            // Reset position
            gsap.set(containerRef.current, { y: 0 });
          },
        });
      }
    };

    const interval = setInterval(carouselLoop, 4000); // Rotate every 4 seconds
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
            <div className="relative h-96 overflow-hidden rounded-xl">
              {/* Gradient Overlays */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-900 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent z-10 pointer-events-none" />

              {/* Items */}
              <div ref={containerRef} className="flex flex-col gap-4 p-4">
                {displayItems.map((item) => (
                  <div
                    key={item.id}
                    className={`flex-shrink-0 h-24 rounded-lg bg-gradient-to-br ${
                      item.color
                    } flex flex-col items-center justify-center text-white transition-all duration-300 ${
                      displayItems[0].id === item.id
                        ? "scale-105 ring-2 ring-purple-400"
                        : "opacity-70"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="text-lg font-semibold">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
