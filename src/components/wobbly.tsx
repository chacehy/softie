"use client";

import React from "react";
import { motion } from "motion/react";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/15">
    {children}
  </span>
);

export function WobbleCardDemo() {
  return (
    <section id="services" className="relative bg-[#FBFAFC] py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14 max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/15 bg-white/70 px-4 py-1.5 font-inter text-[11px] font-medium uppercase tracking-[0.22em] text-[#5b4a73] backdrop-blur-sm shadow-soft">
            What we build
          </span>
          <h2 className="mt-6 font-sora text-4xl font-bold leading-[1.05] tracking-tight text-[#161122] md:text-5xl">
            One studio, the whole{" "}
            <span className="text-gradient-brand">stack.</span>
          </h2>
          <p className="mt-5 max-w-lg font-inter text-base leading-relaxed text-[#5b5566]">
            From a quick WordPress site to a custom app with its own backend —
            we pick the right tool for the job, never the other way around.
          </p>
        </motion.div>

        {/* Bento */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {/* Custom Web Development — wide */}
          <WobbleCard containerClassName="md:col-span-2 bg-gradient-to-br from-[#5B21B6] to-[#1D4ED8] min-h-[320px]">
            <div className="max-w-md">
              <h3 className="text-left font-sora text-2xl font-semibold tracking-tight text-white lg:text-3xl">
                Custom web development
              </h3>
              <p className="mt-4 max-w-sm text-left font-inter text-base/6 text-white/80">
                Tailored web apps built from scratch — modern frameworks, clean
                code, and pixel-perfect interfaces that load fast and scale.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Tag>React</Tag>
                <Tag>Next.js</Tag>
                <Tag>TypeScript</Tag>
              </div>
            </div>
            <Image
              src="/globe.svg"
              width={180}
              height={180}
              alt=""
              className="absolute -right-4 -bottom-6 opacity-25 brightness-200"
            />
          </WobbleCard>

          {/* Mobile Development */}
          <WobbleCard containerClassName="bg-gradient-to-br from-[#7C3AED] to-[#2563EB] min-h-[380px]">
            <div className="max-w-xs">
              <h3 className="text-left font-sora text-2xl font-semibold tracking-tight text-white">
                Mobile development
              </h3>
              <p className="mt-4 text-left font-inter text-base/6 text-white/80">
                Native and cross-platform apps that feel seamless on iOS and
                Android — smooth, offline-ready, and built to ship.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Tag>React Native</Tag>
                <Tag>Flutter</Tag>
                <Tag>Swift</Tag>
              </div>
            </div>
            <Image
              src="/android.svg"
              width={130}
              height={130}
              alt=""
              className="absolute right-8 bottom-8 opacity-25 brightness-200"
            />
          </WobbleCard>

          {/* UI/UX Design */}
          <WobbleCard containerClassName="bg-gradient-to-br from-[#4C1D95] to-[#7C3AED] min-h-[380px]">
            <div className="max-w-xs">
              <h3 className="text-left font-sora text-2xl font-semibold tracking-tight text-white">
                UI / UX design
              </h3>
              <p className="mt-4 text-left font-inter text-base/6 text-white/80">
                Interfaces people actually enjoy. From wireframes to prototypes,
                we design with intent — clear, soft, and on-brand.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Tag>Figma</Tag>
                <Tag>Design systems</Tag>
                <Tag>Prototyping</Tag>
              </div>
            </div>
            <Image
              src="/window.svg"
              width={130}
              height={130}
              alt=""
              className="absolute right-8 bottom-8 opacity-25 brightness-200"
            />
          </WobbleCard>

          {/* WordPress — wide */}
          <WobbleCard containerClassName="md:col-span-2 bg-gradient-to-br from-[#1D4ED8] via-[#4F46E5] to-[#7C3AED] min-h-[300px]">
            <div className="max-w-md">
              <h3 className="text-left font-sora text-2xl font-semibold tracking-tight text-white lg:text-3xl">
                WordPress & e-commerce
              </h3>
              <p className="mt-4 max-w-sm text-left font-inter text-base/6 text-white/80">
                Fast, flexible WordPress and WooCommerce builds — perfect for
                content-rich sites and stores that need to launch quickly.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Tag>WordPress</Tag>
                <Tag>WooCommerce</Tag>
                <Tag>Custom themes</Tag>
              </div>
            </div>
            <Image
              src="/Wordpress-Logo.svg"
              width={170}
              height={170}
              alt=""
              className="absolute right-6 -bottom-4 opacity-20 brightness-200"
            />
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}
