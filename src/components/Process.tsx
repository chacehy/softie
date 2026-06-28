"use client";

import { motion } from "motion/react";
import { Compass, Layers, Code2, Rocket } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    n: "01",
    title: "Understand",
    Icon: Compass,
    body: "One focused week — competitor research, user interviews, and technical scoping. We turn what we learn into a product spec, an architecture plan, and a fixed-price quote. No ambiguity going in.",
    note: "Scoped and quoted in one week.",
  },
  {
    n: "02",
    title: "Prototype",
    Icon: Layers,
    body: "You interact with your product before we write a single line of code. Clickable screens, real flows, genuine feel. We iterate on the prototype until it's right — so the build phase has no surprises.",
    note: "Feel it before we build it.",
  },
  {
    n: "03",
    title: "Build",
    Icon: Code2,
    body: "Production-ready code from sprint one. Every Friday you review working software — not slide decks — and tell us exactly what to adjust. The feedback loop stays tight the entire way through.",
    note: "Weekly demos, always live.",
  },
  {
    n: "04",
    title: "Launch & Care",
    Icon: Rocket,
    body: "Zero-downtime deployment, live monitoring, and two full months of post-launch support included. We stay close while things settle, fix what needs fixing, and hand over something stable.",
    note: "2 months of care, included.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-gradient-to-b from-[#FBFAFC] via-[#F4F0FA] to-[#FBFAFC] py-28 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,#DDCCF5_0%,transparent_65%)] opacity-50"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Heading column */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/15 bg-white/70 px-4 py-1.5 font-inter text-[11px] font-medium uppercase tracking-[0.22em] text-[#5b4a73] backdrop-blur-sm shadow-soft"
          >
            How we work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
            className="mt-6 font-sora text-4xl font-bold leading-[1.05] tracking-tight text-[#161122] md:text-5xl"
          >
            A calm, clear path from idea to{" "}
            <span className="text-gradient-brand">live product.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mt-6 max-w-md font-inter text-base leading-relaxed text-[#5b5566]"
          >
            No black boxes, no endless meetings. Four steps, weekly check-ins,
            and one team that actually enjoys the craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="mt-10 grid grid-cols-2 gap-4"
          >
            {[
              { k: "24h", v: "reply time" },
              { k: "100%", v: "fixed quotes" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-[#7C3AED]/10 bg-white/60 p-5 backdrop-blur-sm bezel-inner"
              >
                <div className="font-sora text-3xl font-bold text-gradient-brand">
                  {s.k}
                </div>
                <div className="mt-1 font-inter text-sm text-[#6b6478]">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Steps column */}
        <ol className="relative space-y-5">
          {steps.map((step, i) => (
            <motion.li
              key={step.n}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="group rounded-[2rem] border border-[#7C3AED]/10 bg-white/70 p-1.5 backdrop-blur-sm shadow-soft transition-[box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-soft-lg"
            >
              <div className="rounded-[calc(2rem-0.375rem)] bg-white/80 p-7 bezel-inner md:p-8">
                <div className="flex items-start gap-5">
                  <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#2563EB] text-white shadow-soft transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:-rotate-3">
                    <step.Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-sora text-sm font-semibold tabular-nums text-[#a99bc4]">
                        {step.n}
                      </span>
                      <h3 className="font-sora text-xl font-bold text-[#161122] md:text-2xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 font-inter text-[15px] leading-relaxed text-[#5b5566]">
                      {step.body}
                    </p>
                    <p className="mt-4 font-inter text-sm font-medium text-[#7C3AED]">
                      {step.note}
                    </p>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
