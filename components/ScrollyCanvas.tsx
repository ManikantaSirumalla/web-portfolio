"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 289;
const FRAME_DIR = "sequenceUltra";
const FRAME_RATE_DELAY = "0.067s";

const formatFrameNumber = (num: number, padding: number) => {
  return num.toString().padStart(padding, "0");
};

const buildFrameCandidates = (index: number, folder: string) => {
  const n2 = formatFrameNumber(index, 2);
  const n3 = formatFrameNumber(index, 3);

  return [
    `/${folder}/frame_${n2}_delay-${FRAME_RATE_DELAY}.webp`,
    `/${folder}/frame_${n3}_delay-${FRAME_RATE_DELAY}.webp`,
    `/${folder}/frame_${n2}_delay-${FRAME_RATE_DELAY}.png`,
    `/${folder}/frame_${n3}_delay-${FRAME_RATE_DELAY}.png`,
  ];
};

const loadImageFromCandidates = async (candidates: string[]) => {
  for (const candidate of candidates) {
    const image = await new Promise<HTMLImageElement | null>((resolve) => {
      const img = new Image();
      img.decoding = "async";
      img.src = candidate;
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
    });

    if (image) {
      return image;
    }
  }

  return null;
};

export default function ScrollyCanvas({
  totalFrames = FRAME_COUNT,
  frameFolder = FRAME_DIR,
}: {
  totalFrames?: number;
  frameFolder?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<(HTMLImageElement | null)[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  useEffect(() => {
    let isMounted = true;

    const preload = async () => {
      setImagesLoaded(false);
      setLoadProgress(0);

      const loadedImages: (HTMLImageElement | null)[] = Array.from(
        { length: totalFrames },
        () => null,
      );

      let loadedCount = 0;
      for (let i = 0; i < totalFrames; i++) {
        const image = await loadImageFromCandidates(buildFrameCandidates(i, frameFolder));
        loadedImages[i] = image;
        loadedCount += 1;

        if (isMounted) {
          setLoadProgress(loadedCount / totalFrames);
        }
      }

      if (!isMounted) {
        return;
      }

      setImages(loadedImages);
      setImagesLoaded(loadedImages.some(Boolean));
    };

    preload();

    return () => {
      isMounted = false;
    };
  }, [totalFrames, frameFolder]);

  const drawImage = (index: number) => {
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (!img) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssWidth = window.innerWidth;
    const cssHeight = window.innerHeight;
    canvas.width = Math.floor(cssWidth * dpr);
    canvas.height = Math.floor(cssHeight * dpr);
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const canvasRatio = cssWidth / cssHeight;
    const imgRatio = img.width / img.height;

    let drawWidth = cssWidth;
    let drawHeight = cssHeight;
    let offsetX = 0;
    let offsetY = 0;

    const isPortraitViewport = canvasRatio < 1;

    if (isPortraitViewport) {
      // contain: fit the entire frame on portrait/mobile so the product stays fully visible
      if (canvasRatio > imgRatio) {
        drawHeight = cssHeight;
        drawWidth = cssHeight * imgRatio;
      } else {
        drawWidth = cssWidth;
        drawHeight = cssWidth / imgRatio;
      }
      offsetX = (cssWidth - drawWidth) / 2;
      offsetY = (cssHeight - drawHeight) / 2;
    } else if (canvasRatio > imgRatio) {
      drawHeight = cssWidth / imgRatio;
      offsetY = (cssHeight - drawHeight) / 2;
    } else {
      drawWidth = cssHeight * imgRatio;
      offsetX = (cssWidth - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, cssWidth, cssHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    if (imagesLoaded) {
      drawImage(0);
    }

    const handleResize = () => {
      drawImage(Math.round(currentIndex.get()));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, currentIndex, images]);

  useMotionValueEvent(currentIndex, "change", (latest) => {
    const frameIndex = Math.round(latest);
    if (frameIndex >= 0 && frameIndex < totalFrames) {
      requestAnimationFrame(() => drawImage(frameIndex));
    }
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden [height:100dvh]">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
        {!imagesLoaded && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#121212]/90">
            <div className="rounded-2xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                Loading Sequence {Math.round(loadProgress * 100)}%
              </p>
            </div>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(18,18,18,0.55)_100%)]" />
        {imagesLoaded && (
          <div className="hero-scroll-hint" aria-hidden>
            <span>Scroll</span>
            <span className="hero-scroll-hint-line" />
          </div>
        )}
      </div>
    </div>
  );
}
