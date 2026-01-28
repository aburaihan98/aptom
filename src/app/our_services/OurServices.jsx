import PageBanner from "../../components/common/PageBanner";
import OurServicesPage from "../../components/our_services/OurServicesPage";
import { Footer } from "../../components/shared/Footer";
import LiveDemoForPricingPlanOurServices from "../../components/shared/LiveDemoForPricingPlanOurServices";
import NavBar from "../../components/shared/NavBar";
import Testimonial from "../../components/shared/Testimonial";
import TryAptomFreeForTanDays from "../../components/shared/TryAptomFreeForTanDays";

export default function OurServices() {
  return (
    <div>
      <NavBar />
      <PageBanner
        title="Our Services"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages", path: "/pages" },
          { label: "Services", path: "/our-services" },
        ]}
      />
      <OurServicesPage />
      <LiveDemoForPricingPlanOurServices />
      <Testimonial />
      <TryAptomFreeForTanDays />
      <Footer />
    </div>
  );
}
