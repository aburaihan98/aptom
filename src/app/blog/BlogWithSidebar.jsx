import BlogsWithSidebar from "../../components/blog/BlogsWithSidebar";
import PageBanner from "../../components/common/PageBanner";
import Feature from "../../components/shared/Feature";
import { Footer } from "../../components/shared/Footer";
import NavBar from "../../components/shared/NavBar";
import TryAptomFreeForTanDays from "../../components/shared/TryAptomFreeForTanDays";

export default function BlogWithSidebar() {
  return (
    <div>
      <NavBar />
      <PageBanner
        title="Latest Insights "
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Blog", path: "/blog" },
          { label: "Blog Sidebar ", path: "/blog" },
        ]}
      />
      <BlogsWithSidebar />
      <Feature />
      <TryAptomFreeForTanDays />
      <Footer />
    </div>
  );
}
