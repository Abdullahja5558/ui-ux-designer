"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Minus, Plus } from "lucide-react";

const allProjects = [
  { id: 1, title: "EcoSphere", category: "Mobile App • UI/UX", year: "2024", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Nova Bank", category: "Fintech • Dashboard", year: "2023", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "LuxeStay", category: "Web Design • Hospitality", year: "2024", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Aura AI", category: "SaaS • Interface", year: "2024", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Velocita", category: "E-Commerce • Automotive", year: "2023", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Zenith", category: "Portfolio • Minimal", year: "2024", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Logic to determine which projects to show
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section className="relative py-40 bg-[#ffffff] w-full flex flex-col items-center overflow-hidden"
    id="work">
      
      {/* --- TOP ANIMATED WAVE --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 h-[100px]">
        <motion.svg 
          animate={{ x: ["-25%", "0%", "-25%"] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="relative block w-[200%] h-full" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#000000"></path>
        </motion.svg>
      </div>

      <div className="max-w-7xl w-full px-6 pt-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <h2 className="text-[12px] font-black uppercase tracking-[0.6em] text-black">Selected Works</h2>
            <p className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-none uppercase">
              Featured <br /> <span className="text-black/20 italic font-serif">Projects</span>
            </p>
          </div>
          <div className="hidden md:block text-right border-l-4 border-black pl-8">
            <p className="text-lg font-bold text-black max-w-[250px] leading-tight italic">
              "Creating digital products that define industries."
            </p>
          </div>
        </div>

        {/* Project List */}
        <div className="flex flex-col border-t-2 border-black">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex items-center justify-between py-16 border-b border-black/10 cursor-pointer transition-all duration-500 hover:px-10"
              >
                <div className="z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-24">
                  <span className="text-sm font-black text-black/30 tabular-nums">0{index + 1}</span>
                  <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-black transition-all duration-700 group-hover:italic group-hover:translate-x-6">
                    {project.title}
                  </h3>
                </div>

                <div className="z-10 flex items-center gap-12">
                  <div className="hidden lg:block text-right">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black mb-2">{project.category}</p>
                    <p className="text-sm text-black font-black italic">{project.year}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-xl">
                    <ArrowUpRight size={32} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Floating Image Reveal */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: 50, rotate: 10 }}
                      animate={{ opacity: 1, scale: 1, x: 0, rotate: -5 }}
                      exit={{ opacity: 0, scale: 0.8, x: 50, rotate: 10 }}
                      className="absolute right-[25%] top-[-40%] w-[420px] h-[300px] pointer-events-none z-20 hidden lg:block"
                    >
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover rounded-[50px] shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-[8px] border-black" 
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="absolute inset-0 bg-[#f8f8f8] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom -z-10" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- DYNAMIC TOGGLE BUTTON --- */}
        <div className="mt-32 flex justify-center pb-10">
          <motion.button 
            layout
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05, backgroundColor: "#000000", color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-6 px-14 py-7 border-2 border-black rounded-full text-black bg-transparent transition-all duration-500 shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] cursor-pointer"
          >
            <span className="text-sm font-black uppercase tracking-[0.5em]">
              {showAll ? "Show Less" : "View Archive"}
            </span>
            <div className="w-6 h-6 flex items-center justify-center bg-black group-hover:bg-white rounded-full transition-colors">
               {showAll ? <Minus size={14} className="text-white group-hover:text-black" /> : <Plus size={14} className="text-white group-hover:text-black" />}
            </div>
          </motion.button>
        </div>
      </div>

      {/* --- BOTTOM ANIMATED WAVE --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] h-[120px]">
        <motion.svg 
          animate={{ x: ["0%", "-25%", "0%"] }} 
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="relative block w-[200%] h-full" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#000000"></path>
        </motion.svg>
      </div>
    </section>
  );
};

export default Projects;