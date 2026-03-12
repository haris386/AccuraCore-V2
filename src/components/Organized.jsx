"use client";

import Image from "next/image";

export default function Organized() {
  return (
    <section
      className="w-full py-16 lg:py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/organize.png')" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-56">
        {/* LEFT COLUMN */}
        <div className="ml-[5%] md:ml-[15%] text-white flex flex-col gap-6">
          <h2 className="text-[25px] md:text-[30px] font-[300] leading-tight mb-10">
            Organize Your Company & Empower
            <span className="text-[#FA8C3D]"> Your Team</span>
          </h2>

          <p className="font-[200] text-sm md:text-base leading-relaxed">
            Easily create and manage your company profile, onboard team members
            in minutes, and structure your organization exactly the way your
            business operates. Assign fully customizable roles, define access
            levels with precision, and control user permissions across every
            department. From administrators to field staff, ensure everyone sees
            only what they need — no more, no less.
          </p>
          <p className="font-[200] text-sm md:text-base leading-relaxed">
            All of this is powered through a single, centralized dashboard
            designed to give you complete visibility, stronger security, and
            total operational clarity, so your team can work faster, smarter,
            and with confidence.
          </p>

          <button className="w-[93%] md:w-[60%] mt-6 inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white text-[#1161A5] font-[400] text-sm md:text-base hover:opacity-90 transition">
            <span>Get Started with AccuraCore</span>
            <Image
              src="/icons/organize-rightarrow.png"
              alt="Arrow"
              width={8}
              height={8}
            />
          </button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full h-full relative flex justify-end">
          <div className="w-full max-w-[500px] lg:max-w-none">
            <Image
              src="/images/organize-right.png"
              alt="Organize Right"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
