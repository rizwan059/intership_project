"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import ScrollNvbr from "@/components/ScrollNvbr";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Collaborators / Partners", href: "/partner" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    
      <nav className="sticky top-0 z-50 w-full  bg-black/30  backdrop-blur-lg border-b border-white/10  text-white">

      <div className="mx-auto flex max-w-8xl items-center justify-around px-6 py-2">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center font-sans gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition
                  ${isActive
                    ? "text-cyan-200"
                    : "text-white hover:text-cyan-200"
                  }`}
              >
                {link.name}

                {/* Active / Hover Indicator */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-white to-white transition-all duration-300
                    ${isActive ? "w-full" : "group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </div>
      </div>



      <ScrollNvbr />

    </nav>



  );
}
