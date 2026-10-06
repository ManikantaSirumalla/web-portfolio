"use client";

import { useEffect, useState } from "react";

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "honors", label: "Honors" },
  { id: "contact", label: "Contact" },
];

export default function SideNav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="In-page" className="mt-10 hidden lg:block">
      <ul>
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "location" : undefined}
                className="group flex min-h-[36px] items-center gap-4 py-1.5"
              >
                <span
                  aria-hidden
                  className={`h-px origin-left bg-current transition-all duration-300 ease-out ${
                    isActive ? "w-16 text-fg" : "w-8 text-fg-faint group-hover:w-16 group-hover:text-fg"
                  }`}
                />
                <span
                  className={`font-mono text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                    isActive ? "text-fg" : "text-fg-faint group-hover:text-fg"
                  }`}
                >
                  {section.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
