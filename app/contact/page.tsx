"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  User,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  Building2,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDeploy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_zwcmbam",
        "template_us7l64u",
        formRef.current,
        "7CihZxkYkk0Rbza8y"
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          alert("Unable to send inquiry. Please try again or email directly.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAF9FF] pt-32 sm:pt-40 pb-20 px-4 sm:px-6 md:px-12 flex flex-col items-center relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#EDE9FF]/70 blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl w-full">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#626477] hover:text-[#7040F5] transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EDE9FF] shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-[#7040F5] animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#626477]">
                Start a Conversation
              </span>
            </div>

            <h1 className="font-['Bricolage_Grotesque',sans-serif] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111116] leading-[1.2]">
              Let's Build Something{" "}
              <span className="inline-block bg-[#7040F5] text-white px-4 sm:px-6 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl shadow-lg shadow-[#7040F5]/25">
                Extraordinary
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#626477] font-normal leading-relaxed max-w-2xl mx-auto">
              Have an upcoming enterprise initiative, cloud architecture requirement, or AI integration? Tell us about your goals.
            </p>
          </div>

          {/* Form & Contact Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 1-Col: Direct Channels */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EDE9FF] shadow-sm">
                <h3 className="text-lg font-bold text-[#111116] mb-4">Direct Communication</h3>
                <div className="space-y-4 text-xs sm:text-sm text-[#626477]">
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-[#7040F5] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#111116]">Email Inquiries</p>
                      <a href="mailto:contact@ascodex.com" className="text-[#7040F5] hover:underline">
                        contact@ascodex.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-[#F0EDFF]">
                    <Building2 size={18} className="text-[#7040F5] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#111116]">Global Delivery</p>
                      <p>Remote & On-Premises Architecture Teams</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-[#F0EDFF]">
                    <ShieldCheck size={18} className="text-[#7040F5] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#111116]">Strict Confidentiality</p>
                      <p>NDA signed before technical discovery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 2-Cols: Interactive Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-[#EDE9FF] shadow-[0_12px_40px_rgba(112,64,245,0.06)]">
                <AnimatePresence mode="wait">
                  {!isSent ? (
                    <motion.form
                      ref={formRef}
                      key="contact-page-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleDeploy}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#111116] mb-2">
                            Full Name
                          </label>
                          <div className="relative">
                            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#626477]" />
                            <input
                              type="text"
                              name="from_name"
                              required
                              placeholder="Alex Morgan"
                              className="w-full bg-[#FAF9FF] border border-[#EDE9FF] focus:border-[#7040F5] focus:outline-none rounded-2xl py-3.5 pl-11 pr-4 text-sm text-[#111116] placeholder:text-[#626477]/50 transition-colors"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#111116] mb-2">
                            Corporate Email
                          </label>
                          <div className="relative">
                            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#626477]" />
                            <input
                              type="email"
                              name="reply_to"
                              required
                              placeholder="alex@enterprise.com"
                              className="w-full bg-[#FAF9FF] border border-[#EDE9FF] focus:border-[#7040F5] focus:outline-none rounded-2xl py-3.5 pl-11 pr-4 text-sm text-[#111116] placeholder:text-[#626477]/50 transition-colors"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Solution Area */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#111116] mb-2">
                          Solution Area
                        </label>
                        <select
                          name="project_type"
                          className="w-full bg-[#FAF9FF] border border-[#EDE9FF] focus:border-[#7040F5] focus:outline-none rounded-2xl py-3.5 px-4 text-sm text-[#111116] transition-colors"
                        >
                          <option value="Cloud & DevOps Infrastructure">Cloud & DevOps Infrastructure</option>
                          <option value="Custom Enterprise Software Platform">Custom Enterprise Software Platform</option>
                          <option value="AI Integration & Intelligent Automation">AI Integration & Intelligent Automation</option>
                          <option value="High-Security Web & Multiplatform App">High-Security Web & Multiplatform App</option>
                          <option value="General Architecture Consultation">General Architecture Consultation</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#111116] mb-2">
                          Project Overview & Requirements
                        </label>
                        <div className="relative">
                          <MessageSquare size={16} className="absolute left-4 top-4 text-[#626477]" />
                          <textarea
                            name="message"
                            rows={5}
                            required
                            placeholder="Tell us about your technical goals, timeline, and architecture requirements..."
                            className="w-full bg-[#FAF9FF] border border-[#EDE9FF] focus:border-[#7040F5] focus:outline-none rounded-2xl py-3.5 pl-11 pr-4 text-sm text-[#111116] placeholder:text-[#626477]/50 transition-colors resize-none"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-xs text-[#626477]">
                          <ShieldCheck size={16} className="text-[#7040F5]" />
                          <span>NDA & Confidentiality Guaranteed</span>
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#7040F5] hover:bg-[#5b2fe0] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#7040F5]/20 active:scale-95 disabled:opacity-70 cursor-pointer"
                        >
                          {loading ? (
                            <>
                              <Loader2 size={16} className="animate-spin" />
                              <span>Transmitting...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Project Brief</span>
                              <Send size={14} />
                            </>
                          )}
                        </button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="page-success-card"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center flex flex-col items-center justify-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#EDE9FF] text-[#7040F5] flex items-center justify-center mb-6">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#111116] mb-2">Project Brief Received</h3>
                      <p className="text-sm text-[#626477] max-w-md mx-auto mb-6">
                        Our architecture team will review your requirements and reach out within 24 business hours to schedule a discovery session.
                      </p>
                      <button
                        onClick={() => setIsSent(false)}
                        className="px-6 py-2.5 rounded-full bg-[#111116] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#7040F5] transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

