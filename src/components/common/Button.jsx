export default function Button({
  title,
  bg = "#864FFD",
  textColor = "white",
  borderColor,
}) {
  return (
    <button
      className="rounded-full px-5 py-2 md:px-6 md:py-3 lg:px-[30px] lg:py-5 font-bold"
      style={{
        backgroundColor: bg,
        color: textColor,
        border: borderColor ? `1px solid ${borderColor}` : "none",
      }}
    >
      {title}
    </button>
  );
}
