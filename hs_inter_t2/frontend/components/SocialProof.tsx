"use client"

import React from "react"

function SocialProof() {
  return (
    <section className="bg-blue-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-black text-center mb-16">
          What Our Clients Say
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <p className="text-gray-700 italic leading-relaxed mb-8">
              "H&S automated our lead follow-up. We now respond in 2 minutes
              instead of 2 days. Closed 3 more deals this month than average."
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                SK
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Sarah K.</h4>
                <p className="text-sm text-gray-500">
                  Real Estate Agent, TX
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <p className="text-gray-700 italic leading-relaxed mb-8">
              "The abandoned cart automation alone recovered $12K in the first
              month. Best $2,500 I’ve ever spent on my business."
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                MJ
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Mike J.</h4>
                <p className="text-sm text-gray-500">
                  E-commerce Owner, CA
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <p className="text-gray-700 italic leading-relaxed mb-8">
              "Client onboarding went from 3 hours to 15 minutes. I took on
              8 more clients without hiring an assistant. Game changer."
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                LP
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Lisa P.</h4>
                <p className="text-sm text-gray-500">
                  Fitness Coach, FL
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SocialProof
