"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.22, 1, 0.36, 1] as const;

type Project = {
  name: string;
  tagline: string;
  screenshot: string;
  siteUrl?: string;
  caseStudyUrl?: string;
};

const projects: Project[] = [
  {
    name: "Conquête Voyages",
    tagline: "Premium travel agency for international trips & Omra pilgrimages",
    screenshot: "/screenshots/Screen Shot 2026-06-28 at 13.33.12.png",
    siteUrl: "https://conquete.vercel.app",
  },
  {
    name: "Wellza",
    tagline: "Pharmacy delivery platform for supplements & health products",
    screenshot: "/screenshots/Screen Shot 2026-06-28 at 14.21.23.png",
    siteUrl: "https://parapharm.vercel.app",
  },
  {
    name: "Crearena",
    tagline: "Startup business accelerator powering pre-seed ventures across 5 sectors",
    screenshot: "/screenshots/Screen Shot 2026-06-28 at 14.22.14.png",
    siteUrl: "https://crearena.vercel.app",
  },
  {
    name: "CastingConnect",
    tagline: "Talent discovery platform for Algeria's creative industry",
    screenshot: "/screenshots/Screen Shot 2026-06-28 at 15.39.32.png",
    siteUrl: "https://www.castinglab.space",
  },
  {
    name: "Secure Vaults",
    tagline: "Enterprise zero-knowledge secrets management with end-to-end encryption",
    screenshot: "/screenshots/Screen Shot 2026-06-28 at 15.40.38.png",
    siteUrl: "https://dashlane-crypto-vault.vercel.app",
  },
  {
    name: "Hikayatooki",
    tagline: "Luxury floral art e-commerce for weddings & ceremonies",
    screenshot: "/screenshots/Screen Shot 2026-06-28 at 15.41.29.png",
    siteUrl: "https://hikayatuki.vercel.app",
  },
];

const PANEL_COUNT = projects.length;
const ANGLE_PER_PANEL = 360 / PANEL_COUNT;

/* ─── Mobile carousel ─── */
function MobileCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStart = useRef(0);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setActive((prev) => {
        const next = prev + dir;
        if (next < 0) return PANEL_COUNT - 1;
        if (next >= PANEL_COUNT) return 0;
        return next;
      });
    },
    []
  );

  const p = projects[active];

  return (
    <section
      id="portfolio"
      className="relative z-[2] overflow-hidden bg-gradient-to-b from-[#FBFAFC] to-[#EDE9FE]/30 py-20"
    >
      <div className="mx-auto max-w-lg px-4">
        {/* Title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="mb-6 text-center"
          >
            <h3 className="font-sora text-xl font-bold text-[#161122]">
              {p.name}
            </h3>
            <p className="mt-1 font-inter text-sm text-[#5b5566]">
              {p.tagline}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Card */}
        <div
          className="relative overflow-hidden rounded-2xl"
          onTouchStart={(e) => {
            touchStart.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const diff = touchStart.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) go(diff > 0 ? 1 : -1);
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.a
              key={p.name}
              href={p.siteUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: direction >= 0 ? 80 : -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -80 : 80 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="group/card relative block aspect-video overflow-hidden rounded-2xl border border-[#7C3AED]/15 bg-white shadow-soft-lg cursor-pointer"
            >
              <img
                src={p.screenshot}
                alt={p.name}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/0 transition-colors duration-300 group-hover/card:bg-black/5" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
                <span className="flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 font-inter text-sm font-semibold text-[#161122] shadow-lg backdrop-blur-sm">
                  View project
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </div>
            </motion.a>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-white/80 backdrop-blur-sm shadow-soft border border-black/5"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-4 w-4 text-[#161122]" strokeWidth={2} />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-white/80 backdrop-blur-sm shadow-soft border border-black/5"
            aria-label="Next project"
          >
            <ChevronRight className="h-4 w-4 text-[#161122]" strokeWidth={2} />
          </button>
        </div>

        {/* Dots + Buttons */}
        <div className="mt-6 flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > active ? 1 : -1);
                  setActive(i);
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === active ? "w-6 bg-[#7C3AED]" : "w-1.5 bg-[#7C3AED]/20"
                )}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={p.name + "-btns"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-3"
            >
              {p.siteUrl && (
                <a
                  href={p.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] px-5 py-2.5 font-inter text-sm font-semibold text-white shadow-soft"
                >
                  Visit site
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2.2}
                  />
                </a>
              )}
              {p.caseStudyUrl && (
                <a
                  href={p.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/20 px-5 py-2.5 font-inter text-sm font-medium text-[#5b4a73]"
                >
                  Case study
                </a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ─── Desktop 3D carousel ─── */
function DesktopCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cylinderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [radius, setRadius] = useState(580);

  useEffect(() => {
    const calc = () =>
      setRadius(Math.max(420, Math.min(window.innerWidth * 0.38, 560)));
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !cylinderRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${PANEL_COUNT * 600}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (PANEL_COUNT - 1));
            setActiveIndex(Math.min(idx, PANEL_COUNT - 1));
          },
        },
      });

      tl.to(cylinderRef.current, {
        rotateY: -360 + ANGLE_PER_PANEL,
        ease: "none",
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [radius]);

  const activeProject = projects[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative z-[2] overflow-hidden bg-gradient-to-b from-[#FBFAFC] via-[#EDE9FE]/40 to-[#FBFAFC]"
      style={{ height: "100dvh" }}
    >
      <div className="flex h-full flex-col items-center justify-center pt-16">
        {/* Top: project info, left-aligned */}
        <div className="absolute left-8 top-28 z-10 lg:left-12 lg:top-32">
          <motion.div
            key={activeProject.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <h3 className="font-sora text-3xl font-bold text-[#161122] md:text-4xl">
              {activeProject.name}
            </h3>
            <p className="mt-1.5 max-w-sm font-inter text-sm text-[#5b5566]">
              {activeProject.tagline}
            </p>
          </motion.div>
        </div>

        {/* 3D Carousel */}
        <div
          className="relative"
          style={{
            width: "80vw",
            maxWidth: "900px",
            height: "clamp(300px, 50vh, 480px)",
            perspective: "1400px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          <div
            ref={cylinderRef}
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateY(0deg)",
            }}
          >
            {projects.map((project, i) => {
              const angle = i * ANGLE_PER_PANEL;
              return (
                <div
                  key={project.name}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <a
                    href={project.siteUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group/card relative block overflow-hidden rounded-2xl border bg-white cursor-pointer",
                      i === activeIndex
                        ? "border-[#7C3AED]/30 shadow-[0_8px_40px_rgba(124,58,237,0.12)]"
                        : "border-[#7C3AED]/8 shadow-soft"
                    )}
                    style={{
                      width: "clamp(240px, 50vw, 580px)",
                      aspectRatio: "16 / 10",
                    }}
                  >
                    <img
                      src={project.screenshot}
                      alt={project.name}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
                      loading={i < 3 ? "eager" : "lazy"}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/0 transition-colors duration-300 group-hover/card:bg-black/5" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
                      <span className="flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 font-inter text-sm font-semibold text-[#161122] shadow-lg backdrop-blur-sm">
                        View project
                        <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                      </span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom: dots + buttons */}
        <div className="relative z-10 mt-24 flex flex-col items-center gap-5 px-4">
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === activeIndex
                    ? "w-6 bg-[#7C3AED]"
                    : "w-1.5 bg-[#7C3AED]/20"
                )}
              />
            ))}
          </div>

          <motion.div
            key={activeProject.name + "-btns"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="flex items-center gap-3"
          >
            {activeProject.siteUrl && (
              <a
                href={activeProject.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] px-5 py-2.5 font-inter text-sm font-semibold text-white shadow-soft"
              >
                Visit site
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2.2}
                />
              </a>
            )}
            {activeProject.caseStudyUrl && (
              <a
                href={activeProject.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/20 bg-white/70 px-5 py-2.5 font-inter text-sm font-medium text-[#5b4a73] backdrop-blur-sm"
              >
                Case study
              </a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50%] w-[50%] rounded-full bg-[radial-gradient(circle_at_center,#7C3AED_0%,transparent_65%)] opacity-[0.05]"
      />
    </section>
  );
}

/* ─── Exported wrapper: picks mobile vs desktop ─── */
export function PortfolioCarousel() {
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile === null) return null;

  if (reduce) {
    return (
      <section id="portfolio" className="relative z-[2] bg-[#FBFAFC] py-28 md:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.siteUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group/card block overflow-hidden rounded-2xl border border-[#7C3AED]/10 bg-white shadow-soft cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.screenshot}
                    alt={p.name}
                    className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 font-inter text-sm font-semibold text-[#161122] shadow-lg backdrop-blur-sm">
                      View project
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-sora text-lg font-semibold text-[#161122]">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#5b5566]">{p.tagline}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return isMobile ? <MobileCarousel /> : <DesktopCarousel />;
}
