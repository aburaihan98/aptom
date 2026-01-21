import React from "react";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import I1 from "../../assets/app/icon/instant/instant.webp";

const instantData = [
  {
    icon: I1,
    title: "Immerse",
    description:
      "Get real-time insights into every transaction happening across your platform. Stay informed.",
  },
  {
    icon: I1,
    title: "Security",
    description:
      "Your data is protected with bank-level encryption. Industry-leading security standards.",
  },
  {
    icon: I1,
    title: "Auditable",
    description:
      "Complete audit trails for every transaction. Full compliance and transparency built-in.",
  },
  {
    icon: I1,
    title: "Rustic",
    description:
      "Simple, beautiful interface built with modern design patterns. Easy to use.",
  },
];

export default function InstantTransaction() {
  return (
    <div className="bg-bg">
      <div className="Container grid lg:grid-cols-2 gap-10">
        <div>
          <SectionHeader
            title={
              <>
                Instant transaction <br className=" hidden lg:block" /> syncing
                with real‑time <br className=" hidden lg:block" /> updates.
              </>
            }
          />
          <Button
            title="See All Features"
            bg="#F6F6F6"
            textColor="#031E2D"
            borderColor="#031E2D"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {instantData.map((feature) => {
            return (
              <div
                key={feature.title}
                className="lg:pl-4 border-l border-[#E0C0FF]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-2">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-5 h-5 text-gray-900"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

<div className="bg-bg">
  <div className="Container grid lg:grid-cols-2 gap-10">
    <div>
      <SectionHeader
        title={
          <>
            Instant transaction <br className=" hidden lg:block" /> syncing with
            real‑time <br className=" hidden lg:block" /> updates.
          </>
        }
      />
      <Button
        title="See All Features"
        bg="#F6F6F6"
        textColor="#031E2D"
        borderColor="#031E2D"
      />
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {instantData.map((feature) => {
        return (
          <div
            key={feature.title}
            className="lg:pl-4 border-l border-[#E0C0FF]"
          >
            <div className="flex items-start gap-4">
              <div className="mt-2">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-5 h-5 text-gray-900"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>;
