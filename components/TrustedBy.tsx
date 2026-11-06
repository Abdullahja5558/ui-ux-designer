"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface LogoItem {
  id: string;
  src: string;
  alt: string;
}

const clientLogos: LogoItem[] = [
  { id: "logo-1", src: "/1.png", alt: "AJ Code" },
  { id: "logo-2", src: "/2.png", alt: "Pdffilz" },
  { id: "logo-3", src: "/3.png", alt: "DL Luxe" },
  { id: "logo-4", src: "/4.png", alt: "Coder Platform" },
  { id: "logo-5", src: "/5.png", alt: "GBCC Building Company" },
  { id: "logo-6", src: "/6.png", alt: "NoorQuran" },
];

export default function TrustedBy() {
  // Repeat logos 4 times for seamless continuous infinite marquee
  const repeatedLogos = [
    ...clientLogos,
    ...clientLogos,
    ...clientLogos,
    ...clientLogos,
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#FAF9FF] overflow-hidden select-none">
      {/* SECTION HEADING (STRICTLY 2 LINES WITH SIGNATURE PURPLE SPAN) */}
      <div className="max-w-7xl mx-auto px-4 mb-12 sm:mb-16 md:mb-20 text-center">
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

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#626477] font-normal leading-relaxed max-w-2xl mx-auto text-center"
        >
          Powering digital transformation, scalable platforms and high-impact products for market leaders.
        </motion.p>
      </div>

      {/* CONTINUOUS MARQUEE CAROUSEL (LEFT TO RIGHT, NO BORDERS, NO SHADOWS, PAUSE ON HOVER) */}
      <div className="relative w-full overflow-hidden flex items-center py-2">
        {/* Left Fade Gradient Mask */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-[#FAF9FF] via-[#FAF9FF]/90 to-transparent z-10 pointer-events-none" />

        {/* Right Fade Gradient Mask */}
        <div className="absolute right-0 inset-y-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-[#FAF9FF] via-[#FAF9FF]/90 to-transparent z-10 pointer-events-none" />

        {/* Moving Track (Flows Left to Right) */}
        <div className="flex items-center gap-12 sm:gap-16 md:gap-24 w-max animate-marquee-ltr hover:[animation-play-state:paused]">
          {repeatedLogos.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="shrink-0 flex items-center justify-center px-2 py-2"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={280}
                height={140}
                priority={idx < 6}
                className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto max-w-[150px] sm:max-w-[210px] md:max-w-[260px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-200 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS KEYFRAME FOR SMOOTH HARDWARE-ACCELERATED LEFT-TO-RIGHT MARQUEE */}
      <style jsx>{`
        @keyframes marqueeLtr {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }
        .animate-marquee-ltr {
          animation: marqueeLtr 26s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
