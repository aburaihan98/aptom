import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import UpRightArrowBlack from "../../assets/common/up-right-arrow-black.webp";
import CS1 from "../../assets/saas/case-study/case_study1.jpg";
import CS2 from "../../assets/saas/case-study/case_study2.jpg";
import CS3 from "../../assets/saas/case-study/case_study3.jpg";
import CS4 from "../../assets/saas/case-study/case_study4.jpg";
import CS5 from "../../assets/saas/case-study/case_study5.jpg";
import CS6 from "../../assets/saas/case-study/case_study6.jpg";
import CS7 from "../../assets/saas/case-study/case_study7.jpg";
import CaseStudiesCard from "./CaseStudiesCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    title: "Scaling Efficiency By 40%",
    category: "Conversion Optimization",
    image: CS1,
    actionIcon: UpRightArrowBlack,
  },
  {
    title: "Boosting Engagement Through Personalization",
    category: "Customer Experience",
    image: CS2,
    actionIcon: UpRightArrowBlack,
  },
  {
    title: "Revenue Growth with AI Insights",
    category: "Business Intelligence",
    image: CS3,
    actionIcon: UpRightArrowBlack,
  },
  {
    title: "Optimizing Operations Across Teams",
    category: "Process Improvement",
    image: CS4,
    actionIcon: UpRightArrowBlack,
  },
  {
    title: "Driving Marketing ROI by 30%",
    category: "Digital Marketing",
    image: CS5,
    actionIcon: UpRightArrowBlack,
  },
  {
    title: "Enhancing Product Development Cycle",
    category: "Productivity Tools",
    image: CS6,
    actionIcon: UpRightArrowBlack,
  },
  {
    title: "Reducing Support Response Time",
    category: "Customer Support",
    image: CS7,
    actionIcon: UpRightArrowBlack,
  },
];

export default function CaseStudies() {
  const sectionRef = useRef(null);
  const leftSideRef = useRef(null);
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftSideRef.current,
        pinSpacing: false,

        onEnter: () => setIsPinned(true),
        onLeave: () => setIsPinned(false),
        onEnterBack: () => setIsPinned(true),
        onLeaveBack: () => setIsPinned(false),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-bg">
      <div className="Container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
        <div ref={leftSideRef}>
          <div className="mb-4 md:mb-6 lg:mb-8 2xl:mb-10">
            <SectionHeader
              title={
                <>
                  Success Stories That Speak for{" "}
                  <br className=" hidden lg:block" /> Themselves, Real Impact
                </>
              }
              subtitle="Case Studies"
              description="From Data to Decisions: Proven Outcomes, Customer Journeys Powered by Innovation, Scaling Smarter: Stories of Transformation."
            />
          </div>
          <div>
            <Button bg="#031E2D" title="View more" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
          {caseStudies.map((study, index) => (
            <CaseStudiesCard
              key={index}
              title={study.title}
              category={study.category}
              image={study.image}
              actionIcon={study.actionIcon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
