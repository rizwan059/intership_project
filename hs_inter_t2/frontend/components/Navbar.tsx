"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import ScrollNvbr from "@/components/ScrollNvbr";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services & Pricing", href: "/servicenpricing" },
  { name: "Case Studies", href: "/casestudy" },
  { name: "Book Call", href: "/book-call", isButton: true  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    
      <nav className="sticky top-0 z-50 w-full  bg-white  backdrop-blur-lg border-b border-white/10  text-black">

      <div className="mx-auto flex max-w-8xl items-center justify-around px-6 py-2">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center font-sans gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition px-6 py-2 rounded-md
          ${
            link.isButton
              ? "bg-blue-600 text-white hover:bg-blue-600"
              : isActive
              ? "text-blue-400"
              : "text-black hover:text-blue-400"
          }`}
              >
                {link.name}

                {/* Active / Hover Indicator */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-blue-400 to-white transition-all duration-300
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
