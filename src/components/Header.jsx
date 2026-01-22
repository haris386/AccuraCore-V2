// components/Header.jsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex justify-center py-4">
      {/* Main Pill Container */}
      <div className="w-[90%] md:w-[70%] max-w-[1400px] rounded-full px-6 md:px-6 py-4 flex items-center justify-between bg-white">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logos/logo.png"
            alt="Logo"
            width={90}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Center Menu (Desktop) */}
        <nav className="hidden md:flex gap-8 text-[16px]">
          <a href="#" className="hover:text-[#0061A4] transition">Why</a>
          <a href="#" className="hover:text-[#0061A4] transition">How It Works</a>
          <a href="#" className="hover:text-[#0061A4] transition">Contact Us</a>
        </nav>

        {/* Right Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Login Button */}
          <button className="flex items-center gap-2 px-6 py-4 rounded-full text-white text-sm lg:text-base
            bg-[#0061A4]
            border-[1.5px]
            shadow-[0_0_30px_#98CDFA78,10px_9px_18px_#98CDFA40_inset,-12px_4px_14px_#98CDFA66_inset]">
            <span>Login</span>
            <Image src="/icons/key.png" alt="Login" width={18} height={18} />
          </button>

          {/* Book Demo Button */}
          <button className="flex items-center gap-2 px-6 py-4 rounded-full text-white text-sm lg:text-base
            bg-[#FA8C3D]
            border-[1.5px]
            shadow-[0_0_30px_#F6BE7178,10px_9px_18px_#F6BE7140_inset,-12px_4px_14px_#FA8C3D99_inset]">
            <span>Book Demo</span>
            <Image src="/icons/rightarrow.png" alt="Arrow" width={8} height={8} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-black" />
          <span className="w-6 h-[2px] bg-black" />
          <span className="w-6 h-[2px] bg-black" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[90px] w-[90%] max-w-md bg-white rounded-2xl shadow-xl p-6 md:hidden">
          <nav className="flex flex-col gap-4 text-black text-base font-medium items-center">
            <a href="#">Why</a>
            <a href="#">How It Works</a>
            <a href="#">Contact Us</a>
          </nav>

          <div className="w-[60%] m-auto flex flex-col gap-3 mt-6">
            <button className="flex items-center justify-center gap-2 px-6 py-4 rounded-full text-white
              bg-[#0061A4]
              shadow-[0_0_30px_#98CDFA78,10px_9px_18px_#98CDFA40_inset,-12px_4px_14px_#98CDFA66_inset]">
              <span>Login</span>
              <Image src="/icons/key.png" alt="Login" width={18} height={18} />
            </button>

            <button className="flex items-center justify-center gap-2 px-6 py-4 rounded-full text-white
              bg-[#FA8C3D]
              shadow-[0_0_30px_#F6BE7178,10px_9px_18px_#F6BE7140_inset,-12px_4px_14px_#FA8C3D99_inset]">
              <span>Book Demo</span>
              <Image src="/icons/rightarrow.png" alt="Arrow" width={8} height={8} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}


