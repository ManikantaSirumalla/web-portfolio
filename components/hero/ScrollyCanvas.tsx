"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform, useMotionValueEvent } from "motion/react";

const HERO_VIDEO_SRC = "/hero_Video.MP4";
const SEEK_INTERVAL_MS = 55;
const SEEK_EASE = 0.22;
const SEEK_EPSILON = 0.018;

const clampProgress = (value: number) => Math.min(Math.max(value, 0), 1);

export default function ScrollyCanvas({ videoSrc = HERO_VIDEO_SRC }: { videoSrc?: string }) {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const targetTimeRef = useRef(0);
  const displayedTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastSeekAtRef = useRef(0);
  const visibleRef = useRef(true);
  const [videoReady, setVideoReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const washOpacity = useTransform(scrollYProgress, [0, 0.08, 0.88, 1], [0.42, 0.55, 0.55, 0.72]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.04, 0.1], [1, 0.7, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    const handleMetadata = () => {
      displayedTimeRef.current = 0.001;
      targetTimeRef.current = 0.001;
      video.currentTime = 0.001;
      setVideoReady(true);
    };

    video.addEventListener("loadedmetadata", handleMetadata);
    return () => video.removeEventListener("loadedmetadata", handleMetadata);
  }, [videoSrc, reduce]);

  useEffect(() => {
    if (reduce || !videoReady) return;

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const stop = () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const tick = (now: number) => {
      if (document.hidden || !visibleRef.current) {
        rafRef.current = null;
        return;
      }

      if (Number.isFinite(video.duration)) {
        const diff = targetTimeRef.current - displayedTimeRef.current;
        if (Math.abs(diff) > SEEK_EPSILON && now - lastSeekAtRef.current >= SEEK_INTERVAL_MS) {
          displayedTimeRef.current += diff * SEEK_EASE;
          lastSeekAtRef.current = now;
          video.currentTime = displayedTimeRef.current;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const start = () => {
      if (rafRef.current == null && visibleRef.current && !document.hidden) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0 }
    );
    observer.observe(container);

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduce, videoReady]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const video = videoRef.current;
    if (reduce || !videoReady || !video || !Number.isFinite(video.duration)) return;
    targetTimeRef.current = clampProgress(latest) * video.duration;
  });

  if (reduce) {
    return (
      <div className="hero-still">
        <video className="hero-video" muted playsInline preload="metadata" aria-hidden>
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="hero-still-wash" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="hero-scroll">
      <div className="hero-sticky">
        <motion.video
          ref={videoRef}
          className="hero-video hero-video-live"
          style={{ scale: videoScale }}
          muted
          playsInline
          disablePictureInPicture
          preload="metadata"
          aria-hidden
        >
          <source src={videoSrc} type="video/mp4" />
        </motion.video>
        <div className="hero-vignette" />
        <motion.div className="hero-wash" style={{ opacity: washOpacity }} />
        <motion.div style={{ opacity: hintOpacity }}>
          <div className="hero-scroll-hint" aria-hidden>
            <span>Scroll</span>
            <span className="hero-scroll-hint-line" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
