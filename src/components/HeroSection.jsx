"use client";

import Image from "next/image";
import Header from "./Header";

export default function HeroSection() {
  return (
    <section
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/herobg1.jpg')" }}
    >
      <Header />
      <div className="w-[90%] md:w-[85%] max-w-[1600px] mx-auto py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-[25px] md:text-[40px] font-[300] text-white leading-tight">
            One Platform built to make Contracting Jobs and Insurance Claims{" "}
            <span className="text-[#FA8C3D]">Accurate</span>,{" "}
            <span className="text-[#FA8C3D]">Easier</span>, and{" "}
            <span className="text-[#FA8C3D]">Faster</span>.
          </h1>

          <p className="text-[12px] md:text-[16px] font-[100] text-white">
            Accuracore is a powerful platform that brings everything you need
            into one dashboard — manage your team, track work orders, handle
            finances, and stay in control of every detail.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
            {/* Book Demo */}
            <button
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-full text-white text-[14px]
              bg-[#FA8C3D12]
              border-[1.5px]
              shadow-[0_0_30px_#F6BE7178,10px_9px_18px_#F6BE7140_inset,-12px_4px_14px_#FA8C3D99_inset]"
            >
              <span>Book Demo</span>
              <Image
                src="/icons/rightarrow.png"
                alt="Arrow"
                width={8}
                height={8}
              />
            </button>

            {/* Get Started Free */}
            <button
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-full text-white text-[14px]
              bg-[#000233]
              border-[1.5px]
              shadow-[0_0_30px_#98CDFA78,10px_9px_18px_#F6BE7140_inset,-12px_4px_14px_#98CDFA66_inset]"
            >
              <span>Get Started Free</span>
              <Image
                src="/icons/rightarrow.png"
                alt="Arrow"
                width={8}
                height={8}
              />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/mobile.png"
            alt="Mobile Preview"
            style={{width:"90%"}}
            className="w-[70%] sm:w-[60%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
