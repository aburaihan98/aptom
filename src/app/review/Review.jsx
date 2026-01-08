import PageBanner from "../../components/common/PageBanner";
import ReviewPage from "../../components/review/ReviewPage";
import ClientsReview from "../../components/shared/ClientsReview";
import { Footer } from "../../components/shared/Footer";
import LiveDemo from "../../components/shared/LiveDemo";
import NavBar from "../../components/shared/NavBar";
import Testimonial from "../../components/shared/Testimonial";
import TryAptomFreeForTanDays from "../../components/shared/TryAptomFreeForTanDays";

export default function Review() {
  return (
    <div>
      <NavBar />
      <PageBanner
        title="Clients Feedback"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages", path: "/pages" },
          { label: "Review", path: "/review" },
        ]}
      />
      <ReviewPage />
      <ClientsReview />
      <Testimonial />
      <LiveDemo />
      <TryAptomFreeForTanDays />
      <Footer />
    </div>
  );
}
