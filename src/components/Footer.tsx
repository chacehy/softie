"use client";

import { useId } from "react";
import { motion } from "motion/react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const quickLinks = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#work" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const gradientId = useId();

  return (
    <footer className="relative z-10 overflow-hidden bg-[#0E0E0E] text-white">
      {/* ambient brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,#7C3AED_0%,transparent_65%)] opacity-25"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="space-y-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none" className="h-10 w-auto" aria-label="Softie">
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>
              <rect x="8" y="8" width="44" height="34" rx="17" fill={`url(#${gradientId})`} />
              <rect x="28" y="38" width="44" height="34" rx="17" fill={`url(#${gradientId})`} />
              <text x="92" y="52" fontFamily="Sora, sans-serif" fontSize="38" fontWeight="700" letterSpacing="1.5" fill="#FBFAFC">SOFTIE</text>
            </svg>
            <p className="max-w-sm font-inter text-sm leading-relaxed text-white/55">
              Building digital experiences that feel alive. From idea to
              deployment, we craft apps that are fast, scalable, and surprisingly
              delightful.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 font-inter text-sm font-semibold text-white ring-1 ring-inset ring-white/15 transition-colors duration-300 hover:bg-white/15"
            >
              Start a project
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </a>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-sora text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
              Contact
            </h4>
            <div className="space-y-3 font-inter text-sm">
              <a
                href="mailto:hello@softie.cc"
                className="flex items-center gap-2.5 text-white/65 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-[#9b8cc4]" strokeWidth={1.75} />
                hello@softie.cc
              </a>
              <a
                href="tel:+213770950240"
                className="flex items-center gap-2.5 text-white/65 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-[#9b8cc4]" strokeWidth={1.75} />
                0770 95 02 40
              </a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-sora text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
              Explore
            </h4>
            <nav className="flex flex-col gap-3 font-inter text-sm">
              {quickLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="w-fit text-white/65 transition-colors hover:text-white"
                >
                  {l.name}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="font-inter text-sm text-white/45">
            © {currentYear} Softie. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-inter text-sm text-white/45">
            <a href="#" className="transition-colors hover:text-white/80">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white/80">
              Terms
            </a>
            <span className="text-white/30">
              Code made soft, built with care.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
