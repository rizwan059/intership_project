"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/YOUR_LINK_HERE";
const LINKEDIN_URL = "https://linkedin.com/in/YOUR_PROFILE";

const packages = [
  {
    name: "Quick Win",
    price: "$800",
    priceSuffix: "–$1,200",
    sub: "One-time setup",
    retainer: null,
    description: "Perfect if you want to start small, see real results fast, and decide from there.",
    features: [
      "Automated candidate follow-up sequence (3–5 touchpoints)",
      "Interview scheduling automation via Calendly",
      "Basic ATS trigger setup",
      "2-week delivery",
      "30-day post-launch support",
    ],
    cta: "Start With Quick Win",
    highlight: false,
    badge: null,
  },
  {
    name: "Core System",
    price: "$1,500",
    priceSuffix: "–$2,500",
    sub: "Setup fee",
    retainer: "$800–$1,200/mo",
    description: "The complete solution. Eliminates your top 3 manual ops problems — and keeps improving every month.",
    features: [
      "Full multi-step candidate follow-up automation",
      "ATS ↔ calendar ↔ email real-time sync",
      "Automated interview scheduling & reminders",
      "Auto-generated weekly client reports",
      "New client onboarding sequence",
      "Monthly optimization retainer included",
      "Priority support & expansion calls",
    ],
    cta: "Get the Core System",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Full Stack",
    price: "$2,500",
    priceSuffix: "–$3,000",
    sub: "Setup fee",
    retainer: "$1,500–$2,000/mo",
    description: "For agencies ready to fully transform. Every workflow automated. Ongoing expansion every month.",
    features: [
      "Everything in Core System",
      "Multi-channel candidate outreach automation",
      "AI-assisted candidate matching workflows",
      "Placement & compliance tracking automation",
      "Custom client communication sequences",
      "Monthly new automation (from your backlog)",
      "Dedicated monthly strategy call",
    ],
    cta: "Get Full Stack",
    highlight: false,
    badge: null,
  },
];

export default function Packages() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-muted rounded-full mb-6">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Transparent Pricing
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-ink leading-tight mb-4">
            Simple pricing.
            <br />
            <span className="text-accent">No hidden costs.</span>
          </h2>
          <p className="text-warm font-body text-lg leading-relaxed">
            Every package starts with your most painful problem and expands from there.
            If you're unsure — start with Quick Win. Most clients upgrade within 60 days.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-3xl p-8 flex flex-col card-lift ${
                pkg.highlight
                  ? "bg-ink text-cream border-2 border-ink shadow-2xl shadow-ink/20 scale-105"
                  : "bg-white border border-border-warm"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-4 py-1 rounded-full font-mono tracking-wide">
                  {pkg.badge}
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <div className={`font-mono text-xs tracking-widest uppercase mb-3 ${pkg.highlight ? "text-cream/50" : "text-warm"}`}>
                  {pkg.name}
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`font-display text-4xl font-black ${pkg.highlight ? "text-accent" : "text-ink"}`}>
                    {pkg.price}
                  </span>
                  <span className={`font-display text-xl font-bold ${pkg.highlight ? "text-cream/50" : "text-warm"}`}>
                    {pkg.priceSuffix}
                  </span>
                </div>
                <div className={`text-sm font-mono mb-1 ${pkg.highlight ? "text-cream/60" : "text-warm"}`}>
                  {pkg.sub}
                </div>
                {pkg.retainer && (
                  <div className={`text-sm font-semibold mt-1 ${pkg.highlight ? "text-accent" : "text-emerald"}`}>
                    + {pkg.retainer} retainer
                  </div>
                )}
              </div>

              <p className={`text-sm leading-relaxed mb-6 pb-6 border-b ${pkg.highlight ? "text-cream/70 border-white/10" : "text-warm border-border-warm"}`}>
                {pkg.description}
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check
                      size={15}
                      className={`flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-accent" : "text-emerald"}`}
                    />
                    <span className={`text-sm leading-snug ${pkg.highlight ? "text-cream/80" : "text-warm"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-glow flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  pkg.highlight
                    ? "bg-accent text-white hover:bg-accent-light shadow-lg shadow-accent/30"
                    : "bg-ink text-cream hover:bg-slate"
                }`}
              >
                {pkg.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
        >
          <div className="flex items-center gap-2 text-sm text-warm">
            <span className="text-accent">✓</span>
            No long-term contracts to start
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-border-warm" />
          <div className="flex items-center gap-2 text-sm text-warm">
            <span className="text-accent">✓</span>
            50% upfront, 50% on delivery
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-border-warm" />
          <div className="flex items-center gap-2 text-sm text-warm">
            <span className="text-accent">✓</span>
            Not sure which? Book the free call — I'll tell you.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
