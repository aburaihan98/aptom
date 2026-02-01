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
  const getStickyTop = (index) => {
    const baseTop = 20;
    const increment = 20;
    return baseTop + index * increment;
  };

  return (
    <section className="relative bg-bg h-screen overflow-y-auto">
      <div className="relative Container">
        {featuredItems.map((item, index) => (
          <div
            key={index}
            className="sticky  bg-bg rounded-[20px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-5"
            style={{ top: `${getStickyTop(index)}px` }}
          >
            <div className="flex-1 bg-gradient-to-b from-[#864FFD] to-[#E7DBFF] rounded-xl p-6 flex justify-center">
              <img src={item.image} alt="" />
            </div>
            <div className="flex-1 flex items-center justify-center">
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
