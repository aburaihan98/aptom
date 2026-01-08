import PageBanner from "../../components/common/PageBanner";
import { Footer } from "../../components/shared/Footer";
import NavBar from "../../components/shared/NavBar";
import TryAptomFreeForTanDays from "../../components/shared/TryAptomFreeForTanDays";

export default function ServiceDetails() {
  return (
    <div>
      <NavBar />
      <PageBanner
        title="Our Services"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages", path: "/pages" },
          { label: "Services", path: "/our-services" },
          { label: "Service Details", path: "/service-details" },
        ]}
      />
      <TryAptomFreeForTanDays />
      <Footer />
    </div>
  );
}
