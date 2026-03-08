"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Instagram, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll animation for the giant background text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const xMove = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const springX = useSpring(xMove, { stiffness: 100, damping: 30 });

  return (
    <footer 
      ref={containerRef}
      className="relative min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden"
    >
      {/* 1. THE GIANT KINETIC TEXT (Background Animation) */}
      <div className="absolute top-20 left-0 w-full whitespace-nowrap pointer-events-none select-none opacity-[0.03]">
        <motion.h2 
          style={{ x: springX }}
          className="text-[30vw] font-black leading-none tracking-tighter"
        >
          SAMIA DESIGNER SAMIA DESIGNER
        </motion.h2>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-20 pt-40">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
          
          {/* Big CTA */}
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <p className="text-zinc-500 font-black uppercase tracking-[0.5em] text-[10px]">Project Inquiry</p>
              <h3 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
                LETS CREATE <br /> <span className="italic text-zinc-400 font-light italic">MAGIC</span> TOGETHER.
              </h3>
            </motion.div>

            <motion.a 
              href="mailto:uiuxsamia@gmail.com"
              whileHover={{ x: 20 }}
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <ArrowUpRight size={40} />
              </div>
              <span className="text-2xl md:text-4xl font-bold tracking-tight border-b-2 border-white/10 group-hover:border-white transition-all pb-2">
                uiuxsamia@gmail.com
              </span>
            </motion.a>
          </div>

          {/* Social Gravity Grid */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 pb-10">
            <SocialLink name="Linkedin" href="#" icon={<Linkedin size={20}/>} />
            <SocialLink name="Dribbble" href="#" icon={<Instagram size={20}/>} />
            <SocialLink name="Twitter" href="#" icon={<Twitter size={20}/>} />
            <SocialLink name="Github" href="#" icon={<Github size={20}/>} />
          </div>
        </div>
      </div>

      {/* 3. THE BOTTOM BAR - CLEAN & BOLD */}
      <div className="relative z-10 border-t border-white/5 py-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center font-black text-xl">S.</div>
             <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 max-w-[150px]">
               Visual Architect & UX Strategist
             </p>
          </div>

          <div className="flex flex-col items-center gap-2">
             <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest">
               Handcrafted with <Heart size={12} className="text-red-500 fill-red-500" /> by Samia
             </div>
             <p className="text-[10px] text-zinc-600">© 2026 ALL RIGHTS RESERVED</p>
          </div>

          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">
             <a href="#" className="hover:text-white transition-colors">Local Time 20:34 PKT</a>
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

// --- MAGNETIC SOCIAL LINK COMPONENT ---
const SocialLink = ({ name, href, icon }: any) => {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -10 }}
      className="group flex flex-col gap-4 p-8 border border-white/5 rounded-3xl hover:bg-zinc-900/50 hover:border-white/20 transition-all duration-500"
    >
      <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">{name}</p>
        <p className="text-sm font-bold text-white group-hover:translate-x-1 transition-transform">Follow Me</p>
      </div>
    </motion.a>
  );
};

export default Footer;