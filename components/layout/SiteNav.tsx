"use client";

import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#resume", label: "Resume" },
  { href: "/#highlights", label: "Highlights" },
  { href: "/#media", label: "Media" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#writing", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  const menuId = useId();

  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return;
    }

    const sections = links
      .map((link) => document.getElementById(link.href.split("#")[1] ?? ""))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.15, 0.4] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="site-nav-wrap">
      <nav className="site-nav" aria-label="Primary">
        <a href="/" className="site-nav-logo">
          Manikanta Sirumalla
        </a>
        <div className="site-nav-links">
          {links.map((link) => {
            const id = link.href.split("#")[1];
            return (
              <a key={link.href} href={link.href} aria-current={active === id ? "true" : undefined}>
                {link.label}
              </a>
            );
          })}
        </div>
        <a className="site-nav-cta" href="/#contact">
          Hire
        </a>
        <button
          type="button"
          className="site-nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} aria-hidden /> : <List size={18} aria-hidden />}
        </button>
      </nav>

      {open ? (
        <div id={menuId} className="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="mobile-menu-inner">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="mobile-menu-link" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
