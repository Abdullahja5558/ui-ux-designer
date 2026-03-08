"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Plus, Star, Sparkles } from "lucide-react";

const reviews = [
  { name: "ALEX RIVERA", role: "CEO • TECH-VORTEX", text: "SAMIA DOESN'T JUST DESIGN SCREENS; SHE DESIGNS EMOTIONS.", theme: "dark" },
  { name: "SARAH JENKINS", role: "PRODUCT LEAD • FLOW", text: "THE BEST UI/UX DESIGNER WE HAVE WORKED WITH. REALISTIC PROTOTYPES.", theme: "light" },
  { name: "MARCUS CHEN", role: "FOUNDER • NEO-SaaS", text: "A MASTER OF MINIMALISM. BEAUTIFUL EXPERIENCE.", theme: "dark" },
  { name: "ELENA GOMEZ", role: "DESIGN DIRECTOR • PIXEL", text: "HER ABILITY TO BLEND AESTHETICS WITH USABILITY IS UNIQUE.", theme: "light" },
  { name: "JONATHAN IVE", role: "CREATIVE HEAD • STUDIO X", text: "SHE UNDERSTANDS THE USER PSYCHOLOGY BETTER THAN ANYONE.", theme: "dark" },
  { name: "YUKI TANAKA", role: "CTO • ZENITH ARCH", text: "SAMIA’S WORK IS THE PERFECT BALANCE OF FORM AND FUNCTION.", theme: "dark" },
 { name: "OLIVER BENNETT", role: "VP OF GROWTH • NEXUS", text: "SHE DOESN'T JUST SOLVE PROBLEMS; SHE ANTICIPATES THEM.", theme: "light" },
 { name: "AMARA OKORO", role: "HEAD OF DESIGN • VELOCITY", text: "PIXEL-PERFECT EXECUTION WITH A GLOBAL PERSPECTIVE.", theme: "dark" },
];

const Testimonials = () => {
  const containerRef = useRef(null);
  
  // Is range ko barhane se animation mazeed late shuru hogi
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-white">
      
      {/* 1. STATIC HEADER - User pehle isay dekhega */}
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white z-10">
        <div className="text-center space-y-6 px-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles size={18} className="text-black" />
            <span className="text-[11px] font-black uppercase tracking-[0.8em] text-black">Client Feedback</span>
          </div>
          <h2 className="text-7xl md:text-[10vw] font-black tracking-tighter text-black leading-[0.8] uppercase">
            VOICES <br /> <span className="text-black/5 font-outline">THAT MATTER</span>
          </h2>
          
        </div>
      </div>

      {/* 2. THE STACK ENGINE - Animation starts after 0.2 scroll */}
      <div className="relative h-[600vh]"> 
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-5xl h-[550px] flex items-center justify-center px-6">
            {reviews.map((review, index) => {
              
              // LOGIC: Pehle 20% scroll (0.2) tak cards hilen ge nahi.
              // Uske baad har card apni baari par move karega.
              const animationStart = 0.2; 
              const step = (1 - animationStart) / reviews.length;
              const start = animationStart + (index * step);
              const end = start + step;

              // Transformations only trigger after the 'start' point
              const y = useTransform(scrollYProgress, [start, end], [0, -1200]);
              const rotate = useTransform(scrollYProgress, [start, end], [0, index % 2 === 0 ? -25 : 25]);
              const scale = useTransform(scrollYProgress, [start, end], [1 - (reviews.length - index) * 0.05, 1]);

              return (
                <motion.div
                  key={index}
                  style={{ 
                    y: index === reviews.length - 1 ? 0 : y, 
                    rotate: index === reviews.length - 1 ? 0 : rotate,
                    scale,
                    zIndex: reviews.length - index 
                  }}
                  className={`absolute w-full h-full p-12 md:p-24 flex flex-col justify-between rounded-[80px] border-[10px] border-black transition-all duration-300
                    ${review.theme === 'dark' 
                      ? 'bg-black text-white shadow-[0_60px_120px_rgba(0,0,0,0.5)]' 
                      : 'bg-white text-black shadow-[0_60px_120px_rgba(0,0,0,0.1)]'
                    }`}
                >
                  <Quote size={200} className="absolute -top-10 -right-10 opacity-10 pointer-events-none" />
                  
                  <div className="z-10 flex flex-col gap-10">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" stroke="none" />)}
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] uppercase italic">
                      "{review.text}"
                    </h3>
                  </div>

                  <div className="z-10 flex justify-between items-end border-t-2 border-current/20 pt-12">
                    <div className="space-y-2">
                      <h4 className="text-3xl font-black tracking-tight leading-none uppercase">{review.name}</h4>
                      <p className="text-[12px] font-bold uppercase tracking-[0.5em] opacity-40">{review.role}</p>
                    </div>
                    <div className="hidden md:block text-right">
                       <span className="text-6xl font-black opacity-10">0{index + 1}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

     

    </section>
  );
};

export default Testimonials;