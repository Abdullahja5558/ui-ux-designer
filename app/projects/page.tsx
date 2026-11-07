"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CaseStudy {
  id: number;
  title: string;
  tagline: string;
  quote: string;
  description: string;
  service: string;
  sector: string;
  year: string;
  category: string;
  link: string;
  image: string;
  tech: string[];
}

// 5 Projects: Drylicious placed after Bucceo at the end
const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "AJ Code.",
    tagline: "Zero-Latency Cloud Collaborative IDE.",
    quote:
      "Instant, zero-latency cloud compilation engineered directly inside your browser sandbox.",
    description:
      "Cloud-native collaborative code workspace built for engineering teams. Features real-time WebAssembly code execution, automated multi-branch CI/CD deployments, and distributed microservices infrastructure engineered for high-concurrency workflows and ultra-low latency.",
    service: "Cloud Architecture & SaaS",
    sector: "Developer Tooling & Cloud Platforms",
    year: "2024",
    category: "Cloud & SaaS",
    link: "https://aj-code.vercel.app",
    image: "/aj-code-p1.webp",
    tech: ["Next.js 15", "TypeScript", "Docker", "WebAssembly"],
  },
  {
    id: 2,
    title: "PDFHubX.",
    tagline: "Client-Side Document Processing Suite.",
    quote:
      "Zero-knowledge client-side encryption paired with high-throughput batch document pipelines.",
    description:
      "Enterprise document processing suite capable of converting, merging, and extracting OCR data from multi-gigabyte files in real time. Employs advanced client-side WebAssembly computation so sensitive enterprise documents never touch unencrypted third-party servers.",
    service: "Enterprise SaaS Utility",
    sector: "Document Automation & FinTech",
    year: "2024",
    category: "Cloud & SaaS",
    link: "https://pdfhubx.vercel.app",
    image: "/pdf-p2.webp",
    tech: ["React 19", "WebAssembly", "Node.js", "Serverless"],
  },
  {
    id: 3,
    title: "Noor-ul-Quran.",
    tagline: "Global Interactive EdTech Platform.",
    quote:
      "Bridging traditional pedagogy with low-latency recitation analytics and global streaming.",
    description:
      "Multi-region educational content delivery ecosystem serving international learners. Architected with high-fidelity low-latency audio pipelines, interactive recitation analytics, and scalable micro-lessons synchronized across distributed global CDN edge nodes.",
    service: "Web Platform & Streaming",
    sector: "Educational Technology & EdTech",
    year: "2024",
    category: "Web Platforms",
    link: "https://noor-ulquran.vercel.app",
    image: "/quran-p3.webp",
    tech: ["Next.js", "PostgreSQL", "Cloudflare CDN", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Bucceo.",
    tagline: "Multi-Currency Maritime Expedition Engine.",
    quote:
      "Seamless multi-currency reservations across 40+ international dive itineraries.",
    description:
      "Global expedition booking engine offering real-time inventory synchronization across international maritime operators. Features dynamic multi-currency pricing, automated Stripe Connect split-payouts, and resilient SMS & email reservation relays.",
    service: "Booking Engine & Marketplace",
    sector: "Travel, Tourism & E-Commerce",
    year: "2024",
    category: "Web Platforms",
    link: "https://bucceo-diving.vercel.app",
    image: "/diving-p4.webp",
    tech: ["React", "Node.js", "Stripe Connect", "MongoDB"],
  },
  {
    id: 5,
    title: "Drylicious.",
    tagline: "Purity In Every Whole Grain.",
    quote:
      "Drylicious was born from a simple obsession: to bring back the forgotten aroma of unadulterated spices.",
    description:
      "We travel to the heart of farms to find the most potent seeds, pods, and barks so you get nothing but the absolute truth in every pouch. Our mission is to replace chemical-laden powders with nature's raw gold. Engineered as a high-converting, sensory e-commerce flagship with direct-to-consumer checkout, real-time inventory, and sustainable origin storytelling.",
    service: "E-Commerce & Digital Store",
    sector: "Organic Spices & Food Retail",
    year: "2024",
    category: "E-Commerce",
    link: "https://drylicious.vercel.app",
    image: "/drylicious-p5.webp",
    tech: ["Next.js", "Shopify Storefront", "Tailwind CSS", "Stripe API"],
  },
  {
    id: 6,
    title: "OrientStudy.",
    tagline: "Empowering Students. Strengthening Futures.",
    quote:
      "OrientStudy is a lifelong AI roadmap that guides youth from foundational school routines to world-class professional careers.",
    description:
      "Comprehensive educational intelligence ecosystem serving over 10,000+ students worldwide. Features 19+ proprietary AI applications, 24/7 intelligent mentorship, personalized learning trajectories, and automated academic progress forecasting with 100% worldwide accessibility.",
    service: "AI EdTech & Career Platform",
    sector: "EdTech & Intelligent Mentorship",
    year: "2024",
    category: "Web Platforms",
    link: "https://orientstudy.tech",
    image: "/os-p6.webp",
    tech: ["Next.js", "AI Roadmaps", "Tailwind CSS", "FastAPI"],
  },
  {
    id: 7,
    title: "SortMind AI.",
    tagline: "Intelligent Automated File Organization.",
    quote:
      "How SortMind organizes your files: A transparent 3-step workflow. You inspect and verify the destination tree before downloading.",
    description:
      "Step 01: Drag & drop unorganized downloads, photos, PDFs, spreadsheets, or entire directories. Step 02: SortMind automatically parses content, routing PNGs to Images, PDFs to Documents, and Excels to Spreadsheets. Step 03: Preview the organized destination folder tree, eliminate duplicates, and download your clean ZIP archive.",
    service: "AI File Intelligence & Utility",
    sector: "Productivity & File Automation",
    year: "2024",
    category: "Cloud & SaaS",
    link: "https://sortmindai.vercel.app",
    image: "/sm-p7.webp",
    tech: ["Next.js", "AI File Sorting", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 8,
    title: "PDFfilz.",
    tagline: "100% Privately In Your Browser.",
    quote:
      "The smartest and most private way to work with PDFs. Fast, approachable, and highly utilitarian.",
    description:
      "Merge, compress, convert, edit, and sign your documents 100% privately in your browser. Built with client-side WebAssembly tools for merging, compressing, Word conversion, document signing, and batch PDF-to-JPG workflows with zero third-party server exposure.",
    service: "Client-Side SaaS & PDF Engine",
    sector: "Document Privacy & SaaS Utilities",
    year: "2024",
    category: "Cloud & SaaS",
    link: "https://pdffilz.com",
    image: "/pdf-p7.webp",
    tech: ["Next.js", "WebAssembly", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 9,
    title: "GBCC Engineering.",
    tagline: "Structure → Waterproofing → Maintenance → Finishing.",
    quote:
      "Delivering complete structural works, advanced waterproofing systems, and high-quality finishing solutions.",
    description:
      "Comprehensive civil engineering and commercial construction platform. Delivering end-to-end structural works, advanced waterproofing systems, and high-quality finishing solutions for commercial, residential, and industrial projects—from foundation to final handover.",
    service: "Civil Engineering & Infrastructure",
    sector: "Commercial Construction & Architecture",
    year: "2024",
    category: "Web Platforms",
    link: "https://gbcc.com.co",
    image: "/gbcc-p8.webp",
    tech: ["Next.js", "Corporate Portal", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 10,
    title: "M.Studio.",
    tagline: "Beyond the Pixel Perfect.",
    quote:
      "Reduce until it's perfect. We eliminate the clutter so your vision can breathe.",
    description:
      "Founded by AJ Developer, M.Studio is a digital sanctuary where architecture meets high-end development. We don't just 'build' sites; we craft environments. Est. 2026, Pakistan Based. The Architecture of Code: every project is a monolith of design and performance.",
    service: "Creative Architecture & Digital Sanctuary",
    sector: "High-End Architecture & Digital Studio",
    year: "2026",
    category: "Web Platforms",
    link: "https://m-studio-sigma.vercel.app",
    image: "/mss-p9.webp",
    tech: ["Next.js 15", "Creative Engineering", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 11,
    title: "Lex Pro AI.",
    tagline: "The Future of Justice. ⚖️",
    quote:
      "An elite legal AI powerhouse designed to translate complex legal procedures into clear, actionable insights.",
    description:
      "Next-generation legal intelligence platform built for legal practitioners and corporate enterprises. Translates complex statutory legal procedures, contract reviews, and precedent discovery into clear, actionable, high-security analytical workflows.",
    service: "Intelligent Legal AI Automation",
    sector: "LegalTech & Artificial Intelligence",
    year: "2024",
    category: "AI & Automation",
    link: "https://lexpro-ai.vercel.app",
    image: "/lex-p10.webp",
    tech: ["Next.js", "Legal LLM Pipeline", "Tailwind CSS", "FastAPI"],
  },
  {
    id: 12,
    title: "Corelytics IO.",
    tagline: "Empowering Businesses with Raw Data Truth.",
    quote:
      "To provide every entrepreneur with the same analytical power as Fortune 500 companies.",
    description:
      "Corelytics was founded with a single mission: to empower businesses by stripping away the noise of raw data and revealing the truth beneath. Built on radical transparency, speed of execution, and design excellence. Helping teams across 6 continents make smarter, data-driven decisions every single day.",
    service: "Enterprise Data Analytics SaaS",
    sector: "Business Intelligence & Big Data",
    year: "2024",
    category: "Cloud & SaaS",
    link: "https://corelytics-io.vercel.app",
    image: "/saas-p11.webp",
    tech: ["Next.js", "Data Telemetry", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: 13,
    title: "LEEMEVENTS.",
    tagline: "All-In-One Verified Event Marketplace.",
    quote:
      "Discover how LEEMEVENTS creates clarity, legal security, and seamless connections for both event hosts and professional suppliers.",
    description:
      "LEEMEVENTS unites demand and verified supply into one central marketplace. Easily find the right event supplier, review service terms, align on specifications, and automatically generate binding agreements upon acceptance with KVK & VAT verification and personal assistant AI chatbot.",
    service: "Event Marketplace & Booking",
    sector: "Event Management & Services",
    year: "2024",
    category: "Web Platforms",
    link: "https://leemevents.com",
    image: "/p12-leem.webp",
    tech: ["Next.js", "Marketplace Ecosystem", "Chatbot Assistant", "Tailwind CSS"],
  },
  {
    id: 14,
    title: "Cosy Hair Saloon.",
    tagline: "Luxury Hair Care & Bespoke Salon Experience.",
    quote:
      "A modern boutique digital experience delivering bespoke styling, curated treatment portfolios, and effortless online appointment booking.",
    description:
      "Designed and engineered as a high-converting boutique salon platform. Features interactive appointment scheduling, stylist portfolios, service rate cards, and responsive client engagement.",
    service: "Salon Web Platform & Booking",
    sector: "Beauty, Grooming & Wellness",
    year: "2024",
    category: "Web Platforms",
    link: "https://samiafarooq97.wixsite.com/my-site-21",
    image: "/p13-cosy.webp",
    tech: ["Creative Web", "Online Booking", "UI/UX Design", "Responsive Web"],
  },
  {
    id: 15,
    title: "California Poolman Inc.",
    tagline: "Certified Commercial & Residential Pool Care.",
    quote:
      "Delivering crystal-clear aquatic perfection with certified water balancing, automated maintenance dispatch, and emergency repairs.",
    description:
      "Full-service aquatic management portal featuring weekly chemical balancing scheduling, preventative equipment maintenance dispatch, leak detection reporting, and transparent customer accounts.",
    service: "Aquatic Service & Dispatch Portal",
    sector: "Commercial & Residential Services",
    year: "2024",
    category: "Web Platforms",
    link: "https://samiafarooq97.wixsite.com/my-site-9",
    image: "/p14-cal.webp",
    tech: ["Service Portal", "Client Scheduling", "UI/UX Design", "Responsive Web"],
  },
  {
    id: 16,
    title: "Guard Secure 24/7.",
    tagline: "Round-The-Clock Enterprise Security & Surveillance.",
    quote:
      "Uncompromising vigilance: licensed physical guard deployment paired with centralized surveillance monitoring.",
    description:
      "Enterprise security services platform providing round-the-clock physical security personnel, centralized CCTV monitoring relays, rapid incident dispatch, and automated client security audits.",
    service: "Security Infrastructure & Dispatch",
    sector: "Surveillance, Guarding & Security",
    year: "2024",
    category: "Web Platforms",
    link: "https://guardsecure247.de",
    image: "/p15-gs.webp",
    tech: ["Security Systems", "Monitoring Portal", "Tailwind CSS", "Next.js"],
  },
];

const categories = ["All", "Cloud & SaaS", "Web Platforms", "AI & Automation", "E-Commerce"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeFilter);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAF9FF] pt-32 sm:pt-40 pb-24 sm:pb-32 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* TOP BACK BUTTON */}
          <div className="mb-8 flex justify-center sm:justify-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#626477] hover:text-[#7040F5] transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Overview</span>
            </Link>
          </div>

          {/* CENTERED PAGE HEADER */}
          <div className="mb-16 sm:mb-24 text-center max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111116] leading-[1.2]"
            >
              Featured Case Studies &{" "}
              <span className="inline-block bg-[#7040F5] text-white px-4 sm:px-6 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl shadow-lg shadow-[#7040F5]/25">
                All Projects
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#626477] font-normal leading-relaxed max-w-2xl mx-auto"
            >
              Explore our full portfolio of enterprise platforms, scalable e-commerce systems, and bespoke digital software engineered for real-world impact.
            </motion.p>

            {/* CENTERED CATEGORY FILTER BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeFilter === cat
                      ? "bg-[#7040F5] text-white shadow-md shadow-[#7040F5]/25"
                      : "bg-white text-[#626477] border border-[#EDE9FF] hover:border-[#7040F5] hover:text-[#111116]"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* EDITORIAL ZIG-ZAG SHOWCASE WITH SMOOTH SCROLL ANIMATIONS */}
          <div className="flex flex-col gap-20 sm:gap-28 lg:gap-36">
            <AnimatePresence>
              {filtered.map((item, index) => {
                // Alternating zig-zag: even index image on Left, odd index image on Right
                const isEven = index % 2 === 0;

                return (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full pb-16 sm:pb-24 lg:pb-28 ${index !== filtered.length - 1 ? "border-b border-[#EDE9FF]" : ""
                      }`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">

                      {/* 1. FULL UNCLIPPED PROJECT IMAGE (NO BOX, ASPECT-3/2 TO SHOW 100% OF IMAGE) */}
                      <div
                        className={`w-full lg:col-span-6 xl:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"
                          }`}
                      >
                        <motion.div
                          initial={{ opacity: 0, scale: 0.97, x: isEven ? -20 : 20 }}
                          whileInView={{ opacity: 1, scale: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.15 }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                          className="relative w-full aspect-[3/2] rounded-2xl sm:rounded-3xl overflow-hidden border-0 shadow-none bg-transparent"
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            loading={index <= 2 ? "eager" : "lazy"}
                            priority={index <= 1}
                            className="object-contain w-full h-full select-none pointer-events-none drop-shadow-sm transition-opacity duration-300"
                            sizes="(max-width: 1024px) 100vw, 800px"
                          />
                        </motion.div>
                      </div>

                      {/* 2. PROJECT DETAILS (NO BOX, CLEAN EDITORIAL TYPOGRAPHY) */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                        className={`w-full lg:col-span-6 xl:col-span-6 flex flex-col justify-between ${isEven ? "lg:order-2" : "lg:order-1"
                          }`}
                      >
                        <div>
                          {/* Title with Signature Purple Highlight Span */}
                          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
                            <span className="inline-block bg-[#7040F5] text-white px-4 sm:px-6 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl shadow-lg shadow-[#7040F5]/25">
                              {item.title}
                            </span>
                          </h2>

                          {/* Tagline */}
                          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7040F5] mb-4">
                            {item.tagline}
                          </div>

                          {/* NOT ITALIC QUOTE WITH PURPLE BACKGROUND */}
                          <div className="bg-[#EDE9FF] border border-[#DDD6FE] text-[#5B22E4] px-4 py-3.5 sm:px-5 sm:py-4 rounded-2xl font-medium not-italic text-xs sm:text-sm md:text-base leading-relaxed mb-5 shadow-xs">
                            &ldquo;{item.quote}&rdquo;
                          </div>

                          {/* Detailed Story Paragraph */}
                          <p className="text-xs sm:text-sm md:text-base text-[#626477] font-normal leading-relaxed mb-6">
                            {item.description}
                          </p>
                        </div>

                        {/* Divider + Metadata Spec Sheet */}
                        <div>
                          <div className="pt-5 border-t border-[#EDE9FF] grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                            {/* SERVICE */}
                            <div>
                              <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#A78BFA] mb-1">
                                SERVICE
                              </span>
                              <span className="block text-xs sm:text-sm font-bold text-[#111116]">
                                {item.service}
                              </span>
                            </div>

                            {/* SECTOR */}
                            <div>
                              <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#A78BFA] mb-1">
                                SECTOR
                              </span>
                              <span className="block text-xs sm:text-sm font-bold text-[#111116]">
                                {item.sector}
                              </span>
                            </div>

                            {/* YEAR */}
                            <div>
                              <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#A78BFA] mb-1">
                                YEAR
                              </span>
                              <span className="block text-xs sm:text-sm font-bold text-[#111116]">
                                {item.year}
                              </span>
                            </div>
                          </div>

                          {/* Tech Stack Pills + Launch Button */}
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {item.tech.map((t) => (
                                <span
                                  key={t}
                                  className="text-[10px] sm:text-[11px] font-medium text-[#111116] bg-white border border-[#EDE9FF] px-2.5 py-1 rounded-lg shadow-xs"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>

                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#111116] hover:bg-[#7040F5] px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-[#7040F5]/25 hover:shadow-md cursor-pointer ml-auto"
                            >
                              <span>Launch Solution</span>
                              <ArrowUpRight size={14} />
                            </a>
                          </div>
                        </div>

                      </motion.div>

                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
