"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/YOUR_LINK_HERE";

const faqs = [
  {
    q: "Do I need to switch to new software?",
    a: "No. Everything I build plugs into your existing stack — Bullhorn, Zoho Recruit, Greenhouse, Gmail, Outlook, Calendly, Google Sheets. You don't learn anything new. The automation runs invisibly in the background.",
  },
  {
    q: "How long does setup actually take?",
    a: "The Quick Win package delivers in 10–14 business days. The Core System is typically 3–4 weeks. You'll see the first automated sequence fire within 48 hours of launch day. It's not months of implementation — it's weeks.",
  },
  {
    q: "What if my team isn't technical?",
    a: "That's actually the point. Your team never touches the automation. I build it, I maintain it, and I explain what's happening in plain English every month. The only thing your recruiters need to do is keep doing their jobs — the automation handles the rest.",
  },
  {
    q: "I've tried automation tools before and they didn't stick. Why is this different?",
    a: "Most automation fails because it's built generically, not for your specific workflow. I map exactly how your agency operates, then build around that — not the other way around. And because I'm on a monthly retainer, I'm there to fix anything that breaks and improve it over time.",
  },
  {
    q: "What does the monthly retainer actually include?",
    a: "Monitoring and maintenance of all existing automations, monthly optimization based on what's working, a 15-minute expansion call to identify the next workflow to automate, and priority support if anything goes wrong. You're not paying for me to disappear after setup.",
  },
  {
    q: "Is $3,000 setup really all-in?",
    a: "Yes. The setup fee covers building, testing, and launching your automation system. No surprise charges, no 'per automation' fees. The only ongoing cost is the monthly retainer if you want ongoing maintenance and expansion — which is optional but recommended.",
  },
  {
    q: "What if it doesn't work for my agency?",
    a: "Before we start, we have a free call where I assess whether automation will actually move the needle for you. If I don't think the ROI is clear, I'll tell you — and I won't take your money. I only work with agencies where I know I can deliver visible results.",
  },
  {
    q: "Can I start with just one automation and expand?",
    a: "Absolutely. In fact, that's how I recommend starting. The Quick Win package solves one core problem first. Once you see the results (and you will), expanding to the full system becomes an obvious next step — not a leap of faith.",
  },
];

function FAQItem({ faq, isOpen, onClick }: { faq: { q: string; a: string }; isOpen: boolean; onClick: () => void }) {
  return (
    <div className={`border-b border-border-warm transition-colors ${isOpen ? "bg-white" : ""}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
      >
        <span className={`font-display font-bold text-base leading-snug transition-colors ${isOpen ? "text-accent" : "text-ink group-hover:text-accent"}`}>
          {faq.q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-accent text-white" : "bg-cream text-warm border border-border-warm"}`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-warm font-body leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left col */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ink rounded-full mb-6">
                <span className="font-mono text-xs text-cream/60 tracking-widest uppercase">
                  FAQ
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-ink leading-tight mb-6">
                Every question
                <br />
                you're thinking
                <br />
                <span className="text-accent">right now.</span>
              </h2>
              <p className="text-warm font-body text-base leading-relaxed mb-8">
                No fluff answers. No "it depends" without context. Real answers about how this works.
              </p>
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl text-sm font-semibold hover:bg-accent-light transition-colors"
              >
                Still have questions? Book a call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right col - FAQ list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3 bg-cream rounded-3xl overflow-hidden border border-border-warm divide-y divide-border-warm"
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
