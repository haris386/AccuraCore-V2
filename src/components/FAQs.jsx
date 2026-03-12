"use client";

import Image from "next/image";
import { useState } from "react";

const faqsData = [
  {
    question: "Can I assign different roles to my team members?",
    answer:
      "Yes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.",
  },
  {
    question: "Does AccuraCore automatically calculate financials?",
    answer:
      "Yes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.",
  },
  {
    question: "Is AccuraCore suitable for small companies too?",
    answer:
      "Yes. AccuraCore works seamlessly for small teams and is built to scale as you grow. Start with only what you need today, then expand users, workflows, and capabilities over time without migrating or changing systems.",
  },
  {
    question: "Is AccuraCore cloud-based?",
    answer:
      "Yes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel urna nec metus cursus elementum.",
  },
  {
    question: "How quickly can my team get started?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus in orci consectetur convallis.",
  },
  {
    question: "Can I export my data from the system?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-[#0b1536] relative">
      <div className="text-center mb-12">
        <h2 className="text-white text-[25px] md:text-[30px] font-[300] leading-tight mb-10">
          Frequently
          <br /> Asked Questions
        </h2>
      </div>

      <div className="w-[90%] md:w-[60%] mx-auto flex flex-col gap-4 relative">

        {/* Top Gradient Overlay for first 2 questions */}
        <div className="absolute top-0 left-0 w-full h-40 pointer-events-none bg-gradient-to-b from-[#0b1536] to-transparent z-10"></div>

        {/* Bottom Gradient Overlay for last 2 questions */}
        <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none bg-gradient-to-t from-[#0b1536] to-transparent z-10"></div>

        {faqsData.map((faq, index) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={index}
              className={`relative transition-all duration-500 border overflow-hidden`}
              style={{
                border: "1px solid rgb(41 58 95)",
                background: isOpen ? "#0061A4" : "#021849",
                borderRadius: isOpen ? "15px" : "100px",
                zIndex: faqsData.length - index, // to maintain overlay effect
              }}
            >
              {/* QUESTION ROW */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none transition-all duration-500 ${
                  isOpen ? "rounded-[15px]" : "rounded-full"
                }`}
              >
                <span className="text-white font-[400]">{faq.question}</span>

                <div
                  className={`w-5 h-5 relative transition-transform duration-300 ${isOpen ? "rotate-180 mt-0" : "rotate-0 mt-3"}`}
                >
                  <Image
                    src="/icons/expand.png"
                    alt="Expand"
                    width={10}
                    height={10}
                  />
                </div>
              </button>

              {/* ANSWER */}
              <div
                className="px-6 overflow-hidden transition-[max-height] duration-500"
                style={{
                  maxHeight: isOpen ? "500px" : "0px",
                }}
              >
                {isOpen && (
                  <div className="pt-2 pb-4">
                    <div className="w-full h-[1px] bg-white/30 mb-2"></div>
                    <p className="text-white font-[200] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}