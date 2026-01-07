import Facebook from "../../assets/common/social-media/facebook.webp";
import instagram from "../../assets/common/social-media/instagram.webp";
import youtube from "../../assets/common/social-media/youtube.webp";
import twitch from "../../assets/common/social-media/twitch.webp";
import UpRightArrow from "../../assets/common/up-right-arrow.webp";

const usefulLinks = [
  { title: "About Company", link: "#" },
  { title: "Contact Us", link: "#" },
  { title: "Faq", link: "#" },
  { title: "Team Member", link: "#" },
  { title: "Privacy Policy", link: "#" },
  { title: "Our Partners", link: "#" },
];

const servicesLinks = [
  { title: "Campaign Design", link: "#" },
  { title: "Branding", link: "#" },
  { title: "Web Development", link: "#" },
  { title: "PPC Service", link: "#" },
  { title: "Brand Identity", link: "#" },
  { title: "Search Advertising", link: "#" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    link: "#",
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "#",
  },
  {
    name: "YouTube",
    icon: youtube,
    link: "#",
  },
  {
    name: "Twitch",
    icon: twitch,
    link: "#",
  },
];

export function Footer() {
  return (
    <footer className="bg-bgDark text-light">
      <div className=" Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Newsletter */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-xl lg:text-[22px] font-bold tracking-tight">
              Aptom.
            </h2>
            <p className="text-sm leading-relaxed">
              We're more than just software providers; we're partners in
              progress. By combining global expertise with local insight in a
              fast-changing digital world.
            </p>
            <div className="flex flex-col gap-3 lg:gap-4 ">
              <span className="text-sm font-medium text-white">Newsletter</span>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-white rounded-full py-3 px-6 text-sm outline-none placeholder:text-gray-400"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square bg-[#0D1B2A] rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all">
                  <img
                    src={UpRightArrow}
                    alt="Submit"
                    className="w-4 h-4 lg:w-6 lg:h-6"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col gap-4 md:gap-6 ">
            <h3 className="text-lg font-semibold text-white">Useful Links</h3>
            <ul className="flex flex-col gap-3 text-sm text-[#B4B9C1]">
              {usefulLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="hover:text-white transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4 md:gap-6 ">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="flex flex-col gap-3 text-sm text-[#B4B9C1]">
              {servicesLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="hover:text-white transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 md:gap-6 ">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="flex flex-col gap-3 text-sm text-[#B4B9C1]">
              <p className="hover:text-white transition-colors">
                Address: 45/15 New Abaza Avenue
                <br />
                Beeston Town, Austria
              </p>
              <p className="hover:text-white transition-colors">
                Email: support@aptom.com
              </p>
              <p className="hover:text-white transition-colors">
                Phone: +(002) 0106-3710-534
              </p>
              <p className="hover:text-white transition-colors">
                Fax: +0106-3710-534
              </p>
            </div>
            <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  aria-label={item.name}
                  className=""
                >
                  <img src={item.icon} alt={item.name} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 2xl:py-9 mx-4 sm:mx-6 md:mx-12 lg:mx-16 max-w-[1920px] 2xl:mx-auto border-t border-[#FFFFFF1A]">
        <div className=" text-center text-xs text-light">
          <p>
            Copyright <span className="text-primary font-medium">Aptom</span> Is
            Proudly Powered By{" "}
            <span className="text-primary font-medium">OptixByte</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
