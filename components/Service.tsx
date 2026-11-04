"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                 HANDCRAFTED PROFESSIONAL DUAL-TONE ICONS                   */
/* -------------------------------------------------------------------------- */

// 1. Cloud & DevOps Icon (Professional Multi-Tone Vector)
const CloudProIcon = ({ isPurple }: { isPurple: boolean }) => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <rect width="48" height="48" rx="14" fill={isPurple ? "rgba(255,255,255,0.15)" : "#EDE9FF"} />
    {/* Cloud Silhouette */}
    <path
      d="M34 26C36.7614 26 39 23.7614 39 21C39 18.4239 37.0543 16.2995 34.5422 16.0305C33.8741 11.5173 29.9868 8 25.2 8C20.2526 8 16.2008 11.8349 15.867 16.7118C13.1118 17.2014 11 19.578 11 22.4545C11 25.5172 13.4828 28 16.5455 28H34"
      stroke={isPurple ? "#FFFFFF" : "#7040F5"}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Server nodes beneath cloud */}
    <rect x="14" y="31" width="20" height="4.5" rx="2" fill={isPurple ? "rgba(255,255,255,0.3)" : "#7040F5"} />
    <circle cx="18" cy="33.25" r="1" fill="#34D399" />
    <circle cx="22" cy="33.25" r="1" fill="#34D399" />
    <circle cx="30" cy="33.25" r="1" fill="#38BDF8" />
    {/* Connection ray */}
    <path d="M24 25V30" stroke={isPurple ? "#A78BFA" : "#7040F5"} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 2. Software Engineering Icon (Developer Platform & Terminal)
const SoftwareProIcon = ({ isPurple }: { isPurple: boolean }) => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <rect width="48" height="48" rx="14" fill={isPurple ? "rgba(255,255,255,0.15)" : "#EDE9FF"} />
    {/* Terminal / Code Window */}
    <rect
      x="9"
      y="11"
      width="30"
      height="26"
      rx="6"
      stroke={isPurple ? "#FFFFFF" : "#7040F5"}
      strokeWidth="2.5"
    />
    <path d="M9 19H39" stroke={isPurple ? "rgba(255,255,255,0.3)" : "#C4B5FD"} strokeWidth="1.5" />
    <circle cx="15" cy="15" r="1.5" fill="#EF4444" />
    <circle cx="20" cy="15" r="1.5" fill="#F59E0B" />
    <circle cx="25" cy="15" r="1.5" fill="#10B981" />
    {/* Code Brackets & Prompt */}
    <path
      d="M16 25L20 28L16 31M23 31H28"
      stroke={isPurple ? "#A78BFA" : "#7040F5"}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 3. UI/UX & Product Design Icon (Artboard, Pen Tool & Layout Nodes)
const UiUxProIcon = ({ isPurple }: { isPurple: boolean }) => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <rect width="48" height="48" rx="14" fill={isPurple ? "rgba(255,255,255,0.15)" : "#EDE9FF"} />
    {/* Canvas Artboard Frame */}
    <rect
      x="9"
      y="11"
      width="30"
      height="26"
      rx="6"
      stroke={isPurple ? "#FFFFFF" : "#7040F5"}
      strokeWidth="2.5"
    />
    {/* Artboard Top Navigation Line */}
    <path d="M9 19H39" stroke={isPurple ? "rgba(255,255,255,0.3)" : "#C4B5FD"} strokeWidth="1.5" />
    <circle cx="14" cy="15" r="1.5" fill="#EF4444" />
    <circle cx="18.5" cy="15" r="1.5" fill="#F59E0B" />
    <circle cx="23" cy="15" r="1.5" fill="#10B981" />
    {/* UI Component Wireframe Card */}
    <rect
      x="13"
      y="23"
      width="9"
      height="10"
      rx="2"
      fill={isPurple ? "rgba(255,255,255,0.25)" : "#C4B5FD"}
    />
    {/* Design Vector Curve & Bezier Anchors */}
    <path
      d="M26 31C26 25 35 27 35 23"
      stroke={isPurple ? "#FFFFFF" : "#7040F5"}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <circle cx="26" cy="31" r="2" fill="#38BDF8" />
    <circle cx="35" cy="23" r="2" fill="#F472B6" />
    {/* Pen Tool Nib */}
    <path
      d="M31 23L35 19L37 21L33 25"
      stroke={isPurple ? "#FFFFFF" : "#7040F5"}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

// 4. AI & Automation Icon (Neural Intelligence Chip)
const AiProIcon = ({ isPurple }: { isPurple: boolean }) => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <rect width="48" height="48" rx="14" fill={isPurple ? "rgba(255,255,255,0.15)" : "#EDE9FF"} />
    {/* Microchip Outer Frame */}
    <rect
      x="13"
      y="13"
      width="22"
      height="22"
      rx="5"
      stroke={isPurple ? "#FFFFFF" : "#7040F5"}
      strokeWidth="2.5"
    />
    {/* Central Core */}
    <rect x="19" y="19" width="10" height="10" rx="3" fill={isPurple ? "#FFFFFF" : "#7040F5"} />
    <circle cx="24" cy="24" r="2" fill={isPurple ? "#7040F5" : "#FFFFFF"} />
    {/* Circuit Pins */}
    <path
      d="M18 9V13M24 9V13M30 9V13M18 35V39M24 35V39M30 35V39M9 18H13M9 24H13M9 30H13M35 18H39M35 24H39M35 30H39"
      stroke={isPurple ? "#A78BFA" : "#7040F5"}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// 5. Cybersecurity Icon (Zero-Trust Shield & Cryptographic Vault)
const SecurityProIcon = ({ isPurple }: { isPurple: boolean }) => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <rect width="48" height="48" rx="14" fill={isPurple ? "rgba(255,255,255,0.15)" : "#EDE9FF"} />
    {/* Shield Geometry */}
    <path
      d="M24 9L36 14V22C36 30.5 30.8 37.5 24 40C17.2 37.5 12 30.5 12 22V14L24 9Z"
      stroke={isPurple ? "#FFFFFF" : "#7040F5"}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Inner Lock / Key Mechanism */}
    <circle cx="24" cy="22" r="3.5" fill={isPurple ? "#FFFFFF" : "#7040F5"} />
    <path
      d="M24 25.5V30M22 30H26"
      stroke={isPurple ? "#FFFFFF" : "#7040F5"}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*                            SERVICES DATA CONFIG                            */
/* -------------------------------------------------------------------------- */

const services = [
  {
    tag: "CLOUD & DEVOPS",
    title: "Cloud Infrastructure & Scalability",
    description:
      "Enterprise AWS, Azure, and Google Cloud environments built with Kubernetes, Docker, and CI/CD automation for 99.99% uptime and zero-downtime scaling.",
    features: ["Serverless Architectures", "Multi-Region Redundancy", "Infrastructure as Code"],
    theme: "white",
    renderIcon: (isPurple: boolean) => <CloudProIcon isPurple={isPurple} />,
  },
  {
    tag: "SOFTWARE ENGINEERING",
    title: "Custom Enterprise Platforms",
    description:
      "High-throughput web applications, microservices, and distributed backend architectures engineered for high concurrency, ultra-low latency, and mission-critical reliability.",
    features: ["Next.js & Node.js Core", "API-First Architecture", "Ultra-Low Latency Routing"],
    theme: "purple",
    renderIcon: (isPurple: boolean) => <SoftwareProIcon isPurple={isPurple} />,
  },
  {
    tag: "UI/UX & PRODUCT DESIGN",
    title: "UI/UX Design & Prototyping",
    description:
      "User-centered design systems, responsive web & mobile interfaces, and high-fidelity Figma prototypes engineered for maximum engagement, accessibility, and effortless user flow.",
    features: ["Design Systems", "Figma Prototyping", "User Research & Wireframing"],
    theme: "white",
    renderIcon: (isPurple: boolean) => <UiUxProIcon isPurple={isPurple} />,
  },
  {
    tag: "AI & INTELLIGENCE",
    title: "Intelligent AI & Automation",
    description:
      "End-to-end integration of LLMs, proprietary AI agents, computer vision, and machine learning pipelines that automate complex operations with real-time feedback loops.",
    features: ["Custom LLM Workflows", "Predictive Analytics", "Self-Healing Automated Pipelines"],
    theme: "purple",
    renderIcon: (isPurple: boolean) => <AiProIcon isPurple={isPurple} />,
  },
  {
    tag: "SECURITY & DATA",
    title: "Cybersecurity & Data Systems",
    description:
      "Hardened application security, automated compliance auditing, role-based access control, and resilient cryptographic data storage architectures.",
    features: ["Zero-Trust Architecture", "Data Encryption at Rest", "SOC 2 & Regulatory Compliance"],
    theme: "white",
    renderIcon: (isPurple: boolean) => <SecurityProIcon isPurple={isPurple} />,
  },
];

/* -------------------------------------------------------------------------- */
/*                            SERVICES COMPONENT                              */
/* -------------------------------------------------------------------------- */

const Services = () => {
  // Default expanded card is UI/UX & Product Design (index 2 - center card)
  const [activeIndex, setActiveIndex] = useState<number>(2);

  return (
    <section id="services" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#FAF9FF] w-full flex justify-center overflow-hidden">
      <div className="max-w-7xl w-full">
        
        {/* CENTERED SECTION HEADING */}
        <div className="mb-10 sm:mb-14 lg:mb-16 text-center max-w-3xl mx-auto px-2">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Bricolage_Grotesque',sans-serif] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111116] leading-[1.2]"
          >
            Next-Gen Architecture &{" "}
            <span className="inline-block bg-[#7040F5] text-white px-3 sm:px-6 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl shadow-lg shadow-[#7040F5]/25">
              Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-[#626477] font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Empowering visionary enterprises with intuitive UI/UX design, scalable cloud systems, bespoke software engineering, and intelligent automation.
          </motion.p>
        </div>

        {/* 5 EXPANDING PANELS (DESKTOP: VERTICAL PILLARS EXPANDING HORIZONTALLY, MOBILE: ACCORDION) */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-3.5 lg:gap-4 w-full lg:h-[500px] xl:h-[510px]">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const isPurple = service.theme === "purple";

            return (
              <motion.div
                key={service.title}
                layout
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                transition={{
                  layout: { type: "spring", stiffness: 260, damping: 28 },
                }}
                className={`
                  relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-300
                  ${
                    isActive
                      ? "lg:flex-[3.2] xl:flex-[3.5] shadow-[0_20px_50px_rgba(112,64,245,0.18)]"
                      : "lg:flex-1 shadow-sm hover:shadow-md"
                  }
                  ${
                    isPurple
                      ? "bg-[#7040F5] text-white border border-[#5b2fe0]"
                      : "bg-white text-[#111116] border border-[#EDE9FF]"
                  }
                `}
              >
                {/* -------------------- COLLAPSED PILLAR STATE -------------------- */}
                {!isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full flex lg:flex-col items-center justify-between p-3.5 sm:p-5 lg:p-6 gap-3"
                  >
                    {/* Handcrafted Professional Dual-Tone Icon */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 shrink-0 transition-transform group-hover:scale-105">
                      {service.renderIcon(isPurple)}
                    </div>

                    {/* Title */}
                    <div className="flex-1 lg:flex-none flex items-center justify-start lg:justify-center px-2 lg:px-0 lg:my-auto min-w-0">
                      {/* Mobile Horizontal Title */}
                      <span
                        className={`block lg:hidden font-bold text-sm sm:text-base truncate ${
                          isPurple ? "text-white" : "text-[#111116]"
                        }`}
                      >
                        {service.title}
                      </span>

                      {/* Desktop Vertical Title */}
                      <span
                        className={`hidden lg:block font-bold text-sm xl:text-base tracking-wide whitespace-nowrap [writing-mode:vertical-rl] rotate-180 ${
                          isPurple ? "text-white/95" : "text-[#111116]"
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>

                    {/* Arrow Indicator */}
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                        isPurple
                          ? "bg-white/10 text-white border-white/20"
                          : "bg-[#FAF9FF] text-[#7040F5] border-[#EDE9FF]"
                      }`}
                    >
                      <ArrowRight size={14} className="lg:rotate-90" />
                    </div>
                  </motion.div>
                )}

                {/* -------------------- EXPANDED CONTENT STATE -------------------- */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                    className="w-full h-full flex flex-col justify-between p-5 sm:p-7 md:p-8 lg:p-7 xl:p-9 select-none min-h-[380px] sm:min-h-[400px] lg:min-h-0"
                  >
                    {/* Top Row: Handcrafted Icon + Tag Badge */}
                    <div>
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 shadow-md rounded-2xl">
                          {service.renderIcon(isPurple)}
                        </div>

                        <span
                          className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border ${
                            isPurple
                              ? "bg-white/20 text-white border-white/30"
                              : "bg-[#EDE9FF] text-[#7040F5] border-[#DDD6FE]"
                          }`}
                        >
                          {service.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold tracking-tight mb-2.5 sm:mb-3.5 leading-snug ${
                          isPurple ? "text-white" : "text-[#111116]"
                        }`}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-normal ${
                          isPurple ? "text-white/90" : "text-[#626477]"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Row: Feature Pills + Explore Link */}
                    <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-current/15">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className={`text-[10px] sm:text-xs font-medium px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl border ${
                              isPurple
                                ? "bg-white/15 text-white border-white/25"
                                : "bg-[#FAF9FF] text-[#111116] border-[#EDE9FF]"
                            }`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div
                        className={`inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold tracking-wide transition-transform hover:translate-x-1 ${
                          isPurple ? "text-white" : "text-[#7040F5]"
                        }`}
                      >
                        <span>Explore Architecture</span>
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
