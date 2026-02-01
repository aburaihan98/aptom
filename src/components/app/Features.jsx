import { Activity, TrendingUp, Monitor, Database } from "lucide-react";
import FeaturesCard from "./FeaturesCard";
import F1 from "../../assets/app/icon/feature/feature1.webp";
import F2 from "../../assets/app/icon/feature/feature2.webp";
import F3 from "../../assets/app/icon/feature/feature3.webp";
import F4 from "../../assets/app/icon/feature/feature4.webp";

const features = [
  {
    icon: F1,
    title: "User Interactive",
    description:
      "Experience an interface designed to feel natural and intuitive. Every tap, swipe, and scroll is crafted to keep you engaged, making task and finance management effortless and enjoyable.",
  },
  {
    icon: F2,
    title: "Track Your Spending",
    description:
      "Stay in control of your finances with real‑time insights. Our app automatically organizes your expenses, helping you visualize where your money goes and empowering smarter decisions every day.",
  },
  {
    icon: F3,
    title: "Retina Ready, Green",
    description:
      "Enjoy a crystal‑clear experience on any device. With Retina‑ready visuals, every chart, dashboard, and detail looks sharp, vibrant, and easy to read—so managing tasks and money feels premium.Donec et in a orci dignissim et. Nam a in cursus. Orci non habitant morbi tristique senectus.",
  },
  {
    icon: F4,
    title: "Easy Storing Data",
    description:
      "Update, adjust, and refine your information with ease. Whether you’re editing budgets, tasks, or notes, our flexible data tools ensure everything stays accurate and tailored to your needs.",
  },
];

export function Features() {
  return (
    <section className="bg-bg ">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5">
          {features.map((feature, index) => (
            <FeaturesCard feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
