import C1 from "../../assets/case-study/case_study1.jpg";
import CaseStudyDetailContent from "./CaseStudyDetailContent";
import CaseStudyDetailsReviewCard from "./CaseStudyDetailsReview";
import CaseStudyImage from "./CaseStudyImage";
import CaseStudySolutionsDelivered from "./CaseStudySolutionsDelivered";
import ProductivityBoost from "./ProductivityBoost";

export default function CaseStudyDetails() {
  return (
    <div className="bg-bg">
      <div className="Container">
        <div className="flex justify-center">
          <img className=" rounded-[20px]" src={C1} alt="C1" />
        </div>
        <ProductivityBoost />
        <CaseStudyDetailContent />
        <CaseStudyImage />
        <CaseStudySolutionsDelivered />
        <CaseStudyDetailsReviewCard />
      </div>
    </div>
  );
}
