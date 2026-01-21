"use client";

import React from "react";

export default function ContactSection() {
  const benefits = [
    "Expert Consultation",
    "Custom Solutions",
    "Rapid Deployment",
    "24/7 Support",
    "Scalable Architecture",
    "Enterprise Security",
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .hover\\:animate-shimmer:hover {
          animation: shimmer 1.5s infinite;
        }
      `}</style>

      <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#0b1121] py-20 flex items-center">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-900/30 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl opacity-40"></div>

        {/* Main Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Column: CTA Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
                  Ready to Start?
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Let's Build Something
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    Amazing Together
                  </span>
                </h2>
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                  Connect with our expert team to discuss your project needs.
                  We'll help you architect, build, and scale your digital
                  solutions with precision and speed.
                </p>
              </div>

              {/* Benefits Grid */}
              <div
                className="animate-fade-in-up w-full"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-slate-900 rounded-xl border border-slate-700 hover:border-blue-600/30 hover:bg-slate-800/50 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 text-blue-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button - Same as HeroSection */}
              <div
                className="animate-fade-in-up pt-4 w-full flex flex-col sm:flex-row gap-4 items-center lg:items-start"
                style={{ animationDelay: "0.4s" }}
              >
                <a
                  href="#"
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:bg-blue-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0b1121] overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                  Schedule a Call
                  <svg
                    className="ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-slate-800 border border-slate-700 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-slate-700 hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0b1121]"
                >
                  View Case Studies
                  <svg
                    className="ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form Card */}
            <div
              className="w-full lg:w-1/2 animate-fade-in-up animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              {/* Decorative frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur-lg opacity-40 animate-pulse"></div>

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 p-8 sm:p-10">
                <div className="space-y-6">
                  {/* Form Header */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Get Started Today
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Fill out the form and we'll get back to you within 24
                      hours
                    </p>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        placeholder="Your Company"
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your project..."
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="button"
                    className="group relative w-full inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:bg-blue-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0b1121] overflow-hidden"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                    Send Message
                    <svg
                      className="ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>

                  {/* Privacy Note */}
                  <p className="text-xs text-slate-500 text-center">
                    By submitting, you agree to our{" "}
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
