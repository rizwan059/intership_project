"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form:", form);
    alert("Message sent successfully.");
    setForm({ fname: "", lname: "", email: "", message: "" });
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-black text-white font-sans"
      aria-labelledby="contact-heading"
    >
      {/* Subtle Animated AI Grid */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-size:48px_48px opacity-40"
      />

      {/* Abstract Neural Glows */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"
      />
      <div
        aria-hidden
        className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl animate-pulse"
      />

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* SEO + Header */}
        <header className="text-center mb-20">
          <h1
            id="contact-heading"
            className="text-4xl md:text-6xl font-sans  tracking-tight bg-linear-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent"
          >
            Contact Intelligence Hub
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-white font-sans leading-relaxed">
            Connect with our AI systems. Submit your inquiry and our intelligent
            workflows will route it to the right channel.
          </p>
        </header>

        {/* Neural Divider */}
        <div className="relative mb-20">
          <div className="h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />
          <div className="absolute left-1/2 -top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_5px_rgba(34,211,238,0.5)] animate-pulse" />
        </div>

        {/* Layout Grid */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Info Panel */}
          <aside className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400/40 transition">
              <h2 className="text-xl font-semibold text-white mb-2">
                AI-Powered Communication
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our systems analyze and route every message using intelligent
                classification models to ensure faster, more accurate responses.
              </p>

              <div className="mt-6 flex items-center gap-2 text-cyan-400 text-xs tracking-widest">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                NEURAL ROUTING ACTIVE
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-indigo-400/40 transition">
              <h2 className="text-xl font-semibold text-white mb-2">
                Data-Driven Operations
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Each submission is logged, categorized, and prioritized using
                real-time analytics for maximum efficiency.
              </p>

              <div className="mt-6 flex items-center gap-2 text-indigo-400 text-xs tracking-widest">
                <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                DATA STREAM VERIFIED
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-6 hover:border-cyan-400/40 transition"
            aria-label="Contact form"
          >
            {/* first Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                First Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.fname}
                onChange={handleChange}
                placeholder="Please enter your first name"
                className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>
            {/* last Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Last Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.lname}
                onChange={handleChange}
                placeholder="Please Enter Your last name"
                className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Please enter your email"
                className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your inquiry..."
                className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-linear-to-r from-cyan-500 to-indigo-500 py-3 text-sm font-semibold text-black hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            >
              Transmit Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
