import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqs = [
    { title: "Question 1", answer: "Answer to question 1." },
    { title: "Question 2", answer: "Answer to question 2." },
    { title: "Question 3", answer: "Answer to question 3." },
  ];

  return (
    <div className="max-w-lg mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <button
            className="flex items-center justify-between w-full focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-xl font-medium">{faq.title}</h3>
            {openIndex === index ? (
              <FaChevronUp className="h-5 w-5 text-gray-600" />
            ) : (
              <FaChevronDown className="h-5 w-5 text-gray-600" />
            )}
          </button>
          {openIndex === index && (
            <p className="text-gray-600 text-lg mt-3">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
