export default function Button({
  title,
  bg = "#864FFD",
  textColor = "white",
  borderColor,
  fullWidth = false,
}) {
  const getHoverColor = (color) => {
    if (color === "#864FFD") return "#9d6bff";
    if (color === "transparent") return "rgba(134, 79, 253, 0.1)";
    return color;
  };

  return (
    <button
      className={`rounded-full px-5 py-2 md:px-6 md:py-3 lg:px-[30px] lg:py-5 font-bold cursor-pointer ${fullWidth ? "w-full" : ""} `}
      style={{
        backgroundColor: bg,
        color: textColor,
        border: borderColor ? `1px solid ${borderColor}` : "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = getHoverColor(bg);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bg;
      }}
    >
      {title}
    </button>
  );
}
