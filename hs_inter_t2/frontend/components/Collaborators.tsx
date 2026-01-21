"use client";
import React from "react";

export default function CollaboratorsSection() {
  const logos = Array.from({ length: 10 }, (_, i) => i);

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="relative w-full overflow-hidden bg-[#0b1121] py-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-center text-sm text-slate-400 font-semibold uppercase tracking-wider mb-8">
            Trusted by innovative companies worldwide
          </p>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...logos, ...logos].map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-8 sm:px-12 transition-all duration-300 hover:scale-110 group"
                >
                  <div className="w-32 sm:w-40 h-12 sm:h-16 bg-slate-800/50 rounded-lg border border-slate-700 flex items-center justify-center group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                    <svg
                      className="w-16 sm:w-20 h-8 sm:h-10 text-slate-500 group-hover:text-blue-400 transition-colors duration-300"
                      viewBox="0 0 100 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="10"
                        y="15"
                        width="30"
                        height="20"
                        rx="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M20 25 L30 25 M20 30 L25 30"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle cx="70" cy="25" r="12" stroke="currentColor" strokeWidth="2" />
                      <circle cx="70" cy="25" r="5" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
