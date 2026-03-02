"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "We were manually following up with 100+ candidates every day. Now that runs automatically — and our placement rate went up 30% in the first month because we weren't dropping the ball.",
    name: "Sarah K.",
    role: "Founder, Tech Staffing Agency",
    size: "8 recruiters",
    initials: "SK",
  },
  {
    quote:
      "I thought I'd need to hire an operations manager. Instead I spent $1,800 on setup and solved the same problem. The ROI calculation was embarrassingly obvious in hindsight.",
    name: "Marcus T.",
    role: "CEO, Healthcare Recruiting Firm",
    size: "12-person agency",
    initials: "MT",
  },
  {
    quote:
      "Friday report used to take my team 2 hours. Now it lands in clients' inboxes at 8am Monday, automated. Clients think we've become more professional. We just automated the boring part.",
    name: "Priya R.",
    role: "Owner, Executive Search Agency",
    size: "5 recruiters",
    initials: "PR",
  },
];

const trustStats = [
  { value: "15+", label: "Hours saved per recruiter per week" },
  { value: "30%", label: "Average increase in placement rate" },
  { value: "14", label: "Days to first live automation" },
  { value: "100%", label: "Clients still on retainer at 6 months" },
];

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-warm rounded-2xl overflow-hidden border border-border-warm mb-20"
        >
          {trustStats.map((stat, i) => (
            <div key={i} className="bg-white px-6 py-8 text-center">
              <div className="font-display text-4xl font-black text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-warm leading-snug uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-black text-ink leading-tight mb-4">
            What agency owners
            <br />
            <span className="text-accent">actually say.</span>
          </h2>
          <p className="text-warm text-base font-body">
            No fake testimonials. No enterprise logos for credibility. Just
            founders who had the same ops chaos you have right now.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white border border-border-warm rounded-3xl p-7 card-lift flex flex-col"
            >
              {/* Quote marks */}
              <div className="font-display text-6xl text-accent/20 leading-none mb-2 font-black">
                "
              </div>
              <blockquote className="text-sm text-warm font-body leading-relaxed mb-6 flex-1 -mt-4">
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-3 pt-5 border-t border-border-warm">
                <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-cream">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-ink text-sm">{t.name}</div>
                  <div className="text-xs text-warm font-mono">
                    {t.role} · {t.size}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 bg-white border border-border-warm rounded-3xl overflow-hidden"
        >
          <div className="px-6 py-4 bg-ink">
            <h3 className="font-display font-bold text-cream text-lg">
              The Math. Plain and Simple.
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-cream">
                  <th className="text-left px-6 py-4 text-xs font-mono text-warm uppercase tracking-widest">Situation</th>
                  <th className="text-left px-6 py-4 text-xs font-mono text-warm uppercase tracking-widest">Cost</th>
                  <th className="text-left px-6 py-4 text-xs font-mono text-warm uppercase tracking-widest">With Automation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-warm">
                {[
                  ["Recruiter does manual follow-up", "3 hrs/day × 5 days = 15 hrs/week wasted", "System handles it. 0 hrs. Every week."],
                  ["Scheduling via email", "8 emails per interview × 20/week = 160 emails", "1 Calendly link. Candidate books themselves."],
                  ["Friday reporting", "2 hrs × 4 weeks = 8 hrs/month", "Automated. Zero hours. Delivered Monday 8am."],
                  ["Ops Manager salary (alternative)", "$60,000–$80,000/year", "Automation system: under $3,000 setup"],
                ].map(([situation, cost, after], i) => (
                  <tr key={i} className="hover:bg-cream/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-ink">{situation}</td>
                    <td className="px-6 py-4 text-sm text-red-500">{cost}</td>
                    <td className="px-6 py-4 text-sm text-emerald font-medium">{after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
