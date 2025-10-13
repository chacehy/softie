"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";

export function WobbleCardDemo() {
  return (
    <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto w-full px-4 py-16">
      {/* Custom Web Development */}
      <WobbleCard
        containerClassName="col-span-1 bg-gradient-to-br from-purple-600 to-blue-600 min-h-[400px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
            Custom Web Development
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Tailored web solutions built from scratch. Modern frameworks, 
            clean code, and pixel-perfect designs.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">React</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">Next.js</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">TypeScript</span>
          </div>
        </div>
        <Image
          src="/globe.svg"
          width={120}
          height={120}
          alt="web development"
          className="absolute right-8 bottom-8 opacity-30 filter brightness-200"
        />
      </WobbleCard>

      {/* Mobile Development */}
      <WobbleCard 
        containerClassName="col-span-1 bg-gradient-to-br from-green-600 to-teal-600 min-h-[400px]"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
            Mobile Development
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Native and cross-platform apps that deliver seamless experiences 
            on iOS and Android.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">React Native</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">Flutter</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">Swift</span>
          </div>
        </div>
        <Image
          src="/android.svg"
          width={120}
          height={120}
          alt="mobile development"
          className="absolute right-8 bottom-8 opacity-30 filter brightness-200"
        />
      </WobbleCard>

      {/* WordPress Solutions */}
      <WobbleCard 
        containerClassName="col-span-1 bg-gradient-to-br from-blue-700 to-cyan-600 min-h-[400px]"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
            WordPress Solutions
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Fast, flexible WordPress sites. Perfect for content-rich platforms 
            and quick deployment needs.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">WordPress</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">WooCommerce</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">Custom Themes</span>
          </div>
        </div>
        <Image
          src="/Wordpress-Logo.svg"
          width={120}
          height={120}
          alt="wordpress development"
          className="absolute right-8 bottom-8 opacity-30 filter brightness-200"
        />
      </WobbleCard>

      {/* UI/UX Design */}
      <WobbleCard 
        containerClassName="col-span-1 bg-gradient-to-br from-pink-600 to-purple-600 min-h-[400px]"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
            UI/UX Design
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Beautiful interfaces that users love. From wireframes to prototypes, 
            we design with purpose.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">Figma</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">Design Systems</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">Prototyping</span>
          </div>
        </div>
        <Image
          src="/window.svg"
          width={120}
          height={120}
          alt="ui ux design"
          className="absolute right-8 bottom-8 opacity-30 filter brightness-200"
        />
      </WobbleCard>
    </div>
  );
}
