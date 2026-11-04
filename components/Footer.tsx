"use client";

import React from "react";
import { ArrowUpRight, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-[#FAF9FF] px-2 sm:px-3 md:px-4 pb-0">
      <footer className="relative bg-black text-white rounded-t-[28px] sm:rounded-t-[38px] md:rounded-t-[48px] rounded-b-none pt-12 sm:pt-16 pb-0 px-4 sm:px-8 md:px-12 overflow-hidden">

        <div className="max-w-7xl mx-auto w-full relative z-10">

          {/* Top Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 pb-12 sm:pb-14 border-b border-white/10">

            {/* Brand Col */}
            <div className="sm:col-span-2 space-y-4">
              <Link href="/" aria-label="AS CODEX Home" className="inline-block group">
                <Image
                  src="/navbar-2.png"
                  alt="AS CODEX"
                  width={180}
                  height={60}
                  className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
                  priority
                />
              </Link>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed font-normal">
                Architecting scalable cloud platforms, enterprise microservices, and bespoke software solutions built for exponential business growth.
              </p>
              <div className="pt-2 flex items-center gap-2.5 text-xs text-zinc-500">
                <ShieldCheck size={16} className="text-[#A78BFA] shrink-0" />
                <span>Enterprise-Grade • Secure • Scalable</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#A78BFA] mb-4">
                Architecture & Stack
              </h4>
              <ul className="space-y-2.5 text-xs text-zinc-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About AS CODEX</Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors">All Case Studies</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Cloud & DevOps</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Enterprise Software</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">UI/UX & Product Design</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">AI & Automation</Link></li>
                <li><Link href="/#skills" className="hover:text-white transition-colors">Technologies</Link></li>
                <li><Link href="/#experience" className="hover:text-white transition-colors">Milestones</Link></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#A78BFA] mb-4">
                Direct Communication
              </h4>
              <ul className="space-y-2.5 text-xs text-zinc-400">
                <li>
                  <a href="mailto:contact@ascodex.com" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <Mail size={13} className="text-[#A78BFA] shrink-0" />
                    <span className="break-all">contact@ascodex.com</span>
                  </a>
                </li>
                <li>
                  <span className="text-zinc-500 text-xs">Global Delivery • Remote & On-Premise</span>
                </li>
                <li className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#7040F5] hover:bg-[#5b2fe0] px-4 py-2 rounded-full transition-colors active:scale-95"
                  >
                    <span>Request Discovery Call</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Compliance */}
          <div className="pt-8 sm:pt-10 mt-10 sm:mt-14 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 text-center sm:text-left">
            <p className="tracking-widest uppercase text-[10px] sm:text-[11px] font-mono text-zinc-400">
              © {new Date().getFullYear()} AS CODEX. ALL RIGHTS RESERVED.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Framework</Link>
              <Link href="/security" className="hover:text-white transition-colors">Security Standards</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Compliance & Terms</Link>
            </div>
          </div>

        </div>

        {/* GIGANTIC FULL-WIDTH WATERMARK (MATCHING AJ.DEV REFERENCE EXACTLY) */}
        <div className="w-full pt-6 sm:pt-8 md:pt-10 pb-0 mb-[-1.5vw] sm:mb-[-2vw] md:mb-[-2.5vw] flex items-end justify-center overflow-hidden select-none pointer-events-none relative z-0">
          <span
            className="font-['Bricolage_Grotesque',sans-serif] font-black text-[16.5vw] sm:text-[18vw] md:text-[19.5vw] lg:text-[20.5vw] tracking-tighter leading-[0.78] bg-gradient-to-b from-[#2b2b32] to-[#111114] bg-clip-text text-transparent uppercase whitespace-nowrap block text-center select-none"
          >
            AS CODEX
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
