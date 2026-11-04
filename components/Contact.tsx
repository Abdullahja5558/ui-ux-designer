"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-14 sm:py-20 md:py-24 bg-[#FAF9FF] px-4 sm:px-6 md:px-12 w-full flex justify-center">
      <div className="max-w-7xl w-full">

        {/* CLEAN, ICONIC & HUMAN-CRAFTED ENTERPRISE CTA */}
        <Link href="/contact" className="group block w-full outline-none">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full rounded-[36px] sm:rounded-[48px] md:rounded-[56px] bg-[#7040F5] text-white p-10 sm:p-16 md:p-20 lg:p-24 overflow-hidden shadow-[0_24px_70px_rgba(112,64,245,0.35)] hover:shadow-[0_32px_90px_rgba(112,64,245,0.48)] transition-all duration-500 flex flex-col items-center justify-center text-center cursor-pointer border border-[#855BFA]"
          >
            {/* Subtle Ambient Radial Lights */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/12 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#EDE9FF]/15 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            {/* Massive Iconic Headline: "Let's Talk" Unified Bold Font */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
              <h2 className="font-['Bricolage_Grotesque',sans-serif] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-white select-none text-center">
                Let's Talk
              </h2>

              {/* Floating Arrow Icon Button */}
              <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 rounded-full bg-white text-[#7040F5] flex items-center justify-center shadow-2xl shrink-0 group-hover:scale-110 group-hover:rotate-45 group-hover:bg-[#FAF9FF] transition-all duration-300">
                <ArrowUpRight size={32} className="sm:w-10 sm:h-10 text-[#7040F5]" strokeWidth={2.5} />
              </div>
            </div>
          </motion.div>
        </Link>

      </div>
    </section>
  );
};

export default Contact;
