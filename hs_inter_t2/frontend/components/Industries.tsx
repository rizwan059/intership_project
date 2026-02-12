"use client"



import React from 'react'

function Industries() {
    return (
        <div>

            {/* SECTION 2: Industries We Serve (6 Icons)*/}
            <section className="min-h-120 flex items-center justify-center bg-white px-6">
                <h2 className="text-3xl font-semibold">Section 2</h2>
                <div className="max-w-6xl w-full text-center">

                    <h2 className="text-4xl font-bold mb-12">
                        Industries We Serve
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="p-8 border rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">
                            <div className="text-4xl mb-4">🏢</div>
                            <h3 className="text-xl font-semibold">Real Estate</h3>
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 border rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">
                            <div className="text-4xl mb-4">🛒</div>
                            <h3 className="text-xl font-semibold">E-commerce</h3>
                        </div>

                        {/* Card 3 */}
                        <div className="p-8 border rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-xl font-semibold">Coaching & Consulting</h3>
                        </div>

                        {/* Card 4 */}
                        <div className="p-8 border rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">
                            <div className="text-4xl mb-4">💚</div>
                            <h3 className="text-xl font-semibold">Health & Wellness</h3>
                        </div>

                        {/* Card 5 */}
                        <div className="p-8 border rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">
                            <div className="text-4xl mb-4">🏠</div>
                            <h3 className="text-xl font-semibold">Home Services</h3>
                        </div>

                        {/* Card 6 – Empty */}
                        <div className="p-8 border rounded-xl shadow-sm opacity-30">
                            {/* Empty placeholder */}
                        </div>

                    </div>
                </div>
            </section>

            

        </div>
    )
}

export default Industries