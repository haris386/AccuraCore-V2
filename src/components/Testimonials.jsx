"use client";

import { useState } from "react";
import Image from "next/image";

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

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="w-[90%] md:w-[85%] max-w-[1600px] mx-auto flex flex-col items-center">

        {/* HEADING */}
        <h2 className="text-[25px] md:text-[30px] font-[300] text-white leading-tight mb-10 text-center max-w-[700px]">
          Trusted By Teams Who <br/> Value
          <span className="text-[#FA8C3D]"> Clarity, Control, And Results.</span>
        </h2>

        {/* TESTIMONIAL CARD */}
        <div className="relative w-[90%] lg:w-[65%] bg-[#01164b] rounded-[20px] lg:rounded-[200px] px-6 md:px-6 py-8 md:py-6 flex flex-col md:flex-row items-center gap-6 md:gap-10" style={{border: "1px solid rgb(41 58 95)"}}>

          {/* COLON IMAGE */}
          <div className="absolute -top-4 right-8 lg:right-20 z-10">
            <Image
              src="/images/colon.png"
              alt="Quote"
              width={60}
              height={40}
            />
          </div>

          {/* LEFT IMAGE */}
          <div className="flex-shrink-0">
            <img
              src="/images/testimonialsLeft.png"
              alt="User"
              className="object-cover"
              style={{borderRadius:"200px", height: "250px", width:"250px"}}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col text-white w-full md:w-[55%]">

            {/* NAME + STARS */}
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-[400] text-[16px]">
                {testimonials[active].name}
              </h4>

              <div className="flex gap-1 text-[#F6BE71]">
                ★★★★★
              </div>
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