"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// High-fidelity Tech Logos SVG Components
const ReactIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
    <circle cx="0" cy="0" r="2.05" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 180 180" fill="currentColor">
    <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
      <circle cx="90" cy="90" fill="black" r="90" />
    </mask>
    <g mask="url(#mask0)">
      <circle cx="90" cy="90" fill="currentColor" r="90" />
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
      <rect fill="white" height="72" width="12" x="115" y="54" />
    </g>
  </svg>
);

const TSIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <rect width="32" height="32" rx="6" fill="#3178C6" />
    <path d="M12.5 13.5H7.5V11.5H19.5V13.5H14.5V23H12.5V13.5ZM21.5 20.2C22 20.7 22.8 21 23.8 21C25 21 25.7 20.4 25.7 19.5C25.7 18.7 25.1 18.2 23.8 17.7L22.8 17.3C21.1 16.6 20.2 15.6 20.2 14.1C20.2 12.3 21.6 11 23.7 11C25.1 11 26.2 11.5 27 12.3L25.8 13.8C25.2 13.3 24.5 13 23.7 13C22.7 13 22.1 13.5 22.1 14.2C22.1 14.9 22.6 15.3 23.7 15.7L24.7 16.1C26.7 16.9 27.6 17.9 27.6 19.4C27.6 21.4 26 22.8 23.8 22.8C22.1 22.8 20.8 22.1 19.8 21L21.5 20.2Z" fill="white" />
  </svg>
);

const PythonIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <path d="M15.8 3C11.5 3 9 5 9 7.5V10H16V11H7C4.8 11 3 13 3 16C3 19 4.8 21 7 21H8V19.2C8 17 9.8 15 12 15H17C18.6 15 20 13.6 20 12V6.8C20 4.7 18.1 3 15.8 3ZM12.5 5.5C13.3 5.5 14 6.2 14 7C14 7.8 13.3 8.5 12.5 8.5C11.7 8.5 11 7.8 11 7C11 6.2 11.7 5.5 12.5 5.5Z" fill="#387EB8" />
    <path d="M16.2 29C20.5 29 23 27 23 24.5V22H16V21H25C27.2 21 29 19 29 16C29 13 27.2 11 25 11H24V12.8C24 15 22.2 17 20 17H15C13.4 17 12 18.4 12 20V25.2C12 27.3 13.9 29 16.2 29ZM19.5 26.5C18.7 26.5 18 25.8 18 25C18 24.2 18.7 23.5 19.5 23.5C20.3 23.5 21 24.2 21 25C21 25.8 20.3 26.5 19.5 26.5Z" fill="#FFE873" />
  </svg>
);

const NodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <path d="M16 3L4 10V22L16 29L28 22V10L16 3Z" fill="#339933" />
    <path d="M16 7L8 11.5V20.5L16 25L24 20.5V11.5L16 7Z" fill="white" />
  </svg>
);

const DockerIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <path d="M29.5 13.8C28.8 13 27.5 12.6 26.5 12.8C26.1 11.2 24.8 10 23.2 9.8L22.5 11.5C23.5 11.8 24.2 12.8 24.2 14C24.2 14.2 24.1 14.5 24 14.7C23.2 14.4 22 14.5 21.2 15C19.8 14.8 18.5 15.2 17.5 16H3.5C2.7 16 2 16.7 2 17.5C2 21.5 5.5 26 13.5 26C21.5 26 26.8 21.5 27.5 17.5C28.5 17.2 30 16 30 14.5C30 14.2 29.8 14 29.5 13.8ZM9 12H6V15H9V12ZM13 12H10V15H13V12ZM17 12H14V15H17V12ZM13 8H10V11H13V8ZM17 8H14V11H17V8ZM21 12H18V15H21V12ZM17 4H14V7H17V4Z" fill="#2496ED" />
  </svg>
);

const AWSIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <path d="M9.5 13C8.5 13 7.8 13.2 7.2 13.6C6.6 14 6.2 14.6 6.2 15.4C6.2 16.3 6.6 17 7.2 17.4C7.8 17.8 8.7 18 9.7 18C10.8 18 11.7 17.7 12.4 17.1V15.2C11.8 15.6 11.2 15.9 10.4 15.9C9.7 15.9 9.2 15.7 8.9 15.4C8.6 15.1 8.5 14.8 8.5 14.4C8.5 14.1 8.6 13.8 8.8 13.6C9.1 13.4 9.5 13.3 10.1 13.3C10.8 13.3 11.5 13.5 12.2 13.8V12.2C11.4 12 10.5 11.9 9.5 11.9V13ZM15.5 18H17.5V11H15.5V18ZM25.5 11H23.5V15.2C22.8 14.5 21.9 14.1 20.8 14.1C19.7 14.1 18.8 14.5 18.2 15.2C17.6 15.9 17.3 16.9 17.3 18C17.3 19.1 17.6 20.1 18.2 20.8C18.8 21.5 19.7 21.9 20.8 21.9C21.9 21.9 22.8 21.5 23.5 20.8V21.5H25.5V11ZM21.5 20C20.9 20 20.4 19.8 20.1 19.3C19.8 18.8 19.6 18.2 19.6 17.5C19.6 16.8 19.8 16.2 20.1 15.7C20.4 15.2 20.9 15 21.5 15C22.1 15 22.6 15.2 22.9 15.7C23.2 16.2 23.4 16.8 23.4 17.5C23.4 18.2 23.2 18.8 22.9 19.3C22.6 19.8 22.1 20 21.5 20ZM6 22.5C12 25.5 20 25.5 26 22.5" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </svg>
);

const PostgresIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <path d="M16 2C8.3 2 2 8.3 2 16C2 23.7 8.3 30 16 30C23.7 30 30 23.7 30 16C30 8.3 23.7 2 16 2ZM17.2 23.5V20.8C19 20.5 20.5 19.2 21 17.5C21.5 15.8 20.8 14 19.5 13C19.8 11.5 19 10 17.5 9.5C16 9 14.5 9.8 14 11.2C13 11 12 11.5 11.5 12.5C10.5 14 11 16 12.5 16.8V23.5H17.2Z" fill="#336791" />
  </svg>
);

const TailwindIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <path d="M9 13.5C10.5 10.5 13 9.5 16.5 10.5C20.5 11.7 22 14.5 24 14.5C25.5 14.5 26.8 13.5 28 11.5C26.5 14.5 24 15.5 20.5 14.5C16.5 13.3 15 10.5 13 10.5C11.5 10.5 10.2 11.5 9 13.5ZM4 20.5C5.5 17.5 8 16.5 11.5 17.5C15.5 18.7 17 21.5 19 21.5C20.5 21.5 21.8 20.5 23 18.5C21.5 21.5 19 22.5 15.5 21.5C11.5 20.3 10 17.5 8 17.5C6.5 17.5 5.2 18.5 4 20.5Z" fill="#38BDF8" />
  </svg>
);

const MongoIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <path d="M16 2C15.5 2 15 3.5 15 4.5C15 11.5 9 14 9 18.5C9 23 12 26 15.5 26.5C15.8 26.5 16 28 16 30C16 28 16.2 26.5 16.5 26.5C20 26 23 23 23 18.5C23 14 17 11.5 17 4.5C17 3.5 16.5 2 16 2Z" fill="#47A248" />
  </svg>
);

const K8sIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <path d="M16 3L5 9.5V22.5L16 29L27 22.5V9.5L16 3ZM16 7L23 11V19L16 23L9 19V11L16 7Z" fill="#326CE5" />
  </svg>
);

// 5 SERVICES (SOFTWARE ENGINEERING RENAMED TO WEB DEVELOPMENT)
export const servicesList = [
  "Cloud & DevOps",
  "Web Development",
  "UI/UX & Product Design",
  "AI & Automation",
  "Cybersecurity & Data",
] as const;

type ServiceType = (typeof servicesList)[number];

const serviceTechMap: Record<
  ServiceType,
  {
    purple: { name: string; Icon: React.ComponentType<{ className?: string }> }[];
    white: { name: string; Icon: React.ComponentType<{ className?: string }> }[];
  }
> = {
  "Cloud & DevOps": {
    purple: [
      { name: "AWS Cloud", Icon: AWSIcon },
      { name: "Docker", Icon: DockerIcon },
      { name: "Kubernetes", Icon: K8sIcon },
      { name: "Terraform", Icon: AWSIcon },
      { name: "CI/CD Actions", Icon: NodeIcon },
      { name: "Google Cloud", Icon: AWSIcon },
      { name: "Prometheus", Icon: DockerIcon },
      { name: "Nginx Core", Icon: NodeIcon },
    ],
    white: [
      { name: "Linux OS", Icon: NodeIcon },
      { name: "Helm Charts", Icon: K8sIcon },
      { name: "Grafana", Icon: DockerIcon },
      { name: "Cloudflare", Icon: AWSIcon },
      { name: "Datadog", Icon: DockerIcon },
      { name: "Ansible", Icon: PythonIcon },
      { name: "Serverless", Icon: AWSIcon },
      { name: "Microservices", Icon: K8sIcon },
    ],
  },
  "Web Development": {
    purple: [
      { name: "Next.js 16", Icon: NextIcon },
      { name: "TypeScript", Icon: TSIcon },
      { name: "React 19", Icon: ReactIcon },
      { name: "Node.js", Icon: NodeIcon },
      { name: "PostgreSQL", Icon: PostgresIcon },
      { name: "GraphQL", Icon: TSIcon },
      { name: "Tailwind CSS", Icon: TailwindIcon },
      { name: "Redis Cache", Icon: MongoIcon },
    ],
    white: [
      { name: "Python Core", Icon: PythonIcon },
      { name: "GoLang", Icon: TSIcon },
      { name: "REST APIs", Icon: NodeIcon },
      { name: "MongoDB", Icon: MongoIcon },
      { name: "Prisma ORM", Icon: NextIcon },
      { name: "Apache Kafka", Icon: DockerIcon },
      { name: "WebSockets", Icon: ReactIcon },
      { name: "FastAPI", Icon: PythonIcon },
    ],
  },
  "UI/UX & Product Design": {
    purple: [
      { name: "Figma Pro", Icon: ReactIcon },
      { name: "Design Systems", Icon: TailwindIcon },
      { name: "Wireframing", Icon: TSIcon },
      { name: "Micro-Interactions", Icon: ReactIcon },
      { name: "Framer Motion", Icon: NextIcon },
      { name: "User Research", Icon: TSIcon },
      { name: "UI Components", Icon: TailwindIcon },
      { name: "Prototyping", Icon: ReactIcon },
    ],
    white: [
      { name: "Responsive Layouts", Icon: TailwindIcon },
      { name: "SVG Vectors", Icon: ReactIcon },
      { name: "Typography", Icon: NextIcon },
      { name: "WCAG Accessibility", Icon: TSIcon },
      { name: "Interaction Design", Icon: ReactIcon },
      { name: "Design Tokens", Icon: TailwindIcon },
      { name: "Design Handoff", Icon: TSIcon },
      { name: "Storybook", Icon: ReactIcon },
    ],
  },
  "AI & Automation": {
    purple: [
      { name: "Python AI", Icon: PythonIcon },
      { name: "LangChain", Icon: PythonIcon },
      { name: "PyTorch", Icon: PythonIcon },
      { name: "OpenAI API", Icon: NextIcon },
      { name: "Anthropic Claude", Icon: TSIcon },
      { name: "Vector Database", Icon: MongoIcon },
      { name: "Hugging Face", Icon: PythonIcon },
      { name: "Llama 3 Core", Icon: PythonIcon },
    ],
    white: [
      { name: "Autonomous Agents", Icon: PythonIcon },
      { name: "NLP Pipelines", Icon: PythonIcon },
      { name: "FastAPI ML", Icon: PythonIcon },
      { name: "ChromaDB", Icon: MongoIcon },
      { name: "Model Fine-Tuning", Icon: PythonIcon },
      { name: "TensorFlow", Icon: PythonIcon },
      { name: "RAG Architecture", Icon: NextIcon },
      { name: "AI Automation", Icon: TSIcon },
    ],
  },
  "Cybersecurity & Data": {
    purple: [
      { name: "Zero Trust Arch", Icon: AWSIcon },
      { name: "OAuth 2.0 / JWT", Icon: TSIcon },
      { name: "AES-256 Encryption", Icon: PostgresIcon },
      { name: "Cloudflare WAF", Icon: AWSIcon },
      { name: "SOC 2 Security", Icon: DockerIcon },
      { name: "Penetration Testing", Icon: NodeIcon },
      { name: "Network Hardening", Icon: K8sIcon },
      { name: "Role-Based RBAC", Icon: TSIcon },
    ],
    white: [
      { name: "IAM Security", Icon: AWSIcon },
      { name: "HashiCorp Vault", Icon: DockerIcon },
      { name: "SSL / TLS 1.3", Icon: NextIcon },
      { name: "Audit Logging", Icon: PostgresIcon },
      { name: "PostgreSQL Hardening", Icon: PostgresIcon },
      { name: "DDoS Mitigation", Icon: AWSIcon },
      { name: "API Gateway Auth", Icon: NodeIcon },
      { name: "Secret Management", Icon: DockerIcon },
    ],
  },
};

const Skills = () => {
  // Default selected service
  const [selectedService, setSelectedService] = useState<ServiceType>("Web Development");

  // Draggable & Swipeable container state
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 4) {
      setHasDragged(true);
    }
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const currentStack = serviceTechMap[selectedService];

  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#FAF9FF] overflow-hidden flex flex-col items-center relative">
      
      {/* 1. CENTERED SECTION HEADING (NO SUB-PARAGRAPH) */}
      <div className="max-w-4xl w-full px-6 mb-8 sm:mb-12 text-center z-10 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111116] leading-[1.2]"
        >
          Enterprise Technologies &{" "}
          <span className="inline-block bg-[#7040F5] text-white px-4 sm:px-6 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl shadow-lg shadow-[#7040F5]/25">
            Tech Stack
          </span>
        </motion.h2>

        {/* 2. DRAGGABLE & SWIPEABLE SINGLE HORIZONTAL LINE (2 & 3RD HALF SHOWN WITH SIDE FADE MASKS) */}
        <div className="relative mt-8 w-full max-w-[340px] sm:max-w-[480px] md:max-w-[560px]">
          
          {/* Left Edge Shadow / Fade Mask */}
          <div className="absolute left-0 inset-y-0 w-8 sm:w-12 bg-gradient-to-r from-[#FAF9FF] via-[#FAF9FF]/90 to-transparent pointer-events-none z-10" />

          {/* Right Edge Shadow / Fade Mask */}
          <div className="absolute right-0 inset-y-0 w-8 sm:w-12 bg-gradient-to-l from-[#FAF9FF] via-[#FAF9FF]/90 to-transparent pointer-events-none z-10" />

          {/* Horizontal Scroll / Drag Track */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={`flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth px-6 py-2 select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {servicesList.map((service) => {
              const isActive = selectedService === service;
              return (
                <button
                  key={service}
                  onClick={() => {
                    if (!hasDragged) {
                      setSelectedService(service);
                    }
                  }}
                  className={`shrink-0 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer select-none shadow-none ${
                    isActive
                      ? "bg-[#7040F5] text-white border border-[#7040F5]"
                      : "bg-white text-[#626477] border border-[#EDE9FF] hover:border-[#7040F5]/50 hover:text-[#111116] hover:bg-[#FAF9FF]"
                  }`}
                >
                  {service}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* 3. CROSSING "X" STREAMING RIBBONS LAYER */}
      <div className="relative w-full py-14 sm:py-20 flex items-center justify-center overflow-hidden min-h-[290px] sm:min-h-[360px] md:min-h-[400px]">
        
        {/* Soft Ambient Center Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] sm:w-[450px] h-[180px] sm:h-[250px] bg-[#EDE9FF]/70 blur-3xl rounded-full" />
        </div>

        {/* RIBBON 1: PURPLE COLOR (Tilted -10deg mobile, -8deg tablet, -6deg desktop for sharp X shape) */}
        <div className="absolute w-[280%] sm:w-[190%] md:w-[150%] -rotate-10 sm:-rotate-8 md:-rotate-6 z-20 shadow-2xl py-2 sm:py-3 md:py-4 bg-[#7040F5] border-y border-[#5b2fe0] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-3 sm:gap-5 md:gap-7 items-center"
              >
                {[...currentStack.purple, ...currentStack.purple, ...currentStack.purple].map((tech, index) => {
                  const IconComp = tech.Icon;
                  return (
                    <div
                      key={index}
                      className="inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white hover:bg-white hover:text-[#7040F5] transition-all duration-200 cursor-pointer shadow-sm group shrink-0"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-white/20 group-hover:bg-transparent flex items-center justify-center p-0.5">
                        <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wide uppercase">
                        {tech.name}
                      </span>
                      <span className="opacity-40 text-white text-[10px] sm:text-xs md:text-sm">•</span>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIBBON 2: WHITE COLOR (Tilted +10deg mobile, +8deg tablet, +6deg desktop for sharp X shape) */}
        <div className="absolute w-[280%] sm:w-[190%] md:w-[150%] rotate-10 sm:rotate-8 md:rotate-6 z-10 shadow-xl py-2 sm:py-3 md:py-4 bg-white border-y border-[#EDE9FF] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-3 sm:gap-5 md:gap-7 items-center"
              >
                {[...currentStack.white, ...currentStack.white, ...currentStack.white].map((tech, index) => {
                  const IconComp = tech.Icon;
                  return (
                    <div
                      key={index}
                      className="inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full bg-[#FAF9FF] border border-[#EDE9FF] text-[#111116] hover:border-[#7040F5] hover:text-[#7040F5] transition-all duration-200 cursor-pointer shadow-xs group shrink-0"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center p-0.5">
                        <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wide uppercase text-[#111116] group-hover:text-[#7040F5]">
                        {tech.name}
                      </span>
                      <span className="opacity-30 text-[#626477] text-[10px] sm:text-xs md:text-sm">•</span>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};

export default Skills;
