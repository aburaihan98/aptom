export default function SectionHeader({
  title,
  subtitle,
  description,
  textColor,
  textAlign,
}) {
  const justifyMap = {
    center: "justify-center",
    left: "justify-start",
    right: "justify-end",
  };

  return (
    <div
      style={{
        textAlign: textAlign,
      }}
    >
      <div className={`flex ${justifyMap[textAlign]}`}>
        <div className="flex items-center gap-2 lg:gap-2.5 mb-4 md:mb-5 lg:mb-6">
          <span className="w-3 h-3 bg-primary rounded-full"></span>
          <h3
            className="font-medium"
            style={{
              color: textColor,
            }}
          >
            {subtitle}
          </h3>
        </div>
      </div>
      <h2
        className="text-dark font-bold text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] mb-4 md:mb-6 lg:mb-8 2xl:mb-10"
        style={{ color: textColor, textAlign: textAlign }}
      >
        {title}
      </h2>
      <p
        className="text-light"
        style={{ color: textColor, textAlign: textAlign }}
      >
        {description}
      </p>
    </div>
  );
}
