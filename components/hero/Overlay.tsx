"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";

const chapters = [
  {
    title: "Hey, I'm Manikanta.",
    kicker: "iOS Developer · 3+ years",
    align: "center",
  },
  {
    title: "Production apps, with on-device algorithms.",
    kicker: "Live on the App Store",
    align: "start",
  },
  {
    title: "A data science and ML engineer, too.",
    kicker: "UMBC · M.S. Data Science",
    align: "end",
  },
  {
    title: "Models trained for real product outcomes.",
    kicker: "Evaluation before deployment",
    align: "start",
  },
  {
    title: "Then shipped inside native mobile apps.",
    kicker: "CoreML · SwiftUI · HealthKit",
    align: "end",
  },
  {
    title: "iOS and ML, in one practice.",
    kicker: "From research idea to release",
    align: "start",
  },
  {
    title: "Great to have you here.",
    kicker: "Selected work is below",
    align: "center",
    cta: true,
  },
] as const;

function ChapterCtas() {
  return (
    <div className="hero-cta">
      <a className="btn btn-filled" href="/#work">
        Selected work
      </a>
      <a className="btn btn-outline" href="/#contact">
        Contact
      </a>
    </div>
  );
}

export default function Overlay() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

  const applyChapterOpacity = (latest: number) => {
    const count = chapters.length;
    const span = 1 / count;
    const fade = span * 0.28;

    for (let index = 0; index < count; index += 1) {
      const node = panelRefs.current[index];
      if (!node) continue;

      const start = index * span;
      const end = start + span;
      let opacity = 0;

      if (latest <= start) {
        opacity = index === 0 ? 1 : 0;
      } else if (latest < start + fade) {
        opacity = index === 0 ? 1 : (latest - start) / fade;
      } else if (latest < end - fade) {
        opacity = 1;
      } else if (latest < end) {
        opacity = index === count - 1 ? 1 : 1 - (latest - (end - fade)) / fade;
      } else {
        opacity = index === count - 1 ? 1 : 0;
      }

      const hidden = opacity < 0.02;
      node.style.opacity = hidden ? "0" : opacity.toFixed(3);
      node.style.visibility = hidden ? "hidden" : "visible";
      node.toggleAttribute("inert", hidden);
      node.setAttribute("aria-hidden", hidden ? "true" : "false");
    }
  };

  useMotionValueEvent(scrollYProgress, "change", applyChapterOpacity);

  useEffect(() => {
    applyChapterOpacity(scrollYProgress.get());
  }, [scrollYProgress]);

  if (reduce) {
    return (
      <div className="hero-chapters">
        <p className="section-eyebrow">Index</p>
        <ol>
          {chapters.map((chapter, index) => (
            <li key={chapter.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{chapter.title}</h2>
                <p>{chapter.kicker}</p>
              </div>
            </li>
          ))}
        </ol>
        <ChapterCtas />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="hero-overlay">
      <div className="hero-sticky">
        {chapters.map((chapter, index) => (
          <div
            key={chapter.title}
            ref={(node) => {
              panelRefs.current[index] = node;
            }}
            style={{ opacity: index === 0 ? 1 : 0, visibility: index === 0 ? "visible" : "hidden" }}
            className={`hero-panel hero-panel-${chapter.align}`}
            aria-hidden={index === 0 ? undefined : true}
            inert={index === 0 ? undefined : true}
          >
            <p className="hero-kicker">
              {String(index + 1).padStart(2, "0")} / 07 · {chapter.kicker}
            </p>
            {index === 0 ? (
              <h1 className="hero-title">{chapter.title}</h1>
            ) : (
              <h2 className="hero-heading">{chapter.title}</h2>
            )}
            {"cta" in chapter && chapter.cta ? <ChapterCtas /> : null}
          </div>
        ))}
        <div className="hero-progress-track" aria-hidden>
          <motion.div className="hero-progress" style={{ scaleX: progress }} />
        </div>
      </div>
    </div>
  );
}
