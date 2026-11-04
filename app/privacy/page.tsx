"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, EyeOff, FileText, Database, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  const sections = [
    {
      icon: <Shield className="text-[#7040F5]" size={22} />,
      title: "1. Enterprise Data Ownership & Zero-Claim Principle",
      content:
        "AS CODEX maintains an uncompromising zero-claim policy regarding client intellectual property. All proprietary algorithms, source code, data repositories, cloud architectures, and user telemetry developed during our engagement belong 100% exclusively to the client upon milestone delivery. We never repurpose, train public models, or lease client data.",
    },
    {
      icon: <Lock className="text-[#7040F5]" size={22} />,
      title: "2. Data Collection & Information Gathering",
      content:
        "We gather only the minimum telemetry strictly required to deliver, secure, and monitor our services. This includes organizational contact credentials, contract deliverables, API payload specifications, and diagnostic performance logs. We do not engage in covert third-party data brokerage, ad tracking, or commercial profiling.",
    },
    {
      icon: <Database className="text-[#7040F5]" size={22} />,
      title: "3. Cryptographic Storage & Transmission Protocols",
      content:
        "All data at rest is fortified utilizing AES-256 bit encryption across multi-region enterprise cloud infrastructure. Data in transit is strictly mandated over TLS 1.3 cryptographic tunnels with Perfect Forward Secrecy. Secrets and keys are managed through hardware security modules (HSM) and automated zero-trust rotation mechanisms.",
    },
    {
      icon: <EyeOff className="text-[#7040F5]" size={22} />,
      title: "4. Confidentiality & Non-Disclosure Guarantees",
      content:
        "Every engineer, architect, and executive at AS CODEX operates under legally binding enterprise bilateral Non-Disclosure Agreements (NDAs). Project codebases are segregated into isolated virtual environments with role-based access control (RBAC), multi-factor hardware authentication, and immutable audit trails.",
    },
    {
      icon: <FileText className="text-[#7040F5]" size={22} />,
      title: "5. Global Regulatory Compliance (GDPR, CCPA, SOC 2)",
      content:
        "Our engineering systems are designed to comply with the European Union General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and SOC 2 Type II trust principles. Clients retain sovereign rights to audit, export, or permanently purge all records through automated right-to-be-forgotten protocols.",
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
              Enterprise Privacy &{" "}
              <span className="inline-block bg-[#7040F5] text-white px-4 sm:px-6 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl shadow-lg shadow-[#7040F5]/25">
                Data Framework
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#626477] font-normal leading-relaxed"
            >
              How AS CODEX protects institutional confidentiality, enforces zero-knowledge boundaries, and safeguards enterprise data sovereignty.
            </motion.p>

            <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#7040F5] bg-[#EDE9FF] px-4 py-1.5 rounded-full border border-[#DDD6FE]">
              <CheckCircle2 size={14} />
              <span>Effective Date: 2026 • Verified Enterprise Standard</span>
            </div>
          </div>

          {/* Privacy Sections Grid */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {sections.map((item, idx) => (
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

          {/* Contact Security Team Callout */}
          <div className="mt-12 sm:mt-16 bg-[#111116] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                Have Institutional Security or Compliance Queries?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
                Our legal and security engineering team is available for custom vendor compliance questionnaires, SOC 2 verification, and bilateral NDA execution.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#7040F5] hover:bg-[#5e2ee6] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0"
            >
              Contact Legal & Security
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

