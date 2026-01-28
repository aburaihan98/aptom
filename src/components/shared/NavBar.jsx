import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";
import Button from "../common/Button";
import Search from "../../assets/common/search.webp";
import Menu from "../../assets/common/menu.webp";

const socialLinks = [
  { name: "Twitter", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "Facebook", url: "#" },
  { name: "Instagram", url: "#" },
];

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
    path: "/our-services",
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
      { name: "Contact", path: "/contact" },
      { name: "Login", path: "/login" },
      { name: "Register", path: "/register" },
    ],
  },
  {
    name: "Blog",
    submenu: [
      { name: "Blog Standard ", path: "/blog" },
      { name: "Blog with sidebar", path: "/blog-with-sidebar" },
      { name: "Blog Details", path: "/blog-details" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

export default function NavBar({ bgColor = "white" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-16 2xl:mx-[100px] 2xl:max-w-[1920px] 2xl:mx-auto">
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
            <div className="flex items-center gap-4">
              <div className="w-10 md:w-15 h-10 md:h-15 bg-white rounded-full flex justify-center items-center cursor-pointer">
                <img src={Search} alt="search" />
              </div>
              <div className="hidden md:block">
                <Button title="Download App" bg="#031E2D" />
              </div>
              <div
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-center w-15 h-15 cursor-pointer"
              >
                <img src={Menu} alt="menu" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black text-white lg:hidden">
          {/* Navigation */}
          <nav className="border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-8">
              {/* Header with close button */}
              <div className="flex justify-end items-center">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center p-2 border border-gray-700 hover:bg-gray-900 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-700" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="space-y-6 max-h-[50vh] overflow-y-auto">
                {navItem.map((item, index) => (
                  <div key={index}>
                    <div
                      className="flex justify-between items-center group cursor-pointer"
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
                        className="text-base font-light tracking-wide hover:text-gray-300 transition-colors"
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <ChevronDown
                          size={18}
                          className={`text-gray-600 group-hover:text-gray-400 transition-all ${
                            openSubmenu === index ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>

                    {/* Submenu */}
                    {item.submenu && openSubmenu === index && (
                      <div className="pl-6 mt-4 space-y-3">
                        {item.submenu.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            to={sub.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-sm text-gray-400 hover:text-white transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 flex flex-col items-center justify-center text-center">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
              Aptom.
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-sm md:text-lg font-light text-gray-300 leading-relaxed mb-12 md:mb-16">
              We're more than just software providers, we're partners in
              progress. By combining digital expertise with local insight in a
              fast-changing digital world
            </p>

            {/* Social Links */}
            <div className="flex gap-6 md:gap-12 text-sm font-light tracking-wider flex-wrap justify-center">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
