"use client";

import Link from "next/link";
export default function PartnersPage() {
  return (
    <main
      className=" min-h-screen  bg-white font-sans">


      {/* Services & Pricingsection*/}
      <section className="py-20 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold mb-6 text-black">
              Services & Pricing
            </h2>

            <p className="text-xl text-gray-600">
              Affordable automation packages designed for small businesses. Choose the <br />
              plan that fits your needs.
            </p>
          </div>

          {/* Grid */}
       
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">

            {/* Card 1  Starter $1500 */}
            {/* Card 1  Starter $1500 */}
            
            <div className="w-full max-w-md bg-white border-2 hover:border-blue-500 rounded-2xl p-10 shadow-sm">

              {/* Plan Name */}
              <h3 className="text-2xl font-semibold text-center text-gray-900 mb-6">
                Complete
              </h3>

              {/* Price */}
              <div className="text-center mb-2">
                <span className="text-5xl font-bold text-blue-600">$4,500</span>
              </div>

              <p className="text-center text-gray-500 mb-10">
                One-time investment
              </p>

              {/* Features */}
              <ul className="space-y-5 mb-10">
                <li className="flex items-center gap-3 border-b pb-1">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">5-7 comprehensive automations</span>
                </li>

                <li className="flex items-center gap-3 border-b pb-1">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">4-6 week implementation</span>
                </li>

                <li className="flex items-center gap-3 border-b pb-1">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">Complete workflow overhaul</span>
                </li>

                <li className="flex items-center gap-3 border-b pb-1">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">Custom dashboards</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">Multi-tool integration</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">Advanced analytics</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">6 months support</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">Unlimited training</span>
                </li>




              </ul>

              {/* Button */}
              <button className="w-full py-3 border-2 border-blue-500 text-blue-600 font-medium rounded-xl hover:bg-blue-600 hover:text-white transition duration-300">
                Start Small
              </button>

              {/* Bottom Text */}
              <p className="text-center text-sm text-gray-500 mt-6">
                Best for: Solo entrepreneurs, new <br />businesses
              </p>

            </div>

            {/* Card 2 MOST POPULAR $2500 */}
            {/* Card 2 MOST POPULAR $2500 */}
            <div className="relative w-full max-w-md">

              {/* Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <span className="bg-orange-500 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-md">
                  MOST POPULAR
                </span>
              </div>

              {/* Card */}
              <div className="bg-white border-2 border-blue-500 rounded-2xl p-10 shadow-sm">

                {/* Plan Name */}
                <h3 className="text-2xl font-semibold text-center text-gray-900 mb-6">
                  Growth
                </h3>

                {/* Price */}
                <div className="text-center mb-2">
                  <span className="text-5xl font-bold text-blue-600">$2,500</span>
                </div>

                <p className="text-center text-gray-500 mb-10">
                  One-time investment
                </p>

                {/* Features */}
                <ul className="space-y-5 mb-10">
                  <li className="flex items-center gap-3 border-b pb-4">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700">Everything in Starter</span>
                  </li>

                  <li className="flex items-center gap-3 border-b pb-4">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700">Advanced automations</span>
                  </li>

                  <li className="flex items-center gap-3 border-b pb-4">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700">CRM integrations</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700">Priority support</span>
                  </li>
                </ul>

                {/* Button */}
                <button className="w-full py-3 border-2 border-blue-500 text-blue-600 font-medium rounded-xl hover:bg-blue-600 hover:text-white transition duration-300">
                  Get Started
                </button>

              </div>
            </div>

            {/* Card 3  Complete $4500 */}
            {/* Card 3  Complete $4500 */}
            <div className="w-full max-w-md bg-white border-2 hover:border-blue-500 rounded-2xl p-10 shadow-sm">

              {/* Plan Name */}
              <h3 className="text-2xl font-semibold text-center text-gray-900 mb-6">
                Complete
              </h3>

              {/* Price */}
              <div className="text-center mb-2">
                <span className="text-5xl font-bold text-blue-600">$4,500</span>
              </div>

              <p className="text-center text-gray-500 mb-10">
                One-time investment
              </p>

              {/* Features */}
              <ul className="space-y-5 mb-10">
                <li className="flex items-center gap-3 border-b pb-1">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">5-7 comprehensive automations</span>
                </li>

                <li className="flex items-center gap-3 border-b pb-1">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">4-6 week implementation</span>
                </li>

                <li className="flex items-center gap-3 border-b pb-1">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">Complete workflow overhaul</span>
                </li>

                <li className="flex items-center gap-3 border-b pb-1">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">Custom dashboards</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">Multi-tool integration</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">Advanced analytics</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">6 months support</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">Unlimited training</span>
                </li>




              </ul>

              {/* Button */}
              <button className="w-full py-3 border-2 border-blue-500 text-blue-600 font-medium rounded-xl hover:bg-blue-600 hover:text-white transition duration-300">
                Start Small
              </button>

              {/* Bottom Text */}
              <p className="text-center text-sm text-gray-500 mt-6">
                Best for: Solo entrepreneurs, new <br />businesses
              </p>

            </div>





          </div>

        </div>
      </section>


      {/* What We Automate section*/}
      {/* What We Automate section*/}
      <section className="min-h-132 flex items-center justify-center mb-12">

        <div className="max-w-6xl w-full text-center">

          <h2 className="text-4xl font-semibold font-sans mb-16 text-black">
            What We Automate
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">

            {/* Card 1 Lead Management*/}
            <div className="p-8 text-left border hover:border-blue-500 bg-blue-50/40 rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">

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
            <div className="p-8 text-left border hover:border-blue-500 bg-blue-50/40 rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">

              <h3 className="text-lg text-blue-500 font-semibold ">Customer Communication</h3>
              <p className="text-md text-gray-600 mt-4">
                Email sequences, SMS campaigns, post-purchase follow-ups, and review requests.
              </p>

            </div>

            {/* Card 4 Invoicing & Payments*/}
            <div className="p-8 text-left border hover:border-blue-500 bg-blue-50/40 rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">

              <h3 className="text-lg text-blue-500 font-semibold ">Invoicing & Payments</h3>
              <p className="text-md text-gray-600 mt-4">
                Auto-generate invoices, payment reminders, receipt delivery, and accounting sync.
              </p>

            </div>

            {/* Card 5 Client Onboarding*/}
            <div className="p-8 text-left border hover:border-blue-500 bg-blue-50/40 rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">

              <h3 className="text-lg text-blue-500 font-semibold ">Client Onboarding</h3>
              <p className="text-md text-gray-600 mt-4">
                Welcome sequences, document collection, contract signing, and initial setup automation.
              </p>

            </div>

            {/* Card 6 E-commerce*/}
            <div className="p-8 text-left border hover:border-blue-500 bg-blue-50/40 rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">

              <h3 className="text-lg text-blue-500 font-semibold ">E-commerce</h3>
              <p className="text-md text-gray-600 mt-4">
                Abandoned cart recovery, order tracking, inventory alerts, and customer win-back campaigns.
              </p>

            </div>


          </div>
        </div>
      </section>


      {/* Not Sure Which Package? Section*/}
      {/* Not Sure Which Package? Section*/}
      <section className="min-h-84 flex items-center justify-center bg-blue-50/50 px-6">
        <div className="max-w-8xl text-center">

          <h1 className="text-4xl font-semibold text-black leading-tight mb-8">
            Not Sure Which Package?
          </h1>

          <p className="text-md text-gray-600 mb-8">
            Book a free 30-minute call. We'll recommend the right fit for your business and walk you through exactly what you'll get.
          </p>

          <div className="flex justify-center gap-4">

            {/* "Book Free Consultation" (links to /book) */}
            <Link href="/book-call">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg transform transition duration-300 hover:-translate-y-2  cursor-pointer">
                Book Free Consultation
              </button>
            </Link>
          </div>




        </div>
      </section>



    </main>
  );
}
