import CaseStudyPage from "../../components/case_study/CaseStudyPage";
import PageBanner from "../../components/common/PageBanner";
import Feature from "../../components/shared/Feature";
import { Footer } from "../../components/shared/Footer";
import NavBar from "../../components/shared/NavBar";
import TryAptomFreeForTanDays from "../../components/shared/TryAptomFreeForTanDays";

export default function CaseStudy() {
  return (
    <div>
      <NavBar />
      <PageBanner
        title="Case Study"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages", path: "/pages" },
          { label: "Case Study", path: "/case-study" },
        ]}
      />
      <Feature />
      <TryAptomFreeForTanDays />
      <CaseStudyPage />
      <Footer />
    </div>
  );
}
