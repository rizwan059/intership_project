"use client";

import { motion } from "framer-motion";

const CALENDLY_LINK = "https://calendly.com/YOUR_LINK_HERE";
const LINKEDIN_URL = "https://linkedin.com/in/YOUR_PROFILE";

const callDetails = [
  { icon: "⏱️", text: "20 minutes — no longer" },
  { icon: "🎯", text: "We focus on your single biggest ops pain" },
  { icon: "💡", text: "You'll leave with a clear fix, even if we don't work together" },
  { icon: "🚫", text: "Zero pressure. Zero pitch deck." },
];

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-ink rounded-[2rem] overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #C8501A 0%, transparent 70%)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-8"
              style={{ background: "radial-gradient(circle, #1A5C3A 0%, transparent 70%)" }}
            />
            {/* Grid dots */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(247,244,239,0.8) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 px-8 sm:px-12 lg:px-20 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/20 rounded-full mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-xs text-accent tracking-widest uppercase">
                    Taking new clients
                  </span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-cream leading-[1.0] mb-6">
                  Book your free
                  <br />
                  <span className="text-accent">20-minute call.</span>
                  <br />
                  <span className="text-cream/50">Let's fix your ops.</span>
                </h2>
                <p className="text-cream/60 font-body text-lg leading-relaxed mb-8 max-w-lg">
                  Tell me where your team's time is going. I'll show you exactly what can be automated — and what it would cost to make it happen. No obligation.
                </p>

                {/* Call details */}
                <div className="flex flex-col gap-3 mb-10">
                  {callDetails.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-cream/70 text-sm font-body">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Dual CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={CALENDLY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow group flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white rounded-2xl text-base font-semibold shadow-xl shadow-accent/30 hover:bg-accent-light transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Book Free Strategy Call
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
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-cream border border-white/20 rounded-2xl text-base font-semibold hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    Message on LinkedIn
                  </a>
                </div>
              </div>

              {/* Right - Visual card */}
              <div className="hidden lg:block">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="font-mono text-xs text-cream/40 uppercase tracking-widest mb-6">
                    What happens after you book
                  </div>
                  <div className="flex flex-col gap-0">
                    {[
                      { step: "1", title: "You book 20 min on my Calendly", sub: "Pick any slot that works for you" },
                      { step: "2", title: "We talk about your biggest pain", sub: "No agenda. No slide deck. Just honest conversation." },
                      { step: "3", title: "I map out a solution on the call", sub: "You'll know exactly what needs to be built and what it costs" },
                      { step: "4", title: "If it makes sense, we start this week", sub: "If it doesn't, I'll tell you that too — and you'll leave with clarity either way" },
                    ].map((item, i) => (
                      <div key={i} className="relative flex gap-4 pb-8 last:pb-0">
                        {/* Connector */}
                        {i < 3 && (
                          <div className="absolute left-4 top-8 bottom-0 w-px bg-white/10" />
                        )}
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center z-10">
                          <span className="font-mono text-xs text-accent font-bold">{item.step}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-cream text-sm mb-1">{item.title}</div>
                          <div className="text-cream/40 text-xs font-body leading-relaxed">{item.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                      <span className="text-xs font-mono text-cream/50">
                        Next available slot: This week
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
