"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type CarouselProps = {
  label: string;
  children: ReactNode;
  tone?: "light" | "dark";
  itemClassName?: string;
  inset?: boolean;
};

export default function Carousel({
  label,
  children,
  tone = "light",
  itemClassName = "w-[85%] sm:w-[420px]",
  inset = false,
}: CarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const start = track.getBoundingClientRect().left + (parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0);
    const offsets = Array.from(track.children, (item) => item.getBoundingClientRect().left - start);
    const offset =
      direction === 1 ? offsets.find((value) => value > 4) : offsets.filter((value) => value < -4).pop();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: offset ?? track.clientWidth * 0.8 * direction, behavior: reduce ? "auto" : "smooth" });
  };

  const button =
    tone === "dark"
      ? "bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"
      : "bg-[#e8e8ed] text-ink hover:bg-[#dcdce1] disabled:opacity-40";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <ul
        ref={trackRef}
        className={`${inset ? "items-center gap-3" : "carousel-track gap-5"} no-scrollbar flex snap-x snap-mandatory overflow-x-auto pb-2`}
      >
        {Children.map(children, (child) => (
          <li className={`shrink-0 snap-start ${itemClassName}`}>{child}</li>
        ))}
      </ul>
      <div className={`${inset ? "mt-4" : "page mt-6"} flex justify-end gap-3 ${canPrev || canNext ? "" : "hidden"}`}>
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          aria-label="Previous"
          className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${button}`}
        >
          <Chevron direction="left" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          aria-label="Next"
          className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${button}`}
        >
          <Chevron direction="right" />
        </button>
      </div>
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="10" height="16" viewBox="0 0 10 16" aria-hidden className={direction === "left" ? "rotate-180" : ""}>
      <path d="M2 2l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
