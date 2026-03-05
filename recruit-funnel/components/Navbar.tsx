"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

// ✏️ EDIT: Your Calendly link
const CALENDLY_LINK = "https://calendly.com/YOUR_LINK_HERE";
// ✏️ EDIT: Your LinkedIn URL
const LINKEDIN_URL = "https://linkedin.com/in/YOUR_PROFILE";

const links = [
  { label: "The Problem", href: "#pain" },
  { label: "How It Works", href: "#how" },
  { label: "What We Build", href: "#automate" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        // className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        //   ? "bg-white shadow-sm"
        //   : "bg-transparent"
        //   }`
        // }
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8L8 2L14 8L8 14L2 8Z" fill="white" />
                <circle cx="8" cy="8" r="2.5" fill="white" opacity="0.4" />
              </svg>
            </div>
            <span className="font-display font-bold text-lg text-ink">
              H&S Solutions<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-body text-gray-800 hover:text-ink transition-colors underline-draw"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={"https://www.linkedin.com/company/h-s-solutions-biz/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-ink border border-border-warm rounded-full hover:bg-ink hover:text-cream transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </Link>
            <Link
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-accent text-white rounded-full hover:bg-accent-light transition-all duration-200 shadow-lg shadow-accent/20"
            >
              Book Free Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-border-warm transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed inset-x-0 top-16 z-40 bg-cream border-b border-border-warm shadow-xl p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4 mb-6">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-ink border-b border-border-warm pb-4"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <Link
                href={"https://www.linkedin.com/company/h-s-solutions-biz/"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-ink border border-border-warm rounded-xl"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                Chat on LinkedIn
              </Link>
              <Link
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold bg-accent text-white rounded-xl"
              >
                Book Free 20-Min Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
