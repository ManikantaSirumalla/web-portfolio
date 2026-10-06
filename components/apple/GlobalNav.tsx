"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/data/resume";
import { useReducedMotionSafe } from "@/components/apple/useReducedMotionSafe";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#specs", label: "Skills" },
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#honors", label: "Achievements" },
  { href: "/#contact", label: "Contact" },
];

export default function GlobalNav({ appearance = "dark" }: { appearance?: "dark" | "hero" }) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(appearance === "dark");
  const reduce = useReducedMotionSafe();
  const light = appearance === "hero" && !solid;

  useEffect(() => {
    if (appearance !== "hero") return;
    const onScroll = () => setSolid(window.scrollY > window.innerHeight - 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [appearance]);

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
        className={`relative z-10 border-b transition-colors duration-300 ${
          light
            ? "border-transparent bg-transparent"
            : "border-white/[0.06] bg-[rgba(22,22,23,0.8)] backdrop-blur-xl backdrop-saturate-[1.8]"
        }`}
      >
        <div className="mx-auto flex h-12 max-w-[1180px] items-center justify-between px-5 md:px-8">
          <Link
            href="/"
            className={`flex min-h-[44px] items-center text-[14px] font-medium tracking-headline transition-colors ${
              light ? "text-[#3a4150] hover:text-[#1c2430]" : "font-semibold text-white/90 hover:text-white"
            }`}
            onClick={() => setOpen(false)}
          >
            Manikanta Sirumalla
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex min-h-[44px] items-center tracking-[-0.01em] transition-colors ${
                    light ? "text-[13px] text-[#5c6572] hover:text-[#1c2430]" : "text-[12px] text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {light ? (
              <span aria-hidden className="hidden h-11 w-11 md:block" />
            ) : (
              <a
                href={profile.resume}
                download={profile.resumeFileName}
                className="hidden min-h-[28px] items-center rounded-full bg-action px-3 text-[12px] text-white transition-colors hover:bg-action-hover sm:inline-flex"
              >
                Resume
              </a>
            )}
            <button
              type="button"
              className={`flex h-11 w-11 items-center justify-center md:hidden ${light ? "text-[#1c2430]" : "text-white/90"}`}
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
                  Download resume
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
