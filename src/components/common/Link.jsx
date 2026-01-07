import UpRightArrow from "../../assets/common/up-right-arrow.webp";

export default function Link({ text }) {
  return (
    <div className="flex gap-3 md:gap-4 lg:gap-5">
      <span className="text-primary font-bold">{text}</span>
      <div>
        <img src={UpRightArrow} alt="Up Right Arrow" />
      </div>
    </div>
  );
}
