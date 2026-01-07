import React from "react";
import SectionHeader from "../common/SectionHeader";
import S1 from "../../assets/app/software/s1.webp";
import S2 from "../../assets/app/software/s2.webp";
import S3 from "../../assets/app/software/s3.webp";
import S4 from "../../assets/app/software/s4.webp";
import S5 from "../../assets/app/software/s5.webp";
import S6 from "../../assets/app/software/s6.webp";
import S7 from "../../assets/app/software/s7.webp";
import S8 from "../../assets/app/software/s8.webp";
import S9 from "../../assets/app/software/s9.webp";
import S10 from "../../assets/app/software/s10.webp";
import S11 from "../../assets/app/software/s11.webp";
import S12 from "../../assets/app/software/s12.webp";
import S13 from "../../assets/app/software/s13.webp";
import S14 from "../../assets/app/software/s14.webp";
import S15 from "../../assets/app/software/s15.webp";
import S16 from "../../assets/app/software/s16.webp";
import Button from "../common/Button";

const softwareLogos = [
  S1,
  S2,
  S3,
  S4,
  S5,
  S6,
  S7,
  S8,
  S9,
  S10,
  S11,
  S12,
  S13,
  S14,
  S15,
  S16,
];

export default function SoftwareIntegrations() {
  return (
    <div className="Container">
      <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-[50px]">
        <SectionHeader
          title="Easy & Perfect Solution With Latest Integrations"
          subtitle="Software Integrations"
          description="Connect effortlessly with the tools you already use. Our platform offers smooth integrations with leading software, ensuring your workflow remains uninterrupted."
          textAlign="center"
        />
      </div>
      <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-[50px]">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 2xl:grid-cols-8 gap-4 md:gap-6 lg:gap-8">
          {softwareLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`Software Logo ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button title="View all integrations" />
      </div>
    </div>
  );
}
