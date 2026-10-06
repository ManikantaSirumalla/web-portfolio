"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

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

  const ranges = [
    [0, 0.07, 0.13],
    [0.11, 0.19, 0.25],
    [0.23, 0.31, 0.37],
    [0.35, 0.43, 0.49],
    [0.47, 0.55, 0.61],
    [0.59, 0.69, 0.77],
    [0.75, 0.85, 0.95],
  ] as const;

  const opacity1 = useTransform(scrollYProgress, [...ranges[0]], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [...ranges[1]], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [...ranges[2]], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [...ranges[3]], [0, 1, 0]);
  const opacity5 = useTransform(scrollYProgress, [...ranges[4]], [0, 1, 0]);
  const opacity6 = useTransform(scrollYProgress, [...ranges[5]], [0, 1, 0]);
  const opacity7 = useTransform(scrollYProgress, [...ranges[6]], [0, 1, 1]);
  const opacities = [opacity1, opacity2, opacity3, opacity4, opacity5, opacity6, opacity7];

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
          <motion.div
            key={chapter.title}
            style={{ opacity: opacities[index] }}
            className={`hero-panel hero-panel-${chapter.align}`}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
