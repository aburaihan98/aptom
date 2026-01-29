import C5 from "../../assets/case-study/case_study5.jpg";
import C8 from "../../assets/case-study/case_study8.jpg";

export default function CaseStudyImage() {
  return (
    <div className=" max-w-5xl mx-auto py-10 md:py-0 md:mb-14 lg:mb-0 lg:p-6 grid grid-cols-1 grid-cols-2 gap-4 lg:gap-6">
      <div className=" rounded-[10px] h-48 md:h-auto lg:h-[550px]">
        <img className="rounded-[10px] w-full h-full" src={C5} alt="C8" />
      </div>
      <div className=" rounded-[10px]">
        <img className="rounded-[10px] w-full h-full" src={C8} alt="C8" />
      </div>
    </div>
  );
}
