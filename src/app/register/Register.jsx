import PageBanner from "../../components/common/PageBanner";
import RegisterForm from "../../components/register/RegisterForm";
import { Footer } from "../../components/shared/Footer";
import NavBar from "../../components/shared/NavBar";

export default function Register() {
  return (
    <div>
      <NavBar />
      <PageBanner
        title="Account"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages", path: "/pages" },
          { label: "Sign Up", path: "/register" },
        ]}
      />
      <RegisterForm />
      <Footer />
    </div>
  );
}
