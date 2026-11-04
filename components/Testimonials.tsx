"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Alex Rivera",
    role: "Chief Technology Officer",
    company: "TechVortex Capital",
    image: "/testimonials/alex.jpg",
    text: "AS CODEX re-architected our core transaction pipeline from the ground up. Their engineering precision, microservices expertise, and delivery speed were world-class.",
    theme: "purple",
  },
  {
    name: "Marcus Chen",
    role: "VP of Engineering",
    company: "NeoScale Cloud",
    image: "/testimonials/marcus.jpg",
    text: "The architectural clarity and scalable Next.js systems delivered by AS CODEX allowed us to handle a 10x traffic surge without a single millisecond of downtime.",
    theme: "white",
  },
  {
    name: "Sarah Jenkins",
    role: "Product Director",
    company: "Flow Intelligence",
    image: "/testimonials/sarah.jpg",
    text: "A rare partner that bridges the gap between deep infrastructure engineering and pixel-perfect digital experiences. Outstanding execution across all milestones.",
    theme: "purple",
  },
  {
    name: "Elena Gomez",
    role: "Head of Digital Operations",
    company: "Nexus Enterprises",
    image: "/testimonials/elena.jpg",
    text: "Their automated AI pipeline cut our data processing cycles by 70%. Professional, communicative, and truly top-tier enterprise problem solvers.",
    theme: "white",
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking only across this sticky container track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Butter-smooth physics spring for fluid card movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    mass: 0.15,
  });

  return (
    <section ref={containerRef} id="testimonials" className="relative bg-[#FAF9FF] h-[240vh] sm:h-[260vh]">
      
      {/* STICKY FULL-VIEWPORT STAGE */}
      <div className="sticky top-0 min-h-screen h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6 overflow-hidden">
        
        {/* 1. SECTION HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 shrink-0">
          <h2 className="font-['Bricolage_Grotesque',sans-serif] text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-[#111116] leading-[1.2]">
            <span className="block">Trusted by Industry &</span>
            <span className="block mt-1 sm:mt-1.5">
              <span className="inline-block bg-[#7040F5] text-white px-4 sm:px-6 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl shadow-lg shadow-[#7040F5]/25">
                Client Voices
              </span>
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#626477] font-normal leading-relaxed max-w-lg mx-auto">
            Scroll to explore verified feedback from enterprise engineering leaders and founders.
          </p>
        </div>

        {/* 2. BIG SOLID CARDS DECK (WIDER, TALLER, ZERO CUTTING OFF, 100% OPAQUE) */}
        <div className="relative w-full max-w-4xl h-[420px] sm:h-[470px] md:h-[510px] flex items-center justify-center">
          {reviews.map((review, index) => {
            const isLast = index === reviews.length - 1;
            const isPurple = review.theme === "purple";

            // Timing range per card
            const start = 0.06 + index * 0.28;
            const end = start + 0.28;

            // Physical card exit: Slides up cleanly while staying 100% solid opaque
            const y = useTransform(smoothProgress, [start, end], [0, -620]);
            
            // 100% SOLID OPAQUE: Never translucent while visible on screen
            const opacity = useTransform(smoothProgress, [start, end - 0.02, end], [1, 1, 0]);

            const rotate = useTransform(
              smoothProgress,
              [start, end],
              [0, index % 2 === 0 ? -4 : 4]
            );

            // Stacking scale for card beneath
            const scale = useTransform(
              smoothProgress,
              [Math.max(0, start - 0.28), start],
              [0.95, 1]
            );

            return (
              <motion.div
                key={review.name}
                style={{
                  y: isLast ? 0 : y,
                  opacity: isLast ? 1 : opacity,
                  rotate: isLast ? 0 : rotate,
                  scale: index === 0 ? 1 : scale,
                  zIndex: reviews.length - index,
                }}
                className={`absolute inset-0 p-6 sm:p-9 md:p-11 flex flex-col justify-between rounded-[32px] sm:rounded-[40px] border shadow-2xl overflow-hidden ${
                  isPurple
                    ? "bg-[#7040F5] text-white border-[#5b2fe0] shadow-[0_24px_60px_rgba(112,64,245,0.35)]"
                    : "bg-[#FFFFFF] text-[#111116] border-2 border-[#EDE9FF] shadow-[0_20px_50px_rgba(112,64,245,0.12)]"
                }`}
              >
                {/* Background Watermark Quote */}
                <Quote
                  size={190}
                  className={`absolute -top-6 -right-6 pointer-events-none select-none ${
                    isPurple ? "opacity-10 text-white" : "opacity-5 text-[#7040F5]"
                  }`}
                />

                {/* Card Top: 5 Stars & Main Quote */}
                <div className="relative z-10 flex flex-col gap-3.5 sm:gap-4">
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill="#FFD700"
                        className="text-[#FFD700]"
                      />
                    ))}
                  </div>

                  <h3
                    className={`text-base sm:text-xl md:text-2xl lg:text-[1.65rem] font-bold tracking-tight leading-snug sm:leading-relaxed ${
                      isPurple ? "text-white" : "text-[#111116]"
                    }`}
                  >
                    "{review.text}"
                  </h3>
                </div>

                {/* Card Bottom: Author Info, Headshot & Verified Badge */}
                <div
                  className={`relative z-10 flex items-center justify-between pt-4 sm:pt-5 border-t shrink-0 ${
                    isPurple ? "border-white/20" : "border-[#EDE9FF]"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    {/* Real Client Headshot Image */}
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border-2 shadow-md">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 48px, 56px"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4
                          className={`text-base sm:text-lg md:text-xl font-bold tracking-tight truncate ${
                            isPurple ? "text-white" : "text-[#111116]"
                          }`}
                        >
                          {review.name}
                        </h4>
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            isPurple
                              ? "bg-white/20 text-white"
                              : "bg-[#EDE9FF] text-[#7040F5]"
                          }`}
                        >
                          <CheckCircle2 size={11} />
                          <span className="hidden sm:inline">Verified Client</span>
                        </span>
                      </div>
                      <p
                        className={`text-xs sm:text-sm font-medium mt-0.5 flex flex-wrap items-center gap-1.5 ${
                          isPurple ? "text-white/85" : "text-[#626477]"
                        }`}
                      >
                        <span>{review.role}</span>
                        <span>•</span>
                        <span
                          className={`font-semibold ${
                            isPurple ? "text-white" : "text-[#7040F5]"
                          }`}
                        >
                          {review.company}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div
                    className={`text-2xl sm:text-4xl font-black font-mono select-none shrink-0 ml-3 ${
                      isPurple ? "text-white/35" : "text-[#111116]/20"
                    }`}
                  >
                    0{index + 1}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3. SCROLL HINT */}
        <div className="mt-4 sm:mt-5 shrink-0 flex items-center gap-2 text-xs font-semibold text-[#626477]">
          <span className="w-2 h-2 rounded-full bg-[#7040F5] animate-pulse" />
          <span>Keep scrolling to flip through client case studies</span>
        </div>

      </div>

    </section>
  );
};

export default Testimonials;
