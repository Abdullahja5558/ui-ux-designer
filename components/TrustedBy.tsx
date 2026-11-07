"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface LogoItem {
  id: string;
  src: string;
  alt: string;
}

// Layer 1: 5 Logos (1.png to 5.png)
const layer1Logos: LogoItem[] = [
  { id: "logo-1", src: "/1.png", alt: "Client Partner 1" },
  { id: "logo-2", src: "/2.png", alt: "Client Partner 2" },
  { id: "logo-3", src: "/3.png", alt: "Client Partner 3" },
  { id: "logo-4", src: "/4.png", alt: "Client Partner 4" },
  { id: "logo-5", src: "/5.png", alt: "Client Partner 5" },
];

// Layer 2: 5 Logos (6.png to 10.png)
const layer2Logos: LogoItem[] = [
  { id: "logo-6", src: "/6.png", alt: "Client Partner 6" },
  { id: "logo-7", src: "/7.png", alt: "Client Partner 7" },
  { id: "logo-8", src: "/8.png", alt: "Client Partner 8" },
  { id: "logo-9", src: "/9.png", alt: "Client Partner 9" },
  { id: "logo-10", src: "/10.png", alt: "Client Partner 10" },
];

// Layer 3: 6 Logos (11.png to 16.png)
const layer3Logos: LogoItem[] = [
  { id: "logo-11", src: "/11.png", alt: "Client Partner 11" },
  { id: "logo-12", src: "/12.png", alt: "Client Partner 12" },
  { id: "logo-13", src: "/13.png", alt: "Client Partner 13" },
  { id: "logo-14", src: "/14-dark.png", alt: "Client Partner 14" },
  { id: "logo-15", src: "/15.png", alt: "Client Partner 15" },
  { id: "logo-16", src: "/16-dark.png", alt: "Client Partner 16" },
];

// Repeat 4x to ensure uninterrupted, seamless infinite scrolling loops
const repeatedLayer1 = [...layer1Logos, ...layer1Logos, ...layer1Logos, ...layer1Logos];
const repeatedLayer2 = [...layer2Logos, ...layer2Logos, ...layer2Logos, ...layer2Logos];
const repeatedLayer3 = [...layer3Logos, ...layer3Logos, ...layer3Logos, ...layer3Logos];

export default function TrustedBy() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 bg-[#FAF9FF] overflow-hidden select-none">
      {/* SECTION HEADING (STRICTLY 2 LINES, NO PARAGRAPH, PURPLE BG SPAN) */}
      <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-14 md:mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111116] leading-[1.25] select-none text-center"
        >
          <span className="block">Trusted By High-Growth</span>
          <span className="block mt-1.5 sm:mt-2.5">
            <span className="inline-block bg-[#7040F5] text-white px-4 sm:px-6 md:px-7 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl shadow-lg shadow-[#7040F5]/25">
              Brands & Companies
            </span>
          </span>
        </motion.h2>
      </div>

      {/* 3 CONTINUOUS INFINITE MARQUEE LAYERS */}
      <div className="relative w-full overflow-hidden space-y-6 sm:space-y-8 md:space-y-10 py-4 sm:py-6 md:py-8">
        {/* Left & Right Edge Ambient Gradient Fade Masks (Extended Width & Full Height) */}
        <div className="absolute left-0 -inset-y-6 w-24 sm:w-44 md:w-64 lg:w-80 bg-gradient-to-r from-[#FAF9FF] via-[#FAF9FF]/95 via-40% to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 -inset-y-6 w-24 sm:w-44 md:w-64 lg:w-80 bg-gradient-to-l from-[#FAF9FF] via-[#FAF9FF]/95 via-40% to-transparent z-20 pointer-events-none" />

        {/* LAYER 1: 5 Logos (Right to Left continuous infinite flow) */}
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="flex items-center gap-10 sm:gap-16 md:gap-20 w-max animate-marquee-rtl">
            {repeatedLayer1.map((logo, idx) => (
              <div
                key={`layer1-${logo.id}-${idx}`}
                className="shrink-0 flex items-center justify-center px-2 py-1"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={240}
                  height={110}
                  priority={idx < 5}
                  className="h-9 sm:h-11 md:h-13 lg:h-14 w-auto max-w-[130px] sm:max-w-[170px] md:max-w-[210px] object-contain opacity-90 transition-opacity duration-200 pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* LAYER 2: 5 Logos (Left to Right continuous infinite flow - opposite direction) */}
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="flex items-center gap-10 sm:gap-16 md:gap-20 w-max animate-marquee-ltr">
            {repeatedLayer2.map((logo, idx) => (
              <div
                key={`layer2-${logo.id}-${idx}`}
                className="shrink-0 flex items-center justify-center px-2 py-1"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={240}
                  height={110}
                  priority={idx < 5}
                  className="h-9 sm:h-11 md:h-13 lg:h-14 w-auto max-w-[130px] sm:max-w-[170px] md:max-w-[210px] object-contain opacity-90 transition-opacity duration-200 pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* LAYER 3: 6 Logos (Right to Left continuous infinite flow) */}
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="flex items-center gap-10 sm:gap-16 md:gap-20 w-max animate-marquee-rtl">
            {repeatedLayer3.map((logo, idx) => (
              <div
                key={`layer3-${logo.id}-${idx}`}
                className="shrink-0 flex items-center justify-center px-2 py-1"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={240}
                  height={110}
                  priority={idx < 6}
                  className="h-9 sm:h-11 md:h-13 lg:h-14 w-auto max-w-[130px] sm:max-w-[170px] md:max-w-[210px] object-contain opacity-90 transition-opacity duration-200 pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HARDWARE-ACCELERATED BIDIRECTIONAL NON-STOP INFINITE KEYFRAMES */}
      <style jsx>{`
        @keyframes marqueeLtr {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }
        @keyframes marqueeRtl {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee-ltr {
          animation: marqueeLtr 36s linear infinite;
          will-change: transform;
        }
        .animate-marquee-rtl {
          animation: marqueeRtl 36s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
