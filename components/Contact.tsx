"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-14 sm:py-20 md:py-24 bg-[#FAF9FF] px-4 sm:px-6 md:px-12 w-full flex justify-center">
      <div className="max-w-7xl w-full">

        {/* ENTERPRISE CTA CARD */}
        <Link href="/contact" className="group block w-full outline-none">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full rounded-[36px] sm:rounded-[48px] md:rounded-[56px] bg-[#7040F5] text-white p-8 sm:p-14 md:p-20 lg:p-24 overflow-hidden shadow-[0_24px_70px_rgba(112,64,245,0.35)] hover:shadow-[0_32px_90px_rgba(112,64,245,0.48)] transition-all duration-500 flex flex-col items-center justify-center text-center cursor-pointer border border-[#855BFA]"
          >
            {/* Subtle Ambient Radial Lights */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/15 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#EDE9FF]/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            {/* Top Pill Badge: AVAILABLE FOR NEW PROJECTS */}
            <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white shadow-sm mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
              <span>AVAILABLE FOR NEW PROJECTS</span>
            </div>

            {/* Headline: "Let's talk" with cursive script font for 'talk' + Arrow Button */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
              <h2 className="font-['Bricolage_Grotesque',sans-serif] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-white select-none text-center">
                Let's{" "}
                <span className="font-script text-white font-normal lowercase tracking-normal -ml-1 sm:-ml-2 text-[1.18em] relative inline-block drop-shadow-sm">
                  talk
                </span>
              </h2>

              {/* Floating Arrow Icon Button */}
              <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 rounded-full bg-white text-[#7040F5] flex items-center justify-center shadow-2xl shrink-0 group-hover:scale-110 group-hover:rotate-45 group-hover:bg-[#FAF9FF] transition-all duration-300">
                <ArrowUpRight size={32} className="sm:w-10 sm:h-10 text-[#7040F5]" strokeWidth={2.5} />
              </div>
            </div>

            {/* Subtitle / Paragraph */}
            <p className="relative z-10 max-w-2xl text-center text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed mb-8 sm:mb-10">
              Have an idea or need an architecture review? Connect directly with our senior engineers and turn your vision into high-throughput reality.
            </p>

            {/* 3 Pills: Email, Response Time, NDA */}
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs text-white font-medium hover:bg-white/15 transition-colors">
                <Mail size={14} className="text-white/80 shrink-0" />
                <span>contact@ascodex.com</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs text-white font-medium">
                <Clock size={14} className="text-white/80 shrink-0" />
                <span>Typical response: &lt; 2 hrs</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs text-white font-medium">
                <ShieldCheck size={14} className="text-white/80 shrink-0" />
                <span>100% NDA Protected</span>
              </div>
            </div>

          </motion.div>
        </Link>

      </div>
    </section>
  );
};

export default Contact;
