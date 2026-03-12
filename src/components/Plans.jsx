"use client";

import Image from "next/image";

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

export default function Plans() {
  return (
    <section className="w-full py-16 lg:py-24">
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
  );
}
