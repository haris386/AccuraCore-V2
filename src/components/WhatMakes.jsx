"use client";

import Image from "next/image";

export default function WhatMakes() {
  return (
    <section className="w-full py-16 lg:py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Section04.png')" }}>
      <div className="w-[90%] md:w-[85%] max-w-[1600px] mx-auto">
        {/* Heading */}
        <h2 className="text-[25px] md:text-[30px] font-[300] text-white leading-tight mb-10">
          What makes<br/> <span className="text-[#FA8C3D]">Accuracore</span>{" "}
          different
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-[16px] bg-[rgb(15_32_87_/_45%)] pt-24 pb-6 px-6 flex flex-col items-center">

            <Image
              src="/images/unified.png"
              alt="Unified Dashboard"
              width={180}
              height={180}
              className="w-[60%] sm:w-[50%] md:w-[70%] lg:w-[70%] h-auto"
            />
            <div className="items-start text-left">
              <h3 className="text-white text-[18px] font-[400] mt-12 mb-2">
                Unified Dashboard
              </h3>
              <p className="text-white/80 text-[13px] font-[300]">
                One powerful platform designed to give you total control,
                without the complexity.
              </p>
            </div>
          </div>

          {/* Card 2 */}
         <div className="rounded-[16px] bg-[rgb(15_32_87_/_45%)] pt-24 pb-6 px-6 flex flex-col items-center">

            <Image
              src="/images/ybw.png"
              alt="Your Business Workflow"
              width={180}
              height={180}
              className="w-[60%] sm:w-[50%] md:w-[70%] lg:w-[70%] h-auto"
            />
             <div className="items-start text-left">
                
            <h3 className="text-white text-[18px] font-[400] mt-12 mb-2">
              Your Business Workflow
            </h3>
            <p className="text-white/80 text-[13px] font-[300]">
              We adapt to you with custom workflows and live updates.
            </p>
             </div>
          </div>

          {/* Card 3 */}
         <div className="rounded-[16px] bg-[rgb(15_32_87_/_45%)] pt-24 pb-6 px-6 flex flex-col items-center">

            <Image
              src="/images/FI.png"
              alt="Financial Intelligence"
              width={180}
              height={180}
              className="w-[60%] sm:w-[50%] md:w-[70%] lg:w-[70%] h-auto"
            />
             <div className="items-start text-left">

            <h3 className="text-white text-[18px] font-[400] mt-12 mb-2">
              Financial Intelligence
            </h3>
            <p className="text-white/80 text-[13px] font-[300]">
              Budgeting, estimates, invoicing all accurate and audit-ready.
            </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
