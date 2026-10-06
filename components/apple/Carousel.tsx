"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type CarouselProps = {
  label: string;
  children: ReactNode;
  tone?: "light" | "dark";
  itemClassName?: string;
};

export default function Carousel({ label, children, tone = "light", itemClassName = "w-[85%] sm:w-[420px]" }: CarouselProps) {
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
    const item = track.querySelector("li");
    const step = item ? item.getBoundingClientRect().width + 20 : track.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: step * direction, behavior: reduce ? "auto" : "smooth" });
  };

  const button =
    tone === "dark"
      ? "bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"
      : "bg-[#e8e8ed] text-ink hover:bg-[#dcdce1] disabled:opacity-40";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <ul
        ref={trackRef}
        className="carousel-track no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
      >
        {Children.map(children, (child) => (
          <li className={`shrink-0 snap-start ${itemClassName}`}>{child}</li>
        ))}
      </ul>
      <div className="page mt-6 flex justify-end gap-3">
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
