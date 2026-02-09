"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import ScrollNvbr from "@/components/ScrollNvbr";
import Navbar1 from "@/components/Navbar1";



export default function Navbar() {
  const pathname = usePathname();

  return (
    <Navbar1 />



  );
}
