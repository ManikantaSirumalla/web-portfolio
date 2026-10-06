"use client";

import { useReducedMotion } from "motion/react";

const HERO_VIDEO_SRC = "/hero_Video.MP4";

export default function StudioHero() {
  const reduce = useReducedMotion() === true;

  return (
    <section className="studio-hero" aria-labelledby="studio-hero-title">
      <div className="studio-hero-copy">
        <p className="section-eyebrow">iOS developer and data scientist</p>
        <h1 id="studio-hero-title">Manikanta Sirumalla</h1>
        <p className="studio-lead">
          I ship SwiftUI products and applied machine learning systems, from a research idea to
          something people can download. Based in Baltimore, open to full-time and remote roles.
        </p>
        <div className="hero-cta">
          <a className="btn btn-filled" href="/#work">
            See the work
          </a>
          <a className="btn btn-outline" href="/#contact">
            Get in touch
          </a>
        </div>
      </div>
      <figure className="studio-portrait">
        <video
          muted
          playsInline
          loop={!reduce}
          autoPlay={!reduce}
          preload="metadata"
          aria-label="Portrait of Manikanta Sirumalla"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <figcaption>Baltimore, Maryland</figcaption>
      </figure>
    </section>
  );
}
