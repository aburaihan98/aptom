import PageBanner from "../../components/common/PageBanner";
import { Footer } from "../../components/shared/Footer";
import NavBar from "../../components/shared/NavBar";
import TryAptomFreeForTanDays from "../../components/shared/TryAptomFreeForTanDays";

export default function CaseStudyDetails() {
  return (
    <div>
      <NavBar />
      <PageBanner
        title="Case Study"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages", path: "/pages" },
          {
            label: "Case Study Details",
            path: "/case-study/case-study-details",
          },
        ]}
      />
      <TryAptomFreeForTanDays />
      <Footer />
    </div>
  );
}
