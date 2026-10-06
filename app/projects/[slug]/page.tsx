import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/ssr";
import { projects, projectBySlug, appStoreUrlForProject } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = projectBySlug[params.slug];
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.overview,
  };
}

export default function ProjectDetailPage({ params }: { params: Params }) {
  const project = projectBySlug[params.slug];
  if (!project) notFound();

  const appStoreUrl = appStoreUrlForProject(project);
  const otherLinks = (project.links ?? []).filter((link) => link.label !== "App Store");

  return (
    <main id="content" className="relative z-10 mx-auto max-w-4xl px-6 py-16 md:px-12 lg:py-24">
      <Link
        href="/#projects"
        className="group inline-flex min-h-[44px] items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-fg-muted hover:text-accent"
      >
        <ArrowLeft size={14} aria-hidden className="transition-transform group-hover:-translate-x-1" />
        Manikanta Sirumalla
      </Link>

      <header className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-5">
          {project.appLogo ? (
            <Image
              src={project.appLogo}
              alt=""
              width={80}
              height={80}
              className="h-20 w-20 rounded-[20px] border border-ink-line object-cover"
            />
          ) : null}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">{project.title}</h1>
            <p className="mt-2 font-mono text-xs text-accent">{project.tag}</p>
          </div>
        </div>
        {appStoreUrl ? (
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center">
            <Image src="/assets/badges/app-store.svg" alt="Download on the App Store" width={132} height={44} />
          </a>
        ) : null}
      </header>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed">{project.overview}</p>

      {otherLinks.length > 0 ? (
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {otherLinks.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1 font-medium text-fg link-underline"
              >
                {link.label}
                <ArrowUpRight size={12} aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      {project.metrics.length > 0 ? (
        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-4">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col bg-ink p-5">
              <dt className="text-xs text-fg-faint">{metric.label}</dt>
              <dd className="order-first mb-1 text-2xl font-semibold tracking-tight text-fg tabular-nums">{metric.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {project.screenshots && project.screenshots.length > 0 ? (
        <section aria-label={project.screenshotHeading ?? "Screens"} className="mt-12">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-fg">
            {project.screenshotHeading ?? "Screens"}
          </h2>
          <div className="-mx-6 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:-mx-12 md:px-12">
            {project.screenshots.map((src, index) => (
              <div key={src} className="w-44 shrink-0 snap-start overflow-hidden rounded-2xl border border-ink-line bg-black sm:w-52">
                <Image
                  src={src}
                  alt={`${project.title} screen ${index + 1}`}
                  width={400}
                  height={866}
                  sizes="208px"
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-12 grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <section aria-label="Overview">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-fg">Overview</h2>
          <p className="mt-4 leading-relaxed">{project.description}</p>
          {project.features.length > 0 ? (
            <>
              <h2 className="mt-10 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-fg">What I built</h2>
              <ul className="mt-4 space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="relative pl-4 leading-relaxed before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          {project.about ? <p className="mt-8 leading-relaxed">{project.about}</p> : null}
        </section>

        <aside aria-label="Stack and notes">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-fg">Stack</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
          {project.extra ? (
            <>
              <h2 className="mt-10 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-fg">Notes</h2>
              <p className="mt-4 text-sm leading-relaxed">{project.extra}</p>
            </>
          ) : null}
        </aside>
      </div>
    </main>
  );
}
