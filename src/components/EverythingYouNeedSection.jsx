"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Define all available images globally
const allImages = [
  {
    id: "Work-Order-Management",
    src: "/Images/Work-Order-Management.png",
    alt: "Work Order Management",
  },
  {
    id: "smart-dashboard",
    src: "/Images/Smart-Dashboard.png",
    alt: "Smart Dashboard",
  },
  {
    id: "boards",
    src: "/Images/Boards.png",
    alt: "Boards",
  },
  {
    id: "Contact-Profiles",
    src: "/Images/Contact-Profiles.png",
    alt: "Contact Profiles Section",
  },
  { id: "calendar", src: "/Images/Calendar.png", alt: "Calendar View" },
];

// Define tabs, linking to the central image ID
const tabs = [
  { id: "Work-Order-Management", label: "Work Order Management" },
  { id: "smart-dashboard", label: "Smart Dashboard" },
  { id: "boards", label: "Boards" },
  { id: "Contact-Profiles", label: "Contact Profiles" },
  { id: "calendar", label: "Calendar" },
];

export default function EverythingYouNeedSection() {
  const [activeTab, setActiveTab] = useState("Work-Order-Management");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  // When active tab changes, scroll carousel to that slide
  const scrollTo = (id) => {
    const index = allImages.findIndex((img) => img.id === id);
    if (emblaApi && index !== -1) {
      emblaApi.scrollTo(index);
      setActiveTab(id);
    }
  };

  return (
    <section style={{ paddingBottom: 0, backgroundColor: "#f4f0ed" }}>
      <div className="w-full">
        <div
          className="p-8 lg:p-12"
          style={{
            background: "radial-gradient(circle, #2f5071 0%, #162c44 100%)",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          {/* Heading */}
          <div className="text-center flex flex-col gap-4 max-w-4xl mx-auto">
            <h1 className="text-[25px] md:text-[30px] font-[300] text-white leading-tight">
              Everything You Need to
              <br /> Run and
              <span className="text-[#FA8C3D]">Grow Your Business</span>
            </h1>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8 lg:mb-12 px-4 lg:px-12">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className="rounded-full"
                style={{
                  padding: activeTab === tab.id ? "1.5px" : "0px",
                  background:
                    activeTab === tab.id
                      ? "linear-gradient(90deg, #98CDFA 0.48%, #ECECEC 23.08%, #1161A5 59.13%, #1161A5 95.65%)"
                      : "transparent",
                  borderRadius: "999px",
                }}
              >
                <button
                  onClick={() => scrollTo(tab.id)}
                  className="px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base transition-all duration-300 whitespace-nowrap text-white"
                  style={{
                    background: activeTab === tab.id ? "#000233" : "#0061A433",
                    boxShadow:
                      activeTab === tab.id
                        ? "0px 0px 30px 0px #98CDFA78, 10px 9px 18px 0px #F6BE7140 inset, -12px 4px 14px 0px #98CDFA66 inset"
                        : "none",
                  }}
                >
                  {tab.label}
                </button>
              </div>
            ))}
          </div>

{/* Embla Carousel */}
<div className="relative">
  {/* Background Glow */}
  <div
    className="absolute inset-0 rounded-3xl"
    style={{
      background: "radial-gradient(circle, rgb(178 247 255) 40%, rgb(9 49 120) 90%, rgb(8 54 88) 75%)",
      zIndex: 0,
      filter: "blur(20px)",
    }}
  />

  <div className="embla overflow-hidden relative" ref={emblaRef} style={{ zIndex: 1 }}>
    <div className="embla__container flex">
      {allImages.map((img) => (
        <div
          key={img.id}
          className="embla__slide flex-[0_0_100%] md:flex-[0_0_55%] flex justify-center items-center px-1 relative"
        >
          {activeTab === img.id ? (
            <div className="relative max-w-full mx-auto">
              <div
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 shadow-2xl"
                style={{ border: "2px solid white" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-auto rounded-3xl"
                  style={{ maxHeight: "500px" }}
                />
              </div>
            </div>
          ) : (
            <img
              src={img.src}
              alt={img.alt}
              className="bg-slide w-full h-[300px] md:h-[500px] object-contain rounded-xl transition-transform duration-500 opacity-50 scale-75"
            />
          )}
        </div>
      ))}
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
