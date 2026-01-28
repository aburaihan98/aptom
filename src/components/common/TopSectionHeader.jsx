import Button from "./Button";
import Link from "./Link";

export default function TopSectionHeader({
  title,
  subtitle,
  linkText,
  buttonText,
  textColor,
  buttonColor,
  textAlign,
}) {
  return (
    <div
      className="flex flex-col md:flex-row md:items-center lg:justify-between mb-4 md:mb-6 lg:mb-8 2xl:mb-10 cursor-pointer "
      style={{
        color: textColor,
        textAlign: textAlign,
      }}
    >
      <div>
        <div className="flex items-center gap-2 lg:gap-2.5 mb-4 md:mb-5 lg:mb-[22px]">
          <span
            className="w-3 h-3 bg-primary rounded-full"
            style={{
              backgroundColor: textColor,
            }}
          ></span>
          <h3 className="font-medium">{subtitle}</h3>
        </div>
        <h2
          className="text-dark font-bold text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] "
          style={{
            color: textColor,
          }}
        >
          {title}
        </h2>
      </div>
      <div className="mt-4 lg:mt-0">
        {linkText ? (
          <Link text={linkText} />
        ) : (
          buttonText && <Button title={buttonText} bg={buttonColor} />
        )}
      </div>
    </div>
  );
}
