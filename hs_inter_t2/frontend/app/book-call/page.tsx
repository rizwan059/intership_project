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
            workflow, identify automation opportunities, and give you a custom plan— <br />
            even if we never work together.
          </p>


        </div>


      </section>



      {/* What You'll Get on This Call*/}
      {/* What You'll Get on This Call*/}
      <section className="min-h-84 flex items-center justify-center mt-12">

        <div className="max-w-7xl px-6">


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-12">

            {/* Card 1 Lead Management*/}
            <div className=" p-8 text-left border  bg-blue-50/40 rounded-xl shadow-sm ">

              <h3 className="text-lg text-blue-500 font-semibold ">Lead Management</h3>
              <p className="text-md text-gray-600 mt-4">
                Automated lead capture, instant follow-ups, CRM data entry, lead scoring, and nurture sequences.
              </p>

            </div>

            {/* Card 2 Scheduling & Booking*/}
            <div className="p-8 text-left border hover:border-blue-500 bg-blue-50/40 rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">

              <h3 className="text-lg text-blue-500 font-semibold ">Scheduling & Booking</h3>
              <p className="text-md text-gray-600 mt-4">
                Appointment automation, calendar syncing, reminder emails/SMS, and no-show reduction.
              </p>

            </div>

            {/* Card 3  Customer Communication*/}
            <div className="p-8 text-center border  bg-blue-50/40 rounded-xl shadow-sm mb-24">

              <h3 className="text-2xl text-gray-800 font-semibold ">No Sales Pitch. No Pressure. Just Strategy.</h3>
              <p className="text-lg text-gray-600 mt-4">
                We'll give you actionable advice whether you work with us or not. That's our promise.
              </p>

            </div>



          </div>
        </div>
      </section>

    </main>
  );
}
