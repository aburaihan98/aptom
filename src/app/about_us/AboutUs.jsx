import OurPartners from "../../components/about_us/OurPartners";
import NavBar from "../../components/shared/NavBar";
import PageBanner from "../../components/common/PageBanner";
import AboutUsSection from "../../components/shared/AboutUs";
import Feature from "../../components/shared/Feature";
import { Footer } from "../../components/shared/Footer";
import FullControlForMassiveAIWorkloads from "../../components/shared/FullControlForMassiveAIWorkloads";
import InstantTransaction from "../../components/shared/InstantTransaction";
import LiveDemo from "../../components/shared/LiveDemo";
import ManageAllOfYourStuff from "../../components/shared/ManageAllOfYourStuff";
import TryAptomFreeForTanDays from "../../components/shared/TryAptomFreeForTanDays";
import WhyOurCRM from "../../components/shared/WhyOurCRM";
import FAQ from "../../components/shared/FAQ";

export default function AboutUs() {
  return (
    <div>
      <NavBar />
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About", path: "/about-us" },
        ]}
      />
      <AboutUsSection />
      <WhyOurCRM />
      <OurPartners />
      <ManageAllOfYourStuff />
      <InstantTransaction />
      <Feature />
      <FullControlForMassiveAIWorkloads />
      <LiveDemo />
      <FAQ />
      <TryAptomFreeForTanDays />
      <Footer />
    </div>
  );
}
