import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function StatsBanner() {
  const stats = [
    { number: "449", label: "API Users" },
    { number: "290", label: "AI Services" },
    { number: "100", label: "API Calls Made" },
    { number: "58", label: "API Calls Made" },
  ];

  const numberRefs = useRef([]);

  useEffect(() => {
    numberRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: stats[index].number,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        },
      );
    });
  }, []);

  return (
    <section className="bg-primary">
      <div className="Container px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              <div className="text-[28px] xl:text-[32px] 2xl:text-[40px] text-white mb-2 leading-[1]">
                <span className="inline-block -ml-3 mr-1">+</span>
                <span ref={(el) => (numberRefs.current[index] = el)}>0</span>
              </div>
              <p className="text-white text-sm md:text-base ml-3 lg:ml-4">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
