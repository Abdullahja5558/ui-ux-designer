"use client";

import React from "react";
import { motion } from "framer-motion";

interface Step {
  step: string;
  title: string;
  statement: string;
  gradient: string;
}

const steps: Step[] = [
  {
    step: "01",
    title: "We Listen",
    statement: "Uncovering core bottlenecks, constraints & business goals before touching architecture.",
    gradient: "from-[#7040F5] via-[#6733EE] to-[#5B25E4]",
  },
  {
    step: "02",
    title: "We Plan",
    statement: "Structuring scalable system topologies, database schemas & high-fidelity interactive UX.",
    gradient: "from-[#6934F0] via-[#5F27E6] to-[#5219DA]",
  },
  {
    step: "03",
    title: "We Build",
    statement: "Clean, modular microservice codebases delivered in strict continuous 2-week production sprints.",
    gradient: "from-[#622BEB] via-[#571FE0] to-[#4A11D3]",
  },
  {
    step: "04",
    title: "We Test",
    statement: "High-concurrency stress drills, zero-trust penetration audits & sub-100ms response hardening.",
    gradient: "from-[#5B22E6] via-[#4E14DB] to-[#4108CE]",
  },
  {
    step: "05",
    title: "We Scale",
    statement: "Continuous APM telemetry, auto-sharding clusters & dedicated SLA-backed enterprise support.",
    gradient: "from-[#5317E0] via-[#470AD5] to-[#3900C4]",
  },
];

export default function HowItWork() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 bg-[#FAF9FF] px-4 sm:px-6 md:px-12 w-full relative"
    >
      {/* Anchor Navigation Target IDs */}
      <div id="how-we-work" className="absolute -top-24 left-0 pointer-events-none" />
      <div id="how-it-work" className="absolute -top-24 left-0 pointer-events-none" />

      {/* SECTION HEADER (2 LINES, NO BADGE, PURPLE BG SPAN) */}
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20 text-center px-2">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111116] leading-[1.25] select-none text-center"
        >
          <span className="block">Engineering Software With</span>
          <span className="block mt-1.5 sm:mt-2.5">
            <span className="inline-block bg-[#7040F5] text-white px-4 sm:px-6 md:px-7 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl shadow-lg shadow-[#7040F5]/25">
              Clinical Precision
            </span>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#626477] font-normal max-w-2xl mx-auto leading-relaxed text-center"
        >
          From raw intake to resilient production infrastructure. A disciplined five-stage delivery lifecycle.
        </motion.p>
      </div>

      {/* STACKING PURPLE BANNERS CONTAINER */}
      <div className="max-w-7xl mx-auto relative flex flex-col gap-10 sm:gap-14 pb-20">
        {steps.map((item, index) => (
          <div
            key={item.step}
            style={{
              top: `calc(85px + ${index * 20}px)`,
              zIndex: index + 1,
            }}
            className={`sticky w-full rounded-[32px] sm:rounded-[44px] md:rounded-[52px] bg-gradient-to-br ${item.gradient} text-white p-8 sm:p-14 md:p-20 lg:p-24 overflow-hidden shadow-[0_12px_40px_-10px_rgba(112,64,245,0.22),0_4px_16px_rgba(17,17,22,0.04)] border border-white/25 flex flex-col items-center justify-center text-center min-h-[44vh] sm:min-h-[52vh] md:min-h-[58vh] transition-transform duration-300`}
          >
            {/* Ambient Radial Highlights (Pure & Clean) */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            {/* Massive Bold Center Headline */}
            <div className="relative z-10">
              <h3 className="font-['Bricolage_Grotesque',sans-serif] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-white select-none text-center">
                {item.title}
              </h3>
            </div>

            {/* Clean Statement */}
            <p className="relative z-10 mt-5 sm:mt-7 text-sm sm:text-base md:text-lg text-white/90 font-normal max-w-2xl text-center leading-relaxed">
              {item.statement}
            </p>

            {/* Bottom Step Indicator */}
            <div className="relative z-10 mt-8 pt-4 border-t border-white/15 flex items-center justify-between w-full max-w-md text-xs font-mono text-white/75">
              <span>PROTOCOL STAGE</span>
              <span className="font-bold text-white tracking-widest">
                {item.step} / 05
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
