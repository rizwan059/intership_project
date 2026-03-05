"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "We Map Your Broken Workflows",
    description:
      "In our free 20-minute call, you walk me through what's costing your team the most time. Follow-ups? Scheduling? Reporting? We identify your biggest leak first — and prioritize fixing that.",
    detail: "No homework. No questionnaire. Just an honest conversation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14C4 8.477 8.477 4 14 4s10 4.477 10 10-4.477 10-10 10S4 19.523 4 14z" stroke="#C8501A" strokeWidth="1.5"/>
        <path d="M14 9v5l3 3" stroke="#C8501A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "We Build the System",
    description:
      "I build your automation workflow using tools that plug directly into what you're already using — Bullhorn, Zoho, Gmail, Calendly. No rip-and-replace. No new software to learn.",
    detail: "Delivery in 10–14 business days for most setups.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="#C8501A" strokeWidth="1.5"/>
        <rect x="16" y="4" width="8" height="8" rx="1.5" stroke="#C8501A" strokeWidth="1.5"/>
        <rect x="4" y="16" width="8" height="8" rx="1.5" stroke="#C8501A" strokeWidth="1.5"/>
        <path d="M20 16v8M16 20h8" stroke="#C8501A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "You See the Results",
    description:
      "Within days of launch, your recruiters stop manually sending follow-up emails. Interviews start booking themselves. Reports generate automatically. You get a monthly summary of exactly what was saved.",
    detail: "Most clients see their first automated sequence fire within 48 hours.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l6-7 4 4 5-6 5 7" stroke="#C8501A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="8" r="2" fill="#C8501A"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "We Keep Building",
    description:
      "On a monthly retainer, I stay in your corner — monitoring, optimizing, and building the next automation on your backlog. Your agency keeps getting leaner as we go. This is where the real compounding happens.",
    detail: "Retainer clients average 3–5 new automations built per quarter.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.477 4 4 8.477 4 14" stroke="#C8501A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 24c5.523 0 10-4.477 10-10" stroke="#C8501A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 10l0 4 4 0" stroke="#C8501A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 18l0-4-4 0" stroke="#C8501A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-300 rounded-full mb-6">
            <span className="font-sans text-sm font-semibold text-ink tracking-widest uppercase">
              How It Works
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-ink leading-tight mb-4">
            From broken workflow
            <br />
            to <span className="text-blue-300">running on autopilot.</span>
          </h2>
          <p className="text-ink font-body text-lg leading-relaxed">
            A simple, clear process. No jargon. No endless discovery. 
            Just a fast path from your biggest ops pain to it being solved.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-16 left-[calc(12.5%-1px)] right-[12.5%] h-px bg-gradient-to-r from-border-warm via-accent/30 to-border-warm" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col"
              >
                {/* Icon circle */}
                <div className="relative z-10 w-14 h-14 bg-cream border-2 border-accent/20 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  {step.icon}
                </div>

                {/* Step num */}
                <div className="font-sans font-semibold text-xs text-ink tracking-widest mb-2">
                  STEP {step.num}
                </div>

                <h3 className="font-display text-xl font-bold text-ink mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-ink font-body leading-relaxed mb-4 flex-1">
                  {step.description}
                </p>
                <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-xl border border-border-warm">
                  <span className="text-blue-500 mt-0.5 text-xs">→</span>
                  <span className="text-xs font-mono text-ink leading-snug">
                    {step.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
