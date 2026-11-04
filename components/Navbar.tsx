"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();

  // Scroll detection with smooth trigger
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 25);
  });

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Tech Stack", href: "/#skills" },
    { name: "IT Solutions", href: "/#projects" },
    { name: "Track Record", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ];

  const menuVariants: Variants = {
    closed: { opacity: 0, scale: 0.95, y: -16 },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { staggerChildren: 0.07, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: 10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center items-center px-4 sm:px-8 md:px-12 pt-2 sm:pt-3 pointer-events-none"
      >
        <motion.nav
          layout
          transition={{ type: "spring", stiffness: 220, damping: 28 }}
          className={`
            pointer-events-auto relative flex items-center justify-between transition-all duration-300 w-full max-w-7xl px-5 sm:px-8
            ${isScrolled
              ? "py-2.5 rounded-full bg-[#FAF9FF]/85 backdrop-blur-2xl border border-[#EDE9FF] shadow-[0_8px_30px_rgba(112,64,245,0.08)]"
              : "py-3 bg-transparent border-0 border-transparent shadow-none"
            }
          `}
        >
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
                className="h-8 sm:h-[34px] md:h-9 lg:h-10 w-auto object-contain transition-all duration-200"
              />
            </motion.div>
          </Link>

          {/* DESKTOP NAV LINKS (SMOOTH HOVER ANIMATION) */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="text-xs font-semibold uppercase tracking-wider text-[#626477] hover:text-[#111116] transition-colors relative py-1"
              >
                <span>{link.name}</span>
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="navbar-hover-underline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#7040F5] rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* RIGHT CTA + MOBILE TOGGLE */}
          <div className="flex items-center gap-2.5">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/#contact"
                className="group hidden sm:inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#111116] text-white hover:bg-[#7040F5] transition-all duration-300 shadow-sm"
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 rounded-full active:scale-95 transition-transform"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-4 h-[2px] bg-[#111116] rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="w-4 h-[2px] bg-[#111116] rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-4 h-[2px] bg-[#111116] rounded-full"
              />
            </button>
          </div>

          {/* MOBILE DROPDOWN */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="absolute top-[calc(100%+10px)] left-0 right-0 bg-[#FAF9FF]/95 backdrop-blur-2xl border border-[#EDE9FF] rounded-3xl p-5 shadow-[0_16px_36px_rgba(112,64,245,0.08)] flex flex-col gap-2 md:hidden origin-top"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block w-full py-3 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-[#111116] hover:bg-[#EDE9FF] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants} className="pt-2">
                  <Link
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-3 text-center rounded-xl text-xs font-bold uppercase tracking-wider bg-[#7040F5] text-white hover:bg-[#5e2ee6] transition-colors"
                  >
                    Start a Project
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </motion.header>

      {/* Overlay Backdrop for Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#111116]/20 backdrop-blur-sm z-[90] md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
