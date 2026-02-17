"use client"



import { Home, Building2, MapPin, Key, BedDouble, Coffee, Bell } from "lucide-react";

import React from 'react'

function Industries() {
    return (
        <div>

            {/* SECTION 2: Industries We Serve (6 Icons)*/}
            <section className="min-h-132 flex items-center justify-center bg-white px-6">

                <div className="max-w-6xl w-full text-center">

                    <h2 className="text-4xl font-semibold font-sans mb-6 text-black">
                        Industries We Serve
                    </h2>


                    <p className="text-md text-gray-600 mb-8">
                        We specialize in automating workflows for growing businesses across multiple<br /> industries
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 ">

                        {/* Card 1 */}
                        <div className="p-8 border hover:border-blue-500 bg-gradient-to-r from-cyan-400 to-white/80 rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">
                            <div className="text-8xl mb-4 "><MapPin size={32} /></div>
                            <h3 className="text-md text-gray-800 font-semibold">Real Estate</h3>
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 border hover:border-blue-500 bg-gradient-to-r from-cyan-400 to-white/80 rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">
                            <div className="text-8xl mb-4">🛒</div>
                            <h3 className="text-md text-gray-800 font-semibold">E-commerce</h3>
                        </div>

                        {/* Card 3 */}
                        <div className="p-8 border hover:border-blue-500 bg-gradient-to-r from-cyan-400 to-white/80 rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">
                            <div className="text-8xl mb-4">🎓</div>
                            <h3 className="text-md text-gray-800 font-semibold">Coaching & Consulting</h3>
                        </div>

                        {/* Card 4 */}
                        <div className="p-8 border hover:border-blue-500 bg-gradient-to-r from-cyan-400 to-white/80 rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">
                            <div className="text-8xl mb-4">🧘</div>
                            <h3 className="text-md text-gray-800 font-semibold">Health & Wellness</h3>
                        </div>

                        {/* Card 5 */}
                        <div className="p-8 border hover:border-blue-500 bg-gradient-to-r from-cyan-400 to-white/80 rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">
                            <div className="text-8xl mb-4">🛠️</div>
                            <h3 className="text-md text-gray-800 font-semibold">Home Services</h3>
                        </div>

                        {/* Card 6 */}
                        <div className="p-8 border hover:border-blue-500 bg-gradient-to-r from-cyan-400 to-white/80 rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-2 cursor-pointer">
                            <div className="text-8xl mb-4">🏨</div>
                            <h3 className="text-md text-gray-800 font-semibold">Hospitality</h3>
                        </div>

                        

                    </div>
                </div>
            </section>



        </div>
    )
}

export default Industries