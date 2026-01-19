"use client";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02060D] text-white font-sans">

      {/* AI Grid Pattern */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.04)_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      {/* Neural Energy Fields */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* Hero */}
        <header className="mb-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AI Service Framework
          </h1>
          <p className="mt-6 max-w-3xl text-gray-400 leading-relaxed">
            Our services operate as interconnected intelligence modules —
            optimized for automation, analytics, and adaptive system design.
          </p>
        </header>

        {/* System Status */}
        <div className="flex flex-wrap gap-6 mb-20 text-xs tracking-widest">
          {[
            "NEURAL NETWORK ONLINE",
            "DATA STREAM ACTIVE",
            "AUTOMATION SYNCHRONIZED",
            "INTELLIGENCE CORE READY",
          ].map((label) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              {label}
            </div>
          ))}
        </div>

        {/* Services */}
        <section className="space-y-16">
          {[
            {
              title: "Neural System Engineering",
              text: "Modular AI architectures designed for scalability and adaptive intelligence.",
              tag: "ARCHITECTURE ACTIVE",
            },
            {
              title: "Data Intelligence Pipelines",
              text: "High-performance analytics transforming raw data into actionable insight.",
              tag: "DATA FLOW VERIFIED",
            },
            {
              title: "Autonomous Process Automation",
              text: "Self-optimizing workflows that evolve with your operations.",
              tag: "AUTONOMY ENABLED",
            },
            {
              title: "Machine Learning Deployment",
              text: "Production-ready ML models embedded directly into your infrastructure.",
              tag: "MODEL INFERENCE LIVE",
            },
            {
              title: "Intelligent Interface Systems",
              text: "Adaptive UX systems driven by real-time behavioral intelligence.",
              tag: "INTERFACE ADAPTIVE",
            },
            {
              title: "AI Governance & Security",
              text: "Auditable, ethical AI frameworks ensuring trust and compliance.",
              tag: "SECURITY VERIFIED",
            },
          ].map((service, index) => (
            <article
              key={service.title}
              className="group relative grid gap-8 md:grid-cols-[120px_1fr]"
            >
              {/* Node */}
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 text-cyan-400 font-mono">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 h-full w-px bg-gradient-to-b from-cyan-400/40 to-transparent" />
              </div>

              {/* Card */}
              <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition hover:border-cyan-400/40">
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition" />

                <h2 className="text-2xl font-semibold mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.text}
                </p>

                <div className="mt-6 flex items-center gap-2 text-cyan-400 text-xs tracking-widest">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  {service.tag}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Workflow */}
        <section className="mt-32">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            How Our Intelligence Operates
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "SCAN", text: "Analyze systems and objectives." },
              { step: "MODEL", text: "Design adaptive architectures." },
              { step: "DEPLOY", text: "Integrate intelligence layers." },
              { step: "EVOLVE", text: "Continuously learn and optimize." },
            ].map((phase) => (
              <div
                key={phase.step}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center hover:border-blue-400/40 transition"
              >
                <div className="text-blue-400 font-mono text-sm mb-2">
                  {phase.step}
                </div>
                <p className="text-gray-400 text-sm">
                  {phase.text}
                </p>

                <div className="mt-6 flex justify-center gap-2 text-blue-400 text-xs tracking-widest">
                  <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                  PHASE COMPLETE
                </div>
              </div>
            ))}
          </div>
        </section>

      </section>
    </main>
  );
}
