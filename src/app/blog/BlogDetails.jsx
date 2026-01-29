import BlogDetailsContent from "../../components/blog/BlogDetailsContent";
import PageBanner from "../../components/common/PageBanner";
import { Footer } from "../../components/shared/Footer";
import NavBar from "../../components/shared/NavBar";
import TryAptomFreeForTanDays from "../../components/shared/TryAptomFreeForTanDays";

export default function BlogDetails() {
  return (
    <div>
      <NavBar/>
      <PageBanner
        title="Latest Insights"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages", path: "/pages" },
          { label: "Blog Sidebar", path: "/blog-with-sidebar" },
          { label: "Blog Datails", path: "/blog-details" },
        ]}
      />
      <BlogDetailsContent />
      <TryAptomFreeForTanDays />
      <Footer />
    </div>
  );
}
