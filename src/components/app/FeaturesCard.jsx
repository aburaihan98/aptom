export default function FeaturesCard({ feature, index }) {
  return (
    <div className="group">
      <div
        key={index}
        className="bg-gradient-to-b from-[#FFFFFF] to-[#F6F6F6] rounded-[5px] p-8 text-center h-full cursor-pointer transition-all duration-300 ease-out group-hover:bg-white group-hover:[background-image:none] group-hover:-translate-y-2 group-hover:shadow-lg"
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
