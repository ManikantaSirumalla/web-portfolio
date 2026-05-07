"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.07, 0.13], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.13], [0, -60]);

  const opacity2 = useTransform(scrollYProgress, [0.11, 0.19, 0.25], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.11, 0.25], [60, -60]);

  const opacity3 = useTransform(scrollYProgress, [0.23, 0.31, 0.37], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.23, 0.37], [60, -60]);

  const opacity4 = useTransform(scrollYProgress, [0.35, 0.43, 0.49], [0, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.35, 0.49], [60, -60]);

  const opacity5 = useTransform(scrollYProgress, [0.47, 0.55, 0.61], [0, 1, 0]);
  const y5 = useTransform(scrollYProgress, [0.47, 0.61], [60, -60]);

  const opacity6 = useTransform(scrollYProgress, [0.59, 0.69, 0.77], [0, 1, 0]);
  const y6 = useTransform(scrollYProgress, [0.59, 0.77], [60, -60]);

  const opacity7 = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [0, 1, 0]);
  const y7 = useTransform(scrollYProgress, [0.75, 0.95], [60, -60]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute left-0 top-0 z-10 h-[500vh] w-full"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden [height:100dvh]">
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
        >
          <h1 className="mb-4 text-5xl font-semibold tracking-[-0.04em] text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.85)] md:text-7xl">
            Hey, I&apos;m Manikanta.
          </h1>
          <p className="text-base uppercase tracking-[0.35em] text-white/80 drop-shadow-[0_6px_30px_rgba(0,0,0,0.85)] md:text-xl">
            iOS Developer • 3+ Years of Experience
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24"
        >
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.03em] text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.9)] md:text-6xl">
            Build production-grade apps with
            <span className="text-white/60"> on-device custom algorithms</span>
          </h2>
          <p className="mt-4 text-base uppercase tracking-[0.35em] text-white/80 drop-shadow-[0_6px_30px_rgba(0,0,0,0.85)] md:text-xl">
            Live on the App Store
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center p-8 text-right md:p-24"
        >
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.03em] text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.9)] md:text-6xl">
            I&apos;m a Data Science / ML engineer too.
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: opacity4, y: y4 }}
          className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24"
        >
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.03em] text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.9)] md:text-6xl">
            I train models for real product outcomes.
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: opacity5, y: y5 }}
          className="absolute inset-0 flex flex-col items-end justify-center p-8 text-right md:p-24"
        >
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.03em] text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.9)] md:text-6xl">
            Then optimize and deploy them inside mobile apps.
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: opacity6, y: y6 }}
          className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24"
        >
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.03em] text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.9)] md:text-6xl">
            A rare hybrid combination of iOS + ML.
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: opacity7, y: y7 }}
          className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center md:p-24"
        >
          <p className="text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.9)] md:text-6xl">
            Great to have you here.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
