import CheckMark from "../../assets/common/check-mark.webp";
import Button from "../common/Button";

export default function SimplePricingCard({
  planName,
  subtitle,
  price,
  period,
  isPopular,
  features,
  cardBorder,
  priceBorder,
}) {
  return (
    <div
      className={` relative p-6 sm:p-8 lg:p-10 group bg-white transition-all duration-500 cursor-pointer hover:bg-primary hover:text-white hover:shadow-xl rounded-[10px] ${cardBorder}`}
    >
      {isPopular && (
        <div className="absolute top-4 right-4 bg-primary text-white text-xs sm:text-sm font-medium px-3 py-[5px] rounded shadow-md">
          Most Popular
        </div>
      )}
      <h2 className="text-lg sm:text-xl mb-3 md:mb-3 2xl:mb-5  group-hover:text-white">
        {planName}
      </h2>
      <p className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-[30px]">
        {subtitle}
      </p>
      <h3
        className={`text-3xl sm:text-4xl lg:text-[2.5rem] mb-4 md:mb-6 lg:mb-8 2xl:mb-10  font-medium ${priceBorder}`}
      >
        <span className="text-2xl -mr-3">$</span> {price}
        <span className="text-base sm:text-lg lg:text-xl">{period}</span>
      </h3>

      {/* Features List */}
      <ul className="space-y-3 sm:space-y-4 lg:space-y-5 mb-8 sm:mb-10 lg:mb-12">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-2.5 text-sm sm:text-base"
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
              {/* Default icon */}
              <img
                src={CheckMark}
                className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <span className="">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="flex justify-center w-full">
        <Button
          title="purchase now"
          bg="#031E2D"
          text="white"
          fullWidth={true}
        />
      </div>
    </div>
  );
}
