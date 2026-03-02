"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import HowItWorks from "@/components/HowItWorks";
import WhatWeAutomate from "@/components/WhatWeAutomate";
import Packages from "@/components/Packages";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import TickerBar from "@/components/TickerBar";

export default function Home() {
  return (
    <main className="grain relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <TickerBar />
      <PainSection />
      <HowItWorks />
      <WhatWeAutomate />
      <Packages />
      <SocialProof />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
