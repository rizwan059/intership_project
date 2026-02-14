"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookACall() {

  return (
    <main
      className="bg-white"
    >

      {/* Not Sure Which Package? Section*/}
      {/* Not Sure Which Package? Section*/}
      <section className="min-h-84 flex items-center justify-center bg-blue-50 px-6">
        <div className="max-w-8xl text-center">

          <h1 className="text-5xl font-semibold text-gray-800 leading-tight mb-8">
            Book Your Free Consultation
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            30 minutes that could save you 10+ hours per week. We'll map your <br />
            workflow, identify automation opportunities, and give you a custom plan—
            even if we never work together.
          </p>


        </div>


      </section>



      {/* What You'll Get on This Call*/}
      {/* What You'll Get on This Call*/}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          {/* Main Card */}
          <div className="bg-blue-50/40 border rounded-2xl p-10 shadow-sm">

            <h3 className="text-3xl font-semibold text-gray-800 text-center mb-10">
              What You'll Get on This Call
            </h3>

            <div className="space-y-8">

              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-2xl text-white shrink-0">
                  🔍
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black">
                    Workflow Analysis
                  </h4>
                  <p className="text-gray-600">
                    We'll identify your biggest time-wasters and show you exactly where automation can help.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-2xl text-white shrink-0">
                  🗺️
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black">
                    Custom Automation Roadmap
                  </h4>
                  <p className="text-gray-600">
                    Specific automations we recommend for your business, prioritized by ROI and impact.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-2xl text-white shrink-0">
                  💰
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black">
                    Clear Pricing Estimate
                  </h4>
                  <p className="text-gray-600">
                    No surprises. You'll know exactly what it costs and what you'll get.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Calendly Integration */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">

              <div className="border-2 border-dashed border-gray-300 rounded-3xl bg-white min-h-[500px] flex items-center justify-center">

                <div className="text-center max-w-xl px-6">

                  <h2 className="text-2xl font-semibold text-gray-900 flex items-center justify-center gap-2">
                    📅 Calendly Integration
                  </h2>

                  <p className="text-gray-600 mt-6">
                    Your Calendly embed will appear here.
                    <br />
                    Users can book 30-minute slots directly.
                  </p>

                  <div className="mt-8 text-gray-600">
                    <p className="font-medium mb-2">Pre-qualification questions:</p>
                    <ul className="space-y-2">
                      <li>• Business Name</li>
                      <li>• Industry</li>
                      <li>• Biggest Workflow Challenge</li>
                    </ul>
                  </div>

                </div>

              </div>

            </div>
          </section>




          {/* Bottom Statement */}
          <div className="mt-12 bg-blue-50/40 border rounded-2xl p-8 text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800">
              No Sales Pitch. No Pressure. Just Strategy.
            </h3>
            <p className="text-lg text-gray-600 mt-4">
              We'll give you actionable advice whether you work with us or not. That's our promise.
            </p>
          </div>

        </div>
      </section>


    </main>
  );
}
