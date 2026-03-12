"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="w-full bg-[#1161A5] py-5 flex justify-center items-center">
        <p className="text-white text-center tracking-[1em] text-sm md:text-base font-[200]">
          Let’s Connect To Turn Complexity Into Clarity
        </p>
      </div>

      <section
        className="w-full bg-cover bg-center pt-16 pb-10"
        style={{ backgroundImage: "url('/images/footerbg.png')" }}
      >
        <div className="md:w-[90%] w-[92%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* COL 1 */}
          <div className="flex flex-col gap-10">
            <Image
              src="/logos/footer-logo.png"
              alt="footer logo"
              width={160}
              height={60}
            />

            {/* EMAIL INPUT */}
            <div className="flex items-center border-b border-[#1161A5] pb-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none text-white placeholder-white flex-1"
              />

              <button className="ml-3 w-10 h-10 rounded-full bg-[#1161A5] flex items-center justify-center">
                <Image
                  src="/icons/submit.png"
                  alt="submit"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>

          {/* COL 2 (SPACER) */}
          <div></div>

          {/* COL 3 */}
          <div className="text-white">
            <h3 className="text-lg font-[400] mb-4">Our Story</h3>

            <ul className="flex flex-col gap-3 text-sm">
              <li className="cursor-pointer hover:opacity-80">Why</li>
              <li className="cursor-pointer hover:opacity-80">How It Works</li>
              <li className="cursor-pointer hover:opacity-80">Contact Us</li>
            </ul>
          </div>

          {/* COL 4 */}
          <div className="text-white flex flex-col gap-6 md:border-l md:border-[#1161A5] md:pl-10">
            {/* SOCIAL */}
            <div>
              <h3 className="text-lg font-[400] mb-4">Follow us</h3>

              <div className="flex gap-3">
                {[
                  "/icons/instagram.png",
                  "/icons/whatsapp.png",
                  "/icons/telegram.png",
                ].map((icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                  >
                    <Image src={icon} alt="social" width={18} height={18} />
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-lg font-[400] mb-4">Contact</h3>

              <div className="flex items-center gap-3 text-sm mb-3">
                <Image
                  src="/icons/call-add.png"
                  alt="phone"
                  width={18}
                  height={18}
                />
                <span>999-999-999</span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Image
                  src="/icons/email.png"
                  alt="email"
                  width={18}
                  height={18}
                />
                <span>Accuracore@.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="w-full bg-[#191c3d] py-4">
        <div className="md:w-[90%] w-[95%] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-white text-sm">
          <p>Copyright © 2025 — Copyright</p>

          <p>All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
