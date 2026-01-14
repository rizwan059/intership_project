"use client";
import React, { useState, useEffect } from "react";

// SVG Icon Component
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-blue-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

export default function HeroSection() {
  const words = [
    "Software Architects",
    "Data Engineers",
    "AI Engineers",
    "Full Stack Developers",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500); // Changing te text every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Custom Animation Styles injected here to avoid external config */}
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
      `}</style>

      {/* Main Section: Changed to Dark Slate Background */}
      <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0b1121] flex items-center">
        {/* Background Decorative Elements: Adjusted opacity and colors for dark mode */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-900/30 rounded-full blur-3xl opacity-60"></div>

        {/* Main Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Column: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              {/* Badge / Tag: Darker background, lighter text */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-800 text-blue-300 text-sm font-semibold tracking-wide uppercase animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                Global AI Innovation
              </div>

              <div className="space-y-6 max-w-2xl">
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                    We Build Scalable Solutions With Our Expert
                  </h1>
                  {/* Gradient Text Adjusted for visibility on dark */}
                  <span
                    key={currentWordIndex}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 block mt-2 sm:inline sm:mt-0 animate-fade-in-up"
                  >
                    {words[currentWordIndex]}
                  </span>
                </div>

                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Access expert software engineers who turn business
                    challenges into scalable digital solutions using AI, Machine
                    Learning, and 100+ emerging technologies.
                  </p>
                </div>
              </div>

              {/* Trust Indicators: Lighter text and icon backgrounds */}
              <div
                className="flex flex-wrap justify-center lg:justify-start gap-6 text-slate-300 text-sm font-medium animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-slate-800 rounded-full">
                    <CheckIcon />
                  </div>
                  <span>Timezone Aligned</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-slate-800 rounded-full">
                    <CheckIcon />
                  </div>
                  <span>Vetted Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-slate-800 rounded-full">
                    <CheckIcon />
                  </div>
                  <span>Scale Faster</span>
                </div>
              </div>

              {/* CTA Button */}
              <div
                className="pt-4 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
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
              </div>
            </div>

            {/* Right Column: Image */}
            <div
              className="w-full lg:w-1/2 relative animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Decorative frame: Darker gradient for dark mode */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur-lg opacity-40 animate-pulse"></div>

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 aspect-[4/3] lg:aspect-[4/3]">
                <img
                  alt="Modern office team collaborating"
                  className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-105 opacity-10 hover:opacity-100"
                  src="/hs_logo.png"
                  loading="eager"
                  decoding="async"
                />

                {/* Floating Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-800/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-700 animate-float hidden sm:block">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <img
                          key={i}
                          className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
                          src={`https://i.pravatar.cc/150?img=${10 + i}`}
                          alt="Dev Avatar"
                        />
                      ))}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                        Available Engineers
                      </p>
                      <p className="text-lg font-bold text-white">
                        40+ Ready to Start
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}