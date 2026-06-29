"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const HERO_VIDEO_SRC = "/hero_Video.MP4";
const HERO_POSTER_SRC = "";
const SEEK_INTERVAL_MS = 55;
const SEEK_EASE = 0.22;
const SEEK_EPSILON = 0.018;

const clampProgress = (value: number) => Math.min(Math.max(value, 0), 1);

export default function ScrollyCanvas({
  videoSrc = HERO_VIDEO_SRC,
  posterSrc = HERO_POSTER_SRC,
}: {
  videoSrc?: string;
  posterSrc?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const targetTimeRef = useRef(0);
  const displayedTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastSeekAtRef = useRef(0);
  const [videoReady, setVideoReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const contentWashOpacity = useTransform(scrollYProgress, [0, 0.08, 0.88, 1], [0.38, 0.52, 0.52, 0.7]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.04, 0.1], [1, 0.75, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.pause();
    video.currentTime = 0;
    video.load();
    setVideoReady(false);

    const handleMetadata = () => {
      displayedTimeRef.current = 0.001;
      targetTimeRef.current = 0.001;
      setVideoReady(true);
      video.currentTime = 0.001;
    };

    video.addEventListener("loadedmetadata", handleMetadata);
    return () => video.removeEventListener("loadedmetadata", handleMetadata);
  }, [videoSrc]);

  useEffect(() => {
    if (!videoReady) {
      return;
    }

    const tick = (now: number) => {
      const video = videoRef.current;
      if (!video || !Number.isFinite(video.duration)) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const diff = targetTimeRef.current - displayedTimeRef.current;

      if (Math.abs(diff) > SEEK_EPSILON && now - lastSeekAtRef.current >= SEEK_INTERVAL_MS) {
        displayedTimeRef.current += diff * SEEK_EASE;
        lastSeekAtRef.current = now;
        video.currentTime = displayedTimeRef.current;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [videoReady]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const video = videoRef.current;
    if (!videoReady || !video || !Number.isFinite(video.duration)) {
      return;
    }

    targetTimeRef.current = clampProgress(latest) * video.duration;
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden [height:100dvh]">
        <video
          ref={videoRef}
          className="hero-video absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          disablePictureInPicture
          preload="auto"
          poster={posterSrc || undefined}
          aria-hidden
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(18,18,18,0.58)_100%)]" />
        <motion.div
          className="pointer-events-none absolute inset-0 bg-black"
          style={{ opacity: contentWashOpacity }}
        />
        {!videoReady && posterSrc && (
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${posterSrc})` }}
          />
        )}
        <motion.div style={{ opacity: scrollHintOpacity }}>
          <div className="hero-scroll-hint pointer-events-none" aria-hidden>
            <span>Scroll</span>
            <span className="hero-scroll-hint-line" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
