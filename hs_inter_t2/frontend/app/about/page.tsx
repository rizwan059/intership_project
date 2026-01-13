"use client";

export default function AboutPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-black text-white font-sans"
      aria-labelledby="about-heading"
    >
      {/* Abstract AI Matrix */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40"
      />

      {/* Neural Energy Fields */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/3 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse"
      />
      <div
        aria-hidden
        className="absolute bottom-0 -right-40 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl animate-pulse"
      />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* HERO */}
        <header className="max-w-4xl mb-24">
          <h1
            id="about-heading"
            className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent"
          >
            Engineering Artificial Intelligence
          </h1>
          <p className="mt-6 text-gray-400 leading-relaxed">
            We are not a software company. We are architects of intelligent
            systems — building adaptive, data-driven platforms that think,
            learn, and evolve.
          </p>
        </header>

        {/* SYSTEM METRICS BAR */}
        <section
          aria-label="System metrics"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-28"
        >
          {[
            { label: "ACTIVE MODELS", value: "128+" },
            { label: "DATA STREAMS", value: "3.4M / DAY" },
            { label: "AUTOMATED PROCESSES", value: "96%" },
            { label: "SYSTEM UPTIME", value: "99.99%" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400/40 transition"
            >
              <div className="text-xs text-gray-400 tracking-widest mb-1">
                {metric.label}
              </div>
              <div className="text-2xl font-semibold text-cyan-400">
                {metric.value}
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
            </div>
          ))}
        </section>

        {/* NEURAL TIMELINE */}
        <section aria-label="Company evolution" className="mb-32">
          <h2 className="text-3xl font-semibold mb-16 text-center">
            Evolution of Intelligence
          </h2>

          <div className="relative space-y-20">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/40 to-transparent" />

            {[
              {
                year: "2019",
                title: "Foundation",
                text: "Built with the vision of creating intelligent architectures that adapt, scale, and learn.",
              },
              {
                year: "2021",
                title: "Neural Frameworks",
                text: "Launched our first neural-inspired system architecture for enterprise automation.",
              },
              {
                year: "2023",
                title: "Autonomous Intelligence",
                text: "Deployed AI-driven automation pipelines across large-scale operational environments.",
              },
              {
                year: "2025",
                title: "Adaptive Platforms",
                text: "Evolved into a fully modular intelligence ecosystem driven by data, analytics, and self-optimizing systems.",
              },
            ].map((item, index) => (
              <article
                key={item.year}
                className={`relative grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? "md:pr-20" : "md:pl-20"}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-indigo-400/40 transition">
                    <h3 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.text}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-indigo-400 text-xs tracking-widest">
                      <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                      {item.year}
                    </div>
                  </div>
                </div>

                {/* Node */}
                <div className="hidden md:flex justify-center">
                  <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_16px_4px_rgba(34,211,238,0.6)] animate-pulse" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* VALUES / INTELLIGENCE CORE */}
        <section
          aria-label="Intelligence principles"
          className="grid gap-12 lg:grid-cols-3 mb-28"
        >
          {[
            {
              title: "Neural Architecture",
              text: "Our systems mirror neural networks — modular, adaptive, and continuously optimizing.",
            },
            {
              title: "Data Sovereignty",
              text: "Every decision is driven by verified data pipelines and intelligent analytics.",
            },
            {
              title: "Autonomous Evolution",
              text: "Our platforms learn from usage patterns to improve performance without human intervention.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400/40 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.text}
              </p>

              <div className="mt-6 flex items-center gap-2 text-cyan-400 text-xs tracking-widest">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                CORE ACTIVE
              </div>
            </div>
          ))}
        </section>

        {/* CLOSING STATEMENT */}
        <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center hover:border-indigo-400/40 transition">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Built as an Intelligent System
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We don’t just create AI solutions. We engineer living systems that
            analyze, adapt, and evolve. Our architecture is intelligence — from
            infrastructure to interface.
          </p>

          <div className="mt-8 flex justify-center gap-3 text-indigo-400 text-xs tracking-widest">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            SYSTEM STATUS: INTELLIGENCE ONLINE
          </div>
        </section>
      </section>
    </main>
  );
}
