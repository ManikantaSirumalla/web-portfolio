"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/data/resume";
import { useReducedMotionSafe } from "@/components/apple/useReducedMotionSafe";

const links = [
  { href: "/#zealo", label: "ZEALO" },
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#specs", label: "Skills" },
  { href: "/#honors", label: "Honors" },
  { href: "/#contact", label: "Contact" },
];

export default function GlobalNav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotionSafe();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav
        aria-label="Global"
        className="relative z-10 border-b border-white/[0.06] bg-[rgba(22,22,23,0.8)] backdrop-blur-xl backdrop-saturate-[1.8]"
      >
        <div className="mx-auto flex h-12 max-w-[1024px] items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            className="flex min-h-[44px] items-center text-[14px] font-semibold tracking-headline text-white/90 transition-colors hover:text-white"
            onClick={() => setOpen(false)}
          >
            Manikanta Sirumalla
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex min-h-[44px] items-center text-[12px] tracking-[-0.01em] text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              className="hidden min-h-[28px] items-center rounded-full bg-action px-3 text-[12px] text-white transition-colors hover:bg-action-hover sm:inline-flex"
            >
              Résumé
            </a>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center text-white/90 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span aria-hidden className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 ease-apple ${
                    open ? "top-1.5 rotate-45" : "top-0.5"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 ease-apple ${
                    open ? "top-1.5 -rotate-45" : "top-2.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 bg-[rgba(22,22,23,0.97)] pt-12 backdrop-blur-xl md:hidden"
            initial={reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(-8px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ul className="px-10 pt-6">
              {links.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={reduce ? false : { opacity: 0, transform: "translateY(-6px)" }}
                  animate={{ opacity: 1, transform: "translateY(0px)" }}
                  transition={{ delay: reduce ? 0 : 0.04 * index + 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="flex min-h-[52px] items-center text-[28px] font-semibold tracking-display text-white/90 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-6">
                <a
                  href={profile.resume}
                  download={profile.resumeFileName}
                  className="btn-pill"
                  onClick={() => setOpen(false)}
                >
                  Download résumé
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
