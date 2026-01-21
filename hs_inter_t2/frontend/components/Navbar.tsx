"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

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
    <nav className="sticky top-0 z-50 w-full bg-linear-to-br from-[#050B14] via-[#0A1A2F] to-[#050B14] text-white">
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
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                  }`}
              >
                {link.name}

                {/* Active / Hover Indicator */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-300
                    ${isActive ? "w-full" : "group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Divider */}
      {/* <div className="w-4/5 h-0.5 mx-auto bg-linear-to-r from-cyan-200 to-blue-400" /> */}

      {/* TOP Neural Divider */}
      <div className="relative h-0.5 mx-auto">
        <div className="h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="absolute left-1/2 -top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_5px_rgba(34,211,238,0.5)] animate-pulse" />
      </div>

    </nav>
  );
}
