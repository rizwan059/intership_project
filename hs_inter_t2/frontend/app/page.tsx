import Link from 'next/link';
import Image from "next/image";

import HeroSection from '@/components/Hero';
import Industries from '@/components/Industries';
import ProblemSection from '@/components/ProblemSection';
import HowItWorks from '@/components/HowItWorks';
import SocialProof from '@/components/SocialProof';
import FinalCTA from '@/components/FinalCTA';
import Hero from '@/components/Hero';


export default function Home() {
  return (
    <div className="">
      <Hero />
      <Industries />
      <ProblemSection />
      <HowItWorks />
      <SocialProof />
      <FinalCTA />
    </div>
  );
}
