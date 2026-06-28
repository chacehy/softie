"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { NavbarDemo } from "@/components/auiNav";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { AuroraText } from "./magicui/aurora-text";
import { WordRotate } from "./magicui/word-rotate";
import { techStack } from "@/components/ui/tech-logos";

const EASE = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  const handleScrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      id="hero"
      className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center pt-28 pb-20 bg-[#FBFAFC]"
    >
      <NavbarDemo />

      {/* ── Ambient mesh: drifting brand blobs ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,#EDE9FE_0%,transparent_60%)] opacity-80 animate-drift-a" />
        <div className="absolute top-1/4 -left-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,#7C3AED_0%,transparent_62%)] opacity-[0.22] animate-drift-b" />
        <div className="absolute bottom-0 -right-24 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,#2563EB_0%,transparent_62%)] opacity-[0.18] animate-drift-a" />
      </div>

      {/* Contained interactive grid, softly masked into the canvas */}
      <InteractiveGridPattern
        className={cn(
          "absolute inset-0 z-0 h-full w-full opacity-60",
          "[mask-image:radial-gradient(ellipse_at_center,white_0%,transparent_70%)]"
        )}
        width={64}
        height={64}
        squares={[24, 18]}
        squaresClassName="stroke-[#7C3AED]/[0.07] hover:fill-[#7C3AED]/15 transition-all"
      />

      {/* ── Main content ── */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-8 flex items-center justify-center gap-1.5 font-mono text-[15px] tracking-[0.18em] text-[#9e9aaa] select-none"
        >
          <span className="text-[#7C3AED]/50">&gt;</span>
          <span>software_studio · code_made_soft</span>
          <span className="animate-blink text-[#7C3AED]/60">_</span>
        </motion.p>

        {/* Heading — kept centred, elevated */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
          className="mb-6"
        >
          <div className="flex flex-col items-center leading-[0.92] py-2">
            <AuroraText
              className="font-sora font-extrabold tracking-tighter text-7xl md:text-8xl lg:text-9xl"
              colors={["#7C3AED", "#2563EB", "#A855F7", "#7C3AED"]}
            >
              YOUR IDEA,
            </AuroraText>
            <AuroraText
              className="font-sora font-extrabold tracking-tighter text-7xl md:text-8xl lg:text-9xl"
              colors={["#7C3AED", "#2563EB", "#A855F7", "#7C3AED"]}
            >
              SHIPPED
            </AuroraText>
          </div>
        </motion.div>

        {/* Rotating subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
          className="mb-10 h-12 md:h-14"
        >
          <WordRotate
            className="font-sora text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1a1622]"
            words={[
              "Code made soft.",
              "Where bold ideas become real software.",
              "Building experiences that feel alive.",
              "Where creativity and code meet.",
              "Soft edges, sharp minds.",
            ]}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
          className="mb-10 max-w-xl text-balance font-inter text-base md:text-lg leading-relaxed text-[#5b5566]"
        >
          Fast, scalable, surprisingly delightful web and mobile apps, crafted
          from idea to deployment.
        </motion.p>

        {/* CTAs — button-in-button primary + ghost */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => handleScrollTo("#contact")}
            className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] py-2 pl-7 pr-2 font-inter font-semibold text-white shadow-soft-lg transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Let&apos;s build something</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-white/30">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
            </span>
          </button>

          <button
            onClick={() => handleScrollTo("#work")}
            className="rounded-full border border-[#7C3AED]/20 bg-white/70 px-7 py-3.5 font-inter font-semibold text-[#3a2f4d] backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#7C3AED]/40 hover:bg-white hover:scale-[1.03] active:scale-[0.98]"
          >
            See how we work
          </button>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.32 }}
          className="mt-12 flex items-center gap-4"
        >
          <div className="flex -space-x-3">
            {["Youcef", "Amira", "Karim", "Nadia"].map((seed) => (
              <img
                key={seed}
                src={`https://avatar.vercel.sh/${seed}`}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-full ring-2 ring-white"
              />
            ))}
          </div>
          <p className="text-left font-inter text-sm text-[#6b6478]">
            <span className="font-semibold text-[#1a1622]">4 Algerian founders</span>
            <br className="hidden sm:block" /> already shipped with us.
          </p>
        </motion.div>
      </div>

      {/* Tech strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.5 }}
        className="relative z-20 mt-16 flex flex-col items-center gap-5"
      >
        <span className="font-inter text-[11px] font-medium uppercase tracking-[0.25em] text-[#9a93a8]">
          The tools we build with
        </span>
        <div className="flex items-center gap-8 sm:gap-10">
          {techStack.map(({ name, Logo }) => (
            <div
              key={name}
              title={name}
              className="h-7 w-7 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-8 sm:w-8"
            >
              <Logo />
            </div>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;
