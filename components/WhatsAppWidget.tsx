"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, ShieldCheck } from "lucide-react";

// Official WhatsApp Vector Icon
const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.59L5.06 16.27C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.56 14.41C16.31 14.29 15.1 13.69 14.88 13.61C14.65 13.53 14.49 13.49 14.32 13.73C14.16 13.98 13.69 14.53 13.55 14.7C13.4 14.86 13.26 14.88 13.01 14.76C12.76 14.63 11.96 14.37 11.01 13.52C10.27 12.86 9.77 12.05 9.63 11.8C9.48 11.55 9.61 11.42 9.74 11.3C9.85 11.19 9.98 11.02 10.11 10.87C10.23 10.72 10.27 10.62 10.35 10.45C10.44 10.29 10.39 10.15 10.33 10.02C10.27 9.9 9.77 8.68 9.57 8.18C9.37 7.69 9.17 7.76 9.02 7.75C8.88 7.74 8.71 7.74 8.55 7.74C8.38 7.74 8.12 7.8 7.9 8.04C7.67 8.29 7.03 8.89 7.03 10.11C7.03 11.33 7.92 12.51 8.04 12.67C8.17 12.84 9.79 15.33 12.26 16.4C12.85 16.65 13.31 16.81 13.66 16.92C14.25 17.11 14.79 17.08 15.22 17.02C15.7 16.95 16.69 16.42 16.89 15.85C17.1 15.28 17.1 14.79 17.04 14.69C16.97 14.59 16.81 14.53 16.56 14.41Z" />
  </svg>
);

interface WhatsAppContact {
  label: string;
  role: string;
  number: string;
  rawNumber: string;
  message: string;
}

const contacts: WhatsAppContact[] = [
  {
    label: "Project Consultation & Inquiries",
    role: "Digital Solutions & Client Engagement",
    number: "0371 5909509",
    rawNumber: "923715909509",
    message:
      "Hello AS CODEX! I would like to discuss a new software development / UI/UX project with your team. Could we schedule a consultation?",
  },
  {
    label: "Direct Technical Advisory",
    role: "Engineering Architecture & DevOps Lead",
    number: "0326 6455353",
    rawNumber: "923266455353",
    message:
      "Hi AS CODEX! I am reaching out to inquire about your custom digital solutions & enterprise services. Looking forward to connecting.",
  },
];

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openWhatsApp = (contact: WhatsAppContact) => {
    const encoded = encodeURIComponent(contact.message);
    const url = `https://wa.me/${contact.rawNumber}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[999] flex flex-col items-end select-none pointer-events-auto"
    >
      {/* POPUP CARD */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="mb-3.5 w-[92vw] sm:w-[370px] max-w-[390px] rounded-3xl bg-white border border-[#EDE9FF] shadow-[0_20px_50px_-15px_rgba(17,17,22,0.18)] overflow-hidden"
          >
            {/* Header (Clean, No dots, No blinking) */}
            <div className="bg-[#111116] text-white p-5 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-sm">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-sm tracking-tight text-white">
                      AS CODEX Support
                    </h3>
                    <p className="text-[11px] text-zinc-300 font-medium">
                      Typically replies within minutes
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white flex items-center justify-center transition-colors active:scale-90"
                  aria-label="Close WhatsApp chat modal"
                >
                  <X size={16} />
                </button>
              </div>

              <p className="mt-3 text-xs text-zinc-300 leading-relaxed font-normal">
                Hello! 👋 Welcome to <strong className="text-white">AS CODEX</strong>. Select a WhatsApp line below to connect directly with our team:
              </p>
            </div>

            {/* Contacts List (Clean, No badge pills, No glowing) */}
            <div className="p-4 space-y-2.5 bg-[#FAF9FF]/80">
              {contacts.map((contact, idx) => (
                <button
                  key={idx}
                  onClick={() => openWhatsApp(contact)}
                  className="group w-full text-left p-3.5 rounded-2xl bg-white border border-[#EDE9FF] hover:border-[#7040F5]/40 hover:bg-[#FAF9FF] shadow-xs hover:shadow-sm transition-all duration-200 flex items-center justify-between gap-3 active:scale-[0.98]"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-200 mt-0.5">
                      <WhatsAppIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#111116] group-hover:text-[#7040F5] transition-colors block">
                        {contact.label}
                      </span>
                      <p className="text-[11px] text-[#626477] mt-0.5">
                        {contact.role}
                      </p>
                      <p className="text-xs font-mono font-bold text-[#111116] mt-1 tracking-wide">
                        {contact.number}
                      </p>
                    </div>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-[#FAF9FF] group-hover:bg-[#7040F5] text-[#626477] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200">
                    <ArrowUpRight size={14} />
                  </div>
                </button>
              ))}
            </div>

            {/* Footer Guarantee */}
            <div className="px-5 py-2.5 bg-white border-t border-[#EDE9FF] flex items-center justify-between text-[10px] text-[#626477] font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-[#7040F5]" />
                100% NDA & Privacy Protected
              </span>
              <span className="text-zinc-400">Direct Chat</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING TRIGGER BUTTON (SOLID, NO GLOW, NO BLINK / WAVE) */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp direct chat"
        className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5c] text-white shadow-md shadow-black/15 hover:shadow-lg transition-all duration-200"
      >
        <div className="relative z-10 flex items-center justify-center">
          {isOpen ? (
            <X size={24} strokeWidth={2.2} />
          ) : (
            <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
          )}
        </div>
      </motion.button>
    </div>
  );
}
