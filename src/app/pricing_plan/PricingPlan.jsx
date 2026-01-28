import NavBar from "../../components/shared/NavBar";
import PageBanner from "../../components/common/PageBanner";
import SimplePricing from "../../components/shared/SimplePricing";
import Testimonial from "../../components/shared/Testimonial";
import TryAptomFreeForTanDays from "../../components/shared/TryAptomFreeForTanDays";
import { Footer } from "../../components/shared/Footer";
import LiveDemoForPricingPlanOurServices from "../../components/shared/LiveDemoForPricingPlanOurServices";

export default function PricingPlan() {
  return (
    <div>
      <NavBar />
      <PageBanner
        title="Pricing Plan"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages", path: "/pages" },
          { label: "Pricing", path: "/pricing-plan" },
        ]}
      />
      <SimplePricing />
      <LiveDemoForPricingPlanOurServices />
      <Testimonial />
      <TryAptomFreeForTanDays />
      <Footer />
    </div>
  );
}
