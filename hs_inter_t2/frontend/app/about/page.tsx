"use client";

export default function AboutPage() {
  return (
    // <main className="relative min-h-screen overflow-hidden bg-white/90 font-sans">
    <main className="relative min-h-screen overflow-hidden bg-[#B4D6E3] font-sans">

      {/* Soft Light Fields */}
      {/* <div className="absolute -top-40 left-1/3 h-[520px] w-[520px] rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute bottom-0 -right-40 h-[520px] w-[520px] rounded-full bg-sky-300/20 blur-3xl" /> */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HERO */}
        <header className="max-w-4xl mb-24 py-6 px-6 shadow-[0_4px_12px_rgba(0,0,0,1)]  bg-[#B4D6E3] border border-blue-500 rounded-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black leading-tight">
            Intro Section
          </h1>
          <p className="mt-6 text-black leading-relaxed font-serif">
            We architect intelligent systems that adapt, scale, and evolve —
            powered by data, automation, and modern AI frameworks.
          </p>
        </header>

        {/* METRICS */}
        <section className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4 mb-28 max-w-4xl justify-center mx-auto">
          {[
            { label: "CRM Project", value: "128+" },
            { label: "ERP Project", value: "3.4M / DAY" },
            { label: "Automation Project", value: "96%" },
            { label: "AI Solutions Project", value: "99.99%" },
          ].map((metric, index) => (
            <div
              key={index}
              className="rounded-2xl border border-blue-500 bg-[#B4D6E3] p-6 shadow-[0_4px_12px_rgba(0,0,0,1)] hover:shadow-md transition"
            >
              <div className="text-xl tracking-widest text-black mb-4 justify-center flex">
                {metric.label}
              </div>
              <div className="text-2xl font-semibold text-black justify-center flex">
                {metric.value}
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent " />
            </div>
          ))}
        </section>



        {/* Mission */}
        <div className="mb-24 py-6 shadow-[0_4px_12px_rgba(0,0,0,1)] rounded-2xl bg-[#7F9DB1] border border-blue-500">
          <h1 className="text-4xl md:text-6xl my-6 text-center font-bold tracking-tight text-black">
            Our Mission
          </h1>
          <section className="rounded-2xl border mx-6 mb-4 border-blue-200 bg-[#B4D6E3] p-6 text-center">

            <p className="text-black leading-relaxed">
              We don’t just build AI solutions — we engineer intelligent systems
              designed to grow, adapt, and perform.
            </p>
          </section>

        </div>

        {/* Vision */}
        <div className="mb-24 py-6 shadow-[0_4px_12px_rgba(0,0,0,1)] bg-[#7F9DB1] rounded-2xl border border-blue-500">
          <h1 className="text-4xl md:text-6xl my-6 text-center font-bold tracking-tight text-black ">
            Our Vision
          </h1>
          <section className="rounded-2xl border mx-6 mb-4 border-blue-200 bg-[#B4D6E3] p-6 text-center shadow-sm">

            <p className="text-black max-w-3xl mx-auto leading-relaxed">
              We don’t just build AI solutions — we engineer intelligent systems
              designed to grow, adapt, and perform.
            </p>
          </section>

        </div>


        {/* What Makes You Different */}
       <div className="mb-24 py-6 shadow-[0_4px_12px_rgba(0,0,0,1)] bg-[#7F9DB1] rounded-2xl border border-blue-500">
          <h1 className="text-4xl md:text-6xl my-6 text-center font-bold tracking-tight text-black">
            What Makes Us Different
          </h1>
          <section className="rounded-2xl border mx-6 mb-4 border-blue-200 bg-[#B4D6E3] p-6 text-center shadow-sm">

            <p className="text-black max-w-3xl mx-auto leading-relaxed">
              We don’t just build AI solutions — we engineer intelligent systems
              designed to grow, adapt, and perform.
            </p>
          </section>

        </div>

        {/* Expertise Overview */}
        <div className="my-8 py-6 shadow-[0_4px_12px_rgba(0,0,0,1)] bg-[#7F9DB1] rounded-2xl border border-blue-500">
          <h1 className="text-4xl md:text-6xl my-6 text-center font-bold tracking-tight text-black ">
            Our Expertise Overview
          </h1>
          <section className="rounded-2xl border mx-6 mb-4 border-blue-200 bg-[#B4D6E3] p-6 text-center shadow-sm">

            <p className="text-black max-w-3xl mx-auto leading-relaxed">
              We don’t just build AI solutions — we engineer intelligent systems
              designed to grow, adapt, and perform. 
            </p>
          </section>

        </div>




      </section>
    </main>
  );
}
