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

            {/* Contact Details & WhatsApp Lines */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#A78BFA] mb-4">
                Direct Communication
              </h4>
              <ul className="space-y-3 text-xs text-zinc-400">
                <li>
                  <a href="mailto:contact@ascodex.com" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <Mail size={14} className="text-[#A78BFA] shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="break-all">contact@ascodex.com</span>
                  </a>
                </li>

                {/* WhatsApp Line 1 */}
                <li>
                  <a
                    href="https://wa.me/923715909509?text=Hello%20AS%20CODEX!%20I%20would%20like%20to%20discuss%20a%20new%20software%20development%20%2F%20UI%2FUX%20project%20with%20your%20team.%20Could%20we%20schedule%20a%20consultation%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#25D366] shrink-0 group-hover:scale-110 transition-transform">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.59L5.06 16.27C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.56 14.41C16.31 14.29 15.1 13.69 14.88 13.61C14.65 13.53 14.49 13.49 14.32 13.73C14.16 13.98 13.69 14.53 13.55 14.7C13.4 14.86 13.26 14.88 13.01 14.76C12.76 14.63 11.96 14.37 11.01 13.52C10.27 12.86 9.77 12.05 9.63 11.8C9.48 11.55 9.61 11.42 9.74 11.3C9.85 11.19 9.98 11.02 10.11 10.87C10.23 10.72 10.27 10.62 10.35 10.45C10.44 10.29 10.39 10.15 10.33 10.02C10.27 9.9 9.77 8.68 9.57 8.18C9.37 7.69 9.17 7.76 9.02 7.75C8.88 7.74 8.71 7.74 8.55 7.74C8.38 7.74 8.12 7.8 7.9 8.04C7.67 8.29 7.03 8.89 7.03 10.11C7.03 11.33 7.92 12.51 8.04 12.67C8.17 12.84 9.79 15.33 12.26 16.4C12.85 16.65 13.31 16.81 13.66 16.92C14.25 17.11 14.79 17.08 15.22 17.02C15.7 16.95 16.69 16.42 16.89 15.85C17.1 15.28 17.1 14.79 17.04 14.69C16.97 14.59 16.81 14.53 16.56 14.41Z" />
                    </svg>
                    <span className="font-mono text-xs">0371 5909509</span>
                  </a>
                </li>

                {/* WhatsApp Line 2 */}
                <li>
                  <a
                    href="https://wa.me/923266455353?text=Hi%20AS%20CODEX!%20I%20am%20reaching%20out%20to%20inquire%20about%20your%20custom%20digital%20solutions%20%26%20enterprise%20services.%20Looking%20forward%20to%20connecting."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#25D366] shrink-0 group-hover:scale-110 transition-transform">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.59L5.06 16.27C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.56 14.41C16.31 14.29 15.1 13.69 14.88 13.61C14.65 13.53 14.49 13.49 14.32 13.73C14.16 13.98 13.69 14.53 13.55 14.7C13.4 14.86 13.26 14.88 13.01 14.76C12.76 14.63 11.96 14.37 11.01 13.52C10.27 12.86 9.77 12.05 9.63 11.8C9.48 11.55 9.61 11.42 9.74 11.3C9.85 11.19 9.98 11.02 10.11 10.87C10.23 10.72 10.27 10.62 10.35 10.45C10.44 10.29 10.39 10.15 10.33 10.02C10.27 9.9 9.77 8.68 9.57 8.18C9.37 7.69 9.17 7.76 9.02 7.75C8.88 7.74 8.71 7.74 8.55 7.74C8.38 7.74 8.12 7.8 7.9 8.04C7.67 8.29 7.03 8.89 7.03 10.11C7.03 11.33 7.92 12.51 8.04 12.67C8.17 12.84 9.79 15.33 12.26 16.4C12.85 16.65 13.31 16.81 13.66 16.92C14.25 17.11 14.79 17.08 15.22 17.02C15.7 16.95 16.69 16.42 16.89 15.85C17.1 15.28 17.1 14.79 17.04 14.69C16.97 14.59 16.81 14.53 16.56 14.41Z" />
                    </svg>
                    <span className="font-mono text-xs">0326 6455353</span>
                  </a>
                </li>

                {/* 24/7 Support Indicator */}
                <li className="pt-0.5 flex items-center gap-2 text-zinc-400">
                  <span className="text-xs text-zinc-400 font-medium">24/7 Support Available</span>
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

        {/* GIGANTIC FULL-WIDTH WATERMARK (MATCHING REFERENCE EXACTLY) */}
        <div className="w-full pt-6 sm:pt-8 md:pt-10 pb-0 mb-[-1.5vw] sm:mb-[-2vw] md:mb-[-2.5vw] flex items-end justify-center overflow-hidden select-none pointer-events-none relative z-0">
          <span
            className="font-['Bricolage_Grotesque',sans-serif] font-black text-[16.5vw] sm:text-[18vw] md:text-[19.5vw] lg:text-[20.5vw] tracking-tighter leading-[0.78] bg-gradient-to-b from-[#383842] via-[#24242c] to-[#101014] bg-clip-text text-transparent uppercase whitespace-nowrap block text-center select-none"
          >
            AS CODEX
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
