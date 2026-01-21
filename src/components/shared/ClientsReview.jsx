import SectionHeader from "../common/SectionHeader";
import ClientsReviewCard from "./card/ClientsReviewCard";
import Avatar from "../../assets/saas/full-control/avatar.webp";
import Quote from "../../assets/saas/icon/quote.webp";
import { useState } from "react";
// swiper css imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    rating: 4,
    quote: `“Implementing this SaaS solution was a game-changer for our
    team. Within weeks, we reduced manual processes by nearly 40% and
    gained real-time visibility into our operations.”`,
    author: {
      name: "Christopher Wilson",
      title: "Sales Executive | Martin Group",
      avatar: Avatar,
    },
    icon: Quote,
  },
  {
    rating: 5,
    quote: `“The platform helped us streamline workflows and improve collaboration across departments. It's intuitive and incredibly effective.”`,
    author: {
      name: "Sophia Martinez",
      title: "Product Manager | InnovateX",
      avatar: Avatar,
    },
    icon: Quote,
  },
  {
    rating: 4,
    quote: `“We've seen measurable improvements in team productivity since adopting this solution. The dashboard is clear and easy to use.”`,
    author: {
      name: "Liam Johnson",
      title: "Operations Lead | TechSolutions",
      avatar: Avatar,
    },
    icon: Quote,
  },
  {
    rating: 5,
    quote: `“From onboarding to daily use, everything about this SaaS tool has been seamless. The support team is also top-notch.”`,
    author: {
      name: "Emma Thompson",
      title: "CEO | CreativeWorks",
      avatar: Avatar,
    },
    icon: Quote,
  },
];

export default function ClientsReview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentRating = testimonials[activeIndex]?.rating;

  const progressPerItem = 100 / testimonials.length;

  return (
    <div className="bg-bgDark">
      <div className="Container grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="max-w-xl">
            <SectionHeader
              title={
                <>
                  Right Decision for Your Strategy, feedback What our customers
                  say What Our Clients Say
                </>
              }
              subtitle="Clients Review"
              description="Giving you the clarity to optimize investments and maximize profitability.."
              textColor="#FFFFFF"
              textAlign="left"
            />
          </div>
          <div className="mb-4 md:mb-6 lg:mb-8 2xl:mb-10">
            {/* Star Rating */}
            <div className="flex items-end gap-1 mt-4 md:mt-6 lg:mt-8 2xl:mt-10">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`w-5 h-5 ${
                    star <= currentRating
                      ? "fill-emerald-600 text-emerald-600"
                      : "fill-none text-gray-300"
                  }`}
                />
              ))}{" "}
              <span className="text-white text-2xl -mb-1">4.5</span>{" "}
              <span className="text-white -mb-1">/5.0</span>
            </div>
          </div>
        </div>
        <div>
          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <ClientsReviewCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Progress Bar */}
          <div className="mt-4 lg:mt-5 h-1 bg-[#FFFFFF26]  overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{
                width: `${progressPerItem * (activeIndex + 1)}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
