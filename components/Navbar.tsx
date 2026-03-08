"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();

  // Scroll detection for morphing
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ];

  // Variants for Mobile Menu Animations
  const menuVariants = {
    closed: { opacity: 0, scale: 0.95, y: -20 },
    open: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center items-center p-4 md:p-8 pointer-events-none">
        <motion.nav
          layout
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className={`
            pointer-events-auto relative flex items-center justify-between transition-all duration-500
            ${isScrolled || isOpen
              ? "w-full max-w-[700px] px-3 py-2.5 rounded-[32px] border border-white/20 shadow-2xl bg-white/60 backdrop-blur-2xl" 
              : "w-full max-w-[1200px] px-6 py-6 rounded-none border-transparent bg-transparent"
            }
          `}
        >
          {/* Noise Texture Background */}
          {(isScrolled || isOpen) && (
            <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] rounded-[32px]" />
          )}

          {/* LOGO */}
          <Link href="/" className="z-50 px-3 flex items-center gap-2 group">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center transition-transform group-hover:rotate-[360deg] duration-1000">
              <div className="w-2.5 h-2.5 bg-white rounded-sm" />
            </div>
            <div className="flex flex-col leading-none text-black">
              <span className="text-[12px] font-black tracking-tighter uppercase">SAMIA</span>
              <span className="text-[8px] font-bold opacity-40 tracking-[0.2em]">STUDIO</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1 bg-black/5 p-1 rounded-full">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-black/50 hover:text-black transition-colors"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="relative z-10">{link.name}</span>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-pill-desktop"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    className="absolute inset-0 bg-white shadow-sm rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE: CTA (Scroll to Contact) + MOBILE TOGGLE */}
          <div className="flex items-center gap-2">
            <Link 
              href="/#contact"
              className={`hidden sm:block px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all text-center
                ${isScrolled ? "bg-black text-white hover:bg-zinc-800" : "bg-white text-black border border-black/10 hover:bg-black hover:text-white"}`}
            >
              Let's Talk
            </Link>

            {/* Premium Hamburger Icon */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50 rounded-full bg-black/5 active:scale-90 transition-transform"
            >
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="w-5 h-[2px] bg-black rounded-full" 
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                className="w-5 h-[2px] bg-black rounded-full" 
              />
            </button>
          </div>

          {/* MOBILE MENU DROPDOWN */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="absolute top-[calc(100%+12px)] left-0 right-0 bg-white/90 backdrop-blur-3xl border border-white/20 rounded-[32px] p-4 shadow-2xl overflow-hidden flex flex-col gap-2 md:hidden origin-top text-black"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block w-full p-4 rounded-2xl bg-black/5 hover:bg-black hover:text-white text-center text-[12px] font-bold uppercase tracking-[0.3em] transition-all"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <Link
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-4 block w-full py-5 bg-black text-white text-center rounded-2xl text-[10px] font-black uppercase tracking-widest"
                  >
                    Hire Me Now
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>

      {/* Overlay background when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;