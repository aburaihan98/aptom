import S1 from "../../assets/our-service/service1.png";
import OurServicesPageCard from "./OurServicesPageCard";

const ourServices = [
  {
    id: 1,
    title: "Measure Conversion Metrics",
    description:
      "Gain deep insights into your contacts at a glance and easily track.",
  },
  {
    id: 2,
    title: "Live Data Insights",
    description:
      "Gain deep insights into your contacts at a glance and easily track.",
  },
  {
    id: 3,
    title: "Monitor Conversion Rates",
    description:
      "Gain deep insights into your contacts at a glance and easily track.",
  },
  {
    id: 4,
    title: "Sales Management",
    description:
      "Gain deep insights into your contacts at a glance and easily track.",
  },
  {
    id: 5,
    title: "SEO Management",
    description:
      "Gain deep insights into your contacts at a glance and easily track.",
  },
];

export default function OurServicesPage() {
  return (
    <div className="bg-bg">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-[55px]">
          <div className="col-span-1">
            <img src={S1} alt=" our service" />
          </div>
          <div className="col-span-2">
            {ourServices.map((service) => (
              <OurServicesPageCard key={service?.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
