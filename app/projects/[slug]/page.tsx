import { readFileSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import GlobalNav from "@/components/apple/GlobalNav";
import SiteFooter from "@/components/apple/SiteFooter";
import Reveal from "@/components/apple/Reveal";
import Carousel from "@/components/apple/Carousel";
import ProjectReadme from "@/components/apple/ProjectReadme";
import { projects, projectBySlug, appStoreUrlForProject } from "@/data/projects";

type Params = { slug: string };

function readReadme(slug: string): string | null {
  try {
    return readFileSync(path.join(process.cwd(), "content", "readmes", `${slug}.md`), "utf8");
  } catch {
    return null;
  }
}

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
  const isPhone = project.domain === "ios";
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const readme = readReadme(project.slug);

  return (
    <>
      <GlobalNav />
      <main id="content">
        <section aria-labelledby="project-title" className="bg-night pb-24 pt-12 text-center text-white md:pb-32">
          <div className="page pt-16 md:pt-24">
            <Reveal className="flex flex-col items-center">
              <Link href="/#work" className="inline-flex min-h-[44px] items-center gap-1 text-[14px] text-cloud hover:text-white">
                <span aria-hidden>‹</span> All work
              </Link>
              {project.appLogo ? (
                <Image
                  src={project.appLogo}
                  alt=""
                  width={112}
                  height={112}
                  priority
                  className="mt-6 h-20 w-20 rounded-[22%] md:h-28 md:w-28"
                />
              ) : null}
              <h1 id="project-title" className="mt-6 text-[48px] font-semibold leading-[1.05] tracking-display md:text-[80px]">
                {project.title}
              </h1>
              <p className="text-gradient mt-3 pb-1 text-[21px] font-semibold tracking-headline md:text-[28px]">{project.tag}</p>
              <p className="mx-auto mt-5 max-w-[680px] text-[17px] leading-[1.47] text-cloud md:text-[21px]">{project.overview}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {appStoreUrl ? (
                  <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-pill">
                    View on the App Store
                  </a>
                ) : null}
                {otherLinks.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="link-chevron-dark">
                    {link.label} <span aria-hidden>›</span>
                  </a>
                ))}
              </div>
            </Reveal>

            {project.metrics.length > 0 ? (
              <dl className="mx-auto mt-20 grid max-w-[880px] grid-cols-2 gap-y-12 md:grid-cols-4">
                {project.metrics.map((metric, metricIndex) => (
                  <Reveal key={metric.label} delay={metricIndex * 0.08} className="flex flex-col items-center">
                    <dt className="mt-2 text-[14px] text-cloud">{metric.label}</dt>
                    <dd className="order-first text-[40px] font-semibold leading-none tracking-display md:text-[56px]">{metric.value}</dd>
                  </Reveal>
                ))}
              </dl>
            ) : null}
          </div>
        </section>

        {project.screenshots && project.screenshots.length > 0 ? (
          <section aria-labelledby="screens-title" className="overflow-hidden bg-night pb-28 text-white">
            <div className="page">
              <Reveal>
                <h2 id="screens-title" className="headline">
                  {project.screenshotHeading ?? "Screens"}.
                </h2>
              </Reveal>
            </div>
            <div className="mt-10">
              <Carousel
                label={project.screenshotHeading ?? "Screens"}
                tone="dark"
                itemClassName={isPhone ? "w-[64%] sm:w-[300px]" : "w-[88%] sm:w-[720px]"}
              >
                {project.screenshots.map((src, shotIndex) => (
                  <div key={src} className="overflow-hidden rounded-[28px] bg-dusk ring-1 ring-white/10">
                    <Image
                      src={src}
                      alt={`${project.title} screen ${shotIndex + 1}`}
                      width={isPhone ? 1260 : 1600}
                      height={isPhone ? 2736 : 1000}
                      sizes={isPhone ? "300px" : "720px"}
                      className="h-auto w-full"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </section>
        ) : null}

        <section aria-labelledby="overview-title" className="bg-white py-28 md:py-36">
          <div className="page">
            <Reveal>
              <h2 id="overview-title" className="eyebrow text-graphite">Overview</h2>
              <p className="mt-3 max-w-[880px] text-[28px] font-semibold leading-[1.25] tracking-headline md:text-[40px] md:leading-[1.2]">
                {project.description}
              </p>
            </Reveal>

            {project.features.length > 0 ? (
              <>
                <Reveal className="mt-24">
                  <h2 className="headline">What I built.</h2>
                </Reveal>
                <ul className="mt-12 grid gap-5 md:grid-cols-2">
                  {project.features.map((feature, featureIndex) => (
                    <Reveal
                      as="li"
                      key={feature}
                      delay={(featureIndex % 2) * 0.08}
                      className="tile bg-mist p-8 text-[17px] leading-[1.55] md:p-10 md:text-[19px]"
                    >
                      <span className="text-gradient block text-[15px] font-semibold tabular-nums">
                        {String(featureIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-3 block">{feature}</span>
                    </Reveal>
                  ))}
                </ul>
              </>
            ) : null}

            {project.about ? (
              <Reveal className="mt-16 max-w-[760px] text-[19px] leading-[1.55] text-graphite">
                <p>{project.about}</p>
              </Reveal>
            ) : null}
          </div>
        </section>

        {readme ? (
          <section aria-labelledby="readme-title" className="border-t border-hairline bg-white py-28 md:py-36">
            <div className="page">
              <Reveal>
                <p className="eyebrow text-graphite">Project details</p>
                <h2 id="readme-title" className="headline mt-2">In depth.</h2>
              </Reveal>
              <div className="mt-14">
                <ProjectReadme markdown={readme} />
              </div>
            </div>
          </section>
        ) : null}

        <section aria-labelledby="stack-title" className="bg-mist py-28 md:py-36">
          <div className="page">
            <Reveal>
              <p className="eyebrow text-graphite">Tech specs</p>
              <h2 id="stack-title" className="headline mt-2">Under the hood.</h2>
            </Reveal>
            <Reveal className="tile mt-12 bg-white p-8 md:p-12">
              <ul className="flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <li key={item} className="rounded-full border border-hairline px-4 py-2 text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>
              {project.extra ? (
                <p className="mt-10 border-t border-hairline pt-8 text-[17px] leading-[1.55] text-graphite md:text-[19px]">
                  {project.extra}
                </p>
              ) : null}
            </Reveal>
          </div>
        </section>

        <section aria-label="Next project" className="bg-white py-24 text-center md:py-32">
          <div className="page">
            <p className="eyebrow text-graphite">Next</p>
            <Link
              href={`/projects/${next.slug}`}
              className="mt-2 inline-block text-[40px] font-semibold leading-[1.1] tracking-display hover:text-link md:text-[64px]"
            >
              {next.title} <span aria-hidden>›</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
