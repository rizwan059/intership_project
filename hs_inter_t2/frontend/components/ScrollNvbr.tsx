"use client";

import { useEffect, useState } from "react";

export default function NeuralDivider() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div
        className={`h-1 transition-all duration-500
          ${
            scrolled
              ? "bg-linear-to-r from-transparent via-white to-transparent"
              : "bg-linear-to-r from-transparent via-white/50 to-transparent"
          }`}
      />
    </div>
  );
}
