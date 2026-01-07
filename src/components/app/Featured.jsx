import F1 from "../../assets/app/featured/f1.webp";
import F2 from "../../assets/app/featured/f2.webp";
import F3 from "../../assets/app/featured/f3.webp";
import SectionHeader from "../common/SectionHeader";

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
  return (
    <div className="bg-bg">
      <div className="Container">
        {featuredItems.map((item, index) => (
          <div
            key={index}
            className=" flex items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 2xl:mb-[100px]"
          >
            <div className=" flex-1 bg-gradient-to-b from-[#864FFD] to-[#E7DBFF] flex justify-center items-center p-4 md:p-6 lg:p-8 rounded-[20px] ">
              <img src={item.image} alt={`Featured ${index + 1}`} />
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
    </div>
  );
}
