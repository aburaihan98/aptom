export default function FeaturesCard({ feature, index }) {
  return (
    <div>
      <div
        key={index}
        className="bg-white rounded-[5px] p-8 text-center h-full"
      >
        {/* Icon container */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#E9E9E9] rounded-full p-5">
            <div className="w-12 h-12">
              <img
                className="w-full h-full"
                src={feature.icon}
                alt={feature.title}
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-dark mb-3">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
