import React from "react";
import SectionHeader from "../common/SectionHeader";
import App1 from "../../assets/app/app-screens/app1.png";
import App2 from "../../assets/app/app-screens/app2.png";
import App3 from "../../assets/app/app-screens/app3.png";
import App4 from "../../assets/app/app-screens/app4.png";
import App5 from "../../assets/app/app-screens/app5.png";

const appScreens = [App1, App2, App3, App4, App5];

export default function AppScreens() {
  return (
    <div className="bg-[#000000]">
      <div className="Container">
        <div>
          <SectionHeader
            title="Seamlessly Styled Screens for Every Feature"
            subtitle="App Screens"
            textColor="#FFFFFF"
            textAlign="center"
          />
        </div>
        <div>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 2xl:gap-10 mt-6 md:mt-8 lg:mt-10">
            {appScreens.map((screen, index) => (
              <div key={index}>
                <img
                  src={screen}
                  alt={`App ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
