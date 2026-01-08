import AboutUs from "../../components/saas/AboutUs";
import Banner from "../../components/saas/Banner";
import CaseStudies from "../../components/saas/CaseStudies";
import ClientsReview from "../../components/shared/ClientsReview";
import Divider from "../../components/saas/Divider";
import Feature from "../../components/shared/Feature";
import FullControlForMassiveAIWorkloads from "../../components/shared/FullControlForMassiveAIWorkloads";
import LatestInsights from "../../components/saas/LatestInsights";
import PlatformOfTheFuture from "../../components/saas/PlatformOfTheFuture";
import StatsBanner from "../../components/saas/StatsBanner";
import TryAptomFreeForTanDays from "../../components/shared/TryAptomFreeForTanDays";
import { Footer } from "../../components/shared/Footer";
import OurPartners from "../../components/shared/OurPartners";
import WhyOurCRM from "../../components/shared/WhyOurCRM";
import LiveDemo from "../../components/shared/LiveDemo";

export default function SaaS() {
  return (
    <div>
      <Banner />
      <OurPartners />
      <Divider />
      <WhyOurCRM />
      <AboutUs />
      <PlatformOfTheFuture />
      <StatsBanner />
      <FullControlForMassiveAIWorkloads />
      <LiveDemo />
      <ClientsReview />
      <CaseStudies />
      <Feature />
      <LatestInsights />
      <TryAptomFreeForTanDays />
      <Footer />
    </div>
  );
}
