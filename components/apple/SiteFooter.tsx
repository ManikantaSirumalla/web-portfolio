import Link from "next/link";
import { profile } from "@/data/resume";

const columns = [
  {
    heading: "Work",
    links: [
      { label: "ZEALO", href: "/projects/zealo" },
      { label: "Tech Signal", href: "/projects/tech-signal" },
      { label: "DermaFusion", href: "/projects/dermafusion" },
      { label: "All projects", href: "/#work" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Experience", href: "/#experience" },
      { label: "Skills and education", href: "/#specs" },
      { label: "Honors", href: "/#honors" },
      { label: "Resume (PDF)", href: profile.resume },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Email", href: `mailto:${profile.email}` },
      { label: "LinkedIn", href: profile.linkedin },
      { label: "GitHub", href: profile.github },
      { label: "Medium", href: profile.medium },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-mist text-[12px] leading-[1.33] text-graphite">
      <div className="mx-auto max-w-[1024px] px-6 pb-8 pt-10">
        <p className="border-b border-hairline pb-4">
          ZEALO and Tech Signal are products of AutoClosure LLC. DermaFusion is an educational research prototype and is not a
          medical device.
        </p>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 py-6 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.heading}>
              <h2 className="font-semibold text-ink">{column.heading}</h2>
              <ul className="mt-2">
                {column.links.map((link) => {
                  const external = link.href.startsWith("http");
                  const className = "inline-flex min-h-[32px] items-center hover:text-ink hover:underline";
                  return (
                    <li key={link.label}>
                      {link.href.startsWith("/") && !link.href.endsWith(".pdf") ? (
                        <Link href={link.href} className={className}>
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className={className}
                          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
        <div className="flex flex-col gap-2 border-t border-hairline pt-4 sm:flex-row sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} {profile.name}. {profile.location}.</p>
          <p>{profile.website.replace("https://", "")}</p>
        </div>
      </div>
    </footer>
  );
}
