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
      <div className="max-w-6xl mx-auto">
        <div className="py-6 md:py-8 lg:py-16 2xl:py-[100px] mx-4 sm:mx-6 md:mx-12 lg:mx-16 2xl:mx-0 max-w-[1920px]">
          <div className="grid grid-cols-1 md:grid-cols-3  md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-[55px]">
            <div className="col-span-1 mb-6">
              <img src={S1} alt=" our service" className="rounded-[20px] h-auto" />
            </div>
            <div className="col-span-2">
              {ourServices.map((service) => (
                <OurServicesPageCard key={service?.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
