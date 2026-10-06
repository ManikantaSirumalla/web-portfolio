"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useReducedMotionSafe } from "@/components/apple/useReducedMotionSafe";

type ScrollLitTextProps = {
  text: string;
  className?: string;
};

export default function ScrollLitText({ text, className }: ScrollLitTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {reduce
        ? text
        : words.map((word, index) => (
            <Word
              key={`${word}-${index}`}
              progress={scrollYProgress}
              range={[index / words.length, (index + 1) / words.length]}
            >
              {word}
            </Word>
          ))}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>{" "}
    </>
  );
}
