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
      "Donec et in a orci dignissim et. Nam a in cursus. Orci non habitant morbi tristique senectus.",
  },
  {
    icon: F2,
    title: "Track Your Spending",
    description:
      "Track a in orci triqusque Orci, tincidunt et Orci ridiculus suspendisse eros at volutpat, vitae, eros.",
  },
  {
    icon: F3,
    title: "Retina Ready, Green",
    description:
      "Donec et in a orci dignissim et. Nam a in cursus. Orci non habitant morbi tristique senectus.",
  },
  {
    icon: F4,
    title: "Easy Storing Data",
    description:
      "Donec, vitae, sem dolor sitam orci in a orci dignissim. Orci non habitant morbi tristique senectus.",
  },
];

export function Features() {
  return (
    <section className="bg-bg ">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeaturesCard feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
