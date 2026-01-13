"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-around px-6 py-1">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/hs_logo.png"
            alt="H&S Solutions Logo"
            className="h-12 w-12 object-contain"
          />
          {/* <span className="text-xl font-semibold text-gray-900">
            H&S Solutions
          </span> */}
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center font-sans gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href; 
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition 
                  ${isActive ? "text-blue-600" : "text-gray-900 hover:text-blue-500"}`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-blue-600 to-cyan-400 transition-all duration-300 
                    ${isActive ? "w-full" : "group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
