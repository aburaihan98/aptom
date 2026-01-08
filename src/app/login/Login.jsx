import NavBar from "../../components/shared/NavBar";
import { Footer } from "../../components/shared/Footer";
import PageBanner from "../../components/common/PageBanner";

export default function Login() {
  return (
    <div>
      <NavBar />
      <PageBanner
        title="Login"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages", path: "/pages" },
          { label: "Login", path: "/login" },
        ]}
      />
      <Footer />
    </div>
  );
}
