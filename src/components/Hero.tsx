"use client";

import React from "react";
import { NavbarDemo } from "@/components/auiNav";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { AuroraText } from "./magicui/aurora-text";
import { WordRotate } from "./magicui/word-rotate";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative min-h-[90vh] w-full overflow-hidden flex flex-col items-center justify-center pt-24 bg-white"
    >
      <NavbarDemo />
      
      {/* Background Pattern with Blur */}
      <InteractiveGridPattern
        className={cn(
          "z-0 pointer-events-auto fixed top-0 left-0 w-full h-full blur-3xl opacity-80 flex items-center justify-items-center"
        )}
        width={60}
        height={60}
        squares={[60, 60]}
        squaresClassName="hover:fill-[#8260AD]"
      />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
        
        {/* Main Heading */}
        <div className="mb-8">
          <AuroraText 
            className="font-sora font-bold text-7xl md:text-8xl lg:text-9xl py-6"
            
            
          >
            SOFTIE
          </AuroraText>
        </div>

        {/* Subtitle */}
        <div className="mb-12">
          <WordRotate 
            className="text-xl md:text-2xl lg:text-3xl font-inter font-medium text-gray-700 max-w-4xl leading-relaxed" 
            words={[
              "Code made soft.",
              "Where bold ideas become real software.",
              "Building digital experiences that feel alive.",
              "Where creativity and code meet.",
              "Soft edges, sharp minds."
            ]} 
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button 
            className="px-8 py-4 rounded-full font-inter font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #8260AD 0%, #3A7BFF 100%)',
              boxShadow: '0 8px 32px rgba(130, 96, 173, 0.3)'
            }}
          >
            Let&apos;s build something
          </button>   
          
          <button 
            className="px-8 py-4 rounded-full font-inter font-semibold text-gray-700 border-2 border-gray-300 hover:border-[#8260AD] hover:text-[#8260AD] transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm"
          >
            See our work
          </button>
        </div>

        {/* Brand Tagline */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-inter text-gray-600 leading-relaxed max-w-2xl">
            We blend logic and emotion — because good software should feel good.
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div 
        className="absolute top-1/4 left-10 w-20 h-20 rounded-full opacity-20 animate-float-slow"
        style={{ 
          background: 'linear-gradient(45deg, #8260AD, #DDCCF5)'
        }} 
      />
      <div 
        className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full opacity-20 animate-float-medium delay-1000"
        style={{ 
          background: 'linear-gradient(45deg, #3A7BFF, #8260AD)'
        }} 
      />
      <div 
        className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full opacity-15 animate-float-fast delay-500"
        style={{ 
          background: 'linear-gradient(45deg, #DDCCF5, #3A7BFF)'
        }} 
      />
    </div>
  );
};

export default Hero;

//FHGHDFP