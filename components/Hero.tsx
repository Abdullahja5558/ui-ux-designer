"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, Fingerprint } from "lucide-react";
import Lenis from "lenis";
import { useRouter } from "next/navigation";

const Hero = () => {
  const containerRef = useRef(null);
  const router = useRouter();

  // 1. Lenis Smooth Scroll Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Scroll tracking logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  // Ribbon Animations
  const xTopRibbon = useTransform(smoothProgress, [0, 0.5, 1], ["80%", "0%", "-80%"]);
  const yTopRibbon = useTransform(smoothProgress, [0, 0.5, 1], ["-60%", "0%", "60%"]);

  const xBottomRibbon = useTransform(smoothProgress, [0, 0.5, 1], ["-80%", "0%", "80%"]);
  const yBottomRibbon = useTransform(smoothProgress, [0, 0.5, 1], ["60%", "0%", "-60%"]);

  const crossOpacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const crossScale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.1, 0.9]);

  // Click handler function
  const handleExploreClick = () => {
    const workSection = document.getElementById("work-section");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#work"); 
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[150vh] w-full flex flex-col items-center justify-start overflow-hidden bg-[#fafafa] pt-[20vh]"
    >
      {/* --- CROSSING RIBBONS LAYER --- */}
      <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden">
        
        {/* Top-Right to Bottom-Left Ribbon */}
        <motion.div
          style={{
            x: xTopRibbon,
            y: yTopRibbon,
            opacity: crossOpacity,
            scale: crossScale,
            rotate: "-12deg",
          }}
          className="absolute w-[250%] bg-black py-10 md:py-14 shadow-2xl flex items-center whitespace-nowrap"
        >
          {Array(10).fill("UI/UX DESIGNER").map((text, i) => (
            <span key={i} className="text-[6vw] font-black uppercase text-yellow-400 mx-10 flex items-center">
              {text} <span className="ml-10 opacity-20 text-white">•</span>
            </span>
          ))}
        </motion.div>

        {/* Bottom-Left to Top-Right Ribbon */}
        <motion.div
          style={{
            x: xBottomRibbon,
            y: yBottomRibbon,
            opacity: crossOpacity,
            scale: crossScale,
            rotate: "12deg",
          }}
          className="absolute w-[250%] bg-white border-y border-black/10 py-10 md:py-14 shadow-2xl flex items-center whitespace-nowrap"
        >
          {Array(10).fill("SAMIA INTERFACES").map((text, i) => (
            <span key={i} className="text-[6vw] font-black uppercase text-black mx-10 flex items-center">
              {text} <span className="ml-10 opacity-20">•</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-20 text-center px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/20 shadow-sm mb-6"
        >
          <Sparkles size={14} className="text-yellow-500" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/50">
            Designing the Future
          </span>
        </motion.div>

        <motion.h1 className="text-[13vw] md:text-[9vw] font-black tracking-tighter leading-[0.85] text-black mb-12 select-none">
          SAMIA<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-black/80 to-black/20">
            .UI/UX
          </span>
        </motion.h1>

        {/* --- GLASSMORPHISM BOX --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12 rounded-[3rem] bg-white/30 backdrop-blur-xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
        >
          <p className="max-w-[320px] text-left text-sm text-gray-500 leading-relaxed border-l-2 border-black/10 pl-6 italic">
            Focusing on <span className="text-black font-bold">Human-Centered Design</span> to create products that people love.
          </p>

          <div className="flex items-center gap-6">
            <button 
              onClick={handleExploreClick}
              className="px-10 py-5 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Explore Projects
            </button>
            
            {/* Glassy Fingerprint Icon */}
            <div className="w-16 h-16 bg-white/40 backdrop-blur-lg border border-white/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:scale-110 transition-all shadow-sm group">
              <Fingerprint size={28} strokeWidth={1.5} className="group-hover:text-yellow-600 transition-colors text-black/70" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;