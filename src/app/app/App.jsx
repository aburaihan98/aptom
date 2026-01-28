import { Banner } from "../../components/app/Banner";
import Featured from "../../components/app/Featured";
import { Features } from "../../components/app/Features";
import InstantTransaction from "../../components/shared/InstantTransaction";
import NavBar from "../../components/shared/NavBar";
import SimplePricing from "../../components/shared/SimplePricing";
import SoftwareIntegrations from "../../components/app/SoftwareIntegrations";
import LiveDemo from "../../components/shared/LiveDemo";
import L1 from "../../assets/app/live-demo/l2.webp";
import AppScreens from "../../components/app/AppScreens";
import Testimonial from "../../components/shared/Testimonial";
import OurPartners from "../../components/app/OurPartners";
import DownloadAppToday from "../../components/app/DownloadAppToday";
import { Footer } from "../../components/shared/Footer";
import ManageAllOfYourStuff from "../../components/shared/ManageAllOfYourStuff";
import Divider from "../../components/app/Divider";

export default function App() {
  return (
    <div className="">
      <NavBar bgColor="#F6F6F6" />
      <Banner />
      <Features />
      <ManageAllOfYourStuff />
      <InstantTransaction />
      <Divider />
      <Featured />
      <SoftwareIntegrations />
      <SimplePricing />
      <LiveDemo banner={L1} />
      <AppScreens />
      <Testimonial />
      <OurPartners />
      <DownloadAppToday />
      <Footer />
    </div>
  );
}
