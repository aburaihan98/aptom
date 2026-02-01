import { div } from "framer-motion/client";
import { NavLink } from "react-router-dom";

export default function PageBanner({ title, breadcrumbs = [] }) {
  return (
    <div className="bg-bg">
      <div
        className="bg-gradient-to-b from-[#E7CFFF] to-[#E7DBFF]"
        style={{
          clipPath: "polygon(0 0, 100% 0%, 100% 88%, 12% 100%, 0 88%)",
        }}
      >
        <div className="Container px-6 md:px-10 lg:px-24 flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-end gap-4  mb-4 ">
            <h2 className=" text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[60px] 2xl:text-[70px] leading-[1]">
              {title}
            </h2>
            <p className="w-[73px] h-[7px] rounded-r-[30px] border border-[#031E2D]"></p>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base">
            {breadcrumbs.map((item, index) => (
              <div key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:underline ${isActive ? "text-primary " : "text-dark"}`
                  }
                >
                  {item.label}{" "}
                  {index < breadcrumbs.length - 1 && (
                    <span className="ml-1">.</span>
                  )}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
