"use client"

import React from 'react'

function HowItWorks() {
  return (
    <div>


      {/* SECTION 4: How It Works (3 Steps) */}
      <section className="min-h-132 flex text-center justify-center bg-white">

        <div className="max-w-6xl w-full text-center">
          <h2 className="text-4xl font-semibold text-black py-12">How It Works</h2>


          <div className="max-w-6xl space-y-8">

            {/* Step 1 */}
            <div className="flex items-start gap-8">
              <div className="flex items-center justify-center w-15 h-15 rounded-full bg-blue-600 text-white text-2xl font-bold shrink-0">
                1
              </div>

              <div className='mb-4'>
                <h3 className="text-2xl text-black font-bold text-left">
                  Discovery Call (30 Minutes, Free)
                </h3>
                <p className="text-gray-600 text-md leading-relaxed">
                  We map your current workflow and identify the biggest automation opportunities.
                  You'll walk away with a clear plan—even if we don't work together.
                </p>
              </div>
            </div>


            {/* Step 2 */}
            <div className="flex items-start gap-8">
              <div className="flex items-center justify-center w-15 h-15 rounded-full bg-blue-600 text-white text-2xl font-bold shrink-0">
                2
              </div>

              <div className='mb-4'>
                <h3 className="text-2xl text-black font-bold text-left">
                  We Build (2–4 Weeks)
                </h3>
                <p className="text-gray-600 text-md leading-relaxed">
                  Custom automation connecting your existing tools. No coding required from you.
                  We handle everything: setup, testing, and integration.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-8">
              <div className="flex items-center justify-center w-15 h-15 rounded-full bg-blue-600 text-white text-2xl font-bold shrink-0">
                3
              </div>

              <div>
                <h3 className="text-2xl text-black font-bold text-left">
                  You Save Time (Forever)
                </h3>
                <p className="text-gray-600 text-md leading-relaxed">
                  Get 10+ hours back per week. Focus on growing your business while automation
                  handles the repetitive tasks. ROI typically within 3–4 months.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>



    </div>
  )
}

export default HowItWorks