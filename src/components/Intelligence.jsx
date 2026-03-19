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

const plans = [
  {
    title: "Starter Plan (Individual)",
    price: "49",
    period: "mo",
    bg: "#01164b",
    headerBg: "#1161A5",
    button: "dark",
    features: [
      "1 User (Personal use)",
      {
        title: "Core modules:",
        sub: [
          "Jobs",
          "Contacts",
          "Financials (Estimates/Invoices)",
          "Work Orders",
        ],
      },
      "Basic Reporting",
      "Email Support",
      "Basic storage (5GB)",
    ],
  },
  {
    title: "Company Plan (Seat-Based)",
    price: "199",
    period: "mo",
    bg: "#351f34",
    headerBg: "#FA8C3D",
    button: "orange",
    features: [
      "Includes 5 seats",
      "Covers full company modules (all AccuraCore features).",
      "Add extra seats: $20/month per user.",
      {
        title: "Includes:",
        sub: [
          "Jobs, Contacts, Work Orders",
          "Full Financial Suite",
          "Tasks & Workflows",
          "Attachments & Notes",
          "Dashboards & Analytics",
        ],
      },
    ],
  },
  {
    title: "Solo Plan (Professional)",
    price: "79",
    period: "mo",
    bg: "#01164b",
    headerBg: "#1161A5",
    button: "dark",
    features: [
      "1 User",
      {
        title: "Core modules:",
        sub: [
          "Jobs",
          "Contacts",
          "Financials (Estimates/Invoices)",
          "Work Orders",
        ],
      },
      "Advanced Reports",
      "Priority Email Support",
      "Basic storage (10GB)",
    ],
  },
];

export default function Intelligence() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/section5.jpg')" }}
      >
        <section className="w-full py-16 lg:py-24">
          <div className="w-[90%] md:w-[85%] max-w-[1600px] mx-auto relative z-10">
            {/* Heading */}
            <h2 className="text-[25px] md:text-[30px] font-[300] text-white leading-tight mb-10 relative z-20">
              Intelligence That
              <br />
              <span className="text-[#FA8C3D]">Powers Smarter Operations</span>
            </h2>

            <div className="relative w-full mx-auto h-[400px] md:h-[600px]">
              {/* Background Image */}
              <Image
                src="/images/Intelligence.png"
                alt="Intelligence"
                fill
                className="opacity-50"
                priority
              />
            </div>
          </div>
        </section>

        {/* SlideShow */}
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
                    className={`relative p-6 rounded-b-[30px] transition-all duration-500 ${
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

        {/* Plans Cards */}
        <section className="w-full pt-8 pb-24 lg:py-24">
          <div className="w-[90%] md:w-[85%] max-w-[1600px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-[25px] md:text-[30px] font-[300] text-white leading-tight mb-10">
                Choose the Right <br />
                <span className="text-[#FA8C3D]">AccuraCore Plan</span> for Your
                Business
              </h2>
              <p className="text-white/80 text-sm md:text-base mt-4 max-w-[700px] mx-auto">
                Flexible pricing plans designed to match your workflow — whether
                you’re working solo or managing a growing team.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className="p-6 lg:p-6 rounded-[20px] flex flex-col justify-between"
                  style={{ background: plan.bg }}
                >
                  {/* TOP HEADER BOX */}
                  <div
                    className="rounded-[15px] px-5 py-4 mb-8"
                    style={{ background: plan.headerBg }}
                  >
                    <h3 className="text-white text-[18px] font-[400] leading-snug">
                      {plan.title.split("(")[0].trim()} <br />
                      <span className="text-white/90">
                        ({plan.title.split("(")[1].replace(")", "")})
                      </span>
                    </h3>
                  </div>

                  {/* PRICE */}
                  <div className="text-white mb-6 relative inline-block">
                    <div className="flex items-start">
                      <span className="text-[16px] mr-1 mt-1">$</span>

                      <span className="text-[48px] font-[400] leading-none">
                        {plan.price}
                      </span>

                      <span className="text-[14px] ml-1 mt-auto mb-1">
                        /{plan.period}
                      </span>
                    </div>
                  </div>

                  {/* SEPARATOR */}
                  <div className="w-full h-[1px] bg-white/20 mb-6"></div>

                  {/* FEATURES */}
                  <div className="flex flex-col gap-4 text-white text-[14px]">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Image
                          src="/icons/plans-features-icon.png"
                          alt="icon"
                          width={16}
                          height={16}
                          className="mt-1"
                        />

                        <div>
                          {typeof feature === "string" ? (
                            <p>{feature}</p>
                          ) : (
                            <>
                              <p>{feature.title}</p>

                              <ul className="list-disc ml-5 mt-2 space-y-1 text-white">
                                {feature.sub.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <div className="mt-32">
                    {plan.button === "dark" ? (
                      <button
                        className="w-full flex items-center justify-between gap-2 px-6 py-4 rounded-full text-white text-[14px]
                    bg-[#000233]
                    border-[1.5px]
                    shadow-[0_0_30px_#98CDFA78,10px_9px_18px_#F6BE7140_inset,-12px_4px_14px_#98CDFA66_inset]"
                      >
                        <span>Get Started</span>
                        <Image
                          src="/icons/rightarrow.png"
                          alt="Arrow"
                          width={8}
                          height={8}
                        />
                      </button>
                    ) : (
                      <button
                        className="w-full flex items-center justify-between gap-2 px-6 py-4 rounded-full text-white text-[14px]
                    bg-[#FA8C3D12]
                    border-[1.5px]
                    shadow-[0_0_30px_#F6BE7178,10px_9px_18px_#F6BE7140_inset,-12px_4px_14px_#FA8C3D99_inset]"
                      >
                        <span>Get Started</span>
                        <Image
                          src="/icons/rightarrow.png"
                          alt="Arrow"
                          width={8}
                          height={8}
                        />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
