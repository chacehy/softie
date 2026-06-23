"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Testimonial = {
  name: string;
  role: string;
  initial: string;
  testimonial: string;
  gradient: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart",
    initial: "S",
    testimonial:
      "Professional, friendly, and delivered exactly what we needed. The team exceeded our expectations with their attention to detail and communication throughout the project.",
    gradient: "from-[#7C3AED] to-[#2563EB]",
  },
  {
    name: "Mike Rodriguez",
    role: "Founder, DigitalCo",
    initial: "M",
    testimonial:
      "Amazing communication throughout the project. They made our vision come to life with clean, efficient solutions — and shipped ahead of schedule.",
    gradient: "from-[#2563EB] to-[#5B21B6]",
  },
  {
    name: "Emma Thompson",
    role: "CTO, InnovateLab",
    initial: "E",
    testimonial:
      "Exceeded our expectations. Great attention to detail, and the final product was exactly what we envisioned. We'll definitely work with them again.",
    gradient: "from-[#5B21B6] to-[#7C3AED]",
  },
  {
    name: "Alex Kumar",
    role: "Product Manager, ScaleUp",
    initial: "A",
    testimonial:
      "Reliable and genuinely thoughtful. They understood our requirements perfectly and delivered something our users absolutely love.",
    gradient: "from-[#7C3AED] to-[#C471F5]",
  },
  {
    name: "Lisa Park",
    role: "Design Director, CreativeStudio",
    initial: "L",
    testimonial:
      "Friendly team, great results. Our customers love the interface and the overall experience. The collaboration felt effortless from day one.",
    gradient: "from-[#5a3f86] to-[#2563EB]",
  },
  {
    name: "David Kim",
    role: "CEO, FutureTech",
    initial: "D",
    testimonial:
      "Outstanding service and support. They went above and beyond to make sure our launch went smoothly. Easily the best studio we've worked with.",
    gradient: "from-[#2563EB] to-[#7C3AED]",
  },
];

const TestimonialCard = ({ t, index }: { t: Testimonial; index: number }) => (
  <motion.figure
    initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: EASE, delay: (index % 3) * 0.08 }}
    className={cn(
      "group relative flex flex-col rounded-[1.75rem] border border-[#7C3AED]/10 bg-white/80 p-7 backdrop-blur-sm shadow-soft",
      "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-soft-lg"
    )}
  >
    <Quote
      className="absolute right-6 top-6 h-7 w-7 text-[#7C3AED]/15"
      strokeWidth={1.5}
      fill="currentColor"
    />

    <div className="mb-4 flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#2563EB] text-[#2563EB]" />
      ))}
    </div>

    <blockquote className="flex-1 font-inter text-[15px] leading-relaxed text-[#3f3a4b]">
      {t.testimonial}
    </blockquote>

    <figcaption className="mt-6 flex items-center gap-3 border-t border-[#7C3AED]/8 pt-5">
      <div
        className={cn(
          "grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br font-sora text-base font-bold text-white shadow-soft transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:-rotate-3",
          t.gradient
        )}
      >
        {t.initial}
      </div>
      <div>
        <div className="font-sora text-[15px] font-semibold text-[#161122]">
          {t.name}
        </div>
        <div className="font-inter text-sm text-[#6b6478]">{t.role}</div>
      </div>
    </figcaption>
  </motion.figure>
);

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#FBFAFC] py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/15 bg-white/70 px-4 py-1.5 font-inter text-[11px] font-medium uppercase tracking-[0.22em] text-[#5b4a73] backdrop-blur-sm shadow-soft">
            Kind words
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl font-sora text-4xl font-bold leading-[1.05] tracking-tight text-[#161122] md:text-5xl">
            What it&apos;s like to{" "}
            <span className="text-gradient-brand">work with us.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-inter text-base leading-relaxed text-[#5b5566]">
            Don&apos;t just take our word for it — here&apos;s what founders and
            teams say after shipping with Softie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
