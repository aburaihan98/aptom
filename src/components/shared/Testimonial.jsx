import A1 from "../../assets/shared/testimonial/a1.png";
import A2 from "../../assets/shared/testimonial/a2.png";
import A3 from "../../assets/shared/testimonial/a3.png";
import A4 from "../../assets/shared/testimonial/a4.png";
import A5 from "../../assets/shared/testimonial/a5.png";
import A6 from "../../assets/shared/testimonial/a6.png";
import A7 from "../../assets/shared/testimonial/a7.png";
import A8 from "../../assets/shared/testimonial/a8.png";
import TestimonialCard from "./card/TestimonialCard";
import { motion } from "framer-motion";

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

const marqueeLeft = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

const marqueeRight = {
  animate: {
    x: ["-50%", "0%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

export default function Testimonial() {
  const firstRow = testimonials.slice(0, 4);
  const secondRow = testimonials.slice(4);

  return (
    <div className="bg-bg">
      <div className="Container">
        {/* Row 1 → Right to Left */}
        <div className="overflow-hidden space-y-10">
          <motion.div
            className="flex gap-6 w-max"
            variants={marqueeLeft}
            animate="animate"
          >
            {[...firstRow, ...firstRow].map((t, index) => (
              <TestimonialCard
                key={`row1-${index}`}
                avatar={t.avatar}
                quote={t.quote}
                name={t.name}
                role={t.role}
              />
            ))}
          </motion.div>

          {/* Row 2 → Left to Right */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 w-max"
              variants={marqueeRight}
              animate="animate"
            >
              {[...secondRow, ...secondRow].map((t, index) => (
                <TestimonialCard
                  key={`row2-${index}`}
                  avatar={t.avatar}
                  quote={t.quote}
                  name={t.name}
                  role={t.role}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
