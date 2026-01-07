import React from "react";
import TopSectionHeader from "../common/TopSectionHeader";

export default function TryAptomFreeForTanDays() {
  return (
    <div className="bg-primary">
      <div className="Container">
        <TopSectionHeader
          title={
            <>
              Created for entrepreneurs <br className=" hidden lg:block" /> from
              all over the world
            </>
          }
          subtitle="Try Aptom Free for 10 days"
          buttonText="Try Free 10 Days"
          textColor="#FFFFFF"
          buttonColor="#031E2D"
        />
      </div>
    </div>
  );
}
