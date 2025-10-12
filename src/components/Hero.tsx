"use client";

import React from "react";
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
import { AuroraText } from "./magicui/aurora-text";
import { LineShadowText } from "./magicui/line-shadow-text";
import { VideoText } from "./magicui/video-text";
const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-[85vh] w-screen overflow-hidden flex flex-col items-center justify-center"
    >
      <NavbarDemo className="z-50 pointer-events-auto absolute top-6 left-0 right-0" />
      <div className="relative z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
      </div>
      <InteractiveGridPattern
        className={cn(
          "z-0 pointer-events-auto fixed top-0 left-0 w-full h-full blur-3xl opacity-80 flex items-center justify-items-center"
        )}
        width={80}
        height={80}
        squares={[80, 80]}
        squaresClassName="hover:fill-purple-500"
      ></InteractiveGridPattern>
      
      {/* <div className="z-50 relative h-[350px] w-full overflow-hidden pointer-events-none">
          <VideoText src="/texteffect.mp4" className="font-[sora]">SOFTIE</VideoText>
        </div> */}
        <AuroraText className="font-[Sora] font-bold text-7xl">SOFTIE</AuroraText>
        <h2>where</h2>
    </div>
  );
};

export default Hero;

