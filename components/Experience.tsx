"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Building2, Calendar } from "lucide-react";

const milestones = [
  {
    period: "2024 — PRESENT",
    role: "Enterprise Cloud & Microservices",
    organization: "Global FinTech Architecture",
    metrics: "+45% System Throughput",
    description:
      "Spearheaded serverless migration and Kubernetes cluster orchestration for a multi-tenant financial platform processing $50M+ in daily transaction volume with 99.999% uptime.",
    highlights: ["Multi-Region AWS Cluster", "Zero Downtime Deployments", "SOC2 Compliance"],
  },
  {
    period: "2022 — 2024",
    role: "AI & Full-Stack Platform Engineering",
    organization: "Enterprise SaaS Ecosystems",
    metrics: "2.4M Active Requests / Day",
    description:
      "Designed and delivered a modern Next.js 15 enterprise suite with custom LLM agent integrations, reducing automated customer query resolution time from hours to seconds.",
    highlights: ["Autonomous AI Pipelines", "GraphQL Federation", "Vector Search Engines"],
  },
  {
    period: "2020 — 2022",
    role: "Distributed Systems & API Architecture",
    organization: "Scale-Up Infrastructure Hub",
    metrics: "15+ Production Apps Delivered",
    description:
      "Architected secure, high-concurrency REST & WebSocket APIs for high-growth startups across North America, the UK, and UAE with automated CI/CD releases.",
    highlights: ["PostgreSQL Sharding", "Redis Distributed Caching", "Docker Pipelines"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#FAF9FF] flex flex-col items-center px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl w-full">
        
        {/* CENTERED SECTION HEADING */}
        <div className="mb-14 sm:mb-20 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111116] leading-[1.2]"
          >
            Proven Delivery &{" "}
            <span className="inline-block bg-[#7040F5] text-white px-4 sm:px-6 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl shadow-lg shadow-[#7040F5]/25">
              Track Record
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3.5 text-sm sm:text-base md:text-lg text-[#626477] font-normal leading-relaxed"
          >
            A consistent history of delivering enterprise-grade software, distributed systems, and mission-critical cloud infrastructure.
          </motion.p>
        </div>

        {/* MODERN ARCHITECTURAL TIMELINE */}
        <div className="relative">
          
          {/* Vertical Glowing Connector Line (Desktop Center, Mobile Left) */}
          <div className="absolute top-8 bottom-8 left-4 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-[#7040F5] via-[#A78BFA] to-[#EDE9FF]" />

          <div className="space-y-12 sm:space-y-16">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Glowing Node Marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#7040F5] shadow-md flex items-center justify-center z-10">
                    <span className="w-2 h-2 rounded-full bg-[#7040F5] animate-pulse" />
                  </div>

                  {/* Card Content */}
                  <div className="w-full md:w-[calc(50%-40px)] pl-12 md:pl-0">
                    <div className="bg-white/95 backdrop-blur-md border border-[#EDE9FF] hover:border-[#7040F5]/40 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(112,64,245,0.04)] hover:shadow-[0_16px_40px_rgba(112,64,245,0.1)] transition-all duration-300 group">
                      
                      {/* Top Header: Period & Organization */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-bold tracking-wider text-[#7040F5] flex items-center gap-1.5">
                          <Calendar size={13} className="text-[#7040F5]" />
                          {item.period}
                        </span>
                        <span className="text-xs text-[#626477] font-semibold flex items-center gap-1.5">
                          <Building2 size={13} className="text-[#A78BFA]" />
                          {item.organization}
                        </span>
                      </div>

                      {/* Main Role Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-[#111116] group-hover:text-[#7040F5] transition-colors mb-3">
                        {item.role}
                      </h3>

                      {/* Key Result Strip (Purple Background, Clean Text, No Icon) */}
                      <div className="mb-4 px-4 py-3 rounded-2xl bg-[#7040F5] text-white flex items-center justify-between shadow-sm shadow-[#7040F5]/20">
                        <span className="text-xs font-semibold text-white/90">
                          Key Result:
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                          {item.metrics}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[#626477] leading-relaxed mb-5 font-normal">
                        {item.description}
                      </p>

                      {/* Deliverables Checklist (Clean, structured bullets) */}
                      <div className="space-y-2 pt-4 border-t border-[#F0EDFF]">
                        {item.highlights.map((h) => (
                          <div
                            key={h}
                            className="flex items-center gap-2 text-xs font-medium text-[#373844]"
                          >
                            <CheckCircle2 size={13} className="text-[#7040F5] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Spacer for other half */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
