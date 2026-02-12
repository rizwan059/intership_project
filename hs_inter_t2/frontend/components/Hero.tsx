"use client"

import Link from "next/link";

export default function Hero() {
    return (
        <main className="">

            {/* Section 1 – Hero */}
            <section className="min-h-132 flex items-center justify-center bg-blue-100 px-6">
                <div className="max-w-8xl text-center">

                    <h1 className="text-2xl md:text-6xl text-black leading-tight mb-8">
                        Small Businesses Waste <span className="text-blue-500">10+ Hours Per Week<br /></span> on Manual Tasks. We Automate Them for Under <span className="text-blue-500">$3,000.</span></h1>

                    <p className="text-md text-gray-600 mb-8">
                        AI-powered automation that connects your tools, eliminates busywork, and saves you time -
                        without hiring developers.
                    </p>

                    <div className="flex justify-center gap-4">

                        {/* "Book Free Consultation" (links to /book) */}
                        <Link href="/book-call">
                            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg transform transition duration-300 hover:-translate-y-2  cursor-pointer">
                                Book Free Consultation
                            </button>
                        </Link>

                        {/* "See Our Work" (links to /results) */}
                        <Link href="/casestudy">
                            <button className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition cursor-pointer">
                                See Our Work
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

           

        </main>
    );
}
