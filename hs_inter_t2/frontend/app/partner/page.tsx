"use client";

export default function PartnersPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-black text-white font-sans"
      aria-labelledby="partners-heading"
    >
      {/* Abstract AI Grid */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40"
      />

      {/* Neural Energy Orbs */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl animate-pulse"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse"
      />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* HERO */}
        {/* HERO — NETWORK COMMAND INTERFACE */}
        <header className="relative mb-32">
          <div className="grid gap-16 lg:grid-cols-2 items-center">

            {/* Left: Command Interface */}
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 overflow-hidden">
              {/* Animated Scan Line */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-pulse"
              />

              <div className="relative z-10">
                <div className="text-cyan-400 text-xs tracking-widest mb-4">
                  COLLABORATION INTERFACE
                </div>

                <h1
                  id="partners-heading"
                  className="text-4xl md:text-5xl font-bold leading-tight"
                >
                  Global Intelligence
                  <br />
                  <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    Partner Network
                  </span>
                </h1>

                <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
                  Our collaborators are interconnected intelligence nodes within a
                  unified AI ecosystem. Together, we design adaptive systems that
                  exchange data, optimize continuously, and evolve at scale.
                </p>

                {/* System Status */}
                <div className="mt-8 flex flex-wrap gap-4 text-xs tracking-widest">
                  {[
                    "NETWORK LINK: STABLE",
                    "DATA SYNC: ACTIVE",
                    "INTELLIGENCE MODE: COLLABORATIVE",
                  ].map((status) => (
                    <div
                      key={status}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2"
                    >
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                      {status}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Network Visualization */}
            <div className="relative h-[360px] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
              {/* Abstract Network Grid */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40"
              />

              {/* Node Orbs */}
              <div
                aria-hidden
                className="absolute top-1/4 left-1/4 h-24 w-24 rounded-full bg-indigo-500/20 blur-2xl animate-pulse"
              />
              <div
                aria-hidden
                className="absolute bottom-1/4 right-1/3 h-32 w-32 rounded-full bg-cyan-500/20 blur-2xl animate-pulse"
              />

              {/* Network Indicators */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                <div className="text-xs tracking-widest text-gray-400">
                  ACTIVE NODES
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {["EU", "US", "APAC", "MEA", "LATAM", "GLOBAL"].map((region) => (
                    <div
                      key={region}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm hover:border-cyan-400/40 transition"
                    >
                      <div className="text-cyan-400 font-mono text-xs mb-1">
                        {region}
                      </div>
                      <div className="text-gray-400 text-xs tracking-wide">
                        CONNECTED
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs tracking-widest text-gray-400">
                  <span>NETWORK MAP: LIVE</span>
                  <span className="text-cyan-400 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    SIGNAL ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>


        {/* NETWORK OVERVIEW */}
        <section
          aria-label="Partner network overview"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-28"
        >
          {[
            { label: "ACTIVE PARTNERS", value: "42+" },
            { label: "GLOBAL REGIONS", value: "18" },
            { label: "INTEGRATED SYSTEMS", value: "120+" },
            { label: "COLLABORATION UPTIME", value: "99.98%" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-indigo-400/40 transition"
            >
              <div className="text-xs text-gray-400 tracking-widest mb-1">
                {item.label}
              </div>
              <div className="text-2xl font-semibold text-indigo-400">
                {item.value}
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
            </div>
          ))}
        </section>

        {/* NETWORK MAP / PARTNER NODES */}
        <section aria-label="Partner network" className="mb-32">
          <h2 className="text-3xl font-semibold mb-16 text-center">
            Distributed Collaboration Grid
          </h2>

          <div className="relative grid gap-12 md:grid-cols-3">
            {[
              {
                name: "AI Research Consortium",
                role: "Neural Architecture",
                desc: "Joint research into adaptive neural frameworks for scalable intelligence systems.",
                status: "NODE SYNCHRONIZED",
              },
              {
                name: "Cloud Systems Alliance",
                role: "Infrastructure Intelligence",
                desc: "Distributed compute optimization for AI-driven platforms and automation pipelines.",
                status: "DATA LINK ACTIVE",
              },
              {
                name: "Cybersecurity Lab",
                role: "AI Governance",
                desc: "Ethical AI frameworks, compliance systems, and intelligent security architectures.",
                status: "SECURITY VERIFIED",
              },
              {
                name: "Enterprise Automation Group",
                role: "Process Intelligence",
                desc: "AI-powered workflow automation for enterprise-scale operational systems.",
                status: "AUTOMATION ONLINE",
              },
              {
                name: "Human-AI Interaction Studio",
                role: "Interface Intelligence",
                desc: "Adaptive UX systems powered by behavioral data and machine intelligence.",
                status: "INTERFACE ADAPTIVE",
              },
              {
                name: "Data Science Collective",
                role: "Predictive Intelligence",
                desc: "Advanced analytics, forecasting models, and real-time data learning systems.",
                status: "PREDICTION LIVE",
              },
            ].map((partner) => (
              <article
                key={partner.name}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400/40 transition"
              >
                {/* Neural Glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400/0 to-cyan-400/0 group-hover:from-indigo-400/10 group-hover:to-cyan-400/10 transition" />

                <h3 className="text-xl font-semibold mb-1">
                  {partner.name}
                </h3>
                <p className="text-indigo-400 text-sm mb-4 tracking-wide">
                  {partner.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {partner.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-cyan-400 text-xs tracking-widest">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  {partner.status}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* COLLABORATION MODEL */}
        <section aria-label="Collaboration model" className="mb-28">
          <h2 className="text-3xl font-semibold mb-14 text-center">
            How We Collaborate
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "CONNECT", text: "Establish data, system, and intelligence links." },
              { step: "ALIGN", text: "Synchronize goals, ethics, and AI governance." },
              { step: "INTEGRATE", text: "Merge AI systems into a unified architecture." },
              { step: "EVOLVE", text: "Continuously optimize through learning loops." },
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

        {/* CALL TO COLLABORATE */}
        <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center hover:border-cyan-400/40 transition">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Join the Intelligence Network
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We collaborate with organizations that believe AI should be
            transparent, ethical, and adaptive. If your systems are built to
            learn and evolve, we are already aligned.
          </p>

          <div className="mt-8 flex justify-center gap-3 text-cyan-400 text-xs tracking-widest">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            NETWORK STATUS: READY FOR INTEGRATION
          </div>
        </section>
      </section>
    </main>
  );
}
