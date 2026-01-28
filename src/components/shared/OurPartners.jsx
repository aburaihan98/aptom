import { useEffect, useRef } from "react";
import P1 from "../../assets/shared/partners/p1.webp";
import P2 from "../../assets/shared/partners/p2.webp";
import P3 from "../../assets/shared/partners/p3.webp";
import P4 from "../../assets/shared/partners/p4.webp";
import P5 from "../../assets/shared/partners/p5.webp";
import P6 from "../../assets/shared/partners/p6.webp";
import gsap from "gsap";

const partners = [P1, P2, P3, P4, P5, P6];

export default function OurPartners() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-bg">
      <div className="Container -mt-[80px] md:-mt-[160px] lg:-mt-[290px] 2xl:-mt-[300px]">
        {/* Marquee */}
        <div className="overflow-hidden w-full">
          <div ref={marqueeRef} className="flex w-max gap-10 items-center">
            {[...partners, ...partners].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Partner ${i}`}
                className="h-8 md:h-12 lg:h-14 object-contain"
              />
            ))}
          </div>
        </div>
        <p className="font-bold text-light text-center mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-9 2xl:mt-9">
          More than <span className="text-dark">450+</span> companies trusted
          us. our <span className="text-dark">partners</span>
        </p>
      </div>
    </div>
  );
}
