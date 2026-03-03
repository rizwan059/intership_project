"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CALENDLY_LINK = "https://calendly.com/YOUR_LINK_HERE";
const LINKEDIN_URL = "https://linkedin.com/in/YOUR_PROFILE";

const stats = [
  { value: "80%", label: "of agency time lost to admin" },
  { value: "23 days", label: "avg interview cycle without automation" },
  { value: "48%", label: "of agencies in early-stage chaos" },
  { value: "$561B", label: "staffing market — your clients have budget" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cream pt-16"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orb absolute top-20 right-[10%] w-[500px] h-[500px] opacity-20"
          style={{ background: "radial-gradient(circle, #C8501A 0%, transparent 70%)" }}
        />
        <div
          className="orb absolute -bottom-20 left-[5%] w-[400px] h-[400px] opacity-10"
          style={{ background: "radial-gradient(circle, #1A5C3A 0%, transparent 70%)", animationDelay: "3s" }}
        />
        {/* Dot grid accent */}
        <div className="absolute top-32 left-0 w-48 h-48 dot-grid opacity-20" />
        <div className="absolute bottom-20 right-0 w-64 h-64 dot-grid opacity-10" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-muted border border-accent/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-sans text-md text-black font-semibold tracking-widest uppercase">
            Workflow Automation for Staffing Agencies
          </span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-ink leading-[1.0] tracking-tight mb-6"
          >
            Your Recruiters Are
            <br />
            <span className="relative">
              <span className="text-accent">Losing Candidates</span>
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 400 12"
                fill="none"
              >
                <path
                  d="M2 9C80 3 160 1 250 5C320 8 370 6 398 4"
                  stroke="#C8501A"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
            <br />
            Not to Competitors —
            <br />
            <span className="text-warm">to Slow Follow-Ups.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-black font-body font-normal max-w-2xl mb-10 leading-relaxed"
          >
            We build automation systems that handle your candidate follow-ups,
            interview scheduling, and client reporting — so your team does the
            work that actually drives placements. Setup under{" "}
            <strong className="text-ink">$3,000</strong>. Results in{" "}
            <strong className="text-ink">30 days</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow group flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white rounded-2xl text-base font-semibold shadow-xl shadow-accent/25 hover:bg-accent-light transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book Free 20-Min Strategy Call
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-ink border border-border-warm rounded-2xl text-base font-semibold hover:bg-ink hover:text-cream hover:border-ink transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              Message Me on LinkedIn
            </Link>
          </motion.div>

          {/* Trust signal */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xs font-mono text-black uppercase tracking-widest mb-12"
          >
            No commitment. No pitch deck. Just a real conversation about your ops.
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="bg-white/70 backdrop-blur-sm border border-border-warm rounded-2xl px-5 py-4 card-lift"
            >
              <div className="font-display text-3xl font-black text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-body text-warm leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-warm tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-border-warm rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
