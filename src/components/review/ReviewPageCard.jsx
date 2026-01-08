import Quote from "../../assets/shared/icon/quote.webp";

export default function ReviewPageCard({ item }) {
  return (
    <div>
      <p className="font-bold text-dark text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] mb-8 md:mb-10 lg:mb-12 2xl:mb-[57px]">
        {item?.text}
      </p>
      <div className="flex items-center justify-between gap-3  md:gap-4">
        <div className="flex gap-3 md:gap-4">
          <div>
            <img src={item?.avatar} alt="avatar" />
          </div>
          <div className="flex justify-between">
            <div>
              <h6 className="text-dark mb-1.5">{item?.author}</h6>
              <p className="text-light mb-4 md:mb-5">{item?.role}</p>
            </div>
          </div>
        </div>
        <div>
          <img src={Quote} alt="Quote" />
        </div>
      </div>
    </div>
  );
}
