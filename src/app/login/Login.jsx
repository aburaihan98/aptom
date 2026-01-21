import NavBar from "../../components/shared/NavBar";
import { Footer } from "../../components/shared/Footer";
import PageBanner from "../../components/common/PageBanner";
import LoginForm from "../../components/login/LoginForm";

export default function Login() {
  return (
    <div>
      <NavBar />
      <PageBanner
        title="Account"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages", path: "/pages" },
          { label: "Login", path: "/login" },
        ]}
      />
      <LoginForm />
      <Footer />
    </div>
  );
}
