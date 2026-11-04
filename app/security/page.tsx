"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, KeyRound, Server, Binary, Cpu, Activity, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SecurityPage() {
  const pillars = [
    {
      icon: <KeyRound className="text-[#7040F5]" size={22} />,
      title: "Zero-Trust Architecture & Micro-Segmentation",
      content:
        "Every endpoint, user, and internal microservice request is continuously authenticated and authorized. We eliminate implicit trust across internal networks through fine-grained IAM roles, mTLS communication, and hardware security keys.",
    },
    {
      icon: <Server className="text-[#7040F5]" size={22} />,
      title: "Hardened Cloud Environments (AWS, Azure, GCP)",
      content:
        "Enterprise cloud perimeters are declared as immutable Infrastructure as Code (Terraform). Systems feature private VPC peering, automated DDoS mitigations via Cloudflare Enterprise / AWS Shield, and strict ingress/egress firewall restrictions.",
    },
    {
      icon: <Binary className="text-[#7040F5]" size={22} />,
      title: "Automated DevSecOps & Continuous Vulnerability Scans",
      content:
        "Every commit undergoes automated Static Application Security Testing (SAST), Dynamic Analysis (DAST), and Dependency Vulnerability scanning within our CI/CD pipelines. Zero high or critical CVE vulnerabilities are permitted in production builds.",
    },
    {
      icon: <Cpu className="text-[#7040F5]" size={22} />,
      title: "Cryptographic Data Vaults & Secrets Management",
      content:
        "Database records and sensitive client tokens are protected using AES-256 and RSA-4096 cryptographic standards. Secrets are dynamically leased through HashiCorp Vault and cloud KMS engines with automated zero-touch secret rotation.",
    },
    {
      icon: <Activity className="text-[#7040F5]" size={22} />,
      title: "24/7 Telemetry, SIEM & Incident Response Protocols",
      content:
        "Real-time monitoring across distributed microservices with automated anomaly detection, centralized audit logging, and isolated cold-storage backups. Our on-call engineering response guarantees immediate containment in critical anomalies.",
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
              Enterprise Security &{" "}
              <span className="inline-block bg-[#7040F5] text-white px-4 sm:px-6 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl shadow-lg shadow-[#7040F5]/25">
                Infrastructure Defense
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#626477] font-normal leading-relaxed"
            >
              How AS CODEX designs mission-critical resilience, hardened cloud architectures, and proactive cryptographic defense into every enterprise platform.
            </motion.p>

            <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#7040F5] bg-[#EDE9FF] px-4 py-1.5 rounded-full border border-[#DDD6FE]">
              <CheckCircle2 size={14} />
              <span>Zero-Trust Protocol Active • Continuous Compliance</span>
            </div>
          </div>

          {/* Security Pillars */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {pillars.map((item, idx) => (
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

          {/* Security Audit CTA */}
          <div className="mt-12 sm:mt-16 bg-[#111116] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                Need an Architecture or Security Assessment?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
                Our principal cloud architects review your existing microservices, CI/CD pipelines, and cloud perimeters to pinpoint vulnerabilities and optimize infrastructure spend.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#7040F5] hover:bg-[#5e2ee6] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0"
            >
              Request Architecture Audit
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

