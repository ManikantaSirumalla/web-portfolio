"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotionSafe } from "@/components/apple/useReducedMotionSafe";

const screens = [
  { src: "/assets/projects/zealo/02.png", alt: "ZEALO training readiness screen" },
  { src: "/assets/projects/zealo/03.png", alt: "ZEALO AI-generated workout plan screen" },
  { src: "/assets/projects/zealo/04.png", alt: "ZEALO nutrition guidance screen" },
];

export default function ZealoShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const sideY = useTransform(scrollYProgress, [0, 1], [120, -60]);
  const centerY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const leftTransform = useTransform(sideY, (y) => `translate3d(14%, ${y}px, 0) rotate(-6deg)`);
  const rightTransform = useTransform(sideY, (y) => `translate3d(-14%, ${y}px, 0) rotate(6deg)`);
  const centerTransform = useTransform(centerY, (y) => `translate3d(0, ${y}px, 0)`);

  const styles = reduce
    ? [{ transform: "translate3d(14%, 40px, 0) rotate(-6deg)" }, {}, { transform: "translate3d(-14%, 40px, 0) rotate(6deg)" }]
    : [{ transform: leftTransform }, { transform: centerTransform }, { transform: rightTransform }];

  return (
    <div ref={ref} className="relative mx-auto mt-16 flex max-w-[980px] items-start justify-center px-4 md:mt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[60%] w-[70%] -translate-x-1/2 rounded-full bg-[#1fd3a5]/20 blur-[120px]"
      />
      {screens.map((screen, index) => (
        <motion.div
          key={screen.src}
          style={styles[index]}
          className={`relative shrink-0 overflow-hidden rounded-[22px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10 will-change-transform md:rounded-[36px] ${
            index === 1 ? "z-10 w-[40%] max-w-[340px]" : "w-[32%] max-w-[280px] opacity-80"
          }`}
        >
          <Image
            src={screen.src}
            alt={screen.alt}
            width={1260}
            height={2736}
            sizes="(min-width: 980px) 340px, 40vw"
            className="h-auto w-full"
            priority={index === 1}
          />
        </motion.div>
      ))}
    </div>
  );
}
