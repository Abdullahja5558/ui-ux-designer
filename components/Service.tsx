"use client";

import React from "react";
import { motion } from "framer-motion";
import { MoveRight, Smartphone, Globe, Palette, Zap } from "lucide-react";

const Services = () => {
  return (
    <section className="py-24 px-6 bg-[#FAFAFA] w-full flex justify-center border-t border-black/5">
      <div className="max-w-7xl w-full">
        
        {/* Section Heading */}
        <div className="mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[11px] font-black uppercase tracking-[0.5em] text-black"
          >
            Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-[#111111] max-w-3xl leading-[1.1]"
          >
            Solving complex problems through <span className="text-black/40 underline decoration-1 underline-offset-8">elegant design logic.</span>
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full md:h-[650px]">
          
          {/* Card 1 - UI Design (White) */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.1)" }}
            className="md:col-span-2 relative overflow-hidden bg-[#fbfbfb] border border-black/10 rounded-[40px] p-12 flex flex-col justify-between group transition-all duration-500"
          >
            <div className="z-10">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
                <Palette size={28} />
              </div>
              <h3 className="text-4xl font-black text-[#111111] mb-6">Visual Identity & UI</h3>
              <p className="text-[#444444] text-lg max-w-[400px] font-medium leading-relaxed">
                Creating unique design systems that scale and maintain brand consistency across all platforms.
              </p>
            </div>
            
            {/* Visual Decoration */}
            <div className="absolute right-10 bottom-10 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
               <div className="flex -space-x-4">
                  <div className="w-20 h-20 bg-black rounded-full border-4 border-white shadow-xl" />
                  <div className="w-20 h-20 bg-[#dddddd] rounded-full border-4 border-white shadow-xl" />
               </div>
            </div>
          </motion.div>

          {/* Card 2 - UX Strategy (Dark) */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-[#000000] text-white rounded-[40px] p-12 flex flex-col justify-between overflow-hidden relative shadow-2xl transition-all duration-500"
          >
            <div className="z-10">
              <div className="mb-8 w-12 h-12 flex items-center justify-center bg-white/10 rounded-full">
                <Zap className="text-yellow-400" size={28} fill="currentColor" />
              </div>
              <h3 className="text-3xl font-bold mb-6">UX Strategy</h3>
              <p className="text-white/80 text-base font-medium leading-relaxed">
                User-first approach to solve pain points and increase conversion through data.
              </p>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer pt-6 border-t border-white/10 w-fit">
               <span className="text-xs font-bold tracking-widest uppercase">Methodology</span>
               <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.div>

          {/* Card 3 - Mobile Design (Light Gray) */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-[#f3f3f3] border border-black/5 rounded-[40px] p-12 flex flex-col justify-between transition-all duration-500"
          >
            <Smartphone size={36} className="text-black mb-8" />
            <div>
              <h3 className="text-2xl font-black text-[#111111] mb-4">Mobile Apps</h3>
              <p className="text-[#555555] text-sm font-bold tracking-wide leading-relaxed">
                iOS & Android native experiences that feel buttery smooth.
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Web & Interaction (White) */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-2 bg-white border border-black/10 rounded-[40px] p-12 flex flex-col md:flex-row items-center justify-between shadow-sm transition-all duration-500"
          >
            <div className="space-y-6">
              <Globe size={40} className="text-black" />
              <h3 className="text-3xl font-black text-[#111111]">Interactive Systems</h3>
              <p className="text-[#444444] max-w-[350px] text-base font-medium leading-relaxed">
                High-fidelity motion designs that feel real before they are even built.
              </p>
            </div>
            
            {/* Live Indicator Badge */}
            <div className="mt-8 md:mt-0 px-8 py-4 bg-black text-white rounded-2xl flex items-center gap-4 shadow-xl">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Framer Ready</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;