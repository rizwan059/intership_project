"use client"

import React from 'react'

function ProblemSection() {
  return (
    <div>


      {/* SECTION 3: The Problem (3 Columns)*/}
      <section className="min-h-132 flex items-center justify-center bg-blue-50 px-6">

        <div className="max-w-6xl w-full">

          <h2 className="text-4xl font-semibold font-sans mb-12 text-black text-center">
            Sound Familiar?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">

            {/* problem Card 1 */}
            <div className="p-8 border-l-4 border-gray-400 bg-gradient-to-r from-cyan-200 to-white  rounded-xl shadow-sm hover:shadow-lg transition ">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-2xl text-gray-800 font-bold text-left">10+ Hours Wasted Weekly</h3>

              <p className="text-lg text-gray-800 py-6 text-left">
                Manual data entry, follow-ups, scheduling, and administrative tasks eat away your productive
                time every single week.
              </p>
            </div>

            {/* problem Card 2 */}
            <div className="p-8 border-l-4 border-gray-400 bg-gradient-to-r from-cyan-200 to-white rounded-xl shadow-sm hover:shadow-lg transition ">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl text-gray-800 font-bold text-left">Tools That Don't Talk</h3>

              <p className="text-lg text-gray-800 py-6 text-left">
                Your CRM, email platform, calendar, invoicing software, and payment systems all live in silos. Nothing 
                syncs automatically.
              </p>
            </div>

            {/* problem Card 3 */}
            <div className="p-8 border-l-4 border-gray-400 bg-gradient-to-r from-cyan-200 to-white  rounded-xl shadow-sm hover:shadow-lg transition ">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-2xl text-gray-800 font-bold text-left">Revenue Left on Table</h3>

              <p className="text-lg text-gray-800 py-6 text-left">
                Missed leads, forgotten follow-ups, slow invoicing, and manual processes cost you 
                thousands in lost revenue every month.
              </p>
            </div>




          </div>

        </div>


      </section>


    </div>
  )
}

export default ProblemSection