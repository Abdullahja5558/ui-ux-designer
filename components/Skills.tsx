"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Figma", "Framer", "UI/UX", "Product Design", "Prototyping", 
  "User Research", "Visual Identity", "Webflow", "Design Systems", 
  "Interaction Design", "Motion Graphics", "Adobe CC"
];

const Skills = () => {
  return (
    <section className="relative py-40 bg-white overflow-hidden flex flex-col items-center">
      
      {/* 1. SECTION HEADER - BOLD & CENTERED */}
      <div className="max-w-7xl w-full px-6 mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-block px-6 py-2 border-2 border-black rounded-full mb-8"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black">
            Expertise & Stack
          </span>
        </motion.div>
        <h2 className="text-7xl md:text-[9vw] font-black tracking-tighter text-black leading-none uppercase">
          Digital <br /> <span className="text-black/10 font-outline italic">Mastery</span>
        </h2>
      </div>

      {/* 2. THE INFINITE RUNNING STREAM (Top Row) */}
      <div className="flex flex-col gap-10 w-full relative">
        <div className="flex overflow-hidden border-y-4 border-black py-10 bg-black group">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-20 items-center"
          >
            {[...skills, ...skills].map((skill, index) => (
              <h3 
                key={index} 
                className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter hover:text-yellow-400 transition-colors cursor-crosshair group-hover:pause"
              >
                {skill} •
              </h3>
            ))}
          </motion.div>
        </div>

        {/* 3. REVERSE STREAM (Bottom Row) */}
        <div className="flex overflow-hidden border-b-4 border-black py-10 group">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-20 items-center"
          >
            {[...skills.reverse(), ...skills].map((skill, index) => (
              <h3 
                key={index} 
                className="text-black text-6xl md:text-8xl font-black uppercase tracking-tighter hover:italic transition-all cursor-crosshair"
              >
                {skill} —
              </h3>
            ))}
          </motion.div>
        </div>

        {/* 4. THE UNIQUE "GLASS OVERLAY" (Shifted Down & Responsive) */}
       
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 hidden lg:block">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="w-[350px] h-[350px] rounded-full border-[1px] border-black/20 backdrop-blur-[4px] flex items-center justify-center bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
          >
              <div className="w-[260px] h-[260px] rounded-full border-[10px] border-black flex items-center justify-center bg-white shadow-2xl relative overflow-hidden">
                 
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  <span className="text-black font-black text-center text-[10px] tracking-[0.3em] uppercase px-10 relative z-10">
                      Precision in every <br /> single pixel
                  </span>
              </div>
          </motion.div>
        </div>
      </div>

            {/* Extra Text - High Readability */}

      <div className="mt-32 max-w-4xl px-6 text-center">

        <p className="text-2xl md:text-4xl font-bold text-black leading-tight tracking-tighter">

          " I don't just design screens; I architect <span className="bg-black text-white"> experiences</span> that drive measurable business impact."

        </p>

      </div>

      <style jsx>{`
        .font-outline {
          -webkit-text-stroke: 2px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
};

export default Skills;