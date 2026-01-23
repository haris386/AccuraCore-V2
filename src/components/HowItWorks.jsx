'use client';

import Image from 'next/image';

export default function HowItWorks() {
  return (
    <section
      className="w-full py-16 lg:py-24"
      
    >
      <div className="w-[90%] md:w-[65%] max-w-[1600px] mx-auto flex flex-col gap-12">
        {/* Heading */}
        <div className="text-center flex flex-col gap-4 max-w-4xl mx-auto">
          <h1 className="text-[25px] md:text-[30px] font-[300] text-white leading-tight">
            How It Works to{' '}
            <span className="text-[#FA8C3D]">Power Your Business</span>
          </h1>
          <p className="text-[12px] md:text-[14px] font-[100] text-white">
            From setup to execution — see how Accuracore simplifies operations,<br/>
            streamlines workflows, and puts you in control.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div
            className="relative rounded-[20px] p-[30px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(13,14,60,1) 25%)," +
                "linear-gradient(to right, rgba(255,255,255,0.05), rgba(13,14,60,1) 25%, rgba(13,14,60,1) 75%, rgba(255,255,255,0.05))",
              backgroundColor: "#0d0e3c",
            }}
          >
            {/* Top Glowing Border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] rounded-full bg-[#6EC1FF] shadow-[0_0_10px_#6EC1FF,0_0_20px_#6EC1FF]"></div>

            <div className="w-12 h-12 rounded-[10px] bg-[#1161A5] flex items-center justify-center mb-4">
              <Image src="/icons/createyourcompany.png" alt="Create Company" width={24} height={24} />
            </div>

            <h3 className="text-white text-[18px] font-[400] mb-2">
              Create Your Company
            </h3>

            <p className="text-white/80 text-[13px] font-[300]">
              Create your workspace in minutes then invite your team to collaborate and grow together.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="relative rounded-[20px] p-[30px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(13,14,60,1) 25%)," +
                "linear-gradient(to right, rgba(255,255,255,0.05), rgba(13,14,60,1) 25%, rgba(13,14,60,1) 75%, rgba(255,255,255,0.05))",
              backgroundColor: "#0d0e3c",
            }}
          >
            {/* Top Glowing Border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] rounded-full bg-[#6EC1FF] shadow-[0_0_10px_#6EC1FF,0_0_20px_#6EC1FF]"></div>

            <div className="w-12 h-12 rounded-[10px] bg-[#1161A5] flex items-center justify-center mb-4">
              <Image src="/icons/bcw.png" alt="Workflows" width={24} height={24} />
            </div>

            <h3 className="text-white text-[18px] font-[400] mb-2">
              Build Custom Workflows
            </h3>

            <p className="text-white/80 text-[13px] font-[300]">
              Adapt the platform to your process, not the other way around no templates needed.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="relative rounded-[20px] p-[30px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(13,14,60,1) 25%)," +
                "linear-gradient(to right, rgba(255,255,255,0.05), rgba(13,14,60,1) 25%, rgba(13,14,60,1) 75%, rgba(255,255,255,0.05))",
              backgroundColor: "#0d0e3c",
            }}
          >
            {/* Top Glowing Border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] rounded-full bg-[#6EC1FF] shadow-[0_0_10px_#6EC1FF,0_0_20px_#6EC1FF]"></div>

            <div className="w-12 h-12 rounded-[10px] bg-[#1161A5] flex items-center justify-center mb-4">
              <Image src="/icons/aiocp.png" alt="Control Panel" width={24} height={24} />
            </div>

            <h3 className="text-white text-[18px] font-[400] mb-2">
              All-in-One Control Panel
            </h3>

            <p className="text-white/80 text-[13px] font-[300]">
              Stay on top of operations, finances, and team performance all in one clean interface.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
