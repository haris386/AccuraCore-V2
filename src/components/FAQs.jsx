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

const testimonials = [
  {
    name: "Sarah Malik",
    feedback:
      "Accuracore transformed how we manage our daily operations. Everything is in one place — from tasks to invoices. It’s like having a full operations team inside one dashboard.",
  },
  {
    name: "Ahmed Khan",
    feedback:
      "The clarity AccuraCore gives our team is incredible. Everyone knows their tasks, and our financials stay perfectly organized.",
  },
  {
    name: "Fatima Noor",
    feedback:
      "Before AccuraCore, our workflows were scattered across tools. Now everything is streamlined and easy to manage.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full py-16 lg:py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/section5.jpg')" }}
    >
      {/* FAQS */}
      <div className="text-center mb-12">
        <h2 className="text-white text-[25px] md:text-[30px] font-[300] leading-tight mb-10">
          Frequently
          <br /> Asked Questions
        </h2>
      </div>

      <div className="w-[90%] md:w-[60%] mx-auto flex flex-col gap-4 relative">
        {/* Top Gradient Overlay for first 2 questions */}
        <div className="absolute top-0 left-0 w-full h-40 pointer-events-none bg-gradient-to-b from-[#000233] to-transparent z-10"></div>

        {/* Bottom Gradient Overlay for last 2 questions */}
        {/* Bottom Gradient Overlay */}
        <div
          className="absolute bottom-0 left-0 w-full h-20 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to top, #000233 0%, transparent 40%), linear-gradient(to right, #000a3f 0%, transparent 10%)",
          }}
        ></div>
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
                zIndex: faqsData.length - index,
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

      {/* Testimonials */}
      <div className="pt-24 lg:pt-36 w-[90%] md:w-[85%] max-w-[1600px] mx-auto flex flex-col items-center">
        {/* HEADING */}
        <h2 className="text-[25px] md:text-[30px] font-[300] text-white leading-tight mb-10 text-center max-w-[700px]">
          Trusted By Teams Who <br /> Value
          <span className="text-[#FA8C3D]">
            {" "}
            Clarity, Control, And Results.
          </span>
        </h2>

        {/* TESTIMONIAL CARD */}
        <div
          className="relative w-[90%] lg:w-[65%] bg-[#01164b] rounded-[20px] lg:rounded-[200px] px-6 md:px-6 py-8 md:py-6 flex flex-col md:flex-row items-center gap-6 md:gap-10"
          style={{ border: "1px solid rgb(41 58 95)" }}
        >
          {/* COLON IMAGE */}
          <div className="absolute -top-4 right-8 lg:right-20 z-10">
            <Image src="/images/colon.png" alt="Quote" width={60} height={40} />
          </div>

          {/* LEFT IMAGE */}
          <div className="flex-shrink-0">
            <img
              src="/images/testimonialsLeft.png"
              alt="User"
              className="object-cover"
              style={{ borderRadius: "200px", height: "250px", width: "250px" }}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col text-white w-full md:w-[55%]">
            {/* NAME + STARS */}
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-[400] text-[16px]">
                {testimonials[active].name}
              </h4>

              <div className="flex gap-1 text-[#F6BE71]">★★★★★</div>
            </div>

            {/* FEEDBACK */}
            <p className="text-sm md:text-[15px] font-[300] leading-relaxed text-white/90">
              {testimonials[active].feedback}
            </p>
          </div>
        </div>

        {/* DOT / BAR INDICATOR */}
        <div className="flex items-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`cursor-pointer transition-all duration-500 ${
                active === i
                  ? "w-20 h-[6px] rounded-full bg-[#F6BE71]"
                  : "w-[8px] h-[8px] rounded-full bg-[#624e4d]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
