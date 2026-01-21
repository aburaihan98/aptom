import PageBanner from "../../components/common/PageBanner";
import ContactFeature from "../../components/contact/ContactFeature";
import ContactForm from "../../components/contact/ContactForm";
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
      <ContactFeature />
      <ContactForm />
      <Footer />
    </div>
  );
}
