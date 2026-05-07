"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { iosProjects, mlProjects, appStoreUrlForProject } from "@/data/projects";

export default function Projects() {
  const [tab, setTab] = useState<"ios" | "ml">("ios");
  const activeProjects = useMemo(() => (tab === "ios" ? iosProjects : mlProjects), [tab]);

  return (
    <section className="section" id="work">
      <div className="section-inner">
        <p className="section-eyebrow">Selected Work</p>
        <h2 className="section-heading">
          Built to ship.<br />
          <span className="section-heading-muted">Built to scale.</span>
        </h2>
        <p className="section-desc">From concept to production — organized by domain.</p>

        <div className="project-tabs">
          <button
            type="button"
            onClick={() => setTab("ios")}
            className={`project-tab ${tab === "ios" ? "active" : ""}`}
          >
            <span className="project-tab-icon" aria-hidden></span> iOS Development
          </button>
          <button
            type="button"
            onClick={() => setTab("ml")}
            className={`project-tab ${tab === "ml" ? "active" : ""}`}
          >
            <span className="project-tab-icon" aria-hidden>🧠</span> Data Science & ML
          </button>
        </div>

        <div className="project-segment active">
          {activeProjects.map((project) => {
            const appStoreUrl = appStoreUrlForProject(project);
            return (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className={project.metrics.length > 0 ? "project-tile" : "project-small"}
            >
              {project.metrics.length > 0 && (
                <div className="project-visual">
                  <div className={`project-visual-bg ${tab === "ios" ? "pv-ios-1" : "pv-ml-5"}`} />
                  {tab === "ios" && project.appLogo ? (
                    <>
                      {appStoreUrl && (
                        <a
                          className="project-appstore-badge"
                          href={appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          aria-label={`Download ${project.title} on the App Store`}
                        >
                          <img
                            src="/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
                            alt=""
                            loading="lazy"
                            decoding="async"
                          />
                        </a>
                      )}
                      <div className="project-app-logo-wrap">
                        <img
                          src={project.appLogo}
                          alt={`${project.title} app icon`}
                          className="project-app-logo"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="device-dashboard">
                      <div className="device-line accent w60" />
                      <div className="device-line w40" />
                      <div className="dash-row">
                        <div className="dash-card" />
                        <div className="dash-card" />
                        <div className="dash-card" />
                      </div>
                      <div className="dash-row">
                        <div className="dash-card" />
                        <div className="dash-card" />
                      </div>
                      <div style={{ flex: 1, display: "flex", alignItems: "flex-end" }}>
                        <div className="device-chart" style={{ width: "100%", height: "55px" }}>
                          <div />
                          <div />
                          <div />
                          <div />
                          <div />
                          <div />
                          <div />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div className="project-info">
                <div className="project-tag">{project.tag}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-stack">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                {project.metrics.length > 0 && (
                  <div className="project-metrics">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="pm-value">{metric.value}</div>
                        <div className="pm-label">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
