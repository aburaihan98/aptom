import PageBanner from "../../components/common/PageBanner";
import NavBar from "../../components/saas/NavBar";
import { Footer } from "../../components/shared/Footer";
import TryAptomFreeForTanDays from "../../components/shared/TryAptomFreeForTanDays";

export default function BlogDetails() {
  return (
    <div>
      <NavBar />
      <PageBanner
        title="Latest Insights"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages", path: "/pages" },
          { label: "Blog Sidebar", path: "/blog-with-sidebar" },
          { label: "Blog Datails", path: "/blog-details" },
        ]}
      />
      <TryAptomFreeForTanDays />
      <Footer />
    </div>
  );
}
