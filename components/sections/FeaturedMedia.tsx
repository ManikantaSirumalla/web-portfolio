import Image from "next/image";
import { ArrowSquareOut, Play } from "@phosphor-icons/react/ssr";

const mediaFeatures = [
  {
    source: "UMBC Stories",
    title: "Meet a Retriever: Manikanta Sirumalla",
    description:
      "UMBC shared the story behind my journey as an international data science graduate student, solo founder, and creator of RepTrack Pro.",
    href: "https://umbc.edu/stories/meet-a-retriever-manikanta-sirumalla-entrepreneur/",
    action: "Read article",
    image: "https://umbc.edu/wp-content/uploads/2026/06/IMG_4668-Manikanta-Sirumalla-1200x981.jpeg",
    imageAlt: "Manikanta Sirumalla in the UMBC feature photograph",
  },
  {
    source: "YouTube Podcast",
    title: "Founder Journey and RepTrack Pro",
    description:
      "A podcast conversation about building as a student founder, turning an iOS product into a venture, and what I learned along the way.",
    href: "https://www.youtube.com/watch?v=N1Cx6gILh2c",
    action: "Watch podcast",
    image: "https://img.youtube.com/vi/N1Cx6gILh2c/hqdefault.jpg",
    imageAlt: "Thumbnail for the founder journey podcast",
    isVideo: true,
  },
];

export default function FeaturedMedia() {
  return (
    <section className="section section-muted" id="media">
      <div className="section-inner">
        <p className="section-eyebrow">04 — Media</p>
        <h2 className="section-heading">
          Stories outside the case studies.
          <span> Press, interviews, and recognition.</span>
        </h2>

        <div className="media-feature-grid">
          {mediaFeatures.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="media-feature-card"
            >
              <div className="media-feature-cover">
                <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" />
                {item.isVideo ? (
                  <span className="media-feature-play" aria-hidden>
                    <Play size={18} weight="fill" />
                  </span>
                ) : null}
              </div>
              <div className="media-feature-body">
                <div className="media-feature-source">{item.source}</div>
                <h3 className="media-feature-title">{item.title}</h3>
                <p className="media-feature-desc">{item.description}</p>
              </div>
              <span className="media-feature-action">
                {item.action}
                <ArrowSquareOut size={16} aria-hidden />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
