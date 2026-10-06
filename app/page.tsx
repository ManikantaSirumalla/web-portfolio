import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  MediumLogo,
  Phone,
} from "@phosphor-icons/react/ssr";
import SideNav from "@/components/portfolio/SideNav";
import { featuredProjects, otherProjects, appStoreUrlForProject, type ProjectRecord } from "@/data/projects";
import {
  education,
  experience,
  honors,
  press,
  profile,
  recommendations,
  skills,
  stats,
  summary,
  writing,
} from "@/data/resume";

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-6 bg-ink/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:static lg:mx-0 lg:mb-8 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
      <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-fg">{children}</h2>
    </div>
  );
}

function ExternalLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="relative z-10 mx-auto min-h-screen max-w-shell px-6 md:px-12 lg:px-16">
      <div className="lg:flex lg:justify-between lg:gap-16">
        <header className="pt-16 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-ink-line px-3 py-1 font-mono text-xs text-fg-muted">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to iOS engineering roles
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-fg sm:text-5xl">
              <Link href="/">{profile.name}</Link>
            </h1>
            <p className="mt-3 text-lg font-medium tracking-tight text-fg sm:text-xl">{profile.title}</p>
            <p className="mt-1 font-mono text-xs text-fg-faint">{profile.focus}</p>
            <p className="mt-5 max-w-sm leading-relaxed">{profile.tagline}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={profile.resume}
                download={profile.resumeFileName}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <DownloadSimple size={16} weight="bold" aria-hidden />
                Download resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-ink-line px-5 text-sm font-semibold text-fg transition-colors hover:border-fg-faint"
              >
                <EnvelopeSimple size={16} weight="bold" aria-hidden />
                Email me
              </a>
            </div>

            <SideNav />
          </div>

          <div className="mt-10 lg:mt-0">
            <ul className="flex items-center gap-2" aria-label="Profiles">
              {[
                { href: profile.github, label: "GitHub", Icon: GithubLogo },
                { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinLogo },
                { href: profile.medium, label: "Medium", Icon: MediumLogo },
              ].map(({ href, label, Icon }) => (
                <li key={label}>
                  <ExternalLink
                    href={href}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-ink-raised hover:text-fg"
                  >
                    <Icon size={22} aria-hidden />
                    <span className="sr-only">{label}</span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
            <p className="mt-3 max-w-sm font-mono text-[0.72rem] leading-relaxed text-fg-faint">
              {profile.location} · {profile.workAuthorization}
            </p>
          </div>
        </header>

        <main id="content" className="pt-16 lg:w-[56%] lg:py-16">
          <section id="about" aria-label="About" className="mb-20 lg:mb-32">
            <SectionHeading>About</SectionHeading>
            <p className="text-lg leading-relaxed text-fg-muted">
              {summary.split("ZEALO")[0]}
              <a href="#projects" className="font-medium text-fg link-underline">
                ZEALO
              </a>
              {summary.split("ZEALO").slice(1).join("ZEALO")}
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col bg-ink p-5">
                  <dt className="text-xs leading-snug text-fg-faint">{stat.label}</dt>
                  <dd className="order-first mb-1 text-2xl font-semibold tracking-tight text-fg tabular-nums">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="experience" aria-label="Experience" className="mb-20 lg:mb-32">
            <SectionHeading>Experience</SectionHeading>
            <ol className="group/list space-y-4">
              {experience.map((role) => (
                <li
                  key={role.company}
                  className="rounded-2xl p-0 transition-all duration-300 lg:-mx-6 lg:p-6 lg:hover:bg-ink-raised lg:group-hover/list:opacity-60 lg:hover:!opacity-100"
                >
                  <article className="grid gap-2 sm:grid-cols-8 sm:gap-6">
                    <p className="pt-1 font-mono text-xs uppercase tracking-wide text-fg-faint sm:col-span-2">
                      {role.period}
                    </p>
                    <div className="sm:col-span-6">
                      <h3 className="font-semibold leading-snug text-fg">
                        {role.title} · <span className="text-accent">{role.company}</span>
                      </h3>
                      <p className="text-sm text-fg-faint">{role.location}</p>
                      {role.links ? (
                        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                          {role.links.map((link) => (
                            <li key={link.href}>
                              <ExternalLink href={link.href} className="inline-flex items-center gap-1 text-fg link-underline">
                                {link.label}
                                <ArrowUpRight size={12} aria-hidden />
                              </ExternalLink>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <ul className="mt-4 space-y-2 text-[0.95rem] leading-relaxed">
                        {role.highlights.slice(0, 3).map((item) => (
                          <li key={item} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-fg-faint">
                            {item}
                          </li>
                        ))}
                      </ul>
                      {role.highlights.length > 3 ? (
                        <details className="group/details mt-2">
                          <summary className="inline-flex min-h-[44px] cursor-pointer list-none items-center gap-2 text-sm font-medium text-fg hover:text-accent [&::-webkit-details-marker]:hidden">
                            <span className="group-open/details:hidden">
                              {role.highlights.length - 3} more from this role
                            </span>
                            <span className="hidden group-open/details:inline">Show less</span>
                          </summary>
                          <ul className="space-y-2 text-[0.95rem] leading-relaxed">
                            {role.highlights.slice(3).map((item) => (
                              <li key={item} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-fg-faint">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </details>
                      ) : null}
                      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                        {role.stack.map((item) => (
                          <li key={item} className="chip">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              className="mt-10 inline-flex min-h-[44px] items-center gap-2 font-semibold text-fg hover:text-accent"
            >
              Download the full resume
              <ArrowUpRight size={16} aria-hidden />
            </a>
          </section>

          <section id="projects" aria-label="Projects" className="mb-20 lg:mb-32">
            <SectionHeading>Projects</SectionHeading>
            <ul className="group/list space-y-6">
              {featuredProjects.map((project, index) => (
                <li key={project.slug}>
                  <ProjectCard project={project} lead={index === 0} />
                </li>
              ))}
            </ul>

            <h3 className="mt-14 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-fg-faint">
              More case studies
            </h3>
            <ul className="mt-4 divide-y divide-ink-line border-y border-ink-line">
              {otherProjects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex min-h-[56px] items-center justify-between gap-4 py-4"
                  >
                    <span>
                      <span className="font-medium text-fg group-hover:text-accent">{project.title}</span>
                      <span className="mt-0.5 block text-sm text-fg-faint">{project.tag}</span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      aria-hidden
                      className="shrink-0 text-fg-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section id="skills" aria-label="Skills" className="mb-20 lg:mb-32">
            <SectionHeading>Skills</SectionHeading>
            <dl className="space-y-8">
              {skills.map((group) => (
                <div key={group.group} className="grid gap-3 sm:grid-cols-8 sm:gap-6">
                  <dt className="pt-1 font-mono text-xs uppercase tracking-wide text-fg-faint sm:col-span-2">
                    {group.group}
                  </dt>
                  <dd className="flex flex-wrap gap-2 sm:col-span-6">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-ink-line px-2.5 py-1 text-sm text-fg-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="honors" aria-label="Honors, education, and press" className="mb-20 lg:mb-32">
            <SectionHeading>Honors &amp; education</SectionHeading>

            <div className="grid gap-4 sm:grid-cols-2">
              {honors
                .filter((honor) => honor.image)
                .map((honor) => (
                  <figure key={honor.title} className="overflow-hidden rounded-2xl border border-ink-line bg-ink-raised">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={honor.image as string}
                        alt={honor.imageAlt ?? ""}
                        fill
                        sizes="(max-width: 640px) 100vw, 320px"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="p-5">
                      <p className="font-semibold leading-snug text-fg">{honor.title}</p>
                      <p className="mt-1 text-sm">{honor.detail}</p>
                    </figcaption>
                  </figure>
                ))}
            </div>
            {honors
              .filter((honor) => !honor.image)
              .map((honor) => (
                <div key={honor.title} className="mt-4 rounded-2xl border border-ink-line p-5">
                  <p className="font-semibold text-fg">{honor.title}</p>
                  <p className="mt-1 text-sm">{honor.detail}</p>
                </div>
              ))}

            <ul className="mt-10 space-y-6">
              {education.map((item) => (
                <li key={item.degree} className="grid gap-1 sm:grid-cols-8 sm:gap-6">
                  <p className="pt-1 font-mono text-xs uppercase tracking-wide text-fg-faint sm:col-span-2">
                    {item.period}
                  </p>
                  <div className="sm:col-span-6">
                    <p className="font-semibold text-fg">{item.degree}</p>
                    <p className="text-sm">
                      {item.school} · {item.location}
                    </p>
                    <p className="mt-1 font-mono text-xs text-accent">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="mt-14 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-fg-faint">Press</h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {press.map((item) => (
                <li key={item.href}>
                  <ExternalLink
                    href={item.href}
                    className="group block h-full overflow-hidden rounded-2xl border border-ink-line transition-colors hover:border-fg-faint"
                  >
                    <div className="relative aspect-[16/9] bg-ink-raised">
                      <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 640px) 100vw, 320px" className="object-cover" />
                    </div>
                    <div className="p-5">
                      <p className="font-mono text-xs text-fg-faint">{item.source}</p>
                      <p className="mt-1 inline-flex items-center gap-1 font-semibold text-fg group-hover:text-accent">
                        {item.title}
                        <ArrowUpRight size={14} aria-hidden />
                      </p>
                      <p className="mt-1 text-sm">{item.description}</p>
                    </div>
                  </ExternalLink>
                </li>
              ))}
            </ul>

            <h3 className="mt-14 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-fg-faint">
              Recommendations
            </h3>
            <ul className="mt-4 space-y-4">
              {recommendations.map((item) => (
                <li key={item.author}>
                  <figure className="rounded-2xl border border-ink-line p-6">
                    <blockquote className="leading-relaxed text-fg-muted">“{item.quote}”</blockquote>
                    <figcaption className="mt-4 text-sm">
                      <span className="font-semibold text-fg">{item.author}</span>
                      <span className="text-fg-faint"> · {item.role}</span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>

            <h3 className="mt-14 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-fg-faint">Writing</h3>
            <ul className="mt-4 divide-y divide-ink-line border-y border-ink-line">
              {writing.map((title) => (
                <li key={title}>
                  <ExternalLink href={profile.medium} className="group flex min-h-[52px] items-center justify-between gap-4 py-3">
                    <span className="text-fg-muted group-hover:text-accent">{title}</span>
                    <ArrowUpRight size={14} aria-hidden className="shrink-0 text-fg-faint group-hover:text-accent" />
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </section>

          <section id="contact" aria-label="Contact" className="mb-16">
            <SectionHeading>Contact</SectionHeading>
            <p className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              Hiring for iOS or Apple Watch? I’d like to hear about it.
            </p>
            <p className="mt-4 max-w-lg">{profile.workAuthorization}.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-ink"
              >
                <EnvelopeSimple size={16} weight="bold" aria-hidden />
                {profile.email}
              </a>
              <a
                href={profile.phoneHref}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-ink-line px-5 text-sm font-semibold text-fg hover:border-fg-faint"
              >
                <Phone size={16} weight="bold" aria-hidden />
                {profile.phone}
              </a>
            </div>
          </section>

          <footer className="border-t border-ink-line pb-16 pt-8 text-sm text-fg-faint">
            © 2026 {profile.name}. Built with Next.js and Tailwind CSS.
          </footer>
        </main>
      </div>
    </div>
  );
}

function ProjectCard({ project, lead }: { project: ProjectRecord; lead: boolean }) {
  const appStoreUrl = appStoreUrlForProject(project);
  const externalLinks = (project.links ?? []).filter((link) => link.label !== "App Store");
  const screens = lead ? (project.screenshots ?? []).slice(0, 3) : [];

  return (
    <article className="group relative rounded-2xl border border-ink-line p-6 transition-all duration-300 hover:border-fg-faint/60 hover:bg-ink-raised lg:group-hover/list:opacity-60 lg:hover:!opacity-100">
      <div className="flex items-start gap-4">
        {project.appLogo ? (
          <Image
            src={project.appLogo}
            alt=""
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 rounded-[14px] border border-ink-line object-cover"
          />
        ) : null}
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-snug text-fg">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 after:absolute after:inset-0 after:rounded-2xl group-hover:text-accent"
            >
              {project.title}
              <ArrowUpRight
                size={16}
                aria-hidden
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </h3>
          <p className="text-sm text-fg-faint">{project.tag}</p>
        </div>
      </div>

      <p className="mt-4 leading-relaxed">{project.overview}</p>

      {screens.length > 0 ? (
        <div className="mt-6 grid grid-cols-3 gap-3">
          {screens.map((src, index) => (
            <div key={src} className="overflow-hidden rounded-xl border border-ink-line bg-black">
              <Image
                src={src}
                alt={`${project.title} screen ${index + 1}`}
                width={360}
                height={780}
                sizes="(max-width: 640px) 30vw, 180px"
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      ) : null}

      <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col">
            <dt className="text-xs text-fg-faint">{metric.label}</dt>
            <dd className="order-first text-lg font-semibold tracking-tight text-fg tabular-nums">{metric.value}</dd>
          </div>
        ))}
      </dl>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {project.tech.map((item) => (
          <li key={item} className="chip">
            {item}
          </li>
        ))}
      </ul>

      {appStoreUrl || externalLinks.length > 0 ? (
        <div className="relative z-10 mt-5 flex flex-wrap items-center gap-4 text-sm">
          {appStoreUrl ? (
            <ExternalLink href={appStoreUrl} className="inline-flex min-h-[44px] items-center">
              <Image src="/assets/badges/app-store.svg" alt="Download on the App Store" width={120} height={40} />
            </ExternalLink>
          ) : null}
          {externalLinks.map((link) => (
            <ExternalLink key={link.url} href={link.url} className="inline-flex min-h-[44px] items-center gap-1 font-medium text-fg link-underline">
              {link.label}
              <ArrowUpRight size={12} aria-hidden />
            </ExternalLink>
          ))}
        </div>
      ) : null}
    </article>
  );
}
