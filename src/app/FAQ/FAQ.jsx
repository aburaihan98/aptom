import { Footer } from "../../components/shared/Footer";
import InstantTransaction from "../../components/shared/InstantTransaction";
import LiveDemo from "../../components/shared/LiveDemo";
import TryAptomFreeForTanDays from "../../components/shared/TryAptomFreeForTanDays";
import FAQPage from "../../components/shared/FAQ";
import NavBar from "../../components/shared/NavBar";
import PageBanner from "../../components/common/PageBanner";

export default function FAQ() {
  return (
    <div>
      <NavBar />
      <PageBanner
        title="FAQ"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages", path: "/pages" },
          { label: "FAQ", path: "/faq" },
        ]}
      />
      <FAQPage />
      <LiveDemo />
      <InstantTransaction />
      <TryAptomFreeForTanDays />
      <Footer />
    </div>
  );
}
