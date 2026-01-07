import A1 from "../../assets/shared/testimonial/a1.png";
import A2 from "../../assets/shared/testimonial/a2.png";
import A3 from "../../assets/shared/testimonial/a3.png";
import A4 from "../../assets/shared/testimonial/a4.png";
import A5 from "../../assets/shared/testimonial/a5.png";
import A6 from "../../assets/shared/testimonial/a6.png";
import A7 from "../../assets/shared/testimonial/a7.png";
import A8 from "../../assets/shared/testimonial/a8.png";
import TestimonialCard from "./card/TestimonialCard";

const testimonials = [
  {
    name: "David R.",
    role: "Sales Executive | Martin Group",
    avatar: A1,
    quote: "Perfect for both work and personal use.",
  },
  {
    name: "Sophia L.",
    role: "Sales Executive | Martin Group",
    avatar: A2,
    quote:
      "This app completely transformed how I track my spending. The real-time insights are sharp, and the automated savings feature feels like having a personal finance coach in my pocket.",
  },
  {
    name: "Aisha K.",
    role: "Sales Executive | Martin Group",
    avatar: A3,
    quote:
      "I use it to manage my household budget and also for my small business.",
  },
  {
    name: "Jonas P.",
    role: "Sales Executive | Martin Group",
    avatar: A4,
    quote:
      "The retina-ready visuals make every chart and report look stunning. It’s not just functional—it’s enjoyable to use every day.",
  },
  {
    name: "David R.",
    role: "Sales Executive | Martin Group",
    avatar: A5,
    quote:
      "The retina-ready visuals make every chart and report look stunning. It’s not just functional—it’s enjoyable to use every day.",
  },
  {
    name: "Aisha K.",
    role: "Sales Executive | Martin Group",
    avatar: A6,
    quote:
      "I love how easy it is to log in and manage everything from one place. The cloud backup gives me peace of mind.",
  },
  {
    name: "Sophia L.",
    role: "Sales Executive | Martin Group",
    avatar: A7,
    quote:
      "I use it to manage my household budget and also for my small business. The scalable features and customizable dashboards make it flexible enough for both worlds.",
  },
  {
    name: "Jonas P.",
    role: "Sales Executive | Martin Group",
    avatar: A8,
    quote:
      "The retina-ready visuals make every chart and report look stunning. It’s not just functional—it’s enjoyable to use every day.",
  },
];

export default function Testimonial() {
  return (
    <div className="bg-bg">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              index={index}
              avatar={testimonial.avatar}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
