"use client";

import React from 'react'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { NavbarDemo } from "@/components/auiNav";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
const Hero = () => {
  return (
    <div id="hero"
    className="relative h-[1500px] w-screen overflow-hidden">
    <NavbarDemo className="z-50 pointer-events-auto sticky top-[24px]" />
    <div className="relative z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
    </div>
    <InteractiveGridPattern
      className={cn(
        "z-0 pointer-events-auto fixed top-0 left-0 w-full h-full blur-3xl opacity-80",
      )}
      width={80}
      height={80}
      squares={[80, 80]}
      squaresClassName="hover:fill-blue-500"
    ></InteractiveGridPattern>
    {/* Wrap hero content in pointer-events-none and re-enable on interactive children with pointer-events-auto */}
    {/* <div className="relative z-10 pointer-events-none"> ... </div> */}
  </div>
  )
}

export default Hero


