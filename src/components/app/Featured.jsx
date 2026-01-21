import F1 from "../../assets/app/featured/f1.webp";
import F2 from "../../assets/app/featured/f2.webp";
import F3 from "../../assets/app/featured/f3.webp";
import SectionHeader from "../common/SectionHeader";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featuredItems = [
  {
    image: F1,
    title: "Scalable Tools for Every User",
    subtitle: "Growth Ready",
    description:
      "Whether you’re tracking personal budgets or managing business accounts, our app adapts to your needs. With customizable dashboards, Retina‑ready visuals, and automated savings, you’ll have the tools to scale your financial journey without limits.",
  },
  {
    image: F2,
    title: "Open Finance API with Core Features",
    subtitle: "Secure Integrations",
    description:
      "Built for flexibility, our open API connects securely with banks, wallets, and payment platforms. From transaction syncing to automated categorization, every feature is designed to simplify financial management while keeping your data safe and accessible.",
  },
  {
    image: F3,
    title: "Smart Spending",
    subtitle: "Real‑Time Insights with 100K+ Transactions",
    description:
      "Our finance app delivers instant clarity by processing thousands of data points every second. With advanced analytics and seamless reporting, you gain a complete view of your spending habits—empowering smarter decisions and effortless control over your money.",
  },
];

export default function Featured() {
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    const stackOffset = 40;

    gsap.set(cards, {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
    });

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: `+=${cards.length * 100}%`,
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress * (cards.length - 1);

        cards.forEach((card, i) => {
          const offset = Math.max(0, progress - i);

          gsap.to(card, {
            y: -offset * stackOffset,
            zIndex: i + 1,
            duration: 0.2,
            ease: "power2.out",
          });
        });
      },
    });
  }, []);

  return (
    <section className="relative h-[100vh] bg-bg overflow-hidden">
      <div ref={wrapperRef} className="relative h-full Container">
        {featuredItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white rounded-[24px] shadow-xl p-8 flex gap-8"
          >
            <div className="flex-1 bg-gradient-to-b from-[#864FFD] to-[#E7DBFF] rounded-xl p-6 flex justify-center">
              <img src={item.image} alt="" />
            </div>

            <div className="flex-1">
              <SectionHeader
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
