import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "@phosphor-icons/react/ssr";
import { projects, projectBySlug, appStoreUrlForProject } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = projectBySlug[params.slug];
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} | Manikanta Sirumalla`,
    description: project.overview,
  };
}

export default function ProjectDetailPage({ params }: { params: Params }) {
  const project = projectBySlug[params.slug];
  if (!project) notFound();

  const appStoreUrl = appStoreUrlForProject(project);
  const otherLinks = (project.links ?? []).filter((link) => link.label !== "App Store");

  return (
    <main id="content" className="project-detail-page">
      <div className="project-detail-container">
        <Link href="/#work" className="detail-back">
          <ArrowLeft size={16} aria-hidden /> Back to projects
        </Link>

        <div className="detail-header">
          <div>
            <h1 className="detail-title">{project.title}</h1>
            <div className="detail-tag">{project.tag}</div>
          </div>
          {appStoreUrl && (
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="app-store-badge-detail"
              aria-label="Download on the App Store"
            >
              <Image
                src="/assets/badges/app-store.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
              />
            </a>
          )}
        </div>

        {otherLinks.length > 0 && (
          <div className="detail-actions">
            {otherLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-action-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <section className="detail-screenshots">
            {project.screenshotHeading && (
              <h3 className="detail-section-title">{project.screenshotHeading}</h3>
            )}
            <div className="detail-screenshot-grid">
              {project.screenshots.map((src, index) => (
                <div key={src} className="detail-shot">
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={400}
                    height={800}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="detail-grid">
          <article className="detail-card">
            <h3 className="detail-section-title">Overview</h3>
            <p className="detail-overview-text">{project.overview}</p>
            <p className="detail-overview-text">{project.description}</p>

            {project.features.length > 0 && (
              <>
                <h3 className="detail-section-title mt">Highlights</h3>
                <ul className="detail-feature-list">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </>
            )}

            {project.about && (
              <div className="detail-about">
                <h3 className="detail-section-title">About</h3>
                <p className="detail-muted detail-about-text">{project.about}</p>
              </div>
            )}
          </article>

          <aside className="detail-card">
            <h3 className="detail-section-title">Tech Stack</h3>
            <div className="detail-chips">
              {project.tech.map((item) => (
                <span key={item} className="detail-chip">{item}</span>
              ))}
            </div>

            {project.metrics.length > 0 && (
              <>
                <h3 className="detail-section-title mt">Metrics</h3>
                <div className="detail-metrics">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="detail-metric">
                      <div className="detail-metric-value">{metric.value}</div>
                      <div className="detail-metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {project.extra && (
              <>
                <h3 className="detail-section-title mt">Notes</h3>
                <p className="detail-overview-text">{project.extra}</p>
              </>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
