import ContactFeatureCard from "./ContactFeatureCard";
import C1 from "../../assets/contact/map-pin.png";
import C2 from "../../assets/contact/mail.png";
import C3 from "../../assets/contact/phone-call.png";
import C4 from "../../assets/contact/printer.png";

export const contactData = [
  {
    image: C1,
    title: "Our Location",
    description: "451 S New Albany Avenue, Boston Town, Australia",
  },
  {
    image: C2,
    title: "Email Address",
    description: "contact@optima.com\nsupport@optima.com",
  },
  {
    image: C3,
    title: "Urgent Call",
    description: "+012 (345) 678 99\n+088 123 456 987",
  },
  {
    image: C4,
    title: "Our Fax",
    description: "+012 (345) 678 995\n+012 (345) 678 987",
  },
];

export default function ContactFeature() {
  return (
    <div className="bg-bg">
      <div className=" Container">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {contactData.map((item, index) => (
            <ContactFeatureCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
