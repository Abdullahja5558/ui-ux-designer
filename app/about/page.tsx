"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Globe2,
  Users2,
  Award,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const pillars = [
    {
      icon: <Terminal className="text-[#7040F5]" size={24} />,
      title: "Architecture-First Precision",
      desc: "Every system begins with meticulous architectural blueprints, domain-driven microservices, and clean code principles engineered for high concurrency and ultra-low latency.",
    },
    {
      icon: <Layers className="text-[#7040F5]" size={24} />,
      title: "Human-Centered UI/UX",
      desc: "We bridge complex backend infrastructure with effortless, human-centric design systems that drive conversion, retention, and brand prestige.",
    },
    {
      icon: <Cpu className="text-[#7040F5]" size={24} />,
      title: "Intelligent Automation & AI",
      desc: "Integrating production-grade LLM workflows, custom agentic pipelines, and self-healing cloud automation that eliminate operational bottlenecks.",
    },
    {
      icon: <ShieldCheck className="text-[#7040F5]" size={24} />,
      title: "Zero-Trust Security & Sovereignty",
      desc: "Hardened application security, automated SAST compliance auditing, role-based access control, and 100% client intellectual property ownership.",
    },
  ];

  const stats = [
    { value: "99.99%", label: "Cloud Uptime Record" },
    { value: "40+", label: "Microservices Scaled" },
    { value: "100%", label: "Client IP Ownership" },
    { value: "Global", label: "Enterprise Delivery" },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAF9FF] pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Back Button */}
          <div className="mb-8 flex justify-center sm:justify-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#626477] hover:text-[#7040F5] transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Overview</span>
            </Link>
          </div>

          {/* Centered Heading */}
          <div className="mb-16 sm:mb-24 text-center max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111116] leading-[1.2]"
            >
              Engineering Next-Gen{" "}
              <span className="inline-block bg-[#7040F5] text-white px-4 sm:px-6 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl shadow-lg shadow-[#7040F5]/25">
                Digital Systems
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#626477] font-normal leading-relaxed max-w-2xl mx-auto"
            >
              AS CODEX is an elite digital engineering collective architecting scalable cloud platforms, enterprise microservices, intuitive UI/UX design, and AI automation for visionary enterprises worldwide.
            </motion.p>
          </div>

          {/* Stats Bar */}
          <div className="mb-20 sm:mb-28 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-[#EDE9FF] rounded-3xl p-6 sm:p-8 text-center shadow-[0_4px_24px_rgba(112,64,245,0.03)]"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111116] tracking-tight mb-2">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7040F5]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mission & Story Editorial Block */}
          <div className="mb-20 sm:mb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7040F5] bg-[#EDE9FF] px-3.5 py-1.5 rounded-full border border-[#DDD6FE]">
                Our Philosophy
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111116] tracking-tight leading-snug">
                Where Engineering Rigor Meets Creative Fluidity.
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#626477] leading-relaxed">
                Most technology agencies force a compromise between backend architectural soundness and aesthetic interface quality. At AS CODEX, we believe mission-critical platforms must be robust beneath the surface while delivering an effortless, conversion-driven user experience.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-[#626477] leading-relaxed">
                From high-throughput distributed databases to pixel-perfect Figma design systems, our team operates as an embedded engineering partner dedicated to your long-term technological sovereignty and exponential growth.
              </p>
            </div>

            <div className="lg:col-span-6 bg-white border border-[#EDE9FF] rounded-3xl p-8 sm:p-12 shadow-[0_4px_30px_rgba(112,64,245,0.05)]">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EDE9FF] text-[#7040F5] flex items-center justify-center font-bold shrink-0">
                    <Globe2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#111116]">Global Delivery Standards</h3>
                    <p className="text-xs text-[#626477]">Operating remotely and on-premise for US, EU & worldwide clients</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EDE9FF] text-[#7040F5] flex items-center justify-center font-bold shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#111116]">100% Client IP Ownership</h3>
                    <p className="text-xs text-[#626477]">Full source code, patent rights, and repository handoff with zero lock-in</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EDE9FF] text-[#7040F5] flex items-center justify-center font-bold shrink-0">
                    <Users2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#111116]">Senior Staff Engineering Only</h3>
                    <p className="text-xs text-[#626477]">No junior intermediaries — you work directly with principal architects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Engineering Pillars Grid */}
          <div className="mb-20 sm:mb-28">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111116] tracking-tight mb-3">
                Core Engineering Pillars
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#626477]">
                The architectural principles underpinning every enterprise solution we ship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {pillars.map((p, idx) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className="bg-white border border-[#EDE9FF] rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(112,64,245,0.03)] hover:border-[#7040F5]/40 hover:shadow-[0_12px_36px_rgba(112,64,245,0.06)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF9FF] border border-[#EDE9FF] flex items-center justify-center mb-5">
                    {p.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#111116] tracking-tight mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#626477] leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Discovery Call CTA */}
          <div className="bg-[#111116] text-white rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">
                Let's Architect Your Next Breakthrough.
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-xl leading-relaxed">
                Schedule a confidential architecture discovery session with our engineering directors to evaluate your requirements and scope your roadmap.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7040F5] hover:bg-[#5e2ee6] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shrink-0 shadow-lg shadow-[#7040F5]/30 active:scale-95"
            >
              <span>Initiate Discovery Call</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
