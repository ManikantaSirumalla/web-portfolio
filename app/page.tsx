import Image from "next/image";
import Link from "next/link";
import GlobalNav from "@/components/apple/GlobalNav";
import HeroFilm from "@/components/apple/HeroFilm";
import Reveal from "@/components/apple/Reveal";
import ScrollLitText from "@/components/apple/ScrollLitText";
import ZealoShowcase from "@/components/apple/ZealoShowcase";
import Carousel from "@/components/apple/Carousel";
import SiteFooter from "@/components/apple/SiteFooter";
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
import { appStoreUrlForProject, otherProjects, projectBySlug } from "@/data/projects";

const zealo = projectBySlug["zealo"];
const techSignal = projectBySlug["tech-signal"];
const dermafusion = projectBySlug["dermafusion"];

const zealoTiles = [
  {
    value: "9 → 4",
    title: "A coach that thinks in budgets.",
    body: "A hybrid deterministic + LLM system with structured outputs, validation gates, and on-device intent routing cut AI-coach execution from up to 9 model calls to a 4-call budget per question.",
    span: "md:col-span-2",
  },
  {
    value: "82/82",
    title: "Validated, not hoped for.",
    body: "Plan generation passed an 82/82 live-AI run, a ~3,945-case test matrix, adversarial testing, and 6 XCUITest flows.",
    span: "",
  },
  {
    value: "1,300+",
    title: "Organic downloads.",
    body: "Grown without paid acquisition, then awarded 1st Place and a $4,000 prize at CBIC 2026.",
    span: "",
  },
  {
    value: "1,260 → 53",
    title: "Calories, corrected.",
    body: "An unsourced calorie model was replaced with 2024 Compendium MET values, fixing a 6-hour idle-workout estimate from 1,260 kcal to 53 kcal.",
    span: "md:col-span-2",
  },
  {
    value: "Watch",
    title: "Built for the wrist.",
    body: "Live workout execution, heart-rate zones, motion-based rep detection, and effort scoring on Apple Watch.",
    span: "",
  },
  {
    value: "4",
    title: "Wearables, one intelligence layer.",
    body: "WHOOP, Oura, Fitbit, and Garmin signals normalized alongside HealthKit for readiness, training, and recovery.",
    span: "",
  },
  {
    value: "5",
    title: "Surfaces across iOS.",
    body: "iPhone, Apple Watch, widgets, Live Activities, and Dynamic Island, with StoreKit 2, iCloud sync, and Firebase telemetry.",
    span: "",
  },
];

const closerLook = [
  "/assets/projects/zealo/05.png",
  "/assets/projects/zealo/06.png",
  "/assets/projects/zealo/07.png",
  "/assets/projects/zealo/08.png",
  "/assets/projects/zealo/09.png",
];

function Chevron() {
  return <span aria-hidden>›</span>;
}

export default function HomePage() {
  const zealoStore = appStoreUrlForProject(zealo);
  const techSignalStore = appStoreUrlForProject(techSignal);

  return (
    <>
      <GlobalNav />
      <main id="content">
        <HeroFilm />

        <section aria-label="Summary" className="bg-white py-28 md:py-40">
          <div className="page">
            <ScrollLitText
              text={summary}
              className="mx-auto max-w-[880px] text-[28px] font-semibold leading-[1.2] tracking-headline text-ink md:text-[40px] md:leading-[1.15]"
            />
          </div>
        </section>

        <section aria-label="At a glance" className="bg-white pb-28 md:pb-40">
          <dl className="page grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08} className="flex flex-col items-center text-center">
                <dt className="mt-2 text-[14px] text-graphite md:text-[17px]">{stat.label}</dt>
                <dd className="text-gradient order-first text-[48px] font-semibold leading-none tracking-display md:text-[72px]">
                  {stat.value}
                </dd>
              </Reveal>
            ))}
          </dl>
        </section>

        <section id="zealo" aria-labelledby="zealo-title" className="overflow-hidden bg-night pb-28 pt-28 text-white md:pb-40 md:pt-36">
          <div className="page text-center">
            <Reveal className="flex flex-col items-center">
              {zealo.appLogo ? (
                <Image
                  src={zealo.appLogo}
                  alt=""
                  width={112}
                  height={112}
                  className="h-20 w-20 rounded-[22%] md:h-28 md:w-28"
                />
              ) : null}
              <h2 id="zealo-title" className="mt-6 text-[56px] font-semibold leading-none tracking-display md:text-[96px]">
                ZEALO
              </h2>
              <p className="mt-3 bg-gradient-to-r from-[#1fd3a5] via-[#2997ff] to-[#a26bfa] bg-clip-text pb-1 text-[28px] font-semibold tracking-headline text-transparent md:text-[48px]">
                Adaptive AI Fitness Intelligence.
              </p>
              <p className="mx-auto mt-5 max-w-[680px] text-[17px] leading-[1.47] text-cloud md:text-[21px]">
                {zealo.overview}
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                <Link href="/projects/zealo" className="link-chevron-dark">
                  Read the case study <Chevron />
                </Link>
                {zealoStore ? (
                  <a href={zealoStore} target="_blank" rel="noopener noreferrer" className="link-chevron-dark">
                    View on the App Store <Chevron />
                  </a>
                ) : null}
              </div>
            </Reveal>
          </div>

          <ZealoShowcase />

          <div className="page mt-28 md:mt-40">
            <Reveal>
              <h3 className="headline max-w-[760px]">
                Private by design.
                <span className="block text-graphite">Intelligent by default.</span>
              </h3>
            </Reveal>
            <ul className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
              {zealoTiles.map((tile, index) => (
                <Reveal
                  as="li"
                  key={tile.title}
                  delay={(index % 3) * 0.08}
                  className={`tile flex min-h-[280px] flex-col justify-between bg-ink p-8 md:p-10 ${tile.span}`}
                >
                  <p className="text-gradient text-[44px] font-semibold leading-none tracking-display md:text-[56px]">
                    {tile.value}
                  </p>
                  <div className="mt-10">
                    <h4 className="text-[21px] font-semibold tracking-headline md:text-[24px]">{tile.title}</h4>
                    <p className="mt-2 text-[15px] leading-[1.5] text-cloud md:text-[17px]">{tile.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="mt-28 md:mt-36">
            <div className="page">
              <Reveal>
                <h3 className="headline">Take a closer look.</h3>
              </Reveal>
            </div>
            <div className="mt-10">
              <Carousel label="ZEALO screens" tone="dark" itemClassName="w-[64%] sm:w-[300px]">
                {closerLook.map((src, index) => (
                  <div key={src} className="overflow-hidden rounded-[28px] ring-1 ring-white/10">
                    <Image
                      src={src}
                      alt={`ZEALO screen ${index + 5}`}
                      width={1260}
                      height={2736}
                      sizes="300px"
                      className="h-auto w-full"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>

        <section id="work" aria-labelledby="work-title" className="bg-mist py-28 md:py-36">
          <div className="page">
            <Reveal>
              <p className="eyebrow text-graphite">More from AutoClosure LLC and research</p>
              <h2 id="work-title" className="headline mt-2">
                Two more apps.
                <span className="block text-graphite">Same obsession with craft.</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              <Reveal className="tile flex flex-col bg-white p-8 text-center md:p-12">
                {techSignal.appLogo ? (
                  <Image src={techSignal.appLogo} alt="" width={88} height={88} className="mx-auto h-[72px] w-[72px] rounded-[22%] md:h-[88px] md:w-[88px]" />
                ) : null}
                <h3 className="mt-6 text-[32px] font-semibold tracking-display md:text-[40px]">{techSignal.title}</h3>
                <p className="mt-1 text-[17px] text-graphite">{techSignal.tag}</p>
                <p className="mx-auto mt-5 max-w-[420px] text-[17px] leading-[1.47]">{techSignal.overview}</p>
                <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-hairline pt-8">
                  {techSignal.metrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col">
                      <dt className="mt-1 text-[12px] text-graphite md:text-[14px]">{metric.label}</dt>
                      <dd className="order-first whitespace-nowrap text-[20px] font-semibold tracking-headline md:text-[26px]">{metric.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-auto flex flex-wrap justify-center gap-x-6 pt-8">
                  <Link href="/projects/tech-signal" className="link-chevron">
                    Learn more <Chevron />
                  </Link>
                  {techSignalStore ? (
                    <a href={techSignalStore} target="_blank" rel="noopener noreferrer" className="link-chevron">
                      App Store <Chevron />
                    </a>
                  ) : null}
                </div>
              </Reveal>

              <Reveal delay={0.1} className="tile flex flex-col bg-night p-8 text-center text-white md:p-12">
                {dermafusion.appLogo ? (
                  <Image src={dermafusion.appLogo} alt="" width={88} height={88} className="mx-auto h-[72px] w-[72px] rounded-[22%] md:h-[88px] md:w-[88px]" />
                ) : null}
                <h3 className="mt-6 text-[32px] font-semibold tracking-display md:text-[40px]">{dermafusion.title}</h3>
                <p className="mt-1 text-[17px] text-cloud">{dermafusion.tag}</p>
                <p className="mx-auto mt-5 max-w-[420px] text-[17px] leading-[1.47] text-white/90">{dermafusion.overview}</p>
                <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-8">
                  {dermafusion.metrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col">
                      <dt className="mt-1 text-[12px] text-cloud md:text-[14px]">{metric.label}</dt>
                      <dd className="order-first whitespace-nowrap text-[20px] font-semibold tracking-headline md:text-[26px]">{metric.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-auto flex justify-center pt-8">
                  <Link href="/projects/dermafusion" className="link-chevron-dark">
                    Learn more <Chevron />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal className="mt-20">
              <h3 className="text-[28px] font-semibold tracking-headline md:text-[32px]">More case studies</h3>
            </Reveal>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, index) => (
                <Reveal as="li" key={project.slug} delay={(index % 3) * 0.06}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex h-full flex-col rounded-[20px] bg-white p-7 transition-[transform,box-shadow] duration-500 ease-apple hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
                  >
                    <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-graphite">
                      {project.domain === "ios" ? "iOS" : "Machine learning"}
                    </p>
                    <h4 className="mt-2 text-[21px] font-semibold leading-[1.2] tracking-headline">{project.title}</h4>
                    <p className="mt-2 line-clamp-3 text-[15px] leading-[1.5] text-graphite">{project.overview}</p>
                    <span className="mt-auto pt-5 text-[15px] text-link group-hover:underline">
                      Learn more <Chevron />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-title" className="bg-white py-28 md:py-36">
          <div className="page">
            <Reveal>
              <p className="eyebrow text-graphite">5+ years of native iOS</p>
              <h2 id="experience-title" className="headline mt-2">Experience.</h2>
            </Reveal>

            <ol className="mt-14 border-t border-hairline">
              {experience.map((role) => {
                const lead = role.highlights.slice(0, 2);
                const rest = role.highlights.slice(2);
                return (
                  <Reveal as="li" key={role.company} className="grid gap-6 border-b border-hairline py-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:py-16">
                    <div>
                      <p className="text-[14px] text-graphite">{role.period}</p>
                      <h3 className="mt-2 text-[32px] font-semibold leading-[1.1] tracking-display md:text-[40px]">{role.company}</h3>
                      <p className="mt-2 text-[17px] text-ink">{role.title}</p>
                      <p className="text-[15px] text-graphite">{role.location}</p>
                      {role.links ? (
                        <ul className="mt-4 flex flex-col">
                          {role.links.map((link) => (
                            <li key={link.href}>
                              <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[36px] items-center gap-1 text-[15px] text-link hover:underline">
                                {link.label} <Chevron />
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                    <div>
                      <ul className="space-y-4 text-[17px] leading-[1.55]">
                        {lead.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      {rest.length > 0 ? (
                        <details className="group mt-4">
                          <summary className="inline-flex min-h-[44px] cursor-pointer list-none items-center gap-1.5 text-[17px] text-link hover:underline [&::-webkit-details-marker]:hidden">
                            <span className="group-open:hidden">Show {rest.length} more</span>
                            <span className="hidden group-open:inline">Show less</span>
                            <span aria-hidden className="inline-block transition-transform duration-300 group-open:-rotate-90">›</span>
                          </summary>
                          <ul className="mt-2 space-y-4 text-[17px] leading-[1.55]">
                            {rest.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </details>
                      ) : null}
                      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                        {role.stack.map((item) => (
                          <li key={item} className="rounded-full bg-mist px-3 py-1 text-[13px] text-graphite">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </section>

        <section id="specs" aria-labelledby="specs-title" className="bg-mist py-28 md:py-36">
          <div className="page">
            <Reveal>
              <p className="eyebrow text-graphite">Tech specs</p>
              <h2 id="specs-title" className="headline mt-2">Skills and education.</h2>
            </Reveal>

            <dl className="tile mt-14 bg-white px-8 md:px-12">
              {skills.map((group) => (
                <Reveal key={group.group} className="grid gap-3 border-b border-hairline py-8 last:border-b-0 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-10 md:py-10">
                  <dt className="text-[21px] font-semibold tracking-headline">{group.group}</dt>
                  <dd className="text-[17px] leading-[1.6] text-ink">
                    {group.items.join(" · ")}
                  </dd>
                </Reveal>
              ))}
            </dl>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {education.map((item, index) => (
                <Reveal key={item.degree} delay={index * 0.08} className="tile bg-white p-8 md:p-10">
                  <p className="text-[14px] text-graphite">{item.period}</p>
                  <h3 className="mt-2 text-[28px] font-semibold tracking-display">{item.degree}</h3>
                  <p className="mt-1 text-[17px]">{item.school}</p>
                  <p className="text-[15px] text-graphite">{item.location}</p>
                  <p className="text-gradient mt-6 inline-block text-[24px] font-semibold tracking-headline">{item.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="honors" aria-labelledby="honors-title" className="bg-white py-28 md:py-36">
          <div className="page">
            <Reveal>
              <p className="eyebrow text-graphite">Honors</p>
              <h2 id="honors-title" className="headline mt-2">Recognized on stage.</h2>
            </Reveal>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {honors
                .filter((honor) => honor.image)
                .map((honor, index) => (
                  <Reveal key={honor.title} delay={index * 0.08} className="tile group relative aspect-[4/5] bg-night md:aspect-[5/6]">
                    <Image
                      src={honor.image as string}
                      alt={honor.imageAlt ?? ""}
                      fill
                      sizes="(min-width: 768px) 534px, 100vw"
                      className="object-cover transition-transform duration-[1.2s] ease-apple group-hover:scale-[1.03]"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
                      <h3 className="text-[24px] font-semibold leading-[1.15] tracking-headline md:text-[28px]">{honor.title}</h3>
                      <p className="mt-2 text-[15px] leading-[1.5] text-white/80 md:text-[17px]">{honor.detail}</p>
                    </div>
                  </Reveal>
                ))}
            </div>
            {honors
              .filter((honor) => !honor.image)
              .map((honor) => (
                <Reveal key={honor.title} className="tile mt-5 bg-mist p-8 text-center md:p-14">
                  <p className="eyebrow text-graphite">{honor.title}</p>
                  <p className="mx-auto mt-3 max-w-[760px] text-[24px] font-semibold leading-[1.25] tracking-headline md:text-[32px]">
                    {honor.detail}
                  </p>
                </Reveal>
              ))}
          </div>
        </section>

        <section aria-labelledby="voices-title" className="bg-mist py-28 md:py-36">
          <div className="page">
            <Reveal>
              <p className="eyebrow text-graphite">Press and recommendations</p>
              <h2 id="voices-title" className="headline mt-2">In their words.</h2>
            </Reveal>
          </div>
          <div className="mt-12">
            <Carousel label="Press and recommendations" itemClassName="w-[86%] sm:w-[400px]">
              {[
                ...press.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group tile flex h-full min-h-[520px] flex-col bg-white"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="400px"
                        className="object-cover transition-transform duration-[1.2s] ease-apple group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-8">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-graphite">{item.source}</p>
                      <h3 className="mt-2 text-[24px] font-semibold leading-[1.2] tracking-headline">{item.title}</h3>
                      <p className="mt-2 text-[15px] leading-[1.5] text-graphite">{item.description}</p>
                      <span className="mt-auto pt-5 text-[15px] text-link group-hover:underline">
                        {item.source === "YouTube podcast" ? "Watch" : "Read the story"} <Chevron />
                      </span>
                    </div>
                  </a>
                )),
                ...recommendations.map((item) => (
                  <figure key={item.author} className="tile flex h-full min-h-[520px] flex-col justify-between bg-white p-8 md:p-10">
                    <blockquote className="text-[21px] font-semibold leading-[1.35] tracking-headline">
                      “{item.quote}”
                    </blockquote>
                    <figcaption className="mt-8">
                      <p className="text-[17px] font-semibold">{item.author}</p>
                      <p className="text-[15px] text-graphite">{item.role}</p>
                    </figcaption>
                  </figure>
                )),
              ]}
            </Carousel>
          </div>

          <div className="page mt-20">
            <Reveal className="tile grid gap-8 bg-white p-8 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:p-12">
              <div>
                <h3 className="text-[28px] font-semibold tracking-headline">Writing.</h3>
                <a href={profile.medium} target="_blank" rel="noopener noreferrer" className="link-chevron mt-1">
                  Read on Medium <Chevron />
                </a>
              </div>
              <ul className="divide-y divide-hairline">
                {writing.map((title) => (
                  <li key={title} className="py-3 text-[17px] first:pt-0 last:pb-0">
                    {title}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="bg-night py-32 text-center text-white md:py-44">
          <div className="page">
            <Reveal>
              <p className="eyebrow text-cloud">Contact</p>
              <h2 id="contact-title" className="mt-3 text-[48px] font-semibold leading-[1.05] tracking-display md:text-[88px]">
                Let’s build
                <span className="text-gradient block pb-2">what’s next.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-[620px] text-[17px] leading-[1.5] text-cloud md:text-[21px]">
                {profile.workAuthorization}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a href={`mailto:${profile.email}`} className="btn-pill">
                  {profile.email}
                </a>
                <a href={profile.phoneHref} className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/30 px-[22px] text-[17px] text-white transition-colors hover:bg-white hover:text-ink">
                  {profile.phone}
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap justify-center gap-x-8">
                {[
                  { label: "LinkedIn", href: profile.linkedin },
                  { label: "GitHub", href: profile.github },
                  { label: "Medium", href: profile.medium },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="link-chevron-dark">
                      {link.label} <Chevron />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
