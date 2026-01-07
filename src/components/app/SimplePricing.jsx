import SectionHeader from "../common/SectionHeader";
import SimplePricingCard from "./SimplePricingCard";

const pricingPlans = [
  {
    planName: "Basic Plan",
    subtitle: "Powerful & Awesome Elements",
    price: "Free",
    period: "",
    billing: "free",
    isPopular: false,
    features: [
      "Budgeting & Tracking",
      "Bank Sync",
      "AI Tips (Limited)",
      "Smart Goals",
      "5 GB Dedicated Hosting Free",
    ],
  },
  {
    planName: "Flexible Plan",
    subtitle: "Powerful & Awesome Elements",
    price: "49",
    period: "Month",
    billing: "monthly",
    isPopular: true,
    features: [
      "Budgeting & Tracking",
      "Bank Sync",
      "AI Tips (Limited)",
      "Smart Goals",
      "25 GB Dedicated Hosting Free",
    ],
  },
  {
    planName: "Business Plan",
    subtitle: "Powerful & Awesome Elements",
    price: "149",
    period: "Month",
    billing: "monthly",
    features: [
      "Budgeting & Tracking",
      "Bank Sync",
      "AI Tips (Limited)",
      "Smart Goals",
      "100 GB Dedicated Hosting Free",
    ],
  },
];

export default function SimplePricing() {
  return (
    <div className="bg-bg">
      <div className="Container">
        <div className="mb-4 md:mb-6 lg:mb-8 2xl:mb-10">
          <SectionHeader
            title="No Hidden Charge Applied, Choose Your Plan"
            subtitle="Pricing Plan"
            textAlign="center"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <SimplePricingCard
              key={index}
              planName={plan.planName}
              subtitle={plan.subtitle}
              price={plan.price}
              period={plan.period}
              isPopular={plan.isPopular}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
