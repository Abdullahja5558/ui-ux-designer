"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const Hero = () => {
  return (
    <section className="relative w-full min-h-[100dvh] sm:min-h-screen max-h-[1050px] px-4 sm:px-6 flex flex-col items-center justify-start pt-28 sm:pt-20 md:pt-24 overflow-hidden bg-[#FAF9FF]">

      {/* --- 1A. MOBILE DEDICATED PORTRAIT HERO BACKGROUND --- */}
      <div className="block sm:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/hero-bg-mobile.jpg"
          alt="AS CODEX Digital Platform Mobile"
          fill
          priority
          className="w-full h-full object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* --- 1B. DESKTOP LANDSCAPE HERO BACKGROUND (100% ORIGINAL QUALITY) --- */}
      <div className="hidden sm:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/hero-bg-1.png"
          alt="AS CODEX Digital Platform"
          fill
          priority
          className="w-full h-full object-cover object-bottom"
          sizes="100vw"
        />
      </div>

      {/* --- 2. MAIN HERO CONTENT (SHIFTED UP, NO BADGE, PURPLE BG SPAN) --- */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">

        {/* Luxury Serif Heading (Strictly 2 Lines, Powerful Solutions with Purple Background) */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-['Bricolage_Grotesque',sans-serif] text-[1.65rem] sm:text-4xl md:text-5xl lg:text-[3.8rem] font-bold tracking-tight text-[#111116] leading-[1.2] select-none text-center"
        >
          <span className="block">Turn Your Ideas</span>
          <span className="block mt-1 sm:mt-2">
            Into{" "}
            <span className="inline-block bg-[#7040F5] text-white px-3 sm:px-5 md:px-6 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl shadow-lg shadow-[#7040F5]/25">
              Powerful Solutions
            </span>
          </span>
          <span className="sr-only"> — Premier Custom Software Engineering, Cloud Architecture & UI/UX Design Agency</span>
        </motion.h1>

        {/* Subtitle (Crisp & Compact) */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-3 sm:mt-4 max-w-lg text-xs sm:text-sm md:text-base text-[#626477] font-medium leading-relaxed px-2"
        >
          We craft modern web applications, scalable platforms and digital experiences that help you grow.
        </motion.p>

        {/* Action Buttons (Elevated & Refined) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4"
        >
          {/* Primary CTA */}
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#111116] text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#7040F5] transition-all duration-300 shadow-[0_4px_16px_rgba(17,17,22,0.15)] active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 px-4.5 sm:px-5 py-2.5 rounded-full text-[#111116] hover:text-[#7040F5] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 bg-white/70 backdrop-blur-md border border-[#EDE9FF] hover:bg-[#EDE9FF]/70 active:scale-95 shadow-xs"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#EDE9FF] flex items-center justify-center text-[#7040F5] transition-transform duration-200 group-hover:scale-110">
              <Play size={9} fill="#7040F5" className="ml-0.5" />
            </div>
            <span>Watch Our Work</span>
          </Link>
        </motion.div>

      </div>

      {/* --- 3. SOFT BOTTOM SHADOW / AMBIENT DISSOLVE (NO HARSH CUT) --- */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#FAF9FF] via-[#FAF9FF]/70 to-transparent pointer-events-none z-10" />

    </section>
  );
};

export default Hero;
