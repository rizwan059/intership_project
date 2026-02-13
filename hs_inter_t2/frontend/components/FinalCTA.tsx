"use client"

import React from 'react'
import Link from "next/link";

function FinalCTA() {
    return (
        <div>

            {/* SECTION 6: Final CTA*/}
            <section className="min-h-84  bg-blue-100">

                <div className="max-w-132 mx-auto flex items-center justify-center flex-col gap-6 py-12 px-6 text-center">

                    <h2 className="text-3xl font-semibold text-black">Ready to Get Your Time Back?</h2>


                    <p className="text-md text-gray-600 mb-2">Book a free 30-minute call. We'll
                        show you exactly which workflows to automate first.</p>


                    {/* "Book your Free Consultation" (links to /book) */}
                    <Link href="/book-call">
                        <button className="px-6 py-3 border hover:border-blue-500 bg-white/90 text-blue-500 rounded-lg transform transition duration-300 hover:-translate-y-2  cursor-pointer">
                            Book Your Free Consultation
                        </button>
                    </Link>


                    <p className="text-md text-gray-600 mb-8">No sales pitch. No pressure. Just strategy.</p>

                </div>
            </section>

        </div>
    )
}

export default FinalCTA