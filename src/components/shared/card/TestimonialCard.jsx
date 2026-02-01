import Quote from "../../../assets/shared/icon/quote.webp";

export default function TestimonialCard({ index, avatar, quote, name, role }) {
  return (
    <div key={index} className="bg-gray-50 rounded-lg p-8 max-w-[300px]">
      {/* Header with avatar and icon */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div>
          <img src={Quote} alt="Quote" />
        </div>
      </div>

      {/* Quote text */}
      <p className="text-gray-600 text-base leading-relaxed mb-6">{quote}</p>
      {/* Author info */}
      <div>
        <p className="font-semibold text-gray-900 text-sm">{name}</p>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
  );
}
