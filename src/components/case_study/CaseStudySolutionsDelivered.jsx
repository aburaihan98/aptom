const solutions = [
  {
    icon: "✓",
    title: "Operational Excellence:",
    description: "Streamlined workflows unlocked delivery time by 70%.",
  },
  {
    icon: "✓",
    title: "Localization Strategy:",
    description:
      "Messaging aligned with cultural and linguistic nuances, boosting engagement.",
  },
  {
    icon: "✓",
    title: "Growth Dashboard:",
    description:
      "Scalable design systems helped scale international and cross-functional teams.",
  },
  {
    icon: "✓",
    title: "Team Alignment:",
    description:
      "Clear onboarding processes improved collaboration across remote teams.",
  },
];

const results = [
  {
    metric: "Revenue Growth:",
    value: "125% within 12 months.",
  },
  {
    metric: "Conversion Rate:",
    value: "Increased by 38% after messaging optimizations.",
  },
  {
    metric: "Employee Productivity:",
    value: "Improved by 25% due to automation.",
  },
  {
    metric: "Global Reach:",
    value: "Successfully entered UK, Nordic, and South Asian regions.",
  },
];

const lessons = [
  "Clear diagnosis prevents reactive firefighting.",
  "Localization isn't just translation—it's empathetic resonance with audiences.",
  "Agile priorities, KPI-backed innovations, and transparent communication drive sustainable frameworks.",
];

export default function CaseStudySolutionsDelivered() {
  return (
    <div className=" max-w-5xl lg:p-6 mx-auto flex items-center justify-center ">
      <div className="space-y-10">
        {/* Solutions Delivered Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Solutions Delivered
          </h2>
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-green-600 text-xl font-bold flex-shrink-0 mt-0.5">
                  {solution.icon}
                </span>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">{solution.title}</span>{" "}
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Results & Impact Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Results & Impact
          </h2>
          <div className="space-y-3">
            {results.map((result, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                <span className="font-semibold">{result.metric}</span>{" "}
                {result.value}
              </p>
            ))}
          </div>
        </div>

        {/* Lessons Learned Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Lessons Learned
          </h2>
          <ul className="space-y-3 ml-6">
            {lessons.map((lesson, index) => (
              <li
                key={index}
                className="text-gray-700 leading-relaxed list-disc"
              >
                {lesson}
              </li>
            ))}
          </ul>
        </div>

        {/* Clients Satisfaction Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Clients Satisfaction And Engagement:
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Team Coxmo praised the structured, data-driven approach of our
            offerings, highlighting meaningful interactions and relationships
            with targets, enthusiastic investors, and shareholders.
          </p>
        </div>
      </div>
    </div>
  );
}
