import Link from "../common/Link";

export default function WhyOurCRM() {
  return (
    <div className="bg-bg">
      <div className="Container">
        <p className=" text-light text-[28px] sm:text-[36px] md:text-[40px] lg:text-[56px] xl:text-[64px] 2xl:text-[70px] mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-[55px]">
          <span className="text-dark">Your</span> Business Deserves{" "}
          <span className="text-dark"> More Than a Spreadsheet. Meet </span> the
          CRM That{" "}
          <span className="text-dark">
            {" "}
            Thinks Ahead. Automate, Personalize, and{" "}
          </span>{" "}
          Convert—Beautifully.
        </p>
        <div className="text-left cursor-pointer">
          <Link text="learn more" />
        </div>
      </div>
    </div>
  );
}
