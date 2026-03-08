"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";

const experiences = [
  {
    year: "2024",
    role: "SR. PRODUCT DESIGNER",
    company: "TECH-VORTEX",
    location: "REMOTE • LONDON",
    details: "Led the design system for a fintech unicorn, increasing user retention by 25%."
  },
  {
    year: "2022",
    role: "UI/UX SPECIALIST",
    company: "DIGITAL PULSE",
    location: "DUBAI • UAE",
    details: "Crafted immersive mobile experiences for 15+ high-growth startups globally."
  },
  {
    year: "2020",
    role: "VISUAL DESIGNER",
    company: "CREATIVE HUB",
    location: "FAISALABAD • PK",
    details: "Started the journey by defining brand identities for emerging retail brands."
  }
];

const Experience = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Section moves horizontally
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-white border-t-4 border-black"
    id="experience">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Giant Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
          <h2 className="text-[45vw] font-black text-black uppercase">PATH</h2>
        </div>

        <motion.div style={{ x }} className="flex items-center">
          
          {/* 1. Header Section - Added more width for space */}
          <div className="min-w-[50vw] md:min-w-[45vw] px-10 md:px-24 flex flex-col justify-center gap-10">
            <div className="space-y-4">
              <span className="text-[12px] font-black uppercase tracking-[0.8em] text-black">Timeline</span>
              <h2 className="text-8xl md:text-[11vw] font-black tracking-tighter text-black leading-[0.85]">
                WORK <br /> <span className="italic font-outline text-black opacity-10 uppercase">History</span>
              </h2>
            </div>
            
            <div className="flex items-center gap-8 mt-12 border-t-2 border-black/5 pt-10">
                <p className="text-black font-black text-sm uppercase tracking-widest">Scroll to Navigate</p>
                <motion.div 
                    animate={{ x: [0, 30, 0] }} 
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                >
                    <MoveRight size={48} strokeWidth={1.5} />
                </motion.div>
            </div>
          </div>

          {/* --- BIG SPACE BETWEEN HEADING AND CARDS --- */}
          <div className="min-w-[15vw] md:min-w-[20vw]" /> 

          {/* 2. Experience Cards Loop */}
          <div className="flex gap-32 md:gap-48 pr-[20vw]">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -30, scale: 1.02 }}
                className="relative min-w-[380px] md:min-w-[550px] h-[650px] bg-black rounded-[80px] p-16 flex flex-col justify-between group cursor-pointer shadow-[0_60px_120px_-20px_rgba(0,0,0,0.4)] border-[10px] border-black overflow-hidden"
              >
                {/* Year Watermark */}
                <span className="absolute -top-10 -right-5 text-[18vw] font-black text-white/5 select-none transition-all group-hover:text-white/10 group-hover:rotate-12 group-hover:scale-110 duration-700">
                  {exp.year}
                </span>

                <div className="z-10 flex flex-col gap-6">
                  <div className="flex items-center gap-4 text-white/40 font-black text-[11px] tracking-[0.4em] uppercase">
                     <div className="w-12 h-[2px] bg-white/40" />
                     <span>{exp.location}</span>
                  </div>
                  <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none group-hover:italic transition-all duration-500">
                      {exp.role}
                  </h3>
                  <p className="text-white text-2xl font-bold italic tracking-tight opacity-50">
                      @ {exp.company}
                  </p>
                </div>

                <div className="z-10">
                  <p className="text-white/70 font-medium text-xl leading-[1.6] mb-12 max-w-[380px]">
                      {exp.details}
                  </p>
                  <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                      <ArrowRight size={36} />
                  </div>
                </div>

                {/* Vertical Sidebar Text Inside Card */}
                <div className="absolute bottom-16 right-12">
                    <span className="text-[10px] font-black text-white/10 uppercase tracking-[0.6em] vertical-text">
                        Archive No. 0{index + 1}
                    </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* 3. Closing Chapter Space */}
          <div className="min-w-[50vw] px-24">
            <h2 className="text-[9vw] font-black text-black tracking-tighter leading-none uppercase">
                
This is just<br /> the beginning
            </h2>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Experience;