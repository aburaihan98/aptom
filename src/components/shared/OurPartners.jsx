import P1 from "../../assets/shared/partners/p1.webp";
import P2 from "../../assets/shared/partners/p2.webp";
import P3 from "../../assets/shared/partners/p3.webp";
import P4 from "../../assets/shared/partners/p4.webp";
import P5 from "../../assets/shared/partners/p5.webp";
import P6 from "../../assets/shared/partners/p6.webp";

export default function OurPartners() {
  return (
    <div className="bg-bg">
      <div className="Container -mt-[90px] md:-mt-[180px] lg:-mt-[300px] 2xl:-mt-[500px]">
        <div className=" flex items-center justify-between ">
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
          <div>
            <img src={P6} alt="Partners seven" />
          </div>
        </div>
        <p className="font-bold text-light text-center mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-9 2xl:mt-9">
          More than <span className="text-dark">450+</span> companies trusted
          us. our <span className="text-dark">partners</span>
        </p>
      </div>
    </div>
  );
}
