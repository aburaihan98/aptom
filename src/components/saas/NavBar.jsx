import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const navItem = [
  {
    name: "Home",
    path: "/",
    submenu: [
      { name: "Saas", path: "/" },
      { name: "App", path: "/app" },
    ],
  },
  {
    name: "Service",
    path: "/service",
  },
  { name: "About Us", path: "/about-us" },
  {
    name: "Pages",
    submenu: [
      { name: "Case Study", path: "/case-study" },
      { name: "Case Study Details", path: "/case-study/case-study-details" },
      { name: "Team", path: "/team" },
      { name: "Pricing Plan", path: "/pricing-plan" },
      { name: "Our Services", path: "/our-services" },
      { name: "Our Services Details", path: "/our-services/service-details" },
      { name: "Review", path: "/review" },
      { name: "FAQ", path: "/faq" },
      { name: "Blog", path: "/blog" },
      { name: "Blog with sidebar", path: "/blog-with-sidebar" },
      { name: "Blog Details", path: "/blog-details" },
      { name: "Contact", path: "/contact" },
      { name: "Login", path: "/login" },
      { name: "Register", path: "/register" },
    ],
  },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact-us" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <nav className=" 2xl:max-w-[1920px] 2xl:mx-auto fixed top-0 left-0 right-0 z-50 bg-white mt-4 lg:mt-5 mx-4 sm:mx-6 md:mx-12 lg:mx-16 2xl:mx-[100px] rounded-full">
      <div className="flex justify-between items-center py-2 md:py-2.5 px-4 sm:px-6">
        <Link to="/">
          <h2 className="text-[22px] font-bold text-dark">Aptom.</h2>
        </Link>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
            {navItem.map((item, index) => (
              <li
                key={index}
                className="relative group text-dark cursor-pointer"
              >
                <Link
                  to={item.path || "#"}
                  className="flex items-center gap-1 hover:text-primary transition"
                >
                  {item.name}

                  {item.submenu && (
                    <svg
                      className="w-4 h-4 mt-[2px]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown menu */}
                {item.submenu && (
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-50">
                    {item.submenu.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sub.path}
                        className="block px-4 py-2 text-dark hover:bg-gray-100 hover:text-primary transition"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Button title="Sign in" />
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 px-3 sm:px-5">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <ul className="py-2 max-h-[50vh] overflow-y-auto">
              {navItem.map((item, index) => (
                <li key={index} className="px-6 py-3 text-[#19324D]">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() =>
                      item.submenu
                        ? setOpenSubmenu(openSubmenu === index ? null : index)
                        : null
                    }
                  >
                    <Link
                      to={item.path || "#"}
                      onClick={(e) => {
                        if (!item.submenu) {
                          setIsMenuOpen(false);
                        } else {
                          e.preventDefault();
                        }
                      }}
                      className="font-medium hover:text-[#C4EE18] transition"
                    >
                      {item.name}
                    </Link>

                    {item.submenu && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>

                  {item.submenu && openSubmenu === index && (
                    <ul className="pl-6 mt-2">
                      {item.submenu.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={sub.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-2 text-sm hover:text-[#C4EE18]"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Call Section */}
            <div className="md:hidden border-t border-gray-200 p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-[40px] h-[40px] bg-[#C4EE18] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-700">Call Us</p>
                  <p className="text-lg font-semibold text-gray-800">
                    012 4657 999
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Let's Talk Button */}
            <div className="sm:hidden border-t border-gray-200 p-4">
              <button className="w-full flex items-center justify-center bg-[#C4EE18] font-bold py-3 px-4 rounded-tl-lg rounded-tr-[2px] rounded-b-[2px] hover:bg-[#b5d916] transition-colors">
                <span className="mr-2.5 font-medium">Let's Talk</span>
                <div className="w-6 h-6 bg-white text-[#C4EE18] rounded-[1px] flex items-center justify-center">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
