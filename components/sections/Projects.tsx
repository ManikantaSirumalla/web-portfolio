"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { iosProjects, mlProjects, appStoreUrlForProject, type ProjectRecord } from "@/data/projects";
import Reveal from "@/components/motion/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  const [tab, setTab] = useState<"ios" | "ml">("ios");
  const reduce = useReducedMotion();
  const activeProjects = useMemo(() => (tab === "ios" ? iosProjects : mlProjects), [tab]);

  return (
    <section className="section" id="work">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">01 — Selected work</p>
          <h2 className="section-heading">
            Shipped products
            <span> and the systems behind them.</span>
          </h2>
          <p className="section-desc">
            Filter by practice. Every card opens a case study. App Store badges open the store without leaving the index.
          </p>
        </Reveal>

        <div className="project-tabs" role="tablist" aria-label="Project domains">
          <button
            type="button"
            role="tab"
            id="tab-ios"
            aria-selected={tab === "ios"}
            aria-controls="project-panel"
            onClick={() => setTab("ios")}
            className={tab === "ios" ? "project-tab active" : "project-tab"}
          >
            iOS
          </button>
          <button
            type="button"
            role="tab"
            id="tab-ml"
            aria-selected={tab === "ml"}
            aria-controls="project-panel"
            onClick={() => setTab("ml")}
            className={tab === "ml" ? "project-tab active" : "project-tab"}
          >
            Data science
          </button>
        </div>

        <div
          id="project-panel"
          role="tabpanel"
          aria-labelledby={tab === "ios" ? "tab-ios" : "tab-ml"}
          className="project-list"
        >
          {activeProjects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} reduce={Boolean(reduce)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  reduce,
}: {
  project: ProjectRecord;
  index: number;
  reduce: boolean;
}) {
  const appStoreUrl = appStoreUrlForProject(project);
  const preview = project.screenshots?.[0];

  return (
    <motion.article
      className="project-row"
      initial={reduce ? false : { opacity: 0, transform: "translateY(14px)" }}
      animate={{ opacity: 1, transform: "none" }}
      transition={{ duration: 0.4, delay: reduce ? 0 : Math.min(index, 7) * 0.045, ease }}
    >
      <Link href={`/projects/${project.slug}`} className="project-row-link">
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        <div className="project-copy">
          <div className="project-tag">{project.tag}</div>
          <h3 className="project-title">
            {project.title}
            <ArrowRight size={22} aria-hidden />
          </h3>
          <p className="project-desc">{project.overview}</p>
          <div className="project-stack">
            {project.tech.slice(0, 6).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          {project.metrics.length > 0 && (
            <dl className="project-metrics">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </Link>

      <div className="project-aside">
        {preview ? (
          <div className="project-preview">
            <Image src={preview} alt="" width={296} height={394} sizes="148px" />
          </div>
        ) : project.appLogo ? (
          <Image src={project.appLogo} alt="" width={96} height={96} className="project-logo" />
        ) : (
          <span className="project-mark" aria-hidden>
            {project.domain === "ios" ? "iOS" : "ML"}
          </span>
        )}
        {appStoreUrl ? (
          <a
            className="project-store"
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/assets/badges/app-store.svg" alt="" width={108} height={36} />
            <span className="sr-only">Download {project.title} on the App Store</span>
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
