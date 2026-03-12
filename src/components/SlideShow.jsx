"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Smart Scheduling with Calendar",
    description:
      "Plan, assign, and track work with a clear, centralized calendar. AccuraCore’s scheduling keeps every task visible, deadlines aligned, and teams perfectly coordinated—so nothing gets missed and every job stays on time.",
    image: "/images/SSWC.png",
  },
  {
    title: "Visual Workflow with Boards",
    description:
      "Organize work into clear stages and track progress at a glance. With intuitive boards, teams can move tasks, monitor status, and collaborate effortlessly—bringing transparency and structure to every process.",
    image: "/images/VWWB.png",
  },
  {
    title: "Control with Job Management",
    description:
      "Manage every job from start to finish in one system. From assignments to updates and documentation, AccuraCore ensures each job is organized, traceable, and easy to review for accurate execution and confident decisions.",
    image: "/images/CWJM.png",
  },
];

export default function SlideShow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 flex justify-center">
      <div className="w-[90%] md:w-[80%]">
        {/* IMAGE */}
        <div className="w-full mb-10 rounded-[15px] overflow-hidden transition-all duration-700">
          <Image
            src={slides[active].image}
            alt="slide"
            width={1400}
            height={700}
            className="w-full h-auto object-cover transition-all duration-700"
          />
        </div>

        {/* CONTENT COLS */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {slides.map((slide, index) => {
            const isActive = index === active;

            return (
              <div
                key={index}
                className={`relative p-6 rounded-b-[50px] transition-all duration-500 ${
                  isActive
                    ? "bg-[linear-gradient(180deg,rgba(246,190,113,0.2)_0%,rgba(246,190,113,0.2)_100%)]"
                    : "bg-transparent"
                }`}
              >
                {/* PROGRESS BAR */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gray-200 rounded-xl overflow-hidden">
                  {isActive && (
                    <div className="h-full bg-[#F6BE71] animate-progress"></div>
                  )}
                </div>

                <h3
  className="text-lg md:text-xl font-[400] mb-3 transition-colors duration-500"
  style={{ color: isActive ? "#F6BE71" : "#FFFFFF" }}
>
  {slide.title}
</h3>

                <p className="text-sm text-[#FFFFFF] leading-relaxed">
                  {slide.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
