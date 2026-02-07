"use client";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-300 via-blue-200 to-blue-300 font-sans">

      {/* Soft Light Fields */}
      <div className="absolute -top-40 left-1/3 h-[520px] w-[520px] rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute bottom-0 -right-40 h-[520px] w-[520px] rounded-full bg-sky-300/20 blur-3xl" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HERO */}
        <header className="max-w-4xl mb-24 py-6 px-6 shadow-[0_4px_12px_rgba(0,0,0,1)] rounded-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-600 leading-tight">
            Intro Section
          </h1>
          <p className="mt-6 text-gray-800 leading-relaxed font-serif">
            We architect intelligent systems that adapt, scale, and evolve —
            powered by data, automation, and modern AI frameworks.
          </p>
        </header>

        {/* METRICS */}
        <section className="grid gap-16 sm:grid-cols-2 lg:grid-cols-2 mb-28 max-w-4xl justify-center mx-auto">
          {[
            { label: "CRM Project", value: "128+" },
            { label: "ERP Project", value: "3.4M / DAY" },
            { label: "Automation Project", value: "96%" },
            { label: "AI Solutions Project", value: "99.99%" },
          ].map((metric, index) => (
            <div
              key={index}
              className="rounded-2xl border border-blue-500 bg-white/90 p-6 shadow-[0_4px_12px_rgba(0,0,0,1)] hover:shadow-md transition"
            >
              <div className="text-xl tracking-widest text-gray-800 mb-4 justify-center flex">
                {metric.label}
              </div>
              <div className="text-2xl font-semibold text-gray-600 justify-center flex">
                {metric.value}
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent " />
            </div>
          ))}
        </section>



        {/* Mission */}
        <div className="mb-24 py-6 shadow-[0_4px_12px_rgba(0,0,0,1)] rounded-2xl">
          <h1 className="text-4xl md:text-6xl my-6 text-center font-bold tracking-tight text-gray-600">
            Our Mission
          </h1>
          <section className="rounded-2xl border mx-6 mb-4 border-blue-200 bg-white/80 p-6 text-center">

            <p className="text-gray-800 leading-relaxed">
              We don’t just build AI solutions — we engineer intelligent systems
              designed to grow, adapt, and perform.
            </p>
          </section>

        </div>

        {/* Vision */}
        <div className="mb-24 py-6 shadow-[0_4px_12px_rgba(0,0,0,1)] rounded-2xl">
          <h1 className="text-4xl md:text-6xl my-6 text-center font-bold tracking-tight text-gray-600 ">
            Our Vision
          </h1>
          <section className="rounded-2xl border mx-6 mb-4 border-blue-200 bg-white p-6 text-center shadow-sm">

            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We don’t just build AI solutions — we engineer intelligent systems
              designed to grow, adapt, and perform.
            </p>
          </section>

        </div>


        {/* What Makes You Different */}
       <div className="mb-24 py-6 shadow-[0_4px_12px_rgba(0,0,0,1)] rounded-2xl">
          <h1 className="text-4xl md:text-6xl my-6 text-center font-bold tracking-tight text-gray-600 ">
            What Makes Us Different
          </h1>
          <section className="rounded-2xl border mx-6 mb-4 border-blue-200 bg-white p-6 text-center shadow-sm">

            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We don’t just build AI solutions — we engineer intelligent systems
              designed to grow, adapt, and perform.
            </p>
          </section>

        </div>

        {/* Expertise Overview */}
        <div className="my-8 py-6 shadow-[0_4px_12px_rgba(0,0,0,1)] rounded-2xl">
          <h1 className="text-4xl md:text-6xl my-6 text-center font-bold tracking-tight text-gray-600 ">
            Our Expertise Overview
          </h1>
          <section className="rounded-2xl border mx-6 mb-4 border-blue-200 bg-white p-6 text-center shadow-sm">

            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We don’t just build AI solutions — we engineer intelligent systems
              designed to grow, adapt, and perform.
            </p>
          </section>

        </div>




      </section>
    </main>
  );
}
