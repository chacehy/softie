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
    name: "Youcef Benali",
    role: "CEO, Zidni",
    initial: "Y",
    testimonial:
      "Franchement je m'attendais pas à ce niveau. On a eu des retours clients positifs dès le premier jour du lancement. Ils ont su cerner exactement ce qu'on voulait sans qu'on ait besoin de tout expliquer trois fois.",
    gradient: "from-[#7C3AED] to-[#2563EB]",
  },
  {
    name: "Amira Hadjadj",
    role: "Founder, Noor",
    initial: "A",
    testimonial:
      "Honestly didn't expect it to come together this fast. We were running behind on our launch timeline and they just… handled it. No drama, no excuses. Just results.",
    gradient: "from-[#2563EB] to-[#5B21B6]",
  },
  {
    name: "Karim Messaoud",
    role: "CTO, Darna",
    initial: "K",
    testimonial:
      "Ce qui m'a bluffé c'est la rapidité sans sacrifier la qualité. Le code était propre, bien structuré, maintenable — chose vraiment rare. On repart avec eux sur le prochain projet sans hésiter.",
    gradient: "from-[#5B21B6] to-[#7C3AED]",
  },
  {
    name: "Nadia Boudiaf",
    role: "Product Manager, Baraka",
    initial: "N",
    testimonial:
      "I've worked with a lot of dev teams and the communication here was in a different league. Every update was clear, no jargon, no guessing. Our users noticed the difference immediately.",
    gradient: "from-[#7C3AED] to-[#C471F5]",
  },
  {
    name: "Sofiane Rahmani",
    role: "Design Director, Wakha Studio",
    initial: "S",
    testimonial:
      "Honnêtement au début j'étais sceptique, on avait eu de mauvaises expériences avant. Mais là c'était vraiment différent — ils ont répondu à chaque question, même les petites. Le résultat dépasse ce qu'on avait imaginé.",
    gradient: "from-[#5a3f86] to-[#2563EB]",
  },
  {
    name: "Lina Cherif",
    role: "CEO, Raha",
    initial: "L",
    testimonial:
      "We had a pretty vague brief to start with and they helped us shape it into something real. Felt less like hiring a vendor and more like having a co-founder for the build phase.",
    gradient: "from-[#2563EB] to-[#7C3AED]",
  },
];

const TestimonialCard = ({ t, index }: { t: Testimonial; index: number }) => (
  <motion.figure
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -6 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: EASE, delay: (index % 3) * 0.08 }}
    className={cn(
      "group relative flex flex-col rounded-[1.75rem] border border-[#7C3AED]/10 bg-white/80 p-7 backdrop-blur-sm shadow-soft",
      "transition-[box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-soft-lg"
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

    <figcaption className="mt-6 border-t border-[#7C3AED]/8 pt-5">
      <div className="font-sora text-[15px] font-semibold text-[#161122]">
        {t.name}
      </div>
      <div className="font-inter text-sm text-[#6b6478]">{t.role}</div>
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
