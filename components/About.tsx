"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
} from "framer-motion";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const phrase1Ref = useRef<HTMLSpanElement>(null);
  const phraseLastRef = useRef<HTMLSpanElement>(null);

  // Exact translation coordinates to place Phrase 1 in the middle and Phrase 4 + Arrow in center
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(-2400);

  // Bulletproof calculation:
  // startX: Places "we" towards the center/middle (not stuck on the left border)
  // endX: Scrolls further so the downward arrow lands right in the dead-center above AS CODEX text
  const updatePositions = useCallback(() => {
    if (trackRef.current && phrase1Ref.current && phraseLastRef.current) {
      const viewportWidth = window.innerWidth;

      // Phrase 1 measurements
      const p1Offset = phrase1Ref.current.offsetLeft;
      const p1Width = phrase1Ref.current.offsetWidth;

      // Position Phrase 1 so "we" starts in the comfortable middle area (20vw to 25vw from left)
      const targetP1Left = viewportWidth < 640 
        ? Math.max(24, viewportWidth * 0.14) 
        : Math.max(48, viewportWidth * 0.22);

      const calculatedStartX = targetP1Left - p1Offset;

      // Phrase 4 measurements (ship with speed.)
      const pLastOffset = phraseLastRef.current.offsetLeft;
      const pLastWidth = phraseLastRef.current.offsetWidth;
      const cLast = pLastOffset + pLastWidth / 2;

      // Extra scroll offset so the downward arrow after "speed." arrives right in the center
      const arrowCenterOffset = viewportWidth < 640 
        ? 110 
        : viewportWidth < 1024 
          ? 180 
          : 250;

      // endX translates track so the downward arrow lands right over the center of the screen
      const calculatedEndX = (viewportWidth / 2 - cLast) - arrowCenterOffset;

      setStartX(calculatedStartX);
      setEndX(calculatedEndX);
    }
  }, []);

  // Update on mount, window resize, font loading, and track size changes
  useEffect(() => {
    updatePositions();

    // Re-calculate when web fonts (Bricolage Grotesque) finish loading
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(updatePositions);
    }

    // ResizeObserver catches any DOM layout shift or late text rendering
    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && trackRef.current) {
      observer = new ResizeObserver(() => {
        updatePositions();
      });
      observer.observe(trackRef.current);
    }

    window.addEventListener("resize", updatePositions);

    const t1 = setTimeout(updatePositions, 100);
    const t2 = setTimeout(updatePositions, 400);
    const t3 = setTimeout(updatePositions, 1000);

    return () => {
      window.removeEventListener("resize", updatePositions);
      if (observer) observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [updatePositions]);

  // Track vertical scroll progress inside the tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Spring physics for buttery-smooth glide
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  // Kinetic typography velocity: Giant text leans organically into the direction of scroll speed
  const scrollVelocity = useVelocity(smoothProgress);
  const textSkew = useTransform(scrollVelocity, [-0.35, 0.35], [5, -5]);
  const smoothSkew = useSpring(textSkew, { stiffness: 90, damping: 18 });

  // Horizontal translation:
  // Progress 0.0 -> Phrase 1 starts with "we" placed towards middle (startX)
  // Progress 0.85 -> Downward arrow arrives right in the center (endX)
  // Progress 0.85 -> 1.0 -> Holds/pauses in the center for comfortable reading before unpinning
  const x = useTransform(
    smoothProgress,
    [0, 0.85, 1],
    [startX, endX, endX]
  );

  // SVG Arrow drawing animations
  // Arrow 1 (Loop arrow placed ahead after boundaries): Draws smoothly as the section begins (0.0 to 0.32)
  const arrow1Progress = useTransform(smoothProgress, [0.0, 0.32], [0, 1]);

  // Arrow 2 (Downward arrow pointing to bottom statement): Draws as arrow glides into the center (0.45 to 0.85)
  const arrow2Progress = useTransform(smoothProgress, [0.45, 0.85], [0, 1]);

  // Elastic Spring Stickers (Playful Pop-in and Tilt)
  const sticker1Scale = useTransform(smoothProgress, [0.0, 0.12], [0.7, 1]);
  const sticker2Scale = useTransform(smoothProgress, [0.15, 0.32], [0.6, 1]);
  const sticker3Scale = useTransform(smoothProgress, [0.32, 0.5], [0.6, 1]);

  const sticker1Rotate = useTransform(smoothProgress, [0, 0.25], [-12, -2]);
  const sticker2Rotate = useTransform(smoothProgress, [0.15, 0.4], [6, 18]);
  const sticker3Rotate = useTransform(smoothProgress, [0.35, 0.6], [-14, -4]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full h-[320vh] sm:h-[360vh] bg-[#FAF9FF]"
    >
      {/* STICKY VIEWPORT CONTAINER (100% stable, no DOM mutation, mobile svh safe) */}
      <div className="sticky top-0 h-[100svh] sm:h-screen w-full flex flex-col justify-center overflow-hidden bg-[#FAF9FF] select-none [transform:translate3d(0,0,0)]">

        {/* Ambient Top & Bottom Lighting (Soft transition into adjacent sections) */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#FAF9FF] to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#FAF9FF] via-[#FAF9FF]/80 to-transparent pointer-events-none z-10" />

        {/* GIGANTIC HORIZONTAL SCROLLING TYPOGRAPHY TRACK */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex items-center whitespace-nowrap will-change-transform z-10 pointer-events-none w-max px-8"
        >
          {/* Kinetic Skew Container (Tilts naturally with scrolling velocity) */}
          <motion.div
            style={{ skewX: smoothSkew }}
            className="flex items-center gap-12 sm:gap-20 md:gap-28 lg:gap-36 font-['Bricolage_Grotesque',sans-serif] text-[17vw] sm:text-[15vw] md:text-[13vw] lg:text-[12vw] font-black tracking-tight leading-none text-[#111116] lowercase transition-transform"
          >

            {/* PHRASE 1: we push boundaries, (Starts with "we" shifted right towards middle) */}
            <span
              ref={phrase1Ref}
              className="relative inline-flex items-center"
            >
              <span>we&nbsp;</span>

              {/* "push" with Thumbs-up sticker (Bigger size) perched directly on top */}
              <span className="relative inline-block">
                <span>push</span>
                {/* Thumbs-up sticker perched right above "sh" */}
                <motion.span
                  style={{ scale: sticker1Scale, rotate: sticker1Rotate }}
                  className="absolute -top-12 sm:-top-20 md:-top-24 -right-4 sm:-right-7 md:-right-8 pointer-events-none z-20 origin-bottom-left"
                >
                  <motion.span
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex items-center justify-center w-13 h-13 sm:w-18 sm:h-18 md:w-22 md:h-22 rounded-2xl sm:rounded-3xl bg-[#E8FFA6] border-[2.5px] sm:border-[3.5px] border-[#111116] shadow-[2.5px_3.5px_0px_#111116] sm:shadow-[4px_5px_0px_#111116] text-[#111116] p-2.5"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    </svg>
                  </motion.span>
                </motion.span>
              </span>

              <span>&nbsp;</span>

              {/* "boundaries," with Signature Purple Span */}
              <span className="relative inline-block">
                <span className="inline-block bg-[#7040F5] text-white px-5 sm:px-8 md:px-10 py-1.5 sm:py-3 rounded-2xl sm:rounded-3xl shadow-xl shadow-[#7040F5]/35">
                  boundaries
                </span>
                <span>,</span>
              </span>

              {/* Hand-drawn Loop Arrow (POSITIONED AHEAD / FORWARD AFTER BOUNDARIES) */}
              <span className="inline-block relative -top-10 sm:-top-16 md:-top-22 ml-4 sm:ml-8 rotate-12 pointer-events-none">
                <svg viewBox="0 0 120 70" fill="none" className="text-[#111116] w-24 sm:w-34 md:w-44 lg:w-52 h-auto overflow-visible">
                  {/* Arrow Loop Line */}
                  <motion.path
                    d="M10 45C35 10 70 5 82 30C86 42 74 56 58 52C42 48 46 28 66 18C86 8 106 24 112 36"
                    stroke="currentColor"
                    strokeWidth="3.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ pathLength: arrow1Progress }}
                  />
                  {/* Arrowhead */}
                  <motion.path
                    d="M98 32L112 36L110 22"
                    stroke="currentColor"
                    strokeWidth="3.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ pathLength: arrow1Progress }}
                  />
                </svg>
              </span>
            </span>

            {/* PHRASE 2: craft real products, */}
            <span className="relative inline-flex items-center">
              <span>craft&nbsp;</span>

              {/* "real products," with smartphone sticker on top and cursor pointer below */}
              <span className="relative inline-block">
                <span>real&nbsp;products,</span>

                {/* Smartphone in hand sticker on top (Bigger size) */}
                <motion.span
                  style={{ scale: sticker2Scale, rotate: sticker2Rotate }}
                  className="absolute -top-12 sm:-top-20 md:-top-24 -right-4 sm:-right-8 pointer-events-none z-20 origin-bottom-right"
                >
                  <motion.span
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex items-center justify-center w-13 h-13 sm:w-18 sm:h-18 md:w-22 md:h-22 rounded-2xl sm:rounded-3xl bg-[#E8FFA6] border-[2.5px] sm:border-[3.5px] border-[#111116] shadow-[2.5px_3.5px_0px_#111116] sm:shadow-[4px_5px_0px_#111116] text-[#111116] p-2.5"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                      <path d="M12 18h.01" />
                    </svg>
                  </motion.span>
                </motion.span>

                {/* Interactive Click Cursor sticker below (Bigger size) */}
                <motion.span
                  style={{ scale: sticker2Scale }}
                  className="absolute -bottom-10 sm:-bottom-14 md:-bottom-18 -left-12 sm:-left-18 pointer-events-none z-20"
                >
                  <motion.span
                    animate={{ y: [4, -4, 4] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl sm:rounded-3xl bg-[#EDE9FF] border-[2.5px] sm:border-[3.5px] border-[#7040F5] shadow-[2.5px_3.5px_0px_#7040F5] sm:shadow-[4px_5px_0px_#7040F5] text-[#7040F5] p-2.5"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                      <path d="m3 3 7 18 3-7 7-3L3 3z" />
                      <path d="m13 13 4 4" />
                    </svg>
                  </motion.span>
                </motion.span>
              </span>
            </span>

            {/* PHRASE 3: engineer at scale, */}
            <span className="relative inline-flex items-center">
              <span>engineer&nbsp;at&nbsp;scale,</span>

              {/* Star / Sparkle Sticker (Bigger size) */}
              <motion.span
                style={{ scale: sticker3Scale, rotate: sticker3Rotate }}
                className="inline-block relative -top-8 sm:-top-12 md:-top-16 ml-4 sm:ml-7 origin-bottom-right"
              >
                <motion.span
                  animate={{ rotate: [0, 90, 180, 270, 360] }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl sm:rounded-3xl bg-[#FFE4E6] border-[2.5px] sm:border-[3.5px] border-[#111116] shadow-[2.5px_3.5px_0px_#111116] sm:shadow-[4px_5px_0px_#111116] text-[#111116] p-2.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                  </svg>
                </motion.span>
              </motion.span>
            </span>

            {/* PHRASE 4: ship with speed. (Scrolls so downward arrow lands right in the center) */}
            <span
              ref={phraseLastRef}
              className="relative inline-flex items-center"
            >
              <span>ship&nbsp;with&nbsp;speed.</span>

              {/* Hand-drawn Downward Arrow (Bigger & Bolder, lands right over the center) */}
              <span className="inline-block relative -bottom-8 sm:-bottom-12 md:-bottom-16 ml-5 sm:ml-10 rotate-6">
                <svg viewBox="0 0 90 70" fill="none" className="text-[#111116] w-22 sm:w-32 md:w-42 lg:w-48 h-auto overflow-visible">
                  {/* Curved stem */}
                  <motion.path
                    d="M15 15C38 10 65 20 70 52"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ pathLength: arrow2Progress }}
                  />
                  {/* Arrowhead */}
                  <motion.path
                    d="M54 44L70 52L76 36"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ pathLength: arrow2Progress }}
                  />
                </svg>
              </span>
            </span>

          </motion.div>
        </motion.div>

        {/* PINNED CENTER STATEMENT (STATIONARY, ELEVATED, CRYSTAL CLEAR) */}
        <div className="absolute z-20 bottom-8 sm:bottom-12 md:bottom-16 inset-x-0 flex justify-center px-6 pointer-events-auto">
          <div className="max-w-md sm:max-w-xl md:max-w-2xl text-center">
            <p className="font-['Bricolage_Grotesque',sans-serif] text-xs sm:text-sm md:text-base lg:text-[1.05rem] text-[#111116] font-medium leading-relaxed tracking-normal">
              <strong className="font-bold text-[#111116]">AS CODEX</strong> is an elite digital engineering agency based in Pakistan, renowned for architecting scalable custom software, high-concurrency microservices, and conversion-engineered UI/UX platforms for visionary founders and global enterprises.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
