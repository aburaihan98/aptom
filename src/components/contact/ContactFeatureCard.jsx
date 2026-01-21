import React from "react";

export default function ContactFeatureCard({ image, title, description }) {
  return (
    <div className=" bg-white p-10 rounded-[10px]">
      <div className="flex justify-center items-center mb-6">
        <button className=" flex justify-center items-center bg-primary rounded-full p-6 ">
          <img src={image} alt="" />
        </button>
      </div>
      <h2 className="font-bold text-dark text-center mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-[30px]">
        {title}
      </h2>
      <p className=" text-light text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] 2xl:text-[20px text-center">
        {description}
      </p>
    </div>
  );
}
