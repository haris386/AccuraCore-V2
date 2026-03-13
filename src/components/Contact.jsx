"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section
      className="w-full min-h-[100vh] py-16 lg:py-24 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/contact.png')" }}
    >
      <div className="w-[90%] md:w-[85%] max-w-[1600px] mx-auto flex flex-col items-center text-center">

        {/* CENTER TEXT */}
        <h2 className="text-[28px] md:text-[33px] font-[300] text-white leading-tight mb-10">
          Everything You <br />
          Need to Run and Grow <br />
          Your Business
        </h2>

        {/* BUTTON */}
        <button
          className="flex items-center justify-center gap-2 px-6 py-4 rounded-full text-white text-[14px]
          bg-[#FA8C3D12]
          border-[1.5px]
          shadow-[0_0_30px_#F6BE7178,10px_9px_18px_#F6BE7140_inset,-12px_4px_14px_#FA8C3D99_inset]"
        >
          <span>Contact Us</span>
          <Image
            src="/icons/rightarrow.png"
            alt="Arrow"
            width={8}
            height={8}
          />
        </button>

      </div>
    </section>
  );
}