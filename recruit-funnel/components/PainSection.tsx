"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pains = [
  {
    icon: "📧",
    title: "The Follow-Up Black Hole",
    description:
      "Your recruiters manually send 80–150 follow-up emails every single day. Candidates ghost — not because they weren't interested, but because your team was too busy to follow up in time.",
    stat: "48hrs",
    statLabel: "before a candidate loses interest",
    color: "border-l-accent",
    bgHover: "hover:bg-accent-muted",
  },
  {
    icon: "📋",
    title: "The Copy-Paste Grind",
    description:
      "Data lives in your ATS, your spreadsheet, your email, and your calendar. Every update means logging into all four and manually syncing. This isn't a tech problem — it's a time problem.",
    stat: "15%",
    statLabel: "productivity lost to poor data quality",
    color: "border-l-emerald",
    bgHover: "hover:bg-emerald-light",
  },
  {
    icon: "📅",
    title: "The 8-Email Interview Schedule",
    description:
      "Booking one interview takes 5–8 back-and-forth emails. Multiply that by 20 candidates per week. That's hours of your week gone — and a candidate experience that feels outdated.",
    stat: "23 days",
    statLabel: "average interview cycle without automation",
    color: "border-l-accent",
    bgHover: "hover:bg-accent-muted",
  },
  {
    icon: "📊",
    title: "Friday Night Reports",
    description:
      "Every Friday, someone on your team spends 2+ hours pulling numbers from 3 tools, formatting in Google Sheets, and emailing a PDF. No real-time data. No insights. Just copy-paste.",
    stat: "80%",
    statLabel: "of recruiter time spent on non-revenue admin",
    color: "border-l-emerald",
    bgHover: "hover:bg-emerald-light",
  },
  {
    icon: "🚪",
    title: "Broken Client Onboarding",
    description:
      "Every new client gets a different experience — some get detailed onboarding, some get a forward of an old email chain. No consistency. No automation. Every placement re-invented from scratch.",
    stat: "82%",
    statLabel: "retention increase with proper onboarding",
    color: "border-l-accent",
    bgHover: "hover:bg-accent-muted",
  },
  {
    icon: "🔀",
    title: "Tools That Don't Talk",
    description:
      "Bullhorn, Gmail, Calendly, Google Sheets, Slack — none of them communicate with each other. Your recruiters manually bridge the gap every day. That's the most expensive software you own.",
    stat: "#1",
    statLabel: "source of errors in recruitment ops",
    color: "border-l-emerald",
    bgHover: "hover:bg-emerald-light",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function PainSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pain" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ink rounded-full mb-6">
            <span className="font-mono text-xs text-cream/60 tracking-widest uppercase">
              The Real Problem
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-ink leading-tight mb-6">
            You're not losing
            <br />
            candidates to better agencies.
            <br />
            <span className="text-accent">You're losing them to your inbox.</span>
          </h2>
          <p className="text-lg text-warm font-body leading-relaxed">
            Every staffing agency owner I talk to knows exactly what's broken.
            They just haven't had time to fix it — because they're too busy
            doing the thing that needs to be automated.
          </p>
        </motion.div>

        {/* Pain cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`group relative bg-white border border-border-warm border-l-4 ${pain.color} rounded-2xl p-6 card-lift cursor-default transition-colors duration-200 ${pain.bgHover}`}
            >
              <div className="text-3xl mb-4">{pain.icon}</div>
              <h3 className="font-display text-xl font-bold text-ink mb-3 leading-tight">
                {pain.title}
              </h3>
              <p className="text-sm text-warm font-body leading-relaxed mb-5">
                {pain.description}
              </p>
              <div className="pt-4 border-t border-border-warm">
                <span className="font-display text-2xl font-black text-accent">
                  {pain.stat}
                </span>
                <span className="text-xs text-warm font-mono block mt-1">
                  {pain.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bridge line */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 bg-ink rounded-3xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p className="font-display text-2xl sm:text-3xl font-bold text-cream leading-tight">
                "I've been meaning to fix this for 6 months."
              </p>
              <p className="text-warm mt-3 font-body text-sm leading-relaxed">
                That's what every agency owner tells me. The gap between knowing your ops are broken and actually fixing them is where placements — and revenue — slip away. I close that gap.
              </p>
            </div>
            <div className="flex-shrink-0 w-1 h-16 bg-accent/30 hidden md:block" />
            <div className="flex-shrink-0">
              <div className="font-mono text-xs text-warm uppercase tracking-widest mb-1">
                Average time to first result
              </div>
              <div className="font-display text-5xl font-black text-accent">
                14 days
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
