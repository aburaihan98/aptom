import Avatar from "../../assets/case-study/case-study-avatar.png";
import Quote from "../../assets/case-study/quote.png";

export default function CaseStudyDetailsReviewCard() {
  return (
    <div className="max-w-4xl mx-auto flex items-center justify-center ">
      <div className="bg-white rounded-[20px] p-6 md:p-7 lg:p-8 2xl:p-9">
        {/* Testimonial Quote */}
        <p className="text-light text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px]    2xl:text-[20px] leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-9">
          “Implementing this SaaS solution was a game‑changer for our team.
          Within weeks, we reduced manual processes by nearly 40% and gained
          real‑time visibility into our operations.”
        </p>

        {/* Author Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-4">
            <img
              src={Avatar || "/placeholder.svg"}
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-dark">Rasic Jac.</p>
              <p className="text-xs text-light">CEO | Coxmo group</p>
            </div>
          </div>

          <div className="">
            <img src={Quote} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
