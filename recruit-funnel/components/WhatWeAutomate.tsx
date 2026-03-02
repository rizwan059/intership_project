"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const automations = [
  {
    id: "followup",
    category: "Candidate Management",
    title: "Automated Follow-Up Sequences",
    description:
      "Multi-step follow-up sequences that fire automatically after every candidate touch. Day 1 intro, Day 3 nudge, Day 7 final check — without your recruiter lifting a finger.",
    before: "Recruiter manually sends 90+ follow-up emails/day",
    after: "System sends every follow-up — on time, every time",
    saves: "4–6 hrs/day per recruiter",
    tools: ["Gmail", "Bullhorn", "Zapier / Make"],
    accentColor: "text-accent",
    borderColor: "border-accent",
    bgColor: "bg-accent-muted",
  },
  {
    id: "scheduling",
    category: "Interview Operations",
    title: "Zero-Touch Interview Scheduling",
    description:
      "Candidates pick their own interview slot from a live calendar link. Confirmation emails, reminder messages, and calendar invites are all sent automatically — to everyone.",
    before: "5–8 emails to book one interview slot",
    after: "1 link. Candidate books themselves in 30 seconds",
    saves: "2–3 hrs/week per recruiter",
    tools: ["Calendly", "Google Calendar", "Email Automation"],
    accentColor: "text-emerald",
    borderColor: "border-emerald",
    bgColor: "bg-emerald-light",
  },
  {
    id: "reporting",
    category: "Client Reporting",
    title: "Auto-Generated Weekly Reports",
    description:
      "Client reports built automatically every week from your live data. Metrics pulled from your ATS, formatted into a branded report, and delivered to clients — no human input required.",
    before: "2hrs every Friday building reports manually in Google Sheets",
    after: "Report builds and sends itself every Monday morning",
    saves: "8+ hrs/month",
    tools: ["Airtable / Sheets", "ATS", "Email Delivery"],
    accentColor: "text-accent",
    borderColor: "border-accent",
    bgColor: "bg-accent-muted",
  },
  {
    id: "onboarding",
    category: "Client & Placement Onboarding",
    title: "Onboarding Workflows on Autopilot",
    description:
      "When a new client signs or a new hire is placed, a full onboarding sequence kicks off automatically — welcome emails, document collection, intro calls, check-in reminders. All without manual work.",
    before: "Every onboarding different, steps forgotten, experience inconsistent",
    after: "Every new client gets the same professional, automated experience",
    saves: "5+ hrs per new placement",
    tools: ["Forms", "DocuSign / PandaDoc", "Email Sequences"],
    accentColor: "text-emerald",
    borderColor: "border-emerald",
    bgColor: "bg-emerald-light",
  },
  {
    id: "ats",
    category: "Data & ATS Sync",
    title: "Real-Time ATS-to-Everything Sync",
    description:
      "Your ATS becomes the single source of truth. When a candidate status changes in Bullhorn/Zoho, your spreadsheet updates, your calendar syncs, and your team gets notified — automatically.",
    before: "Manual copy-paste across 4 different tools, multiple times a day",
    after: "Update it once — everything else updates itself",
    saves: "1–2 hrs/day across the team",
    tools: ["Bullhorn", "Zoho Recruit", "Greenhouse", "Any ATS"],
    accentColor: "text-accent",
    borderColor: "border-accent",
    bgColor: "bg-accent-muted",
  },
  {
    id: "outreach",
    category: "Candidate Sourcing",
    title: "Multi-Channel Outreach Automation",
    description:
      "Automated outreach sequences across LinkedIn and email that find, contact, and nurture candidates — with personalization tokens so each message feels human. Scale your pipeline without scaling headcount.",
    before: "Recruiter manually sending 50+ LinkedIn messages/day",
    after: "System runs outreach, logs replies, and alerts team for hot leads",
    saves: "3–4 hrs/day per recruiter",
    tools: ["LinkedIn", "Email", "CRM Integration"],
    accentColor: "text-emerald",
    borderColor: "border-emerald",
    bgColor: "bg-emerald-light",
  },
];

export default function WhatWeAutomate() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const current = automations[active];

  return (
    <section id="automate" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ink rounded-full mb-6">
            <span className="font-mono text-xs text-cream/60 tracking-widest uppercase">
              What We Build
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-ink leading-tight mb-4">
            Six systems that will
            <br />
            <span className="text-accent">transform your agency.</span>
          </h2>
          <p className="text-warm font-body text-lg leading-relaxed">
            Every automation is built specifically for staffing agencies. Not generic workflows — recruitment-specific systems that understand your candidates, clients, and process.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Tab list */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {automations.map((auto, i) => (
              <motion.button
                key={auto.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActive(i)}
                className={`group text-left p-4 rounded-xl border transition-all duration-200 ${
                  active === i
                    ? "bg-white border-accent shadow-sm"
                    : "bg-white/50 border-border-warm hover:border-accent/30 hover:bg-white"
                }`}
              >
                <div className={`font-mono text-[10px] tracking-widest uppercase mb-1 ${active === i ? "text-accent" : "text-warm"}`}>
                  {auto.category}
                </div>
                <div className={`font-display font-bold text-sm leading-tight ${active === i ? "text-ink" : "text-warm"}`}>
                  {auto.title}
                </div>
                {active === i && (
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="text-accent text-xs font-mono">→</span>
                    <span className="text-xs font-mono text-accent">Saves {auto.saves}</span>
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-3">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-border-warm rounded-3xl p-8 h-full"
            >
              <div className={`inline-block font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 ${current.bgColor} ${current.accentColor}`}>
                {current.category}
              </div>
              <h3 className="font-display text-2xl font-black text-ink mb-4 leading-tight">
                {current.title}
              </h3>
              <p className="text-warm font-body leading-relaxed mb-8 text-sm">
                {current.description}
              </p>

              {/* Before / After */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                  <div className="font-mono text-[10px] text-red-400 tracking-widest uppercase mb-2">
                    Before
                  </div>
                  <p className="text-sm text-red-700 font-body leading-relaxed">
                    {current.before}
                  </p>
                </div>
                <div className="p-4 bg-emerald-light border border-emerald/20 rounded-xl">
                  <div className="font-mono text-[10px] text-emerald tracking-widest uppercase mb-2">
                    After
                  </div>
                  <p className="text-sm text-emerald font-body leading-relaxed">
                    {current.after}
                  </p>
                </div>
              </div>

              {/* Time saved */}
              <div className="flex items-center gap-4 p-4 bg-ink rounded-xl mb-6">
                <div>
                  <div className="font-mono text-[10px] text-cream/50 tracking-widest uppercase mb-1">
                    Time Saved
                  </div>
                  <div className={`font-display text-3xl font-black ${current.accentColor}`}>
                    {current.saves}
                  </div>
                </div>
                <div className="flex-1 h-px bg-white/10" />
                <div className="text-right">
                  <div className="font-mono text-[10px] text-cream/50 tracking-widest uppercase mb-1">
                    Tools Used
                  </div>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {current.tools.map((tool) => (
                      <span key={tool} className="text-[10px] font-mono text-cream/70 bg-white/10 px-2 py-0.5 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
