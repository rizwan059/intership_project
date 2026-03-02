"use client";

const items = [
  "📧 Candidate follow-ups automated",
  "📅 Interview scheduling — zero email chains",
  "📊 Client reports built automatically",
  "🔄 ATS synced in real-time",
  "🚀 Onboarding workflows on autopilot",
  "⏱️ 15+ hours saved per recruiter per week",
  "📈 More placements. Less admin.",
  "✅ Setup under $3,000",
];

export default function TickerBar() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-ink py-3 overflow-hidden border-y border-slate">
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-8">
            <span className="font-mono text-xs text-cream/70 tracking-wide whitespace-nowrap">
              {item}
            </span>
            <span className="text-accent/60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
