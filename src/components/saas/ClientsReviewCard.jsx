import { StarIcon } from "lucide-react";

export default function ClientsReviewCard({ rating, quote, author, icon }) {
  return (
    <div className="bg-white rounded-[20px] p-6 md:p-7 lg:p-8 2xl:p-9">
      {/* Star Rating */}
      <div className="flex gap-1 mb-4 md:mb-5 lg:mb-6 2xl:mb-[24px]">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? "fill-emerald-600 text-emerald-600"
                : "fill-none text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Testimonial Quote */}
      <p className="text-light text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px]    2xl:text-[20px] leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-9">
        {quote}
      </p>

      {/* Author Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 lg:gap-4">
          <img
            src={author.avatar || "/placeholder.svg"}
            alt={author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-dark">{author.name}</p>
            <p className="text-xs text-light">{author.title}</p>
          </div>
        </div>

        <div className="">
          <img src={icon} alt="icon" />
        </div>
      </div>
    </div>
  );
}
