import Blogs from "../../components/blog/Blogs";
import PageBanner from "../../components/common/PageBanner";
import Feature from "../../components/shared/Feature";
import { Footer } from "../../components/shared/Footer";
import NavBar from "../../components/shared/NavBar";
import TryAptomFreeForTanDays from "../../components/shared/TryAptomFreeForTanDays";

export default function BlogPage() {
  return (
    <div>
      <NavBar />
      <PageBanner
        title="Latest Insights "
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages", path: "/pages" },
          { label: "Latest Insights ", path: "/blog" },
        ]}
      />
      <Blogs />
      <Feature />
      <TryAptomFreeForTanDays />
      <Footer />
    </div>
  );
}
