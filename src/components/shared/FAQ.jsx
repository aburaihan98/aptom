import SectionHeader from "../common/SectionHeader";
import Arrow from "../../assets/common/arrow.webp";
import { useState } from "react";

const faqs = [
  {
    question: "What Does Your App Do?",
    answer:
      "Our app provides powerful AI-driven solutions to help you manage your business more efficiently. From analytics to automation, we've got you covered.",
  },
  {
    question: "Do You Offer Integrations With Other Tools?",
    answer:
      "Yes, we offer seamless integrations with popular tools like Slack, Google Drive, Salesforce, and many more to streamline your workflow.",
  },
  {
    question: "How Do I Sign Up?",
    answer:
      "Simply click 'Get Started' on the homepage, create an account, and you're ready to go.",
  },
  {
    question: "What Payment Methods Do You Accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for enterprise customers.",
  },
  {
    question: "Do You Share My Information With Third Parties?",
    answer:
      "No, we take your privacy seriously. We do not share your personal information with third parties without your explicit consent.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-bg">
      <div className="Container">
        <SectionHeader
          title="Find answers to commonly asked"
          subtitle="Frequently Asked Questions"
          textAlign="center"
        />
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[10px] overflow-hidden"
            >
              <div
                className="p-5 md:p-6 lg:p-[30px] flex items-center justify-between cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-dark font-medium text-base md:text-lg">
                  {faq.question}
                </h3>
                <img
                  src={Arrow}
                  alt="Arrow icon"
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <div className="px-5 md:px-6 lg:px-[30px] pb-5 md:pb-6 lg:pb-[30px]">
                  <p className="text-light text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
