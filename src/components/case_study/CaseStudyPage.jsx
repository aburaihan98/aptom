import CaseStudyCard from "./CaseStudyCard";
import C1 from "../../assets/case-study/case_study1.jpg";
import C2 from "../../assets/case-study/case_study2.jpg";
import C3 from "../../assets/case-study/case_study3.jpg";
import C4 from "../../assets/case-study/case_study4.jpg";
import C5 from "../../assets/case-study/case_study5.jpg";
import C6 from "../../assets/case-study/case_study6.jpg";
import C7 from "../../assets/case-study/case_study7.jpg";
import C8 from "../../assets/case-study/case_study8.jpg";

const CaseStudyData = [
  {
    id: 1,
    category: "Business Strategy",
    title: "5 Game-Changing SaaS Marketing Strategies for Small Startups",
    description:
      "Discover proven marketing tactics that help small SaaS startups compete with industry giants and accelerate growth.",
    image: C1,
  },
  {
    id: 2,
    category: "Product Development",
    title: "Scaling SaaS Best Practices And Pitfalls To Avoid",
    description:
      "Learn essential strategies for scaling your SaaS business while avoiding common mistakes that slow growth.",
    image: C2,
  },
  {
    id: 3,
    category: "Business Strategy",
    title:
      "Building Customer Loyalty: Proven Strategies for Long-Term SaaS Success",
    description:
      "Explore effective methods to retain customers and build lasting relationships that drive sustainable revenue.",
    image: C3,
  },
  {
    id: 4,
    category: "Product Development",
    title:
      "Automating Workflows: How AI SaaS Can Save Time And Boost Productivity",
    description:
      "Understand how AI-powered automation transforms business operations and maximizes team efficiency.",
    image: C4,
  },
  {
    id: 5,
    category: "Business Strategy",
    title: "Traffic Management",
    description:
      "Master the art of managing and optimizing web traffic to improve user experience and conversion rates.",
    image: C5,
  },
  {
    id: 6,
    category: "Product Development",
    title: "AI-Driven: Shaping A New Future",
    description:
      "Explore how AI technology is revolutionizing industries and creating new opportunities for innovation.",
    image: C6,
  },
  {
    id: 7,
    category: "Business Strategy",
    title: "Content Marketing in 2025",
    description:
      "Stay ahead with the latest content marketing trends and strategies that will dominate in 2025.",
    image: C7,
  },
  {
    id: 8,
    category: "Product Development",
    title: "Chartered Expansion Of Influencer",
    description:
      "Discover how influencer marketing is evolving and how to leverage it for your brand's growth.",
    image: C8,
  },
];

export default function CaseStudyPage() {
  return (
    <div className="bg-bg">
      <div className="Container grid grid-cols-1 lg:grid-cols-2 gap-6">
        {CaseStudyData?.map((study) => (
          <CaseStudyCard study={study} />
        ))}
      </div>
    </div>
  );
}
