import Link from 'next/link';
import Image from "next/image";
import HeroSection from '@/components/Herosection';
import CollaboratorsSection from '@/components/Collaborators';
import ContactSection from '@/components/ContactSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialSection';
export default function Home() {
  return (
    <div className="">
     <HeroSection />
     <CollaboratorsSection />
     <ServicesSection />
     <TestimonialsSection />
     <ContactSection />
    </div>
  );
}
