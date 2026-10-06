"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { motion } from "motion/react";
import { Outfit } from "next/font/google";
import { profile } from "@/data/resume";
import { useReducedMotionSafe } from "@/components/apple/useReducedMotionSafe";

const VERT = `
attribute vec2 aPos;
attribute vec2 aUv;
varying vec2 vUv;
void main() {
  vUv = aUv;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const FRAG = `
precision mediump float;
uniform sampler2D uTex;
varying vec2 vUv;
void main() {
  vec4 c = texture2D(uTex, vUv);
  float dist = distance(c.rgb, vec3(0.9451));
  float alpha = smoothstep(0.028, 0.062, dist);
  gl_FragColor = vec4(c.rgb * alpha, alpha);
}
`;

const watermark = Outfit({ subsets: ["latin"], weight: ["800"], display: "swap" });

const ease = [0.25, 0.1, 0.25, 1] as const;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function KeyedPortrait({
  videoRef,
  active,
}: {
  videoRef: RefObject<HTMLVideoElement>;
  active: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [keyed, setKeyed] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
    });
    if (!gl || gl.isContextLost()) {
      setKeyed(false);
      return;
    }

    const vertex = compile(gl, gl.VERTEX_SHADER, VERT);
    const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    const program = vertex && fragment ? gl.createProgram() : null;
    if (!vertex || !fragment || !program) {
      setKeyed(false);
      return;
    }

    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.bindAttribLocation(program, 0, "aPos");
    gl.bindAttribLocation(program, 1, "aUv");
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setKeyed(false);
      return;
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );
    gl.useProgram(program);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 16, 8);

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    let raf = 0;
    let stopped = false;

    const draw = () => {
      if (stopped || video.readyState < 2) return;
      const width = video.videoWidth;
      const height = video.videoHeight;
      if (width && (canvas.width !== width || canvas.height !== height)) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const loop = () => {
      draw();
      if (!stopped && !video.paused && !video.ended) raf = requestAnimationFrame(loop);
    };

    const onPlay = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(loop);
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("loadeddata", draw);
    if (video.readyState >= 2) draw();
    if (!video.paused) onPlay();

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("loadeddata", draw);
      gl.deleteTexture(texture);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, [videoRef]);

  return (
    <>
      <video
        ref={videoRef}
        className={
          keyed
            ? "absolute inset-0 h-full w-full object-contain opacity-0"
            : "relative h-full w-auto max-w-none object-contain"
        }
        src="/media/talking-hero.mp4"
        muted
        loop
        playsInline
        preload="auto"
        aria-label={`Introduction from ${profile.name}`}
      />
      <canvas
        ref={canvasRef}
        width={1280}
        height={720}
        aria-hidden
        className={keyed ? "relative h-full w-auto max-w-none" : "hidden"}
      />
      <span className="sr-only">{active ? "Playing" : "Paused"}</span>
    </>
  );
}

export default function HeroFilm() {
  const reduce = useReducedMotionSafe();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [showControl, setShowControl] = useState(true);
  const firstName = profile.name.split(" ")[0]?.toUpperCase() ?? profile.name;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce) return;
    const start = () => {
      video.muted = true;
      video.play().catch(() => undefined);
    };
    if (video.readyState >= 2) start();
    else video.addEventListener("canplay", start, { once: true });
    return () => video.removeEventListener("canplay", start);
  }, [reduce]);

  useEffect(() => {
    const unmute = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Element && target.closest("[data-hero-toggle]")) return;
      const video = videoRef.current;
      if (!video || video.paused) return;
      video.muted = false;
    };
    window.addEventListener("pointerdown", unmute);
    return () => window.removeEventListener("pointerdown", unmute);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowControl(window.scrollY < window.innerHeight - 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.muted = false;
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => undefined);
      });
      return;
    }
    video.pause();
  };

  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, transform: "translateY(18px)" },
          animate: { opacity: 1, transform: "translateY(0px)" },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section aria-labelledby="hero-title" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-[#f4f1eb] text-[#243044]">
      <p
        aria-hidden
        className={`${watermark.className} pointer-events-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[15.5vw] font-extrabold leading-none tracking-[-0.03em] text-[#ece8e0]`}
      >
        {firstName}
      </p>

      <div className="pointer-events-none absolute inset-x-0 top-12 z-[1] flex h-[54%] items-end justify-center md:h-[calc(100%-3rem)]">
        <div className="relative h-full md:h-[97%] md:translate-x-[8%]">
          <KeyedPortrait videoRef={videoRef} active={playing} />
        </div>
      </div>

      {showControl ? (
        <button
          type="button"
          data-hero-toggle
          onClick={toggle}
          aria-pressed={playing}
          aria-label={playing ? "Pause introduction" : "Play introduction"}
          className="fixed right-16 top-1 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#2c3d86] text-white shadow-[0_10px_24px_-12px_rgba(28,40,110,0.9)] transition-colors hover:bg-[#243472] md:right-5"
        >
          {playing ? (
            <span aria-hidden className="flex items-center gap-[3px]">
              <span className="block h-3 w-[2.5px] rounded-full bg-white" />
              <span className="block h-3 w-[2.5px] rounded-full bg-white" />
            </span>
          ) : (
            <span aria-hidden className="ml-0.5 block h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-white" />
          )}
        </button>
      ) : null}

      <motion.div {...enter(0.15)} className="absolute inset-x-0 bottom-0 z-10 px-5 pb-6 sm:px-8 md:px-12 md:pb-10 lg:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[720px]">
            <h1
              id="hero-title"
              className="text-[44px] font-bold leading-[0.9] tracking-[-0.045em] text-[#243044] sm:text-[68px] md:text-[84px] lg:text-[104px]"
            >
              iOS &amp; ML
              <span className="block">Engineer.</span>
            </h1>
            <p className="mt-3 max-w-[460px] text-[14px] leading-snug text-[#8a909b] md:text-[16px]">{profile.focus}</p>
            <a
              href="#about"
              className="mt-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#2a3346] text-[13px] font-semibold text-white"
              aria-label={`About ${profile.name}`}
            >
              {firstName.slice(0, 1)}
            </a>
          </div>

          <div className="flex items-center gap-2.5 md:mb-8 md:flex-col md:items-stretch">
            <a
              href="#work"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#1b2330] px-5 text-[14px] font-medium text-white shadow-[0_10px_24px_-14px_rgba(20,24,33,0.85)] transition-colors hover:bg-[#11161f]"
            >
              Explore work
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-5 text-[14px] font-medium text-[#1b2330] shadow-[0_10px_24px_-14px_rgba(20,24,33,0.45)] ring-1 ring-black/[0.04] transition-colors hover:bg-[#fbfaf7]"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
