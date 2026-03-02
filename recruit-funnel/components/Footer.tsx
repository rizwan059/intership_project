"use client";

const CALENDLY_LINK = "https://calendly.com/YOUR_LINK_HERE";
const LINKEDIN_URL = "https://linkedin.com/in/YOUR_PROFILE";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-slate py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8L8 2L14 8L8 14L2 8Z" fill="white" />
                  <circle cx="8" cy="8" r="2.5" fill="white" opacity="0.4" />
                </svg>
              </div>
              <span className="font-display font-bold text-base text-cream">
                RecruitFlow<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-xs font-mono text-cream/40 max-w-xs leading-relaxed">
              Workflow automation for staffing agencies. Stop losing placements to manual ops.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div>
              <div className="font-mono text-[10px] text-cream/30 uppercase tracking-widest mb-3">
                Quick Links
              </div>
              <div className="flex flex-col gap-2">
                {[
                  ["The Problem", "#pain"],
                  ["How It Works", "#how"],
                  ["What We Build", "#automate"],
                  ["Pricing", "#pricing"],
                  ["FAQ", "#faq"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="text-sm text-cream/50 hover:text-cream transition-colors font-body"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-cream/30 uppercase tracking-widest mb-3">
                Get In Touch
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-cream/50 hover:text-accent transition-colors font-body"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Book a Free Call
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-cream/50 hover:text-accent transition-colors font-body"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-cream/25">
            © {new Date().getFullYear()} RecruitFlow. All rights reserved.
          </p>
          <p className="text-xs font-mono text-cream/20">
            Built for staffing & recruitment agencies.
          </p>
        </div>
      </div>
    </footer>
  );
}
