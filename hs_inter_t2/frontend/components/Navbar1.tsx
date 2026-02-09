"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import ScrollNvbr from "@/components/ScrollNvbr";
import Navbar4 from "@/components/Navbar4";
import Navbar3 from "@/components/Navbar3";
import Navbar2 from "@/components/Navbar2";



export default function Navbar() {
  const pathname = usePathname();

  return (
    // <Navbar4 />
    <Navbar3 />
    // <Navbar2 />



  );
}
