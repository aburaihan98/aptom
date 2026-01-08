import ReviewPageCard from "./ReviewPageCard";
import A1 from "../../assets/shared/testimonial/a1.png";
import A2 from "../../assets/shared/testimonial/a2.png";
import A3 from "../../assets/shared/testimonial/a3.png";
import A4 from "../../assets/shared/testimonial/a4.png";

const testimonials = [
  {
    id: 1,
    text: "Switching to 'Aptom' has been a game-changer for our team. We reduced manual work by over 40% within the first month, and the intuitive dashboard makes tracking progress effortless. What impressed us most was the seamless onboarding—our staff were up and running in less than a day.",
    author: "Alex B.",
    role: "Operations Manager",
    avatar: A1,
  },
  //   {
  //     id: 2,
  //     text: "The automation features saved us countless hours every week. Our team can now focus on strategic tasks instead of repetitive manual work. The ROI was visible within the first quarter itself.",
  //     author: "Sarah M.",
  //     role: "Product Director",
  //     avatar: A2,
  //   },
  //   {
  //     id: 3,
  //     text: "Implementation was surprisingly smooth. The support team guided us through every step, and our employees adapted to the platform quickly. We're seeing measurable improvements in productivity across all departments.",
  //     author: "Michael Chen",
  //     role: "CEO",
  //     avatar: A3,
  //   },
  //   {
  //     id: 4,
  //     text: "What sets Aptom apart is how user-friendly it is. Even our non-technical staff found it easy to navigate. The real-time insights have transformed how we make decisions and allocate resources.",
  //     author: "Emma Rodriguez",
  //     role: "Marketing Lead",
  //     avatar: A4,
  //   },
];

export default function ReviewPage() {
  return (
    <div className="bg-bg">
      <div className="Container">
        <div>
          {testimonials.map((item, index) => (
            <ReviewPageCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
