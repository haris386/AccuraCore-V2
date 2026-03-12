"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section className="w-full">
        <Image
          src="/images/contact.png"
          alt="Contact"
          width={1200}
          height={600}
          className="w-full h-auto object-contain rounded-[15px]"
        />
    </section>
  );
}