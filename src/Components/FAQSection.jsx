import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "To place an order, simply browse through our sweet creations, select a design, flavour, size, and color that suits your taste. Then proceed to make payment and receive your order confirmation.",
    },
    {
      question: "Can I request a custom design?",
      answer:
        "Yes, if you don't see a design you like, you can contact us directly through our contact form to discuss your custom design requirements.",
    },
    {
      question: "How long does it take to receive my order?",
      answer:
        "Depending on the complexity of the design, most orders take 3-5 business days. We recommend placing your order in advance for special occasions.",
    },
    {
      question: "Do you offer delivery?",
      answer:
        "Yes, we offer delivery within specified areas. Delivery charges may apply depending on your location.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit/debit cards, bank transfers, and mobile payment platforms.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-lightPink/80">
      <div className="container mx-auto px-12">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-black text-center mb-8">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border-b border-deepPink/40"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-lg font-medium text-black py-4 focus:outline-none"
              >
                {faq.question}
                {openIndex === index ? (
                  <FaChevronUp className="text-deepPink" />
                ) : (
                  <FaChevronDown className="text-deepPink" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 pb-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
