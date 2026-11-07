"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Official WhatsApp Vector Icon for Mobile Dock
const WhatsAppIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.59L5.06 16.27C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.56 14.41C16.31 14.29 15.1 13.69 14.88 13.61C14.65 13.53 14.49 13.49 14.32 13.73C14.16 13.98 13.69 14.53 13.55 14.7C13.4 14.86 13.26 14.88 13.01 14.76C12.76 14.63 11.96 14.37 11.01 13.52C10.27 12.86 9.77 12.05 9.63 11.8C9.48 11.55 9.61 11.42 9.74 11.3C9.85 11.19 9.98 11.02 10.11 10.87C10.23 10.72 10.27 10.62 10.35 10.45C10.44 10.29 10.39 10.15 10.33 10.02C10.27 9.9 9.77 8.68 9.57 8.18C9.37 7.69 9.17 7.76 9.02 7.75C8.88 7.74 8.71 7.74 8.55 7.74C8.38 7.74 8.12 7.8 7.9 8.04C7.67 8.29 7.03 8.89 7.03 10.11C7.03 11.33 7.92 12.51 8.04 12.67C8.17 12.84 9.79 15.33 12.26 16.4C12.85 16.65 13.31 16.81 13.66 16.92C14.25 17.11 14.79 17.08 15.22 17.02C15.7 16.95 16.69 16.42 16.89 15.85C17.1 15.28 17.1 14.79 17.04 14.69C16.97 14.59 16.81 14.53 16.56 14.41Z" />
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("services");
  const { scrollY } = useScroll();

  const mobileNavRef = useRef<HTMLElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // Scroll detection for desktop navbar glassmorphism
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 25);
  });

  // Track active section automatically on scroll (Scrollspy in exact DOM order including Testimonials)
  useEffect(() => {
    const sectionIds = ["services", "skills", "experience", "projects", "testimonials", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 280;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("services");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smoothly center the active section pill inside the mobile dock so it's always 100% visible
  useEffect(() => {
    if (!mobileNavRef.current) return;
    const activeEl = mobileNavRef.current.querySelector<HTMLElement>(`[data-nav-id="${activeSection}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeSection]);

  // Desktop navigation links (Aligned with DOM sequence)
  const navLinks = [
    { name: "Services", id: "services", href: "/#services" },
    { name: "Tech Stack", id: "skills", href: "/#skills" },
    { name: "Track Record", id: "experience", href: "/#experience" },
    { name: "IT Solutions", id: "projects", href: "/#projects" },
    { name: "Testimonials", id: "testimonials", href: "/#testimonials" },
    { name: "Contact", id: "contact", href: "/#contact" },
  ];

  // Mobile bottom dock links (Full proper spellings, including Testimonials)
  const mobileNavLinks = [
    { name: "Services", id: "services", href: "/#services" },
    { name: "Tech", id: "skills", href: "/#skills" },
    { name: "Experience", id: "experience", href: "/#experience" },
    { name: "Projects", id: "projects", href: "/#projects" },
    { name: "Testimonials", id: "testimonials", href: "/#testimonials" },
    { name: "Contact", id: "contact", href: "/#contact" },
  ];

  // Mouse drag-to-scroll handlers for mobile dock (Finger touch works natively via touch-pan-x)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!mobileNavRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - mobileNavRef.current.offsetLeft;
    scrollLeftRef.current = mobileNavRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !mobileNavRef.current) return;
    e.preventDefault();
    const x = e.pageX - mobileNavRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    mobileNavRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP TOP NAVBAR (HIDDEN ON MOBILE, FULL LUXURY GLASSMORPHISM)       */}
      {/* ========================================================================= */}
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex fixed top-0 left-0 right-0 z-[100] justify-center items-center px-6 md:px-12 pt-3 pointer-events-none"
      >
        <motion.nav
          layout
          transition={{ type: "spring", stiffness: 220, damping: 28 }}
          className={`
            pointer-events-auto relative flex items-center justify-between transition-all duration-500 w-full max-w-7xl px-6 md:px-8
            ${isScrolled
              ? "py-2.5 rounded-full bg-white/75 backdrop-blur-3xl backdrop-saturate-[200%] border border-white/80 ring-1 ring-white/50 shadow-[0_20px_45px_-12px_rgba(112,64,245,0.12),0_4px_16px_rgba(17,17,22,0.03),inset_0_1.5px_1px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(255,255,255,0.4),inset_0_0_24px_rgba(255,255,255,0.2)] overflow-hidden"
              : "py-3 bg-transparent border-0 border-transparent shadow-none ring-0 overflow-visible"
            }
          `}
        >
          {/* Specular Light Reflection Bars: ONLY VISIBLE WHEN SCROLLED */}
          {isScrolled && (
            <>
              <div className="absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none" />
              <div className="absolute inset-x-12 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
            </>
          )}

          {/* LOGO: navbar-2.png */}
          <Link
            href="/"
            aria-label="AS CODEX Home"
            className="flex items-center group z-10 shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <Image
                src="/navbar-2.png"
                alt="AS CODEX"
                width={160}
                height={54}
                priority
                className="h-8 md:h-9 lg:h-10 w-auto object-contain transition-all duration-200"
              />
            </motion.div>
          </Link>

          {/* DESKTOP NAV LINKS (SMOOTH HOVER & ACTIVE INDICATOR) */}
          <div className="flex items-center gap-7 lg:gap-9">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors relative py-1 ${
                    isActive ? "text-[#111116] font-bold" : "text-[#626477] hover:text-[#111116]"
                  }`}
                >
                  <span>{link.name}</span>
                  {/* Underline for Hover or Active */}
                  {(hoveredIndex === index || (hoveredIndex === null && isActive)) && (
                    <motion.span
                      layoutId="navbar-hover-underline"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#7040F5] rounded-full shadow-[0_2px_8px_rgba(112,64,245,0.4)]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* RIGHT CTA BUTTON */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#111116] text-white hover:bg-[#7040F5] transition-all duration-300 shadow-[0_4px_14px_rgba(17,17,22,0.15)] hover:shadow-[0_6px_20px_rgba(112,64,245,0.35)]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </motion.nav>
      </motion.header>

      {/* ========================================================================= */}
      {/* 2. MOBILE FLOATING BOTTOM DOCK (MOTA, SWIPEABLE BY HAND, AUTO-SCROLL TO ACTIVE) */}
      {/* ========================================================================= */}
      <motion.aside
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Mobile Navigation"
        className="fixed bottom-4 inset-x-0 z-[100] flex justify-center items-center pointer-events-none md:hidden px-2.5"
      >
        <nav
          ref={mobileNavRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="pointer-events-auto relative flex items-center justify-start gap-1 sm:gap-1.5 px-3 sm:px-4 py-3.5 sm:py-4 rounded-full min-h-[58px] sm:min-h-[62px] bg-white/85 backdrop-blur-3xl backdrop-saturate-[220%] border border-white/85 ring-1 ring-black/[0.06] shadow-[0_22px_55px_-10px_rgba(17,17,22,0.22),0_8px_24px_-6px_rgba(112,64,245,0.12),inset_0_1.5px_1px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(255,255,255,0.4),inset_0_0_24px_rgba(255,255,255,0.25)] max-w-[96vw] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x cursor-grab active:cursor-grabbing select-none"
        >
          {/* Specular Glare Layer for ultra-realistic glass look */}
          <div className="absolute inset-x-6 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none rounded-full" />
          <div className="absolute inset-x-8 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none rounded-full" />

          {/* 1. WHATSAPP BUTTON (GREEN BG, OPENS 2-NUMBER CONSULTATION MODAL) */}
          <button
            type="button"
            data-nav-id="whatsapp"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("open-whatsapp-modal"));
              }
            }}
            aria-label="Open WhatsApp direct chat options"
            className="relative inline-flex items-center gap-1.5 px-3.5 py-2 sm:py-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5c] text-xs font-bold whitespace-nowrap transition-all duration-200 shadow-[0_2px_8px_rgba(37,211,102,0.35)] shrink-0 active:scale-95 cursor-pointer"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
            <span>WhatsApp</span>
          </button>

          {/* 2. SECTION NAVIGATION LINKS (PROPER FULL SPELLINGS, INCLUDES TESTIMONIALS) */}
          {mobileNavLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.id}
                data-nav-id={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`relative px-3 py-2 sm:py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors duration-200 select-none shrink-0 ${
                  isActive ? "text-white" : "text-[#585A6E] hover:text-[#111116]"
                }`}
              >
                {/* Active Dark Floating Pill */}
                {isActive && (
                  <motion.div
                    layoutId="mobile-dock-active-pill"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    className="absolute inset-0 bg-[#111116] rounded-full shadow-[0_2px_10px_rgba(17,17,22,0.28)] -z-10"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </motion.aside>
    </>
  );
}
