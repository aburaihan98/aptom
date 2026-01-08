import React from "react";
import NavBar from "../../components/shared/NavBar";
import { Footer } from "../../components/shared/Footer";
import TryAptomFreeForTanDays from "../../components/shared/TryAptomFreeForTanDays";
import PageBanner from "../../components/common/PageBanner";
import TeamPage from "../../components/team/TeamPage";
import InstantTransaction from "../../components/shared/InstantTransaction";

export default function Team() {
  return (
    <div>
      <NavBar />
      <PageBanner
        title="Our team"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages", path: "/pages" },
          { label: "Team", path: "/team" },
        ]}
      />
      <TeamPage />
      <InstantTransaction />
      <TryAptomFreeForTanDays />
      <Footer />
    </div>
  );
}
