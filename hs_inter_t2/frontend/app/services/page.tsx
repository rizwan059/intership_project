"use client";

export default function ServicesPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-black text-white font-sans"
      aria-labelledby="services-heading"
    >
      {/* Abstract AI Data Pattern */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"
      />

      {/* Neural Energy Fields */}
      <div
        aria-hidden
        className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl animate-pulse"
      />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Hero */}
        <header className="mb-24">
          <h1
            id="services-heading"
            className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent"
          >
            AI Service Framework
          </h1>
          <p className="mt-6 max-w-3xl text-gray-400 leading-relaxed">
            Our services operate as interconnected intelligence modules — each
            optimized for automation, analytics, and adaptive system design.
            This is not a service list. It is an AI operating layer.
          </p>
        </header>

        {/* System Status Bar */}
        <div className="flex flex-wrap gap-6 mb-20 text-xs tracking-widest">
          {[
            "NEURAL NETWORK ONLINE",
            "DATA STREAM ACTIVE",
            "AUTOMATION SYNCHRONIZED",
            "INTELLIGENCE CORE READY",
          ].map((label) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              {label}
            </div>
          ))}
        </div>

        {/* Vertical Service Lanes */}
        <section
          aria-label="AI services"
          className="space-y-16"
        >
          {[
            {
              title: "Neural System Engineering",
              text: "Design of modular, distributed AI architectures that mirror neural structures for scalability, resilience, and adaptive learning.",
              tag: "ARCHITECTURE ACTIVE",
            },
            {
              title: "Data Intelligence Pipelines",
              text: "High-performance analytics systems that ingest, classify, and transform raw data into predictive and operational intelligence.",
              tag: "DATA FLOW VERIFIED",
            },
            {
              title: "Autonomous Process Automation",
              text: "AI-driven workflows that self-optimize over time, reducing manual overhead and increasing operational accuracy.",
              tag: "AUTONOMY ENABLED",
            },
            {
              title: "Machine Learning Deployment",
              text: "Custom ML models engineered and embedded into your infrastructure for forecasting, classification, and optimization.",
              tag: "MODEL INFERENCE LIVE",
            },
            {
              title: "Intelligent Interface Systems",
              text: "UX systems powered by behavioral data, real-time feedback, and adaptive logic for high-performance interaction.",
              tag: "INTERFACE ADAPTIVE",
            },
            {
              title: "AI Governance & Security",
              text: "Transparent, auditable AI frameworks that ensure compliance, ethics, and operational trust across all systems.",
              tag: "SECURITY PROTOCOL VERIFIED",
            },
          ].map((service, index) => (
            <article
              key={service.title}
              className="group relative grid gap-8 md:grid-cols-[120px_1fr] items-start"
            >
              {/* Index / Node */}
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 text-cyan-400 text-sm font-mono">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 h-full w-px bg-gradient-to-b from-cyan-400/40 to-transparent" />
              </div>

              {/* Content Panel */}
              <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400/40 transition">
                {/* Hover Energy */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 to-indigo-400/0 group-hover:from-cyan-400/10 group-hover:to-indigo-400/10 transition" />

                <h2 className="text-2xl font-semibold mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm">
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

        {/* Intelligence Workflow */}
        <section className="mt-32">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            How Our Intelligence Operates
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "SCAN", text: "Analyze systems, data, and objectives." },
              { step: "MODEL", text: "Design neural-based architectures." },
              { step: "DEPLOY", text: "Integrate AI into operations." },
              { step: "EVOLVE", text: "Continuously optimize with learning loops." },
            ].map((phase) => (
              <div
                key={phase.step}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center hover:border-indigo-400/40 transition"
              >
                <div className="text-indigo-400 text-sm font-mono mb-2">
                  {phase.step}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {phase.text}
                </p>

                <div className="mt-6 flex justify-center gap-2 text-indigo-400 text-xs tracking-widest">
                  <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                  PHASE COMPLETE
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* System Statement */}
        <section className="mt-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center hover:border-cyan-400/40 transition">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Services That Think, Adapt, and Scale
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every service we provide operates as part of an intelligent network —
            powered by adaptive algorithms, neural-style architecture, and
            real-time data intelligence. This is not static software. This is a
            living system.
          </p>

          <div className="mt-8 flex justify-center gap-3 text-cyan-400 text-xs tracking-widest">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            SYSTEM STATUS: INTELLIGENCE ACTIVE
          </div>
        </section>
      </section>
    </main>
  );
}
