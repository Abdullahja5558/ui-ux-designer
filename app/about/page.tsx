"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowLeft, Zap, Target, Globe, Fingerprint, Star } from "lucide-react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth vertical parallax for background letters
  const yMove = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const springY = useSpring(yMove, { stiffness: 60, damping: 20 });

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[160vh] bg-[#fafafa] py-40 px-6 md:px-20 overflow-hidden"
    >
      {/* --- PREMIUM BACK BUTTON (Active Working) --- */}
      <motion.button 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ x: -5, scale: 1.02 }}
        onClick={() => window.history.back()}
        className="fixed top-32 left-8 z-[100] flex items-center gap-4 bg-white border border-black/10 px-6 py-3 rounded-full shadow-xl group cursor-pointer"
      >
        <ArrowLeft size={18} className="text-black group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black">Back to Home</span>
      </motion.button>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. KINETIC TYPOGRAPHY (The "SAMIA" Backdrop) */}
        <div className="absolute top-0 left-0 w-full flex justify-around pointer-events-none select-none opacity-[0.03] text-black">
          {["S", "A", "M", "I", "A"].map((letter, i) => (
            <motion.h1 
              key={i}
              style={{ y: springY }} 
              className="text-[30vw] font-black leading-none tracking-tighter"
            >
              {letter}
            </motion.h1>
          ))}
        </div>

        {/* 2. MAIN LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          {/* LEFT COLUMN: THE VISUAL IDENTITY */}
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <div className="relative group">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[3.5rem] overflow-hidden aspect-[4/5] bg-zinc-200 border-[12px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1524504527035-189800923d47?auto=format&fit=crop&q=80&w=800" 
                  alt="Samia - Product Designer" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>

              {/* Floating Status Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="absolute -bottom-8 -right-8 bg-black text-white p-8 rounded-[2rem] shadow-2xl flex flex-col gap-2"
              >
                <Star size={20} className="text-yellow-400 fill-yellow-400 animate-pulse" />
                <p className="text-[9px] font-black uppercase tracking-widest leading-none">Status: Available</p>
                <p className="text-[12px] font-bold">New York, 10:24 AM</p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE NARRATIVE */}
          <div className="lg:col-span-7 space-y-24 pt-10">
            
            {/* Intro Text */}
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                 <Fingerprint className="text-black" size={30} strokeWidth={1.5} />
                 <span className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-400">Digital Identity 02</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-black">
                DESIGNING <br /> <span className="text-zinc-300 italic">MEANINGFUL</span> <br /> MOMENTS.
              </h2>
              <p className="text-2xl text-zinc-600 font-medium leading-relaxed max-w-2xl">
                I am <span className="text-black font-black">Samia</span>, a specialized UI/UX Designer who focuses on the intersection of human psychology and digital fluidity. I turn chaotic ideas into seamless, high-converting products.
              </p>
            </div>

            {/* Core Pillars (Modern Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <FeatureCard 
                  icon={<Target size={22} />} 
                  title="Product Strategy" 
                  desc="Aligning business goals with user needs for maximum impact." 
               />
               <FeatureCard 
                  icon={<Zap size={22} />} 
                  title="High-Fi Motion" 
                  desc="Bringing interfaces to life with smooth, purposeful animations." 
               />
               <FeatureCard 
                  icon={<Globe size={22} />} 
                  title="Universal UX" 
                  desc="Creating accessible designs that work for everyone, everywhere." 
               />
               <div className="p-10 border border-black/5 rounded-[2.5rem] bg-black text-white flex flex-col justify-center gap-2">
                  <h4 className="text-4xl font-black italic tracking-tighter">140+</h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Global Projects Completed</p>
               </div>
            </div>

            {/* Final Quote/Mission */}
            <div className="pt-10">
               <div className="h-[1px] w-full bg-zinc-200 mb-10" />
               <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest leading-loose">
                  * Based in Pakistan / Working Globally * Member of Design Leaders Guild * Obsessed with Minimalism *
               </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: FEATURE CARD ---
const FeatureCard = ({ icon, title, desc }: any) => (
  <motion.div 
    whileHover={{ y: -10, backgroundColor: "#ffffff" }}
    className="p-10 border border-black/[0.04] rounded-[2.5rem] space-y-5 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] group"
  >
    <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-500">
       {icon}
    </div>
    <div className="space-y-2">
       <h5 className="text-sm font-black uppercase tracking-widest text-black">{title}</h5>
       <p className="text-[12px] text-zinc-500 font-medium leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default About;