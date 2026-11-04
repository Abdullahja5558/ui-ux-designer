"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Award, FileCode, Clock, ShieldCheck, Scale } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  const terms = [
    {
      icon: <Award className="text-[#7040F5]" size={22} />,
      title: "1. Client Ownership & Intellectual Property Transfer",
      content:
        "Upon full settlement of milestone milestones, 100% of all custom source code, documentation, UI/UX design assets, database schemas, and digital artifacts produced by AS CODEX transfer irrevocably and perpetually to the client. The client owns all copyright, commercialization rights, and patent rights without residual royalty claims.",
    },
    {
      icon: <FileCode className="text-[#7040F5]" size={22} />,
      title: "2. Milestone Deliverables & Acceptance Criteria",
      content:
        "Every phase of an enterprise engagement is governed by an agreed Statement of Work (SOW). Deliverables undergo formal acceptance testing protocols where clients verify functionality against defined specifications. Revisions within agreed SOW parameters are performed promptly during the active sprint warranty window.",
    },
    {
      icon: <Clock className="text-[#7040F5]" size={22} />,
      title: "3. Service Level Agreements & System Reliability",
      content:
        "For clients operating production systems managed under our DevOps and cloud engineering support, AS CODEX guarantees up to 99.99% infrastructure uptime with dedicated incident response protocols for critical severity incidents, automated health monitoring, and disaster recovery redundancy.",
    },
    {
      icon: <ShieldCheck className="text-[#7040F5]" size={22} />,
      title: "4. Code Quality & Security Warranty",
      content:
        "AS CODEX warrants that all delivered software is engineered to the highest modern architectural standards, free from intentional malicious code, backdoors, or unvetted high-severity CVE vulnerabilities. We conduct automated static application security testing (SAST) prior to code handoff.",
    },
    {
      icon: <Scale className="text-[#7040F5]" size={22} />,
      title: "5. Mutual Confidentiality & Governing Jurisdiction",
      content:
        "Both parties agree to treat all business secrets, technical strategies, and financial schedules as strictly confidential. Terms of service are executed in alignment with international commercial arbitration standards, preserving legal recourse under mutual corporate jurisdiction.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAF9FF] pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#626477] hover:text-[#7040F5] transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Overview</span>
            </Link>
          </div>

          {/* Centered Heading */}
          <div className="mb-14 sm:mb-20 text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111116] leading-[1.2]"
            >
              Terms of Service &{" "}
              <span className="inline-block bg-[#7040F5] text-white px-4 sm:px-6 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl shadow-lg shadow-[#7040F5]/25">
                Client Engagement
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#626477] font-normal leading-relaxed"
            >
              Transparent, enterprise-grade engineering contracts designed to safeguard client investment, establish clear milestones, and protect digital assets.
            </motion.p>

            <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#7040F5] bg-[#EDE9FF] px-4 py-1.5 rounded-full border border-[#DDD6FE]">
              <CheckCircle2 size={14} />
              <span>Version 2.4 • Enterprise Master Service Agreement Framework</span>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {terms.map((item, idx) => (
              <motion.section
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="bg-white border border-[#EDE9FF] rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(112,64,245,0.03)] hover:border-[#7040F5]/40 hover:shadow-[0_12px_36px_rgba(112,64,245,0.06)] transition-all duration-300"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF9FF] border border-[#EDE9FF] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#111116] tracking-tight mb-3">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-[#626477] font-normal leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

          {/* Project Discovery Call CTA */}
          <div className="mt-12 sm:mt-16 bg-[#111116] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                Ready to Initiate an Enterprise Statement of Work?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
                Let us architect your project roadmap with defined milestones, clear SLAs, and guaranteed IP protection.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#7040F5] hover:bg-[#5e2ee6] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0"
            >
              Start Discovery Call
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

