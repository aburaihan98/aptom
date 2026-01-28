export default function CaseStudyDetailContent() {
  const sections = [
    {
      title: "Challenge",
      content: [
        "Rapid growth caused operational inefficiencies, unclear market positioning, and difficulty scaling processes across global regions.",
      ],
    },
    {
      title: "Problem Statement",
      subtitle: "Team Coxmo faced three core issues:",
      items: [
        {
          label: "Operational Bottleneck:",
          text: "Lack of standardized workflows led to delays in product delivery.",
        },
        {
          label: "Market Positioning:",
          text: "Messaging was disconnected and inconsistent, causing conversion rates.",
        },
        {
          label: "Scalability Concerns:",
          text: "Processes lacked the structure needed for long-term expansion.",
        },
      ],
    },
    {
      title: "Consulting Approach",
      subtitle: "Our consulting team applied a three-phase framework:",
      phases: [
        {
          number: "1.",
          title: "Diagnosis & Research",
          points: [
            "Conducted in-depth interviews and quantitative research.",
            "Benchmarked competitors in SaaS and digital solutions.",
            "Analyzed customer feedback and conversion data.",
          ],
        },
        {
          number: "2.",
          title: "Strategic Design",
          points: [
            "Redesigned messaging strategy, aligning with industry standards.",
            "Developed a clear positioning blueprint for leadership, target, and financial audiences.",
            "Introduced Agile sprint cycles for product development.",
          ],
        },
        {
          number: "3.",
          title: "Implementation & Tracking",
          points: [
            "Rolled out new operations systems across regional hubs.",
            "Established KPIs to track engagement, churn, critical communication, and long-term improvement.",
            "Created workflow automation to reduce manual tasks.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="-mt-10 md:-mt-48 flex items-center justify-center">
      <div className="p-4 md:p-[50px] space-y-10">
        {/* Challenge Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {sections[0].title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {sections[0].content[0]}
          </p>
        </div>

        {/* Problem Statement Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {sections[1].title}
          </h2>
          <p className="text-gray-700 font-medium mb-4">
            {sections[1].subtitle}
          </p>
          <div className="space-y-3">
            {sections[1].items.map((item, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                <span className="font-semibold">{item.label}</span> {item.text}
              </p>
            ))}
          </div>
        </div>

        {/* Consulting Approach Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {sections[2].title}
          </h2>
          <p className="text-gray-700 font-medium mb-6">
            {sections[2].subtitle}
          </p>

          <div className="space-y-6">
            {sections[2].phases.map((phase, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {phase.number} {phase.title}
                </h3>
                <ul className="space-y-2 ml-6">
                  {phase.points.map((point, pIndex) => (
                    <li
                      key={pIndex}
                      className="text-gray-700 leading-relaxed list-disc"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
