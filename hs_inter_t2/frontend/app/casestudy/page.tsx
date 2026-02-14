"use client";

import Link from "next/link";
export default function CaseStudyPage() {
  return (

    <main className=" min-h-screen bg-blue-50 font-sans">


      {/* Client Success Stories*/}
      <section className="py-20">
        <div className="">

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-5xl font-semibold mb-6 text-black">
              Client Success Stories
            </h2>

            <p className="text-xl text-gray-600">
              Real results from real businesses. See how automation transformed their <br />
              operations.
            </p>
          </div>

        </div>


        {/* From Chaos to Closed Deals */}
        {/* From Chaos to Closed Deals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 ">

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                {/* Top Gradient Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10">
                  <span className="inline-block bg-blue-500/30 text-sm px-4 py-1 rounded-full mb-6">
                    Real Estate
                  </span>

                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    From Chaos to Closed Deals
                  </h2>

                  <p className="text-blue-100">
                    Sarah K, Real Estate Agent – Austin, TX
                  </p>
                </div>

                {/* Content Body */}
                <div className="p-10 space-y-10">

                  {/* Challenge */}
                  <div>
                    <h3 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">
                      Challenge
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sarah spent 8+ hours every week manually following up with leads
                      from her website, open houses, and referrals. Many leads fell
                      through the cracks because she couldn’t respond fast enough.
                      Her CRM was a mess—duplicate entries, missing contact info,
                      and zero automation.
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">
                      Solution
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We built a complete lead management automation system: instant
                      lead capture from her website, automatic CRM updates with
                      deduplication, personalized email sequences triggered by lead
                      source, SMS follow-ups for hot leads, and task creation for
                      personal outreach at key moments.
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-blue-600 font-semibold tracking-wide uppercase mb-6">
                      Results
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
                        <h4 className="text-3xl font-bold text-blue-600">2 min</h4>
                        <p className="text-sm text-gray-500 mt-2">
                          Response Time <br /> (was 2 days)
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
                        <h4 className="text-3xl font-bold text-blue-600">3+</h4>
                        <p className="text-sm text-gray-500 mt-2">
                          Extra Deals/Month
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
                        <h4 className="text-3xl font-bold text-blue-600">8 hrs</h4>
                        <p className="text-sm text-gray-500 mt-2">
                          Saved Per Week
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
                        <h4 className="text-3xl font-bold text-blue-600">0</h4>
                        <p className="text-sm text-gray-500 mt-2">
                          Leads Lost
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Box */}
                  <div className="bg-slate-900 text-white rounded-xl p-8 border-l-4 border-yellow-400">
                    <p className="italic leading-relaxed mb-4">
                      “I was skeptical about automation, but H&S made it so simple.
                      I now respond to every lead within minutes, and my follow-up
                      game is stronger than ever. Closed 3 more deals this month than
                      my average. This already paid for itself 5x over.”
                    </p>

                    <p className="text-sm text-gray-300">
                      — Sarah K., Austin, TX
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Recovering Lost Revenue on Autopilot */}
        {/* Recovering Lost Revenue on Autopilot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 ">

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                {/* Top Gradient Header */}
                <div className="bg-gradient-to-r from-[#10b981] to-[#059669] text-white p-10">
                  <span className="inline-block bg-[#10b981] text-sm px-4 py-1 rounded-full mb-6">
                    E-commerce
                  </span>

                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Recovering Lost Revenue on Autopilot
                  </h2>

                  <p className="text-green-100">
                    Mike J., Online Store Owner - Los Angeles, CA
                  </p>
                </div>

                {/* Content Body */}
                <div className="p-10 space-y-10">

                  {/* Challenge */}
                  <div>
                    <h3 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">
                      Challenge
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Mike's Shopify store had a 70% abandoned cart rate. Customers
                      would add items to cart but never complete checkout. He knew
                      this was costing him thousands but didn't have time to manually
                      follow up with hundreds of people every week.
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">
                      Solution
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We implemented a multi-channel cart recovery system: automated email
                      sequence (3 emails over 48 hours with incentives), SMS reminders for
                      high-value carts, personalized product recommendations based on browsing,
                      and order tracking updates with upsell opportunities.
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-blue-600 font-semibold tracking-wide uppercase mb-6">
                      Results
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
                        <h4 className="text-3xl font-bold text-blue-600">23%</h4>
                        <p className="text-sm text-gray-500 mt-2">
                          Cart Recovery Rate
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
                        <h4 className="text-3xl font-bold text-blue-600">$12K</h4>
                        <p className="text-sm text-gray-500 mt-2">
                          Monthly Revenue Recovered
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
                        <h4 className="text-3xl font-bold text-blue-600">478</h4>
                        <p className="text-sm text-gray-500 mt-2">
                          Carts Saved (Month 1)
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
                        <h4 className="text-3xl font-bold text-blue-600">5x</h4>
                        <p className="text-sm text-gray-500 mt-2">
                          ROI in 30 Days
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Box */}
                  <div className="bg-slate-900 text-white rounded-xl p-8 border-l-4 border-yellow-400">
                    <p className="italic leading-relaxed mb-4">
                      "The abandoned cart automation alone recovered $12,000 in the first month.
                      That's pure profit I would have left on the table. Best $2,500 I've ever
                      invested in my business. Period."
                    </p>

                    <p className="text-sm text-gray-300">
                      — Mike J., Los Angeles, CA
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>


        {/* Scaling Without Hiring */}
        {/* Scaling Without Hiring */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 ">

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                {/* Top Gradient Header */}
                <div className="bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] text-white p-10">
                  <span className="inline-block bg-[#8b5cf6] text-sm px-4 py-1 rounded-full mb-6">
                    Coaching
                  </span>

                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Scaling Without Hiring
                  </h2>

                  <p className="text-green-100">
                    Lisa P., Fitness Coach - Miami, FL
                  </p>
                </div>

                {/* Content Body */}
                <div className="p-10 space-y-10">

                  {/* Challenge */}
                  <div>
                    <h3 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">
                      Challenge
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lisa spent 3 hours onboarding each new client: sending welcome
                      emails, collecting forms, scheduling intro calls, setting up payment
                      plans, and explaining her program. She was maxed out at 15 clients because onboarding took so much time.
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">
                      Solution
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We created an automated client onboarding system: instant welcome sequence with
                      program details, digital forms with auto-save to her CRM, Calendly integration
                      for self-service booking, Stripe payment links with recurring billing, and drip
                      content delivery for her 12-week program.
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-blue-600 font-semibold tracking-wide uppercase mb-6">
                      Results
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
                        <h4 className="text-3xl font-bold text-blue-600">15 min</h4>
                        <p className="text-sm text-gray-500 mt-2">
                          Onboarding Time <br />(was 3 hours)
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
                        <h4 className="text-3xl font-bold text-blue-600">8</h4>
                        <p className="text-sm text-gray-500 mt-2">
                          Additional Clients Taken On
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
                        <h4 className="text-3xl font-bold text-blue-600">92%</h4>
                        <p className="text-sm text-gray-500 mt-2">
                          Time Saved
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
                        <h4 className="text-3xl font-bold text-blue-600">$0</h4>
                        <p className="text-sm text-gray-500 mt-2">
                          Spent on Assistants
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Box */}
                  <div className="bg-slate-900 text-white rounded-xl p-8 border-l-4 border-yellow-400">
                    <p className="italic leading-relaxed mb-4">
                      "I was about to hire a virtual assistant to handle onboarding, which would have cost
                      me $1,500/month. Instead, H&S automated the entire process for a one-time fee. I took
                      on 8 more clients without any extra work. This is a game changer."
                    </p>

                    <p className="text-sm text-gray-300">
                      — Lisa P., Miami, FL
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>

      </section>

      {/* Not Sure Which Package? Section*/}
      {/* Not Sure Which Package? Section*/}
      <section className="min-h-84 flex items-center justify-center bg-blue-100 px-6">
        <div className="max-w-8xl text-center">

          <h1 className="text-4xl font-semibold text-black leading-tight mb-8">
            Ready for Similar Results?
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Book a free call and we'll show you exactly how automation can transform your business.
          </p>

          <div className="flex justify-center gap-4">

            {/* "Book Free Consultation" (links to /book) */}
            <Link href="/book-call">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg transform transition duration-300 hover:-translate-y-2  cursor-pointer">
                Book Your Free Consultation
              </button>
            </Link>
          </div>


        </div>
      </section>
    </main>
  );
}

