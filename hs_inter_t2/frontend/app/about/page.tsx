"use client";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#79a3ec] via-[#EDF4FF] to-[#80abec] font-sans">

      {/* Soft Light Fields */}
      <div className="absolute -top-40 left-1/3 h-[520px] w-[520px] rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute bottom-0 -right-40 h-[520px] w-[520px] rounded-full bg-sky-300/20 blur-3xl" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HERO */}
        <header className="max-w-4xl mb-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0A2540] leading-tight">
            Intro Section
          </h1>
          <p className="mt-6 text-blue-900/80 leading-relaxed">
            We architect intelligent systems that adapt, scale, and evolve —
            powered by data, automation, and modern AI frameworks.
          </p>
        </header>

        {/* METRICS */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-28">
          {[
            { label: "ACTIVE MODELS", value: "128+" },
            { label: "DATA STREAMS", value: "3.4M / DAY" },
            { label: "AUTOMATED PROCESSES", value: "96%" },
            { label: "SYSTEM UPTIME", value: "99.99%" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-xs tracking-widest text-blue-600 mb-1">
                {metric.label}
              </div>
              <div className="text-2xl font-semibold text-blue-500">
                {metric.value}
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
            </div>
          ))}
        </section>

        {/* TIMELINE */}
        <section className="mb-32">
          <h2 className="text-3xl font-semibold mb-16 text-center text-[#0A2540]">
            Evolution of Intelligence
          </h2>

          <div className="relative space-y-20">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-300/40 to-transparent" />

            {[
              { year: "2019", title: "Foundation", text: "Vision to build adaptive, scalable intelligence systems." },
              { year: "2021", title: "Neural Frameworks", text: "Introduced enterprise neural-inspired architectures." },
              { year: "2023", title: "Autonomous Systems", text: "AI automation deployed at operational scale." },
              { year: "2025", title: "Adaptive Platforms", text: "Fully modular, data-driven intelligence ecosystems." },
            ].map((item, index) => (
              <article
                key={item.year}
                className={`relative grid md:grid-cols-2 gap-12 ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                <div className={index % 2 === 0 ? "md:pr-20" : "md:pl-20"}>
                  <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm hover:shadow-md transition">
                    <h3 className="text-xl font-semibold mb-2 text-[#0A2540]">
                      {item.title}
                    </h3>
                    <p className="text-blue-900/80 text-sm leading-relaxed">
                      {item.text}
                    </p>
                    <div className="mt-6 text-blue-500 text-xs tracking-widest">
                      {item.year}
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex justify-center">
                  <div className="h-4 w-4 rounded-full bg-blue-400 shadow-[0_0_12px_3px_rgba(96,165,250,0.4)]" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* VALUES */}
        <h1 className="text-4xl md:text-6xl mb-16 text-center font-bold tracking-tight text-[#0A2540]">
          Our Core Expertise
        </h1>

        <section className="grid gap-12 lg:grid-cols-3 mb-28">
          {[
            { title: "Full Stack Development", text: "End-to-end web applications built with modern frameworks and scalable architecture." },
            { title: "AI & Machine Learning", text: "Intelligence-driven solutions backed by data." },
            { title: "Cloud Infrastructure", text: "Reliable, scalable, and secure cloud systems." },
            { title: "Data Engineering", text: "Robust pipelines for modern data platforms." },
            { title: "Mobile Development", text: "High-performance mobile applications." },
            { title: "Enterprise Security", text: "Security-first architecture and compliance." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#0A2540]">
                {item.title}
              </h3>
              <p className="text-blue-900/80 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        {/* CLOSING */}
        <section className="rounded-2xl border border-blue-200 bg-white p-12 text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#0A2540]">
            Built for Intelligence at Scale
          </h2>
          <p className="text-blue-900/70 max-w-3xl mx-auto leading-relaxed">
            We don’t just build AI solutions — we engineer intelligent systems
            designed to grow, adapt, and perform.
          </p>
        </section>

      </section>
    </main>
  );
}
