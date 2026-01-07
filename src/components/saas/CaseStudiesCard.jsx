export default function CaseStudiesCard({
  title,
  category,
  image,
  actionIcon,
}) {
  return (
    <div className="overflow-hidden rounded-[20px]  shadow-[0_8px_30px_rgb(0,0,0,0.04)] b">
      {/* Image Container with Gradient Fade */}
      <div className="relative h-[320px] w-full overflow-hidden">
        <img
          src={image}
          alt="Professionals collaborating"
          className="h-full w-full object-cover"
        />
        {/* Bottom white gradient fade to blend with content */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="relative p-6 md:p-8">
        <p className="mb-4 md:mb-5 lg:mb-6 2xl:mb-[24px] text-[14px] font-medium tracking-[0.15em] text-muted-foreground text-dark">
          {category}
        </p>
        <h3 className="b-4 md:mb-6 lg:mb-8 2xl:mb-10 text-base md:text-lg lg:text-xl 2xl:text-[24px] font-bold leading-[1.1] tracking-tight text-dark">
          {title}
        </h3>

        {/* Action Icon */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full transition-colors">
          <img src={actionIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
