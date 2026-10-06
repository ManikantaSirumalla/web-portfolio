"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { profile } from "@/data/resume";
import { useReducedMotionSafe } from "@/components/apple/useReducedMotionSafe";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function HeroFilm() {
  const reduce = useReducedMotionSafe();
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(frameRef, { amount: 0.15 });

  const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.84, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [48, 28]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView && !reduce) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [inView, reduce]);

  const enter = (delay: number) => ({
    initial: { opacity: 0, transform: "translateY(24px)" },
    animate: { opacity: 1, transform: "translateY(0px)" },
    transition: { duration: 1, delay, ease },
  });

  return (
    <section aria-labelledby="hero-title" className="overflow-hidden bg-night pb-16 pt-12 text-white md:pb-24">
      <div className="page pt-16 text-center md:pt-24">
        <h1 id="hero-title">
          <motion.span {...enter(0.1)} className="block text-[21px] font-semibold tracking-headline text-white md:text-[28px]">
            {profile.name}
          </motion.span>
          <motion.span
            {...enter(0.25)}
            className="text-gradient mt-2 block pb-2 text-[56px] font-semibold leading-[1.05] tracking-display sm:text-[80px] md:text-[104px] lg:text-[120px]"
          >
            {profile.title}.
          </motion.span>
        </h1>
        <motion.p {...enter(0.4)} className="mx-auto mt-5 max-w-[640px] text-[19px] leading-[1.4] tracking-headline text-cloud md:text-[24px]">
          {profile.tagline}
        </motion.p>
        <motion.div {...enter(0.55)} className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a href={profile.resume} download={profile.resumeFileName} className="btn-pill">
            Download résumé
          </a>
          <a href="#zealo" className="link-chevron text-link-dark">
            See the work <span aria-hidden>›</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        {...enter(0.7)}
        className="mx-auto mt-16 max-w-wide px-4 md:mt-24 md:px-8"
      >
        <motion.div
          ref={frameRef}
          style={reduce ? { borderRadius: 28 } : { scale, borderRadius: radius }}
          className="relative aspect-[16/10] overflow-hidden bg-dusk will-change-transform md:aspect-video"
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            poster="/media/hero-poster.jpg"
            muted
            loop
            playsInline
            preload={reduce ? "none" : "metadata"}
            controls={Boolean(reduce)}
            aria-label={`Portrait film of ${profile.name}`}
          >
            <source src="/media/hero-1080.mp4" type="video/mp4" />
          </video>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"
          />
          <p className="absolute bottom-5 left-6 right-6 text-balance text-[13px] font-semibold tracking-headline text-white/90 md:bottom-8 md:left-10 md:text-[17px]">
            {profile.focus}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
