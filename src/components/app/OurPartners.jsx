import P1 from "../../assets/app/partners/ap1.webp";
import P2 from "../../assets/app/partners/ap2.webp";
import P3 from "../../assets/app/partners/ap3.webp";
import P4 from "../../assets/app/partners/ap4.webp";
import P5 from "../../assets/app/partners/ap5.webp";

export default function OurPartners() {
  return (
    <div className="bg-bg">
      <div className="Container">
        <div className=" flex items-center justify-center gap-4 md:gap-8 lg:gap-12 2xl:gap-[65px] ">
          <div>
            <img src={P1} alt="Partners one" />
          </div>
          <div>
            <img src={P2} alt="Partners two" />
          </div>
          <div>
            <img src={P3} alt="Partners three" />
          </div>
          <div>
            <img src={P4} alt="Partners for" />
          </div>
          <div>
            <img src={P5} alt="Partners six" />
          </div>
        </div>
      </div>
    </div>
  );
}
