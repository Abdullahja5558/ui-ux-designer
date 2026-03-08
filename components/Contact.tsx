"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { Send, User, Mail, MessageSquare, CheckCircle2, RefreshCcw, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const emailStr = "uiuxsamia@gmail.com";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleDeploy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    // Using your exact credentials from the image
    emailjs.sendForm(
      'service_zwcmbam', 
      'template_us7l64u', 
      formRef.current, 
      '7CihZxkYkk0Rbza8y'
    )
    .then(() => {
        setIsSent(true);
        setLoading(false);
    }, (error) => {
        console.error("EmailJS Error:", error.text);
        alert("Message nahi bheja ja saka.");
        setLoading(false);
    });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#fafafa] py-32 flex flex-col items-center overflow-hidden"
      id="contact"
    >
      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full rotate-180 leading-[0] z-10 translate-y-[-1px]">
        <Wave color="#000000" duration={4} />
      </div>

      {/* MAGNETIC EMAIL ASSEMBLY (ORIGINAL SCATTER) */}
      <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-32 h-10 items-center z-20 relative">
        {emailStr.split("").map((char, i) => (
          <MagneticLetter key={i} char={char} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </div>

      <div className="w-full max-w-3xl px-6 relative z-20">
        <AnimatePresence mode="wait">
          {!isSent ? (
            <motion.form 
              ref={formRef}
              key="contact-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              onSubmit={handleDeploy}
              className="space-y-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Fixed name attributes to match: {{name}} and {{email}} */}
                <CustomInput name="name" label="YOUR NAME" placeholder="e.g. Abdullah Javed" icon={<User size={18} />} />
                <CustomInput name="email" label="EMAIL ADDRESS" placeholder="e.g. name@email.com" icon={<Mail size={18} />} />
              </div>

              <div className="relative border-b-2 border-black/10 focus-within:border-black transition-colors pb-4">
                <div className="flex items-center gap-4 mb-6">
                  <MessageSquare size={18} className="text-black" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30">Message</span>
                </div>
                <textarea 
                  name="message"
                  required
                  rows={3}
                  placeholder="Tell me about your project dreams..."
                  className="w-full bg-transparent outline-none text-2xl md:text-4xl font-black tracking-tighter text-black placeholder:text-black/5 resize-none"
                />
              </div>

              <div className="flex justify-center pt-10">
                <OrbitalButton loading={loading} />
              </div>
            </motion.form>
          ) : (
            <motion.div 
              key="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center space-y-10 py-20"
            >
              <motion.div initial={{ rotate: -180, scale: 0 }} animate={{ rotate: 0, scale: 1 }}>
                <CheckCircle2 size={100} className="text-black" strokeWidth={1} />
              </motion.div>
              <div className="space-y-4">
                <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black">Delivered.</h3>
              </div>
              <motion.button type="button" onClick={() => setIsSent(false)} className="w-16 h-16 border-2 border-black text-black rounded-full flex items-center justify-center">
                <RefreshCcw size={24} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 w-full leading-[0] z-10 translate-y-[1px]">
        <Wave color="#000000" duration={6} />
      </div>
    </section>
  );
};

// --- SUPPORTING COMPONENTS (UNCHANGED DESIGN) ---

const Wave = ({ color, duration }: { color: string; duration: number }) => (
  <div className="overflow-hidden w-full h-[80px] md:h-[120px] relative bg-transparent">
    <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration, ease: "linear" }} className="flex w-[200%] h-full">
      <div className="w-1/2 h-full scale-x-[1.01] origin-left">
        <svg viewBox="0 0 1000 150" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,75 C150,150 350,0 500,75 C650,150 850,0 1000,75 L1000,150 L0,150 Z" fill={color} />
        </svg>
      </div>
      <div className="w-1/2 h-full scale-x-[1.01] origin-left">
        <svg viewBox="0 0 1000 150" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,75 C150,150 350,0 500,75 C650,150 850,0 1000,75 L1000,150 L0,150 Z" fill={color} />
        </svg>
      </div>
    </motion.div>
  </div>
);

const OrbitalButton = ({ loading }: { loading: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useSpring(0, { stiffness: 200, damping: 10 });
  const y = useSpring(0, { stiffness: 200, damping: 10 });

  return (
    <motion.button
      type="submit"
      disabled={loading}
      onMouseMove={(e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (left + width / 2)) * 0.3);
        y.set((e.clientY - (top + height / 2)) * 0.3);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { x.set(0); y.set(0); setIsHovered(false); }}
      style={{ x, y }}
      className="relative flex items-center justify-center p-12 active:scale-95 disabled:opacity-50"
    >
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 6, ease: "linear" }} className={`absolute inset-0 rounded-full border border-dashed border-black/20 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'} transition-all duration-500`} />
      <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 bg-black rounded-full flex flex-col items-center justify-center gap-3 shadow-2xl overflow-hidden">
        {loading ? <Loader2 size={32} className="text-white animate-spin" /> : <Send size={32} className="text-white" />}
      </div>
    </motion.button>
  );
};

const CustomInput = ({ label, placeholder, icon, name }: any) => (
  <div className="relative group w-full border-b-2 border-black/10 focus-within:border-black transition-colors pb-4">
    <div className="flex items-center gap-4 mb-6">
      <span className="text-black group-focus-within:scale-110 transition-transform">{icon}</span>
      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30">{label}</span>
    </div>
    <input name={name} required type={name === 'email' ? 'email' : 'text'} placeholder={placeholder} className="w-full bg-transparent outline-none text-xl md:text-2xl font-black tracking-tighter text-black placeholder:text-black/5" />
  </div>
);

const MagneticLetter = ({ char, mouseX, mouseY }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 80, damping: 15 });
  const y = useSpring(0, { stiffness: 80, damping: 15 });

  useEffect(() => {
    // Original Scatter effect
    x.set((Math.random() - 0.5) * 600);
    y.set((Math.random() - 0.5) * 300);
  }, []);

  useEffect(() => {
    const unsubscribe = mouseX.on("change", () => {
      if (!ref.current) return;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const dist = Math.hypot(mouseX.get() - (left + width / 2), mouseY.get() - (top + height / 2));
      if (dist < 350) { x.set(0); y.set(0); }
    });
    return () => unsubscribe();
  }, [mouseX, mouseY, x, y]);

  return <motion.span ref={ref} style={{ x, y }} className="text-2xl md:text-4xl font-black text-black select-none">{char}</motion.span>;
};

export default Contact;