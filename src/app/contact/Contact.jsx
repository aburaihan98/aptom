import PageBanner from "../../components/common/PageBanner";
import { Footer } from "../../components/shared/Footer";
import NavBar from "../../components/shared/NavBar";

export default function Contact() {
  return (
    <div>
      <NavBar />
      <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages", path: "/pages" },
          { label: "Contact Us", path: "/contact" },
        ]}
      />
      <Footer />
    </div>
  );
}
