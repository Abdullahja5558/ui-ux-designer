"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  category: string;
  type: string;
  year: string;
  link: string;
  image: string;
  description: string;
  tech: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "AJ Code — Cloud Dev Platform",
    category: "Cloud & SaaS",
    type: "Developer Tooling • Web App",
    year: "2024",
    link: "https://aj-code.vercel.app",
    image: "/aj-code-p1.png",
    description: "Cloud-native code workspace with live collaborative synchronization, WebAssembly sandbox, and automated CI deployment.",
    tech: ["Next.js 15", "TypeScript", "Docker", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "PDFfilz — Private PDF Suite",
    category: "Cloud & SaaS",
    type: "Client-Side WebAssembly • SaaS Utility",
    year: "2024",
    link: "https://pdffilz.com",
    image: "/pdf-p7.png",
    description: "100% private in-browser document suite. Fast and highly utilitarian tools to merge, compress, convert, edit, and sign documents with zero server uploads.",
    tech: ["Next.js", "WebAssembly", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Corelytics IO — Business Intelligence",
    category: "Cloud & SaaS",
    type: "Enterprise Analytics • Big Data SaaS",
    year: "2024",
    link: "https://corelytics-io.vercel.app",
    image: "/saas-p11.png",
    description: "Empowering businesses by stripping away data noise and revealing the truth beneath. Helping global teams across 6 continents make smarter decisions.",
    tech: ["Next.js", "Data Telemetry", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Lex Pro AI — Legal Intelligence",
    category: "AI & Automation",
    type: "AI Legal Powerhouse • LegalTech",
    year: "2024",
    link: "https://lexpro-ai.vercel.app",
    image: "/lex-p10.png",
    description: "The Future of Justice. Elite legal AI platform translating complex statutory procedures and contract analysis into clear, actionable insights.",
    tech: ["Next.js", "Legal AI Pipeline", "Tailwind CSS", "FastAPI"],
  },
  {
    id: 5,
    title: "M.Studio — Digital Sanctuary",
    category: "Web Platforms",
    type: "High-End Architecture • Creative Dev",
    year: "2026",
    link: "https://m-studio-sigma.vercel.app",
    image: "/mss-p9.png",
    description: "Beyond the Pixel Perfect. Digital sanctuary where architecture meets high-end development: reducing clutter until your vision can breathe.",
    tech: ["Next.js 15", "Creative Engineering", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 6,
    title: "GBCC — Engineering & Infrastructure",
    category: "Web Platforms",
    type: "Commercial Infrastructure & Civil Works",
    year: "2024",
    link: "https://gbcc.com.co",
    image: "/gbcc-p8.png",
    description: "Structure → Waterproofing → Maintenance → Finishing. Delivering complete structural works, advanced waterproofing, and high-quality finishing solutions.",
    tech: ["Next.js", "Corporate Portal", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 7,
    title: "Noor-ul-Quran — EdTech System",
    category: "Web Platforms",
    type: "Multi-Region Content Delivery Platform",
    year: "2024",
    link: "https://noor-ulquran.vercel.app",
    image: "/quran-p3.png",
    description: "Global educational streaming platform serving audio, interactive recitation analytics, and structured learning modules.",
    tech: ["Next.js", "PostgreSQL", "Cloudflare CDN", "Tailwind CSS"],
  },
  {
    id: 8,
    title: "Bucceo — Global Booking Engine",
    category: "Web Platforms",
    type: "Real-time Booking & Reservation Engine",
    year: "2024",
    link: "https://bucceo-diving.vercel.app",
    image: "/diving-p4.png",
    description: "Multi-currency tour booking engine with live calendar inventory, Stripe Connect payouts, and automated notifications.",
    tech: ["React", "Node.js", "Stripe API", "MongoDB"],
  },
];

const categories = ["All", "Cloud & SaaS", "Web Platforms", "AI & Automation"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#FAF9FF] flex flex-col items-center px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl w-full">
        
        {/* CENTERED SECTION HEADING (NO BADGE PILL, REDUCED SPACING) */}
        <div className="mb-12 sm:mb-14 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111116] leading-[1.2]"
          >
            Featured Case Studies &{" "}
            <span className="inline-block bg-[#7040F5] text-white px-4 sm:px-6 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl shadow-lg shadow-[#7040F5]/25">
              IT Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3.5 text-sm sm:text-base md:text-lg text-[#626477] font-normal leading-relaxed"
          >
            Explore enterprise platforms, distributed cloud software, and production applications engineered for real-world impact.
          </motion.p>

          {/* FILTER BUTTONS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#7040F5] text-white shadow-sm"
                    : "bg-white text-[#626477] border border-[#EDE9FF] hover:border-[#7040F5] hover:text-[#111116]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-COLUMN PROJECT GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-4 sm:gap-5 w-full"
              >
                {/* 1. PURE PROJECT IMAGE (NO BOX, NO BORDER, NO HOVER ANIMATION) */}
                <div className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl sm:rounded-3xl border-0 shadow-none">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    priority={project.id <= 2}
                    className="object-contain sm:object-cover w-full h-full select-none pointer-events-none"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>

                {/* 2. DEDICATED CONTENT BOX (HAS BOX, BORDER, PADDING & SHADOW) */}
                <div className="bg-white border border-[#EDE9FF] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-[0_4px_24px_rgba(112,64,245,0.04)] hover:border-[#7040F5]/40 hover:shadow-[0_12px_36px_rgba(112,64,245,0.08)] transition-all duration-300 flex flex-col justify-between flex-1">
                  <div>
                    {/* Title & Year */}
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#111116] hover:text-[#7040F5] transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <span className="text-xs font-bold text-[#626477] bg-[#FAF9FF] border border-[#EDE9FF] px-2.5 py-1 rounded-lg shrink-0">
                        {project.year}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#626477] font-normal leading-relaxed mb-5">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-[#EDE9FF] mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] sm:text-[11px] font-medium text-[#111116] bg-[#FAF9FF] border border-[#EDE9FF] px-2.5 py-1 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#111116] hover:bg-[#7040F5] px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-[#7040F5]/25 hover:shadow-md cursor-pointer"
                    >
                      <span>Launch Solution</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* VIEW ALL PROJECTS / VIEW MORE BUTTON */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 rounded-full bg-[#111116] text-white hover:bg-[#7040F5] transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#7040F5]/25 active:scale-95 cursor-pointer"
          >
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
              Explore All Projects & Case Studies
            </span>
            <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-white group-hover:text-[#7040F5] flex items-center justify-center transition-all">
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;
