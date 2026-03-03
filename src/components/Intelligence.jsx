"use client";

import Image from "next/image";

export default function Intelligence() {
  return (
    <section className="w-full py-16 lg:py-12 relative">
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
  );
}